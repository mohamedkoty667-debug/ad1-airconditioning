"use client";

import { useMemo, useState } from "react";

export default function RecentWork() {
  const images = useMemo(
    () => [
      "/work/work1.jpg",
      "/work/work2.jpg",
      "/work/work3.jpg",
      "/work/work4.jpg",
      "/work/work5.jpg",
      "/work/work6.jpg",
      "/work/work7.jpg",
      "/work/work8.jpg",
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setOpenIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  return (
    <section style={{ marginTop: "28px" }}>
      <h2 style={{ marginBottom: "14px" }}>Recent Work</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setOpenIndex(index)}
            style={{
              border: "1px solid #1f2937",
              background: "linear-gradient(180deg, #0b1220, #05080f)",
              borderRadius: "16px",
              overflow: "hidden",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
              transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(56,189,248,0.18)";
              e.currentTarget.style.borderColor = "rgba(56,189,248,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#1f2937";
            }}
            aria-label="Open image"
          >
            <img
              src={src}
              alt="Ad1 Airconditioning work"
              style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "18px",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "#05080f",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                color: "#e5e7eb",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "13px", color: "#9ca3af" }}>
                {openIndex + 1} / {images.length}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={prev}
                  style={btnStyle()}
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  style={btnStyle()}
                  aria-label="Next"
                >
                  →
                </button>
                <button
                  onClick={close}
                  style={btnStyle()}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <img
              src={images[openIndex]}
              alt="Ad1 Airconditioning work large"
              style={{
                width: "100%",
                maxHeight: "78vh",
                objectFit: "contain",
                display: "block",
                background: "#000",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function btnStyle(): React.CSSProperties {
  return {
    height: "34px",
    minWidth: "34px",
    padding: "0 10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 800,
  };
}
