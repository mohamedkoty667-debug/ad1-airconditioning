"use client";

export default function WhyChooseUs() {
  const items = [
    {
      title: "10+ Years Experience",
      desc: "We have over ten years of hands-on experience in air conditioning systems across London.",
      icon: "❄️",
    },
    {
      title: "24/7 Emergency Support",
      desc: "Available day and night for urgent air conditioning emergencies.",
      icon: "⚡",
    },
    {
      title: "Residential & Commercial",
      desc: "Professional solutions for homes, offices, shops and large buildings.",
      icon: "🏢",
    },
    {
      title: "Trusted & Reliable",
      desc: "Hundreds of successful installations, repairs and maintenance jobs.",
      icon: "✅",
    },
  ];

  return (
    <section
      style={{
        marginTop: "80px",
        padding: "60px 20px",
        background:
          "linear-gradient(135deg, #05080f, #0b1220)",
        color: "#fff",
        borderRadius: "20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Why Choose Us
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          Professional air conditioning services you can trust
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg, #0f172a, #020617)",
                borderRadius: "18px",
                padding: "28px",
                textAlign: "center",
                border: "1px solid #1e293b",
                boxShadow: "0 0 0 rgba(56,189,248,0)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(56,189,248,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(56,189,248,0)";
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "14px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "#e5e7eb",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#9ca3af",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
