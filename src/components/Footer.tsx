"use client";
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "70px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(135deg, #05080f, #0b1220)",
        color: "#e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "34px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {/* العمود 1: الهوية */}
        <div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <img
              src="/logo.jpg"
              alt="Ad1 Airconditioning Ltd"
              style={{ height: "44px", width: "auto" }}
            />
            <div>
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                Ad1 Airconditioning Ltd
              </div>
              <div style={{ color: "#9ca3af", fontSize: "13px", marginTop: "4px" }}>
                installation, service, repair and maintenance
              </div>
            </div>
          </div>

          <div style={{ marginTop: "14px", color: "#9ca3af", fontSize: "13.5px", lineHeight: 1.6 }}>
            Serving all London. Open 24/7 for emergency call-outs. Residential & Commercial.
          </div>

          <a
            href="https://wa.me/447526556945"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "14px",
              padding: "10px 14px",
              borderRadius: "12px",
              border: "1px solid rgba(56,189,248,0.35)",
              background: "rgba(56,189,248,0.10)",
              color: "#e5e7eb",
              fontWeight: 800,
              textDecoration: "none",
              cursor: "pointer",
              transition: "transform 220ms ease, box-shadow 220ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(56,189,248,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            WhatsApp Us <span style={{ opacity: 0.9 }}>→</span>
          </a>
        </div>

        {/* العمود 2: روابط سريعة */}
        <div>
          <div style={{ fontWeight: 900, marginBottom: "12px" }}>Quick Links</div>

          <div style={{ display: "grid", gap: "10px", fontSize: "14px" }}>
            <a style={linkStyle()} href="/">Home</a>
            <a style={linkStyle()} href="/services">Services</a>
            <a style={linkStyle()} href="/emergency">Emergency</a>
            <a style={linkStyle()} href="/quote">Get Quote</a>
            <a style={linkStyle()} href="/contact">Contact</a>
          </div>
        </div>

        {/* العمود 3: بيانات الشركة */}
        <div>
          <div style={{ fontWeight: 900, marginBottom: "12px" }}>Company Details</div>

          <div style={rowStyle()}>
            <span style={labelStyle()}>WhatsApp:</span>
            <a
              href="https://wa.me/447526556945"
              target="_blank"
              rel="noreferrer"
              style={{ ...linkStyle(), fontWeight: 800 }}
            >
              +44 7526 556945
            </a>
          </div>

          <div style={rowStyle()}>
            <span style={labelStyle()}>Email:</span>
            <a style={linkStyle()} href="mailto:Ad1Airconditioningltd@gmail.com">
              Ad1Airconditioningltd@gmail.com
            </a>
          </div>

          <div style={rowStyle()}>
            <span style={labelStyle()}>Address:</span>
            <span style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.5 }}>
              Flat 2, 119 Courthill Road, London, SE13 6DR
            </span>
          </div>

          <div style={rowStyle()}>
            <span style={labelStyle()}>Company Number:</span>
            <span style={{ color: "#cbd5e1", fontSize: "14px", fontWeight: 800 }}>
              16462923
            </span>
          </div>
        </div>
      </div>

      {/* شريط آخر */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "14px 20px",
          color: "#9ca3af",
          fontSize: "13px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} Ad1 Airconditioning Ltd. All rights reserved.</span>
          <span>Open 24/7 • Serving all London</span>
        </div>
      </div>
    </footer>
  );
}

function linkStyle(): React.CSSProperties {
  return {
    color: "#cbd5e1",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    width: "fit-content",
  };
}

function rowStyle(): React.CSSProperties {
  return {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: "10px",
    alignItems: "start",
    marginBottom: "10px",
  };
}

function labelStyle(): React.CSSProperties {
  return {
    color: "#9ca3af",
    fontSize: "13px",
    paddingTop: "2px",
  };
}
