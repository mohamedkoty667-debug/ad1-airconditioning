"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

export default function StickyHeader({ height = 92 }: { height?: number }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // في أول الصفحة: خليه ظاهر
      if (y < 10) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      // ينزل = يخفي
      if (delta > 8) setHidden(true);

      // يطلع = يظهر
      if (delta < -8) setHidden(false);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: hidden ? `translateY(-${height}px)` : "translateY(0)",
        transition: "transform 220ms ease",
        willChange: "transform",
      }}
    >
      <Header />
    </div>
  );
}
