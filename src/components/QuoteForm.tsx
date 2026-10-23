"use client";

/*
  Quote form.
  "Send request" emails the details straight to you (see src/app/api/quote/route.ts).
  If email isn't set up yet, or sending fails, the visitor is offered WhatsApp / email
  with everything already written out, so no enquiry is lost.
*/

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services, site, waLink } from "@/lib/site";
import { ButtonContent, buttonClass } from "@/components/ui";

type Fields = {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  property: "Residential" | "Commercial";
  service: string;
  details: string;
  when: string;
};

const initial: Fields = {
  name: "",
  phone: "",
  email: "",
  postcode: "",
  property: "Residential",
  service: "",
  details: "",
  when: "",
};

const inputCls =
  "w-full rounded-md border border-line bg-ink px-4 py-3.5 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function QuoteForm() {
  const [f, setF] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "fallback" | "error">("idle");
  const [trap, setTrap] = useState(""); // hidden spam trap
  const box = useRef<HTMLDivElement>(null);

  // After sending, bring the confirmation into view (it's shorter than the form)
  useEffect(() => {
    if (status !== "idle" && status !== "sending") box.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [status]);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!f.name.trim()) e.name = "Please add your name";
    if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Please add a phone number we can call you on";
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please check your email address";
    if (!f.postcode.trim()) e.postcode = "Please add your postcode";
    if (!f.service) e.service = "Please choose a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const message = () =>
    [
      `Hello ${site.name},`,
      "I'd like a quote.",
      "",
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.email ? `Email: ${f.email}` : null,
      `Postcode: ${f.postcode}`,
      `Property: ${f.property}`,
      `Service: ${f.service}`,
      f.when ? `Preferred time: ${f.when}` : null,
      f.details ? `\nDetails: ${f.details}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const mailto = () =>
    `mailto:${site.email}?subject=${encodeURIComponent(`Quote request: ${f.service} (${f.postcode})`)}&body=${encodeURIComponent(message())}`;

  // Main button: email the request to Ad1
  const submit = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, company: trap }),
      });
      if (res.ok) return setStatus("done");
      if (res.status === 429) return setStatus("error");
      setStatus("fallback"); // not set up yet, or sending failed → offer WhatsApp / email
    } catch {
      setStatus("fallback");
    }
  };

  const openWhatsApp = () => {
    if (!validate()) return;
    window.open(waLink(message()), "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={box} className="relative scroll-mt-28 rounded-xl border border-line bg-panel p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" || status === "fallback" || status === "error" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-10"
          >
            {status === "done" ? (
              <>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent-hover">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden>
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                </span>
                <h3 className="mt-6 text-3xl tracking-tight">Thanks, {f.name.split(" ")[0]}. We&apos;ve got your request.</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  We&apos;ll be in touch on {f.phone} shortly. If it&apos;s urgent, call us now on{" "}
                  <a href={site.phoneHref} className="link-draw text-fg">
                    {site.phoneDisplay}
                  </a>
                  . You can also WhatsApp us photos of the unit to speed things up.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted">{status === "error" ? "Too many requests" : "One more step"}</p>
                <h3 className="mt-3 text-3xl tracking-tight">
                  {status === "error" ? "Please send it on WhatsApp instead." : "Send your request on WhatsApp or email."}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  Your details are already written out. Just tap one of the buttons below and press send.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={openWhatsApp} className={buttonClass("whatsapp", "md", "flex-1")}>
                    <ButtonContent variant="whatsapp" icon="whatsapp">Send on WhatsApp</ButtonContent>
                  </button>
                  <a href={mailto()} className={buttonClass("secondary")}>
                    <ButtonContent variant="secondary" icon="none">Send by email</ButtonContent>
                  </a>
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 border-b border-line pb-0.5 text-fg hover:border-fg"
            >
              {status === "done" ? "Send another request" : "Edit my details"}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="grid gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}>
                <input
                  className={inputCls}
                  value={f.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                  placeholder="Jane Smith"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  className={inputCls}
                  value={f.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="07…"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Postcode" error={errors.postcode}>
                <input
                  className={inputCls}
                  value={f.postcode}
                  onChange={(e) => set("postcode", e.target.value.toUpperCase())}
                  autoComplete="postal-code"
                  placeholder="SE13 6DR"
                />
              </Field>
              <Field label="Property type" group>
                <div className="grid grid-cols-2 gap-2 rounded-md border border-line bg-ink p-1">
                  {(["Residential", "Commercial"] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => set("property", p)}
                      aria-pressed={f.property === p}
                      className={`relative rounded py-2.5 text-[15px] transition-colors ${
                        f.property === p ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {f.property === p && (
                        <motion.span
                          layoutId="property-pill"
                          className="absolute inset-0 rounded bg-panel-2"
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      <span className="relative">{p}</span>
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <Field label="Email (optional)" error={errors.email}>
              <input
                className={inputCls}
                type="email"
                value={f.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
                placeholder="jane@example.com"
              />
            </Field>

            <Field label="Service needed" error={errors.service}>
              <select
                className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239aa3b2%22 stroke-width=%221.6%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:20px] bg-[right_14px_center] bg-no-repeat pr-12`}
                value={f.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option value="">Choose a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </Field>

            <Field label="Details (optional)">
              <textarea
                className={`${inputCls} min-h-[130px] resize-y`}
                value={f.details}
                onChange={(e) => set("details", e.target.value)}
                placeholder="What's the issue? Number of rooms, unit brand or model, any error code…"
              />
            </Field>

            <Field label="Preferred time (optional)">
              <input
                className={inputCls}
                value={f.when}
                onChange={(e) => set("when", e.target.value)}
                placeholder="e.g. weekday mornings"
              />
            </Field>

            {/* Spam trap: hidden from people, bots fill it in */}
            <input
              type="text"
              name="company"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute left-[-9999px] h-px w-px opacity-0"
            />

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "md", "flex-1 disabled:opacity-70")}>
                <ButtonContent>{status === "sending" ? "Sending…" : "Send request"}</ButtonContent>
              </button>
              <button type="button" onClick={openWhatsApp} className={buttonClass("whatsapp")}>
                <ButtonContent variant="whatsapp" icon="whatsapp">
                  WhatsApp instead
                </ButtonContent>
              </button>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              We only use your details to reply to your enquiry. See our{" "}
              <Link href="/privacy" className="link-draw text-fg/90">
                privacy policy
              </Link>
              . Tip: WhatsApp us photos of the unit and any error code to speed up your quote.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  group,
  children,
}: {
  label: string;
  error?: string;
  /** use for button groups, which must not sit inside a <label> */
  group?: boolean;
  children: React.ReactNode;
}) {
  const Wrapper = group ? "div" : "label";
  return (
    <Wrapper className="grid gap-2" {...(group ? { role: "group", "aria-label": label } : {})}>
      <span className="text-sm text-muted">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
