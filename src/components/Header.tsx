"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { nav, site, waLink } from "@/lib/site";
import { Button, SwapArrow, Wordmark } from "@/components/ui";
import { ScrollProgress } from "@/components/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Solid background after scrolling; hide when scrolling down, show when scrolling up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out-soft ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || open
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] transition-colors duration-300 hover:text-fg ${
                  isActive(item.href) ? "text-fg" : "text-muted"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-fg"
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block">
              <Button href={site.phoneHref} size="sm" icon="phone">
                Call {site.phoneDisplay}
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-7 bg-fg transition-transform duration-500 ease-out-soft ${
                  open ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-px w-7 bg-fg transition-transform duration-500 ease-out-soft ${
                  open ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
        {scrolled && !open && <ScrollProgress />}
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-10 pt-28 sm:px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.ul
              className="flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="border-b border-line"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between py-5 text-3xl tracking-tight ${
                      isActive(item.href) ? "text-fg" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <SwapArrow className="h-6 w-6" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-auto grid gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
            >
              <Button href={site.phoneHref} icon="phone">
                Call {site.phoneDisplay}
              </Button>
              <Button
                href={waLink("Hello Ad1 Airconditioning Ltd,\nI'd like some help with my air conditioning.")}
                variant="whatsapp"
                icon="whatsapp"
              >
                WhatsApp us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
