import React from "react";

export default function Contact() {
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* HERO SECTION */}
      <section
        style={{
          padding: "24px",
          borderRadius: "18px",
          border: "1px solid rgba(56,189,248,0.35)",
          background: "linear-gradient(135deg, #05080f, #0b1220)",
          color: "#e5e7eb",
        }}
      >
        <h1 style={{ fontSize: "34px", margin: 0 }}>
          Contact Ad1 Airconditioning Ltd
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#cbd5e1",
            lineHeight: 1.7,
          }}
        >
          The fastest way to reach us is via WhatsApp. We cover all London areas
          and we are available 24/7 for emergencies.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/447526556945"
            target="_blank"
            rel="noreferrer"
            style={primaryBtn()}
          >
            WhatsApp Now
          </a>

          <a href="/quote" style={secondaryBtn()}>
            Get Quote
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "18px",
        }}
      >
        {/* COMPANY INFO */}
        <div style={card()}>
          <h2 style={title()}>Company Information</h2>

          <Info label="Company Name" value="Ad1 Airconditioning Ltd" />
          <Info label="Company Number" value="16462923" />
          <Info
            label="Address"
            value="Flat 2, 119 Courthill Road, London, SE13 6DR"
          />

          <div style={row()}>
            <span style={labelStyle()}>Email</span>
            <a
              href="mailto:Ad1Airconditioningltd@gmail.com"
              style={link()}
            >
              Ad1Airconditioningltd@gmail.com
            </a>
          </div>

          <div style={row()}>
            <span style={labelStyle()}>WhatsApp</span>
            <a
              href="https://wa.me/447526556945"
              target="_blank"
              rel="noreferrer"
              style={strongLink()}
            >
              +44 7526 556945
            </a>
          </div>

          <p style={note()}>
            Services: installation, service, repair and maintenance — residential
            and commercial.
          </p>
        </div>

        {/* QUICK CONTACT */}
        <div style={card()}>
          <h2 style={title()}>Quick Contact</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <a
              href="https://wa.me/447526556945"
              target="_blank"
              rel="noreferrer"
              style={whatsBtn()}
            >
              Chat on WhatsApp
            </a>

            <a href="/emergency" style={secondaryBtn()}>
              Emergency 24/7
            </a>

            <a href="/services" style={secondaryBtn()}>
              View Services
            </a>
          </div>

          <div style={divider()}>
            <strong>Working Hours</strong>
            <p style={textMuted()}>
              Open 24/7 including weekends & holidays
            </p>
          </div>

          <div style={{ marginTop: "12px" }}>
            <strong>Coverage</strong>
            <p style={textMuted()}>
              All London areas – Residential & Commercial
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Helper Components ===== */

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={row()}>
      <span style={labelStyle()}>{label}</span>
      <span style={valueStyle()}>{value}</span>
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

function title(): React.CSSProperties {
  return { marginTop: 0, marginBottom: "14px", fontSize: "18px" };
}

function row(): React.CSSProperties {
  return {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };
}

function labelStyle(): React.CSSProperties {
  return { color: "#9ca3af", fontSize: "13px" };
}

function valueStyle(): React.CSSProperties {
  return { fontSize: "14px" };
}

function link(): React.CSSProperties {
  return {
    color: "#cbd5e1",
    textDecoration: "none",
    borderBottom: "1px solid rgba(203,213,225,0.3)",
    width: "fit-content",
  };
}

function strongLink(): React.CSSProperties {
  return {
    ...link(),
    color: "#7dd3fc",
    fontWeight: 700,
  };
}

function primaryBtn(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(56,189,248,0.15)",
    border: "1px solid rgba(56,189,248,0.4)",
    color: "#e5e7eb",
    fontWeight: 700,
    textDecoration: "none",
  };
}

function secondaryBtn(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#e5e7eb",
    fontWeight: 700,
    textDecoration: "none",
  };
}

function whatsBtn(): React.CSSProperties {
  return {
    padding: "14px",
    borderRadius: "12px",
    background: "#25D366",
    color: "#001b0f",
    fontWeight: 800,
    textAlign: "center",
    textDecoration: "none",
  };
}

function divider(): React.CSSProperties {
  return {
    marginTop: "16px",
    paddingTop: "14px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  };
}

function textMuted(): React.CSSProperties {
  return { color: "#cbd5e1", marginTop: "6px", lineHeight: 1.6 };
}

function note(): React.CSSProperties {
  return {
    marginTop: "14px",
    fontSize: "13.5px",
    color: "#9ca3af",
    lineHeight: 1.6,
  };
}
