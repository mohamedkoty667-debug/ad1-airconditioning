"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "447526556945";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/emergency", label: "Emergency" },
      { href: "/quote", label: "Get Quote" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  const waMsg =
    "Hello Ad1 Airconditioning Ltd,%0A" +
    "I would like to get in touch.%0A%0A" +
    "Service needed:%0A" +
    "Postcode:%0A" +
    "Residential/Commercial:%0A" +
    "Details:%0A";

  return (
    <header style={styles.wrap}>
      {/* Top bar */}
      <div style={styles.topBar}>
        <div style={styles.containerTop}>
          <div style={styles.topLeft}>
            <span style={styles.pulseDot} />
            <span style={styles.sep}>•</span>
            <span style={styles.topText}>London-wide coverage</span>
          </div>

          <div style={styles.topRight}>
            <span style={styles.topText}>Company No. 16462923</span>
            <span style={styles.sep}>•</span>
            <span style={styles.topText}>SE13 6DR</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div style={styles.mainBar}>
        <div style={styles.container}>
          {/* Brand */}
          <div style={styles.brand}>
            <Link href="/" style={styles.logoLink} onClick={() => setOpen(false)}>
              <img
                src="/logo.jpg"
                alt="Ad1 Airconditioning Ltd"
                style={styles.logoImg}
              />
              <div style={styles.brandText}>
                <div style={styles.brandName}>Ad1 Airconditioning Ltd</div>
                <div style={styles.brandTagline}>
                  installation, service, repair and maintenance
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav style={styles.navDesktop} aria-label="Primary">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    ...styles.navLink,
                    ...(active ? styles.navLinkActive : {}),
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div style={styles.actions}>
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noreferrer"
              style={styles.waBtn}
            >
              WhatsApp
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              style={styles.burger}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span style={{ ...styles.burgerLine, ...(open ? styles.bLine1 : {}) }} />
              <span style={{ ...styles.burgerLine, ...(open ? styles.bLine2 : {}) }} />
              <span style={{ ...styles.burgerLine, ...(open ? styles.bLine3 : {}) }} />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div style={styles.mobilePanel}>
            <div style={styles.container}>
              <div style={styles.mobileNav}>
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        ...styles.mobileLink,
                        ...(active ? styles.mobileLinkActive : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div style={styles.mobileCTA}>
                <a
                  href={waLink(waMsg)}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.waBtnWide}
                  onClick={() => setOpen(false)}
                >
                  Message us on WhatsApp
                </a>
                <div style={styles.mobileNote}>
                  Reply fast • Please include your postcode
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ===== styles ===== */
const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
  },

  topBar: {
    background: "linear-gradient(90deg, rgba(34,197,94,0.18), rgba(59,130,246,0.14))",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  containerTop: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "8px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#e5e7eb",
    fontSize: "13px",
    fontWeight: 700,
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#cbd5e1",
    fontSize: "13px",
    fontWeight: 700,
  },
  topTextStrong: { color: "#dcfce7", fontWeight: 900 },
  topText: { color: "#e5e7eb" },
  sep: { color: "rgba(255,255,255,0.30)" },
  pulseDot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    background: "#22c55e",
    boxShadow: "0 0 0 6px rgba(34,197,94,0.14)",
  },

  mainBar: {
    background: "rgba(6, 9, 16, 0.86)",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "14px",
  },

  brand: { display: "flex", alignItems: "center" },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  },
  logoImg: {
    height: "46px",
    width: "auto",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  brandText: { display: "flex", flexDirection: "column", gap: "2px" },
  brandName: {
    color: "#f8fafc",
    fontWeight: 950,
    fontSize: "16px",
    letterSpacing: "0.2px",
  },
  brandTagline: {
    color: "#cbd5e1",
    fontSize: "12.5px",
    lineHeight: 1.3,
  },

  navDesktop: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: 850,
    fontSize: "13.5px",
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  navLinkActive: {
    background: "rgba(34,197,94,0.14)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#dcfce7",
  },

  actions: { display: "flex", alignItems: "center", gap: "10px" },
  waBtn: {
    padding: "10px 14px",
    borderRadius: "12px",
    background: "#25D366",
    color: "#001b0f",
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid rgba(255,255,255,0.12)",
    whiteSpace: "nowrap",
  },

  burger: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    display: "none", // هتظهر في الشاشات الصغيرة بالـ CSS في globals لو حبيت
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    padding: "10px",
    cursor: "pointer",
  },
  burgerLine: {
    display: "block",
    height: "2px",
    width: "18px",
    background: "#e5e7eb",
    borderRadius: "10px",
    transition: "transform 0.2s ease, opacity 0.2s ease",
  },
  bLine1: { transform: "translateY(7px) rotate(45deg)" },
  bLine2: { opacity: 0 },
  bLine3: { transform: "translateY(-7px) rotate(-45deg)" },

  mobilePanel: {
    borderTop: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(6, 9, 16, 0.96)",
  },
  mobileNav: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    padding: "12px 0",
  },
  mobileLink: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: 900,
    padding: "12px 12px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  mobileLinkActive: {
    background: "rgba(34,197,94,0.14)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#dcfce7",
  },
  mobileCTA: {
    padding: "10px 0 18px 0",
    borderTop: "1px solid rgba(255,255,255,0.10)",
    marginTop: "6px",
  },
  waBtnWide: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    padding: "12px 14px",
    borderRadius: "14px",
    background: "#25D366",
    color: "#001b0f",
    textDecoration: "none",
    fontWeight: 950,
    border: "1px solid rgba(255,255,255,0.12)",
  },
  mobileNote: {
    marginTop: "8px",
    color: "#cbd5e1",
    fontSize: "12.5px",
    textAlign: "center",
  },
};
