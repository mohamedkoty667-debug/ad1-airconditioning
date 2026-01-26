import React from "react";

const WHATSAPP_NUMBER = "447526556945";

function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export default function ServicesPage() {
  const msg =
    "Hello Ad1 Airconditioning Ltd,%0A" +
    "I would like to book a service.%0A%0A" +
    "Service needed:%0A" +
    "Postcode:%0A" +
    "Residential/Commercial:%0A" +
    "Details:%0A";

  const services = [
    {
      title: "AC Installation",
      desc: "New split systems, multi-split and commercial installations. Clean routing, neat finishes, tested commissioning.",
      bullets: ["Residential & commercial", "New install & replacements", "Commissioning & handover"],
      tag: "Installation",
    },
    {
      title: "Servicing & Preventive Maintenance",
      desc: "Keep performance high and running costs low with scheduled servicing and filter/coil care.",
      bullets: ["Planned maintenance", "Filter & coil cleaning", "Performance checks"],
      tag: "Maintenance",
    },
    {
      title: "Repairs & Fault Diagnosis",
      desc: "Fast diagnosis for breakdowns, airflow problems, leaks, noise, and controller issues.",
      bullets: ["Fault finding", "Parts replacement", "Restore cooling/heating"],
      tag: "Repair",
    },
    {
      title: "Emergency Call-Out 24/7",
      desc: "Urgent breakdown? We respond quickly across London for emergency call-outs.",
      bullets: ["24/7 availability", "Priority response", "Residential & commercial"],
      tag: "Emergency",
    },
    {
      title: "Commercial HVAC Support",
      desc: "Support for offices, retail, restaurants and multi-zone setups with reliable maintenance and quick response.",
      bullets: ["Multi-zone systems", "Planned servicing", "Site coordination"],
      tag: "Commercial",
    },
    {
      title: "Residential Air Conditioning",
      desc: "Home comfort solutions with quiet systems, clean aesthetics, and tidy installation.",
      bullets: ["Quiet comfort", "Neat pipework", "Advice on best options"],
      tag: "Residential",
    },
    {
      title: "System Optimisation",
      desc: "Improve airflow, settings and performance. Useful after poor install, layout changes, or comfort issues.",
      bullets: ["Balancing & tuning", "Airflow checks", "Efficiency improvements"],
      tag: "Optimisation",
    },
    {
      title: "Controller & Controls Support",
      desc: "Help with controllers, scheduling, error codes and system settings for stable day-to-day operation.",
      bullets: ["Error codes support", "Scheduling help", "Controller setup"],
      tag: "Controls",
    },
  ];

  return (
    <div style={{ paddingTop: "20px" }}>
      {/* HERO */}
      <section
        style={{
          padding: "26px",
          borderRadius: "18px",
          border: "1px solid rgba(34,197,94,0.25)",
          background: "linear-gradient(135deg, #0b0f18, #06111a)",
          color: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Glow
          color="rgba(34,197,94,0.22)"
          x="-140px"
          y="-140px"
          size="360px"
        />
        <Glow
          color="rgba(59,130,246,0.16)"
          x="60%"
          y="-160px"
          size="320px"
        />

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "999px",
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#dcfce7",
              fontWeight: 900,
              fontSize: "13px",
              width: "fit-content",
            }}
          >
            Services • Residential & Commercial
          </div>

          <h1 style={{ fontSize: "40px", margin: "12px 0 8px 0", lineHeight: 1.1 }}>
            Air Conditioning Services
          </h1>

          <p style={{ margin: 0, color: "#e2e8f0", lineHeight: 1.7, maxWidth: "900px" }}>
            installation, service, repair and maintenance — across London. Open 24/7 for emergency call-outs.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
            <a href={waLink(msg)} target="_blank" rel="noreferrer" style={ctaWhats()}>
              WhatsApp Us
            </a>
            <a href="/emergency" style={ctaSoft()}>
              Emergency 24/7
            </a>
            <a href="/quote" style={ctaSoft()}>
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ marginTop: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "12px", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "22px" }}>What we do</h2>
            <div style={{ marginTop: "6px", color: "#cbd5e1", lineHeight: 1.6 }}>
              Choose a service below and message us on WhatsApp with your postcode.
            </div>
          </div>
          <div style={{ color: "#9ca3af", fontSize: "13px" }}>
            Company No. 16462923 • Coverage: London
          </div>
        </div>

        <div
          style={{
            marginTop: "14px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "14px",
          }}
        >
          {services.map((s) => (
            <div key={s.title} style={serviceCard()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "10px" }}>
                <div style={{ fontWeight: 950, fontSize: "16px", color: "#f8fafc" }}>{s.title}</div>
                <span style={pill()}>{s.tag}</span>
              </div>

              <div style={{ marginTop: "8px", color: "#cbd5e1", lineHeight: 1.7 }}>
                {s.desc}
              </div>

              <ul style={{ margin: "10px 0 0 18px", color: "#e5e7eb", lineHeight: 1.7 }}>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div style={{ marginTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={waLink(
                    `Hello Ad1 Airconditioning Ltd,%0A` +
                      `I need: ${s.title}%0A` +
                      `Residential/Commercial:%0A` +
                      `Postcode:%0A` +
                      `Details:%0A`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  style={miniCta()}
                >
                  WhatsApp about this
                </a>
                <a href="/quote" style={miniSoft()}>
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section
        style={{
          marginTop: "18px",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
          color: "#e5e7eb",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "12px",
        }}
      >
        <Process title="1) Message us" desc="Send your service + postcode on WhatsApp." />
        <Process title="2) Share details" desc="Add photos/error code if available." />
        <Process title="3) We advise" desc="Next steps + quote route (visit if needed)." />
        <Process title="4) Job done" desc="Professional workmanship across London." />
      </section>
    </div>
  );
}

/* ===== Small components (no events) ===== */

function Glow({
  color,
  x,
  y,
  size,
}: {
  color: string;
  x: string;
  y: string;
  size: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "999px",
        background: `radial-gradient(circle, ${color}, transparent 60%)`,
        filter: "blur(2px)",
      }}
    />
  );
}

function Process({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.22)",
      }}
    >
      <div style={{ fontWeight: 950, color: "#f8fafc" }}>{title}</div>
      <div style={{ marginTop: "6px", color: "#cbd5e1", lineHeight: 1.7 }}>{desc}</div>
    </div>
  );
}

/* ===== Styles ===== */

function serviceCard(): React.CSSProperties {
  return {
    padding: "16px",
    borderRadius: "18px",
    background: "linear-gradient(180deg, #0b1220, #05080f)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#e5e7eb",
  };
}

function pill(): React.CSSProperties {
  return {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 900,
    background: "rgba(34,197,94,0.10)",
    border: "1px solid rgba(34,197,94,0.25)",
    color: "#dcfce7",
    whiteSpace: "nowrap",
  };
}

function ctaWhats(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "#25D366",
    color: "#001b0f",
    fontWeight: 950,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "inline-block",
  };
}

function ctaSoft(): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#e5e7eb",
    fontWeight: 900,
    textDecoration: "none",
    display: "inline-block",
  };
}

function miniCta(): React.CSSProperties {
  return {
    padding: "10px 12px",
    borderRadius: "12px",
    background: "rgba(37,211,102,0.16)",
    border: "1px solid rgba(37,211,102,0.30)",
    color: "#dcfce7",
    fontWeight: 900,
    textDecoration: "none",
    display: "inline-block",
  };
}

function miniSoft(): React.CSSProperties {
  return {
    padding: "10px 12px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#e5e7eb",
    fontWeight: 850,
    textDecoration: "none",
    display: "inline-block",
  };
}
