"use client";

/*
  All Ad1 logo options. The site shows whichever one is set as `logo` in src/lib/site.ts.

  Colours:
  - "currentColor" = the text colour (white on the dark site)
  - var(--color-accent-mark) = brand blue
  - WARM = heating orange
*/

import { useId } from "react";
import type { LogoKey } from "@/lib/logo-config";

const BLUE = "var(--color-accent-mark)";
const WARM = "#ff7a1a";
const ease = "transition-transform duration-[900ms] ease-out-soft motion-reduce:transition-none [transform-box:fill-box] origin-center";

export function LogoMark({ logo, className = "h-9 w-9" }: { logo: LogoKey; className?: string }) {
  const id = useId().replace(/:/g, "");
  const svg = (children: React.ReactNode, extra = "") => (
    <svg viewBox="0 0 48 48" fill="none" className={`shrink-0 ${className} ${extra}`} aria-hidden>
      {children}
    </svg>
  );

  switch (logo) {
    case "loop":
      return svg(
        <>
          <defs>
            <linearGradient id={`hc${id}`} x1="5" x2="43" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={BLUE} />
              <stop offset=".42" stopColor={BLUE} />
              <stop offset=".58" stopColor={WARM} />
              <stop offset="1" stopColor={WARM} />
            </linearGradient>
          </defs>
          <path
            d="M24 24C18.5 14.5 6 14.5 6 24s12.5 9.5 18 0 18-9.5 18 0-12.5 9.5-18 0Z"
            stroke={`url(#hc${id})`}
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
        </>,
        `${ease} group-hover:scale-110`
      );

    case "vent":
      return svg(
        <g strokeLinecap="round">
          <path d="M8 41 24 7l16 34" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round" />
          <path d="M17.6 26h12.8M15.4 33h17.2" stroke={BLUE} strokeWidth="3.4" className={`${ease} group-hover:-translate-y-0.5`} />
        </g>
      );

    case "fan": {
      const blade = "M24 24c-1.2-6.4 1.6-12.2 8.6-13.6 1.4 5.8-2.4 11.4-8.6 13.6Z";
      return svg(
        <>
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.6" />
          <g className={`${ease} group-hover:rotate-[120deg]`}>
            {[0, 120, 240].map((r) => (
              <path key={r} d={blade} fill={BLUE} transform={`rotate(${r} 24 24)`} />
            ))}
          </g>
          <circle cx="24" cy="24" r="2.6" fill="currentColor" />
        </>
      );
    }

    case "tile": {
      const arm = "M24 9v30M24 13.5l-3.6-3.6M24 13.5l3.6-3.6M24 34.5l-3.6 3.6M24 34.5l3.6 3.6";
      return svg(
        <>
          <rect width="48" height="48" rx="12" fill="var(--color-accent)" />
          <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round" className={`${ease} group-hover:rotate-[60deg]`}>
            {[0, 60, 120].map((r) => (
              <path key={r} d={arm} transform={`rotate(${r} 24 24)`} />
            ))}
          </g>
        </>
      );
    }

    case "ones":
      return svg(
        <>
          <g stroke={BLUE} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className={`${ease} group-hover:rotate-[60deg]`}>
            {[0, 60, 120, 180, 240, 300].map((r) => (
              <path key={r} d="M24 24V7M24 7l-4.2 3.4" transform={`rotate(${r} 24 24)`} />
            ))}
          </g>
          <circle cx="24" cy="24" r="3.2" fill="currentColor" />
        </>
      );

    case "air":
      return svg(
        <g strokeLinecap="round">
          <path d="M9 41C13 29 18 17 24 7c6 10 11 22 15 34" stroke="currentColor" strokeWidth="3" />
          <g className={`${ease} group-hover:translate-x-1`}>
            <path d="M5 31c7-5 13 3 20 0s12-6 18-1" stroke={BLUE} strokeWidth="3" />
            <path d="M12 37c5-2.6 9 1.6 14 0" stroke={BLUE} strokeWidth="3" opacity=".55" />
          </g>
        </g>
      );

    case "drop":
      return svg(
        <>
          <defs>
            <linearGradient id={`td${id}`} x1="0" x2="48" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset=".5" stopColor={BLUE} />
              <stop offset=".5" stopColor={WARM} />
            </linearGradient>
          </defs>
          <path d="M24 5c7 10 14 16.5 14 25a14 14 0 0 1-28 0c0-8.5 7-15 14-25Z" fill={`url(#td${id})`} />
          <path
            d="M15.5 31c3-2.4 5.6 2.4 8.5 0s5.6-2.4 8.5 0"
            stroke="#fff"
            strokeWidth="2.4"
            strokeLinecap="round"
            className={`${ease} group-hover:-translate-y-1`}
          />
        </>,
        `${ease} group-hover:-translate-y-0.5`
      );

    case "unit":
      return svg(
        <g strokeLinecap="round">
          <rect x="5" y="9" width="38" height="14" rx="4" stroke="currentColor" strokeWidth="2.8" />
          <path d="M11 18.5h26" stroke="currentColor" strokeWidth="2.2" opacity=".5" />
          <path
            d="M14 29c1.6 2.2-1.6 4.4 0 6.6s-1.6 4.4 0 6.4M24 29c1.6 2.2-1.6 4.4 0 6.6s-1.6 4.4 0 6.4M34 29c1.6 2.2-1.6 4.4 0 6.6s-1.6 4.4 0 6.4"
            stroke={BLUE}
            strokeWidth="2.6"
            className={`${ease} group-hover:translate-y-1`}
          />
        </g>
      );

    case "vortex":
      return svg(
        <g strokeLinecap="round" className={`${ease} group-hover:-rotate-90`}>
          <path d="M24 6a18 18 0 1 1-17.3 13" stroke="currentColor" strokeWidth="2.8" />
          <path d="M24 12a12 12 0 1 1-11 7.2" stroke={BLUE} strokeWidth="2.8" transform="rotate(120 24 24)" />
          <path d="M24 18a6 6 0 1 1-5.6 3.8" stroke={BLUE} strokeWidth="2.8" opacity=".6" transform="rotate(240 24 24)" />
        </g>
      );

    case "house":
      return null; // drawn from image files, see Wordmark

    case "degree":
      return svg(
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 39V9l-7 5.5" stroke="currentColor" strokeWidth="3.4" />
          <circle cx="32.5" cy="13" r="5" stroke={BLUE} strokeWidth="3" />
        </g>
      );
  }
}
