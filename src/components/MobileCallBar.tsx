"use client";

/*
  Sticky Call / WhatsApp bar on phones and tablets.
  Slides up once the visitor scrolls past the top of the page, so it's always one tap away.
*/

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui";

export default function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* space so the bar never covers the bottom of the footer */}
      <div className="h-20 lg:hidden" aria-hidden />
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink/90 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex max-w-md gap-3">
              <a
                href={site.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-accent py-3.5 text-white active:scale-[0.98]"
              >
                <PhoneIcon className="h-5 w-5" />
                Call now
              </a>
              <a
                href={waLink("Hello Ad1 Airconditioning Ltd,\nI'd like some help with my air conditioning.\n\nPostcode:\nDetails:")}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-panel py-3.5 text-fg active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
