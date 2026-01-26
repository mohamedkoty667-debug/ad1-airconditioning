import AnimatedCard from "../components/AnimatedCard";
import AnimatedImage from "../components/AnimatedImage";
import WhyChooseUs from "../components/WhyChooseUs";
import RecentWork from "../components/RecentWork";

export default function Home() {
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          border: "1px solid #e6edf2",
          borderRadius: "16px",
          padding: "20px",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "40px", margin: "0 0 10px 0" }}>
          Air Conditioning Services Across London
        </h1>

        <p style={{ margin: 0, color: "#d9f2f6", fontSize: "16px" }}>
          installation, service, repair and maintenance — residential and
          commercial. Open 24/7 for emergency call-outs.
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "14px",
          }}
        >
          <a href="tel:+447526556945">
            <button
              style={{
                padding: "10px 14px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Call Now
            </button>
          </a>

          <a
            href="https://wa.me/447526556945"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: "10px 14px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "1px solid #0fb2c6",
                background: "#1ecbe1",
                fontWeight: 800,
              }}
            >
              WhatsApp
            </button>
          </a>

          <a href="/quote">
            <button
              style={{
                padding: "10px 14px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Get Quote
            </button>
          </a>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section style={{ marginTop: "28px" }}>
        <h2>What we do</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            "Installation",
            "Servicing",
            "Repair",
            "Maintenance",
            "Emergency 24/7",
            "Commercial HVAC",
            "Residential AC",
            "Fault Diagnosis",
          ].map((item) => (
            <AnimatedCard key={item}>
              <strong style={{ fontSize: "16px" }}>{item}</strong>
              <div
                style={{
                  marginTop: "6px",
                  color: "#b9c6cf",
                  fontSize: "13px",
                }}
              >
                London-wide support — call or WhatsApp anytime.
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <WhyChooseUs />
<RecentWork />

      {/* ===== RECENT WORK ===== */}
      <section style={{ marginTop: "28px" }}>
        <h2>Recent work</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            "/work/1.jpg",
            "/work/2.jpg",
            "/work/3.jpg",
            "/work/4.jpg",
            "/work/5.jpg",
            "/work/6.jpg",
          ].map((src) => (
            <AnimatedImage key={src} src={src} />
          ))}
        </div>
      </section>
    </div>
  );
}
