"use client";

/* Frequently asked questions with smooth open/close */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/site";
import { Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Questions we often get</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
              Can&apos;t see your question? Call or WhatsApp us, we&apos;re happy to help.
            </p>
          </Reveal>
          <Reveal>
            <ul className="border-t border-line">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-xl tracking-tight transition-colors group-hover:text-accent-hover sm:text-2xl">{f.q}</span>
                      <span className="relative h-5 w-5 shrink-0" aria-hidden>
                        <span className="absolute left-0 top-1/2 h-px w-5 bg-fg" />
                        <span
                          className={`absolute left-1/2 top-0 h-5 w-px bg-fg transition-transform duration-500 ease-out-soft ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 text-lg leading-relaxed text-muted">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
