import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { LogoMark } from "@/components/logos";
import { logoTextStyle } from "@/lib/logo-config";
import React from "react";

/* ---------- Layout ---------- */

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Small label above a heading, e.g. "Services" */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-sm tracking-wide text-muted">
      <span className="h-px w-8 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

/**
 * The site logo. Which design is shown is set by `logo` in src/lib/site.ts.
 * The mark animates gently when the logo is hovered.
 */
export function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const style = logoTextStyle[site.logo];
  const lg = size === "lg";
  const mark = <LogoMark logo={site.logo} className={lg ? "h-11 w-11" : "h-8 w-8 sm:h-9 sm:w-9"} />;

  if (style === "image") {
    // House logo: compact version in the header, full version (with tagline) in the footer
    return lg ? (
      <Image
        src="/brand/house/ad1-logo-full-dark.svg"
        alt={site.name}
        width={1132}
        height={620}
        unoptimized
        className="h-auto w-[300px] max-w-full"
      />
    ) : (
      <Image
        src="/brand/house/ad1-header.svg"
        alt={site.name}
        width={879}
        height={283}
        unoptimized
        priority
        className="h-11 w-auto transition-transform duration-500 ease-out-soft hover:scale-[1.03] sm:h-14"
      />
    );
  }

  if (style === "degree") {
    return (
      <span className="group inline-flex flex-col leading-none text-fg" aria-label={site.name}>
        <span className={`font-medium tracking-[-0.04em] ${lg ? "text-4xl" : "text-[26px] sm:text-[28px]"}`}>
          Ad1
          <span className="inline-block text-accent-mark transition-transform duration-700 ease-out-soft group-hover:-translate-y-1 group-hover:rotate-180">
            °
          </span>
        </span>
        <span className={`mt-1.5 font-medium tracking-[0.3em] text-muted ${lg ? "text-[11px]" : "text-[8.5px]"}`}>
          AIR CONDITIONING
        </span>
      </span>
    );
  }

  if (style === "stack") {
    return (
      <span className="group inline-flex items-center gap-3 text-fg" aria-label={site.name}>
        {mark}
        <span className="flex flex-col leading-none">
          <span className={`font-semibold tracking-[0.06em] ${lg ? "text-2xl" : "text-lg sm:text-xl"}`}>AD1</span>
          <span className={`mt-1.5 font-medium tracking-[0.32em] text-muted ${lg ? "text-[10px]" : "text-[8.5px]"}`}>
            AIR CONDITIONING
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className="group inline-flex items-center gap-3 text-fg" aria-label={site.name}>
      {mark}
      <span className={`tracking-[-0.02em] ${lg ? "text-2xl" : "text-lg sm:text-xl"}`}>
        Ad1 <span className="text-muted">Airconditioning</span>
      </span>
    </span>
  );
}

/* ---------- Buttons ----------
  Premium hover: a colour fill sweeps up, the label rolls to a fresh copy,
  and the arrow flies out while a new one slides in. Pure CSS, no JavaScript.
*/

export type ButtonVariant = "primary" | "secondary" | "whatsapp";
type ButtonIcon = "arrow" | "whatsapp" | "phone" | "none";

const variantCls: Record<ButtonVariant, { base: string; fill: string }> = {
  primary: {
    base: "bg-accent text-white",
    fill: "bg-[#1d4ed8]",
  },
  secondary: {
    base: "border border-line text-fg hover:border-fg hover:text-ink",
    fill: "bg-fg",
  },
  whatsapp: {
    base: "border border-line text-fg hover:border-whatsapp hover:text-ink",
    fill: "bg-whatsapp",
  },
};

export function buttonClass(variant: ButtonVariant = "primary", size: "md" | "sm" = "md", extra = "") {
  const pad = size === "sm" ? "px-4 py-2.5 text-[15px] gap-4" : "px-6 py-4 text-base gap-8";
  return `group relative isolate inline-flex select-none items-center justify-between overflow-hidden rounded-md ${pad} transition-[color,border-color,transform] duration-500 ease-out-soft active:scale-[0.98] ${variantCls[variant].base} ${extra}`;
}

/** Inner content shared by link-buttons and real <button>s */
export function ButtonContent({
  children,
  variant = "primary",
  icon = "arrow",
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
}) {
  return (
    <>
      {/* colour sweep */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-500 ease-out-soft group-hover:scale-y-100 ${variantCls[variant].fill}`}
      />
      {/* rolling label */}
      <span className="relative block overflow-hidden leading-6">
        <span className="block transition-transform duration-500 ease-out-soft group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-soft group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {icon === "arrow" && <SwapArrow />}
      {icon === "whatsapp" && (
        <WhatsAppIcon className="h-5 w-5 shrink-0 text-whatsapp transition-colors duration-500 group-hover:text-ink" />
      )}
      {icon === "phone" && (
        <PhoneIcon className="h-5 w-5 shrink-0 transition-transform duration-500 ease-out-soft group-hover:rotate-[-12deg]" />
      )}
    </>
  );
}

/** Arrow that exits top-right while a new one enters from bottom-left */
export function SwapArrow({ className = "h-5 w-5" }: { className?: string }) {
  const path = "M7 17 17 7M8 7h9v9";
  const svg = "absolute inset-0 h-full w-full transition-transform duration-500 ease-out-soft";
  return (
    <span className={`relative shrink-0 overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={`${svg} group-hover:-translate-y-full group-hover:translate-x-full`}>
        <path d={path} />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={`${svg} -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0`}>
        <path d={path} />
      </svg>
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  icon = "arrow",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
  icon?: ButtonIcon;
}) {
  const cls = buttonClass(variant, size, className);
  const content = (
    <ButtonContent variant={variant} icon={icon}>
      {children}
    </ButtonContent>
  );

  const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** Text link with a moving arrow */
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 text-fg">
      <span className="relative pb-1">
        {children}
        <span className="absolute bottom-0 left-0 h-px w-full bg-line" aria-hidden />
        <span
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-fg transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
          aria-hidden
        />
      </span>
      <SwapArrow />
    </Link>
  );
}

/* ---------- Icons ---------- */

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
      aria-hidden
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.4l5.82-1.53a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

/** Small snowflake mark used as a subtle brand accent */
export function FlakeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden>
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 2 3-2M9 20l3-2 3 2M4 10.5l1-3.5-3.5-1M22.5 6 19 7l1 3.5M4 13.5 5 17l-3.5 1M22.5 18 19 17l1-3.5" />
    </svg>
  );
}
