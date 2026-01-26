import React from "react";

export default function EmergencyPage() {
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* HERO */}
      <section
        style={{
          padding: "26px",
          borderRadius: "18px",
          border: "1px solid rgba(239,68,68,0.35)",
          background: "linear-gradient(135deg, #0b0f18, #1a0b10)",
          color: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-120px -120px auto auto",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(239,68,68,0.25), transparent 60%)",
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
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.35)",
              color: "#fee2e2",
              fontWeight: 700,
              fontSize: "13px",
              width: "fit-content",
            }}
          >
            24/7 Emergency Call-Outs • London
          </div>

          <h1 style={{ fontSize: "40px", margin: "12px 0 8px 0", lineHeight: 1.1 }}>
            Emergency Air Conditioning Support
          </h1>

          <p style={{ margin: 0, color: "#e2e8f0", lineHeight: 1.7, maxWidth: "820px" }}>
            If your AC is down, leaking, showing error codes, or causing overheating—contact us now.
            We cover residential and commercial call-outs across London, 24/7.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/447526556945"
              target="_blank"
              rel="noreferrer"
              style={ctaWhats()}
            >
              WhatsApp Emergency Now
            </a>

            <a href="/quote" style={ctaSoft()}>
              Request a Quote
            </a>

            <a href="/services" style={ctaSoft()}>
              View Services
            </a>
          </div>

          <div style={{ marginTop: "14px", color: "#cbd5e1", fontSize: "13px" }}>
            Typical response depends on location & availability. Message us on WhatsApp for the fastest support.
          </div>
        </div>
      </section>

      {/* GRID */}
      <section
        style={{
          marginTop: "18px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "18px",
        }}
      >
        {/* WHAT WE CAN HELP WITH */}
        <div style={card()}>
          <h2 style={h2()}>Emergency issues we handle</h2>

          <ul style={list()}>
            <li style={li()}>
              <span style={dot("#ef4444")} />
              AC not cooling / stopped working suddenly
            </li>
            <li style={li()}>
              <span style={dot("#f97316")} />
              Water leaks / drainage problems
            </li>
            <li style={li()}>
              <span style={dot("#38bdf8")} />
              Fault codes / system alarms
            </li>
            <li style={li()}>
              <span style={dot("#22c55e")} />
              Unusual noises / vibration
            </li>
            <li style={li()}>
              <span style={dot("#a78bfa")} />
              Commercial HVAC urgent downtime
            </li>
            <li style={li()}>
              <span style={dot("#eab308")} />
              Odours / airflow issues
            </li>
          </ul>

          <div style={miniNote()}>
            Installation, service, repair and maintenance — residential and commercial.
          </div>
        </div>

        {/* WHAT TO DO NOW */}
        <div style={card()}>
          <h2 style={h2()}>What to do right now</h2>

          <div style={{ display: "grid", gap: "10px" }}>
            <Step
              n="1"
              title="Message us on WhatsApp"
              desc="Send your location + what’s happening (e.g. not cooling, leak, error code)."
            />
            <Step
              n="2"
              title="Send photos (optional but helps)"
              desc="Unit model label, error code screen, indoor/outdoor unit photo."
            />
            <Step
              n="3"
              title="We advise next steps"
              desc="We’ll confirm availability, likely cause, and arrange an emergency visit if needed."
            />
          </div>

          <div style={{ marginTop: "14px" }}>
            <a
              href="https://wa.me/447526556945"
              target="_blank"
              rel="noreferrer"
              style={ctaWhatsFull()}
            >
              Open WhatsApp
            </a>
          </div>
        </div>

        {/* COVERAGE + TRUST */}
        <div style={card()}>
          <h2 style={h2()}>Coverage & trust</h2>

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
            <strong style={{ color: "#f8fafc" }}>Tip:</strong> For fastest help, include your postcode and
            whether it’s residential or commercial.
          </div>
        </div>
      </section>

      {/* SMALL CTA STRIP */}
      <section
        style={{
          marginTop: "18px",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
          color: "#e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: "16px" }}>
            Need emergency AC help now?
          </div>
          <div style={{ color: "#cbd5e1", fontSize: "13px", marginTop: "4px" }}>
            Message us on WhatsApp — we’ll respond as quickly as possible.
          </div>
        </div>

        <a
          href="https://wa.me/447526556945"
          target="_blank"
          rel="noreferrer"
          style={ctaWhats()}
        >
          WhatsApp Emergency
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
            background: "rgba(239,68,68,0.16)",
            border: "1px solid rgba(239,68,68,0.35)",
            color: "#fee2e2",
          }}
        >
          {n}
        </div>
        <div style={{ fontWeight: 800, color: "#f8fafc" }}>{title}</div>
      </div>

      <div style={{ marginTop: "8px", color: "#cbd5e1", lineHeight: 1.7 }}>
        {desc}
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

function list(): React.CSSProperties {
  return { margin: 0, paddingLeft: "18px", display: "grid", gap: "10px" };
}

function li(): React.CSSProperties {
  return { listStyle: "none", display: "flex", gap: "10px", alignItems: "flex-start", color: "#cbd5e1", lineHeight: 1.6 };
}

function dot(color: string): React.CSSProperties {
  return {
    marginTop: "6px",
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    background: color,
    boxShadow: "0 0 0 4px rgba(255,255,255,0.04)",
    flex: "0 0 10px",
  };
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
  };
}

function ctaWhatsFull(): React.CSSProperties {
  return {
    ...ctaWhats(),
    display: "block",
    textAlign: "center",
  };
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
  };
}
