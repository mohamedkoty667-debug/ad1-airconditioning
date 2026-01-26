"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "14px",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.div>
  );
}
