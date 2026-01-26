"use client";

import { motion } from "framer-motion";

export default function AnimatedImage({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
      }}
      style={{
        border: "1px solid #e9eef2",
        borderRadius: "14px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <motion.img
        src={src}
        alt="Ad1 Airconditioning work"
        style={{ width: "100%", height: "220px", objectFit: "cover" }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}
