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
    "Hello Ad1 Airconditioning Ltd,\n" +
    "I would like to get in touch.\n\n" +
    "Service needed:\n" +
    "Postcode:\n" +
    "Residential/Commercial:\n" +
    "Details:\n";

  return (
    <header style={s.wrap}>
      {/* Top strip */}
      <div style={s.topStrip}>
        <div style={s.containerTop}>
          <div style={s.topLeft}>
            <span style={s.dot} />
            <span style={s.topStrong}></span>
            <span style={s.sep}>•</span>
            <span style={s.topText}>London-wide coverage</span>
          </div>

          <div style={s.topRight}>
            <span style={s.topText}>Company No. 16462923</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div style={s.mainBar}>
        <div style={s.container}>
          {/* Brand */}
          <Link href="/" style={s.brand} onClick={() => setOpen(false)}>
            <img src="/logo.jpg" alt="Ad1 Airconditioning Ltd" style={s.logo} />
            <div style={s.brandText}>
              <div style={s.name}>Ad1 Airconditioning Ltd</div>
              <div style={s.tagline}>
                installation, service, repair and maintenance
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={s.navDesktop} aria-label="Primary">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ ...s.navLink, ...(active ? s.navActive : {}) }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp */}
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noreferrer"
            style={s.waDesktop}
          >
            WhatsApp
          </a>

          {/* Mobile Menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={s.menuBtn}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={s.mobilePanel}>
            <div style={s.container}>
              <div style={s.mobileNav}>
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
                        ...s.mobileLink,
                        ...(active ? s.mobileActive : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <a
                href={waLink(waMsg)}
                target="_blank"
                rel="noreferrer"
                style={s.waMobile}
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ===== Styles ===== */
const s: Record<string, React.CSSProperties> = {
  wrap: {
    background: "#0b1220",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
  },

  topStrip: {
    background: "linear-gradient(90deg, rgba(34,197,94,0.18), rgba(59,130,246,0.14))",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  containerTop: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "8px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  topLeft: { display: "flex", alignItems: "center", gap: 10, minWidth: 0 },
  topRight: { display: "flex", alignItems: "center", gap: 10 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "#22c55e",
    boxShadow: "0 0 0 6px rgba(34,197,94,0.14)",
  },
  topStrong: { color: "#dcfce7", fontWeight: 900, fontSize: 13 },
  topText: { color: "#e5e7eb", fontWeight: 700, fontSize: 13 },
  sep: { color: "rgba(255,255,255,0.35)" },

  mainBar: { background: "rgba(6, 9, 16, 0.92)" },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
    minWidth: 0,
    flex: 1,
  },
  logo: {
    height: 44,
    width: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    objectFit: "cover",
  },
  brandText: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 },
  name: {
    color: "#f8fafc",
    fontWeight: 950,
    fontSize: 16,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tagline: {
    color: "#cbd5e1",
    fontSize: 12.5,
    lineHeight: 1.25,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  navDesktop: { display: "flex", gap: 10, flexWrap: "wrap" },
  navLink: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: 850,
    fontSize: 13.5,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  navActive: {
    background: "rgba(34,197,94,0.14)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#dcfce7",
  },

  waDesktop: {
    padding: "10px 14px",
    borderRadius: 12,
    background: "#25D366",
    color: "#001b0f",
    fontWeight: 950,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  menuBtn: {
    display: "none", // هيتفعل في الموبايل من CSS
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#e5e7eb",
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  mobilePanel: {
    borderTop: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(6, 9, 16, 0.96)",
  },
  mobileNav: { display: "grid", gap: 10, padding: "12px 0" },
  mobileLink: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: 900,
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  mobileActive: {
    background: "rgba(34,197,94,0.14)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#dcfce7",
  },
  waMobile: {
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: "12px 14px",
    borderRadius: 14,
    background: "#25D366",
    color: "#001b0f",
    fontWeight: 950,
    textDecoration: "none",
    marginBottom: 14,
  },
};
