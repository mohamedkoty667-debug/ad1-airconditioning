import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { DetailRows, PageHero } from "@/components/sections";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  alternates: { canonical: "/quote" },
  title: "Get a Quote",
  description:
    "Request a free air conditioning quote in London. Installation, servicing, repair and maintenance for homes and businesses.",
};

const steps = [
  { title: "Send your request", desc: "Fill in the form and press send. It comes straight to us, or use WhatsApp if you prefer." },
  { title: "Share photos", desc: "Add photos of the units, model labels or error codes if you can." },
  { title: "Get a clear quote", desc: "We advise on the best option and confirm the price, with a site visit if needed." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote · Fast response"
        title="Request a quote."
        lead="Installation, servicing, repair and maintenance for residential and commercial properties. Tell us what you need and we'll reply with next steps."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal>
              <QuoteForm />
            </Reveal>

            <div className="space-y-14">
              <div>
                <h2 className="text-2xl tracking-tight">How it works</h2>
                <Stagger as="ol" className="mt-6 border-t border-line">
                  {steps.map((s, i) => (
                    <StaggerItem as="li" key={s.title} className="grid grid-cols-[40px_1fr] gap-2 border-b border-line py-5">
                      <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block">{s.title}</span>
                        <span className="mt-1 block leading-relaxed text-muted">{s.desc}</span>
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <Reveal>
                <h2 className="text-2xl tracking-tight">Prefer to talk?</h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Call us on{" "}
                  <a href={site.phoneHref} className="link-draw text-fg">
                    {site.phoneDisplay}
                  </a>
                  . We&apos;re open 24/7.
                </p>
                <div className="mt-6">
                  <DetailRows
                    rows={[
                      { label: "Coverage", value: site.coverage },
                      { label: "Experience", value: site.experience },
                      { label: "Company No.", value: site.companyNumber },
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
