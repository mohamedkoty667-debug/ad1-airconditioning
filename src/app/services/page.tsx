import type { Metadata } from "next";
import Link from "next/link";
import { services, site, waLink } from "@/lib/site";
import { SwapArrow, Button, Container, Section, WhatsAppIcon } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, Process } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air conditioning installation, servicing, repairs, emergency call-outs, commercial HVAC and controls support across London.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Residential & commercial"
        title="Every air conditioning service, under one roof."
        lead={`Installation, servicing, repair and maintenance across London. ${site.hours}.`}
      >
        <Button href="/quote">Get a free quote</Button>
        <Button href="/emergency" variant="secondary">
          Emergency 24/7
        </Button>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <ol className="border-t border-line">
            {services.map((s, i) => (
              <li key={s.slug} id={s.slug} className="scroll-mt-28 border-b border-line">
                <Reveal className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[80px_1.3fr_1fr] lg:gap-12">
                  <p className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>

                  <div>
                    <h2 className="text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">{s.title}</h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{s.desc}</p>
                  </div>

                  <div className="flex flex-col justify-between gap-8">
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-[11px] h-px w-4 shrink-0 bg-accent" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                      <a
                        href={waLink(
                          `Hello Ad1 Airconditioning Ltd,\nI'm interested in: ${s.title}\n\nResidential or commercial:\nPostcode:\nDetails:`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-fg"
                      >
                        <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                        <span className="link-draw">Ask about this</span>
                      </a>
                      <Link href="/quote" className="group inline-flex items-center gap-2 text-fg">
                        <span className="link-draw">Get a quote</span>
                        <SwapArrow className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}
