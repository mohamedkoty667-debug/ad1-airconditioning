"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { workPhotos } from "@/lib/site";
import { ButtonContent, buttonClass } from "@/components/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function RecentWork({ initial = 6 }: { initial?: number }) {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const photos = showAll ? workPhotos : workPhotos.slice(0, initial);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + workPhotos.length) % workPhotos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-panel text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.08 }}
            aria-label={`Open photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:opacity-100" />
            <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs leading-snug opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:left-4 sm:right-4 sm:text-sm [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
              {p.alt}
            </span>
          </motion.button>
        ))}
      </div>

      {!showAll && workPhotos.length > initial && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className={buttonClass("secondary")}
          >
            <ButtonContent variant="secondary" icon="none">
              Show all {workPhotos.length} projects
            </ButtonContent>
          </button>
        </div>
      )}

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Project photo"
          >
            <motion.div
              key={open}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={workPhotos[open].src}
                alt={workPhotos[open].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-muted">
              {workPhotos[open].alt} · {open + 1} / {workPhotos.length}
            </p>

            <LightboxButton label="Close" className="right-4 top-4" onClick={close}>
              <path d="M6 6l12 12M18 6 6 18" />
            </LightboxButton>
            <LightboxButton label="Previous photo" className="left-3 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
              <path d="M15 5l-7 7 7 7" />
            </LightboxButton>
            <LightboxButton label="Next photo" className="right-3 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
              <path d="M9 5l7 7-7 7" />
            </LightboxButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LightboxButton({
  label,
  className,
  onClick,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink/60 transition-colors hover:bg-panel-2 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        {children}
      </svg>
    </button>
  );
}
