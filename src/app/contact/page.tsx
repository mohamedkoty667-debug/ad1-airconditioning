import type { Metadata } from "next";
import { site, waLink } from "@/lib/site";
import { SwapArrow, Container, PhoneIcon, Section, WhatsAppIcon } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { DetailRows, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}. Call or WhatsApp ${site.phoneDisplay}, or email ${site.email}. Covering all of London, 24/7.`,
};

const channels = [
  {
    label: "Call us",
    value: site.phoneDisplay,
    href: site.phoneHref,
    note: "Fastest for emergencies",
    icon: <PhoneIcon className="h-6 w-6" />,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: waLink("Hello Ad1 Airconditioning Ltd,\n"),
    note: "Send photos and error codes",
    icon: <WhatsAppIcon className="h-6 w-6 text-whatsapp" />,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "For quotes and paperwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your air conditioning."
        lead="The quickest way to reach us is a call or WhatsApp. We cover all of London and we're available 24/7 for emergencies."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Stagger className="grid gap-4 lg:grid-cols-3">
            {channels.map((c) => (
              <StaggerItem key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex h-full min-h-[260px] flex-col justify-between rounded-xl border border-line bg-panel p-8 transition-colors duration-500 hover:bg-panel-2"
                >
                  <div className="flex items-start justify-between">
                    {c.icon}
                    <span className="text-muted transition-colors group-hover:text-fg"><SwapArrow className="h-6 w-6" /></span>
                  </div>
                  <div>
                    <p className="text-muted">{c.label}</p>
                    <p className="mt-2 break-all text-2xl tracking-tight">{c.value}</p>
                    <p className="mt-2 text-sm text-muted">{c.note}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl tracking-[-0.02em] sm:text-4xl">Company details</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">
                Installation, servicing, repair and maintenance for residential and commercial properties.
              </p>
            </div>
            <DetailRows
              rows={[
                { label: "Company name", value: site.name },
                { label: "Company number", value: site.companyNumber },
                { label: "Address", value: site.address },
                { label: "Coverage", value: `${site.coverage}, residential and commercial` },
                { label: "Hours", value: site.hours },
              ]}
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
