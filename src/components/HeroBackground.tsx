"use client";

/*
  Full-screen hero photo behind the headline.
  - slow zoom-out when the page loads
  - drifts down and fades slightly as you scroll (parallax)
  - layered dark overlays keep the text readable
  To change the photo, swap `src` below (put the new image in /public).
*/

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function HeroBackground({
  src = "/work/3.jpg",
  alt = "Sleek wall-mounted air conditioning unit installed in a modern London interior",
  position = "50% 30%",
  mirror = true,
}: {
  src?: string;
  alt?: string;
  position?: string;
  /** flip the photo horizontally so the subject sits on the right, away from the text */
  mirror?: boolean;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0.35]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* On large screens the photo fills the right side and fades softly into the dark behind the text */}
      <motion.div
        className="absolute inset-0 lg:left-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent,black_38%)]"
        style={reduce ? undefined : { y, opacity }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover ${mirror ? "-scale-x-100" : ""}`}
            style={{ objectPosition: position }}
          />
        </motion.div>
      </motion.div>

      {/* Overlays: cool tint, darken, then fade to page colour at the bottom and on the left */}
      <div className="absolute inset-0 bg-[#0b1a3a]/25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-ink/25 lg:bg-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent lg:from-ink lg:via-ink/30" />
    </div>
  );
}
