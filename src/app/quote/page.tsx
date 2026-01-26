import React from "react";

const WHATSAPP_NUMBER = "447526556945";

function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export default function QuotePage() {
  const msg =
    `Hello Ad1 Airconditioning Ltd,%0A` +
    `I would like a quote.%0A%0A` +
    `1) Property type: Residential / Commercial%0A` +
    `2) Service needed: Installation / Service / Repair / Maintenance%0A` +
    `3) Location (postcode):%0A` +
    `4) Details (error code / issue):%0A` +
    `5) Photos (optional): indoor unit / outdoor unit / controller%0A` +
    `6) Preferred time:%0A`;

  return (
    <div style={{ paddingTop: "20px" }}>
      {/* HERO */}
      <section
        style={{
          padding: "26px",
          borderRadius: "18px",
          border: "1px solid rgba(59,130,246,0.35)",
          background: "linear-gradient(135deg, #0b0f18, #081224)",
          color: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-140px auto auto -140px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22), transparent 60%)",
            filter: "blur(2px)",
          }}
        />

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.35)",
              color: "#dbeafe",
              fontWeight: 800,
              fontSize: "13px",
              width: "fit-content",
            }}
          >
            Get a Quote • Fast response on WhatsApp
          </div>

          <h1
            style={{
              fontSize: "40px",
              margin: "12px 0 8px 0",
              lineHeight: 1.1,
            }}
          >
            Request a Quote
          </h1>

          <p
            style={{
              margin: 0,
              color: "#e2e8f0",
              lineHeight: 1.7,
              maxWidth: "880px",
            }}
          >
            installation, service, repair and maintenance — residential and
            commercial. Send your details and we will reply with next steps.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noreferrer"
              style={ctaWhats()}
            >
              WhatsApp to Get Quote
            </a>

            <a href="/services" style={ctaSoft()}>
              View Services
            </a>

            <a href="/emergency" style={ctaSoft()}>
              Emergency 24/7
            </a>
          </div>

          <div style={{ marginTop: "14px", color: "#cbd5e1", fontSize: "13px" }}>
            Tip: Add postcode + photos to speed up the quote.
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section
        style={{
          marginTop: "18px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "18px",
        }}
      >
        {/* HOW IT WORKS */}
        <div style={card()}>
          <h2 style={h2()}>How it works</h2>

          <div style={{ display: "grid", gap: "10px" }}>
            <Step
              n="1"
              title="Send your request"
              desc="Message us on WhatsApp with service type and postcode."
            />
            <Step
              n="2"
              title="Share details"
              desc="Tell us the issue, any error codes, and attach photos if possible."
            />
            <Step
              n="3"
              title="We confirm the quote approach"
              desc="We’ll advise next steps and provide a quote route (site visit if needed)."
            />
          </div>

          <div style={{ marginTop: "14px" }}>
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noreferrer"
              style={ctaWhatsFull()}
            >
              Open WhatsApp Quote Template
            </a>
          </div>
        </div>

        {/* QUICK INFO (NON-INTERACTIVE “FORM”) */}
        <div style={card()}>
          <h2 style={h2()}>What to include in your message</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <InfoBlock
              title="Property type"
              body="Residential or Commercial"
            />
            <InfoBlock
              title="Service needed"
              body="Installation / Service / Repair / Maintenance"
            />
            <InfoBlock
              title="Location"
              body="Your London postcode"
            />
            <InfoBlock
              title="System details"
              body="Brand/model + error code (if any)"
            />
            <InfoBlock
              title="Photos (optional)"
              body="Indoor unit / outdoor unit / controller screen"
            />
            <InfoBlock
              title="Preferred time"
              body="Any convenient time window"
            />
          </div>

          <div style={miniNote()}>
            For urgent breakdowns, go to <a href="/emergency" style={inlineLink()}>Emergency</a>.
          </div>
        </div>

        {/* TRUST + CONTACT */}
        <div style={card()}>
          <h2 style={h2()}>Company details</h2>

          <div style={infoRow()}>
            <span style={label()}>Business</span>
            <span style={value()}>Ad1 Airconditioning Ltd</span>
          </div>

          <div style={infoRow()}>
            <span style={label()}>WhatsApp</span>
            <a
              href={waLink("Hello Ad1 Airconditioning Ltd, I would like a quote.")}
              target="_blank"
              rel="noreferrer"
              style={link()}
            >
              +44 7526 556945
            </a>
          </div>

          <div style={infoRow()}>
            <span style={label()}>Email</span>
            <a
              href="mailto:Ad1Airconditioningltd@gmail.com"
              style={link()}
            >
              Ad1Airconditioningltd@gmail.com
            </a>
          </div>

          <div style={infoRow()}>
            <span style={label()}>Coverage</span>
            <span style={value()}>All London areas</span>
          </div>

          <div style={infoRow()}>
            <span style={label()}>Emergency</span>
            <span style={value()}>Open 24/7</span>
          </div>

          <div style={infoRow()}>
            <span style={label()}>Experience</span>
            <span style={value()}>10+ years</span>
          </div>

          <div style={infoRow()}>
            <span style={label()}>Company No.</span>
            <span style={value()}>16462923</span>
          </div>

          <div style={{ marginTop: "12px", color: "#cbd5e1", lineHeight: 1.7 }}>
            Address: flat 2, 119 courthill road, London, SE13 6DR
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        style={{
          marginTop: "18px",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.12)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
          color: "#e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: "16px" }}>
            Want a fast quote?
          </div>
          <div style={{ color: "#cbd5e1", fontSize: "13px", marginTop: "4px" }}>
            WhatsApp us with postcode + service needed.
          </div>
        </div>

        <a href={waLink(msg)} target="_blank" rel="noreferrer" style={ctaWhats()}>
          WhatsApp Quote
        </a>
      </section>
    </div>
  );
}

/* ===== Small components (no events) ===== */

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "10px",
            display: "grid",
            placeItems: "center",
            fontWeight: 900,
            background: "rgba(59,130,246,0.16)",
            border: "1px solid rgba(59,130,246,0.35)",
            color: "#dbeafe",
          }}
        >
          {n}
        </div>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>{title}</div>
      </div>

      <div style={{ marginTop: "8px", color: "#cbd5e1", lineHeight: 1.7 }}>
        {desc}
      </div>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ fontWeight: 900, color: "#f8fafc" }}>{title}</div>
      <div style={{ marginTop: "6px", color: "#cbd5e1", lineHeight: 1.7 }}>
        {body}
      </div>
    </div>
  );
}

/* ===== Styles ===== */

function card(): React.CSSProperties {
  return {
    padding: "18px",
    borderRadius: "18px",
    background: "linear-gradient(180deg, #0b1220, #05080f)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e5e7eb",
  };
}

function h2(): React.CSSProperties {
  return { marginTop: 0, marginBottom: "12px", fontSize: "18px" };
}

function miniNote(): React.CSSProperties {
  return {
    marginTop: "14px",
    color: "#9ca3af",
    fontSize: "13px",
    lineHeight: 1.6,
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "12px",
  };
}

function infoRow(): React.CSSProperties {
  return {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };
}

function label(): React.CSSProperties {
  return { color: "#9ca3af", fontSize: "13px" };
}

function value(): React.CSSProperties {
  return { fontSize: "14px", color: "#e5e7eb" };
}

function ctaWhats(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "#25D366",
    color: "#001b0f",
    fontWeight: 900,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "inline-block",
  };
}

function ctaWhatsFull(): React.CSSProperties {
  return { ...ctaWhats(), display: "block", textAlign: "center" };
}

function ctaSoft(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#e5e7eb",
    fontWeight: 800,
    textDecoration: "none",
    display: "inline-block",
  };
}

function link(): React.CSSProperties {
  return {
    color: "#93c5fd",
    textDecoration: "none",
    fontWeight: 700,
    wordBreak: "break-word",
  };
}

function inlineLink(): React.CSSProperties {
  return {
    color: "#93c5fd",
    textDecoration: "none",
    fontWeight: 800,
  };
}
