/*
  Receives quote requests from the website form and emails them to you.

  Uses Resend (resend.com, free for up to 3,000 emails a month).
  Set these in your hosting settings (e.g. Vercel → Project → Settings → Environment Variables),
  or in a file called .env.local when running on your computer:

    RESEND_API_KEY   = your Resend API key (starts with "re_")
    QUOTE_TO_EMAIL   = where requests go (defaults to the email in src/lib/site.ts)
    QUOTE_FROM_EMAIL = sender, e.g. "Ad1 Website <quotes@yourdomain.co.uk>"
                       (until you verify a domain in Resend, leave this unset and
                        requests will only reach the email you signed up to Resend with)

  If RESEND_API_KEY is not set, the form falls back to WhatsApp automatically.
*/

import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Quote = {
  name: string;
  phone: string;
  email?: string;
  postcode: string;
  property: string;
  service: string;
  details?: string;
  when?: string;
  company?: string; // hidden spam trap: real people never fill this in
};

// Very small per-visitor limit to stop someone flooding your inbox
const hits = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now(), windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Quote;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Spam trap filled in → pretend it worked, send nothing
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const q = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 40),
    email: clean(body.email, 120),
    postcode: clean(body.postcode, 12).toUpperCase(),
    property: clean(body.property, 20),
    service: clean(body.service, 80),
    details: clean(body.details, 2000),
    when: clean(body.when, 120),
  };
  if (!q.name || !q.postcode || !q.service || q.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (q.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q.email)) {
    return NextResponse.json({ error: "bad_email" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const rows: [string, string][] = [
    ["Name", q.name],
    ["Phone", q.phone],
    ["Email", q.email || "-"],
    ["Postcode", q.postcode],
    ["Property", q.property],
    ["Service", q.service],
    ["Preferred time", q.when || "-"],
    ["Details", q.details || "-"],
  ];
  const text = `New quote request from the website\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;
  const html = `<h2 style="font-family:sans-serif">New quote request</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
    ${rows.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#667;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:sans-serif"><a href="tel:${esc(q.phone.replace(/[^\d+]/g, ""))}">Call ${esc(q.name)}</a></p>`;

  let res: Response;
  try {
    res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL || "Ad1 Website <onboarding@resend.dev>",
        to: [process.env.QUOTE_TO_EMAIL || site.email],
        reply_to: q.email || undefined,
        subject: `Quote request: ${q.service} · ${q.postcode} · ${q.name}`,
        text,
        html,
      }),
    });
  } catch (err) {
    console.error("Could not reach Resend", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
