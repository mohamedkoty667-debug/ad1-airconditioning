"use client";

/*
  Reusable, subtle animations.
  - <Reveal>      fades + rises content when it scrolls into view
  - <Stagger>     reveals its <StaggerItem> children one after another
  - <ImageReveal> image slides in from a mask with a gentle zoom-out
  - <CountUp>     counts a number up when it scrolls into view
  All of them respect the visitor's "reduce motion" setting.
*/

import {
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Stagger({
  children,
  className,
  as = "div",
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  /** animate on page load instead of on scroll (use for the hero) */
  immediate?: boolean;
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={staggerParent}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } })}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={staggerChild}>
      {children}
    </Comp>
  );
}

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(12% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  return (
    <motion.span ref={ref} aria-label={`${to}${suffix}`}>
      {rounded}
    </motion.span>
  );
}

/**
 * Headline that reveals word by word, each word rising from behind a mask.
 * `immediate` = animate on page load (hero); otherwise animate when scrolled into view.
 */
export function TextReveal({
  text,
  as = "h2",
  className,
  immediate = false,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const Comp = motion[as];
  const words = text.split(" ");
  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 1, ease: EASE } },
  };
  return (
    <Comp
      className={className}
      aria-label={text}
      variants={parent}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } })}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span aria-hidden className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span className="inline-block" variants={child}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </Comp>
  );
}

/** Moves its content slightly slower than the page scroll (subtle depth) */
export function Parallax({
  children,
  className = "",
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[70px] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}

/** Thin accent line showing how far down the page you've scrolled */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="absolute bottom-[-1px] left-0 right-0 h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
