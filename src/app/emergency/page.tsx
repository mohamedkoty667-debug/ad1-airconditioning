import type { Metadata } from "next";
import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, DetailRows, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/emergency" },
  title: "Emergency 24/7",
  description:
    "24/7 emergency air conditioning call-outs across London. Not cooling, leaks, error codes or noise. Call or WhatsApp now.",
};

const issues = [
  "Air conditioning not cooling or stopped suddenly",
  "Water leaks and drainage problems",
  "Fault codes and system alarms",
  "Unusual noise or vibration",
  "Urgent commercial HVAC downtime",
  "Bad smells or weak airflow",
];

const steps = [
  {
    title: "Call or WhatsApp us",
    desc: "Tell us your location and what's happening: not cooling, a leak, an error code.",
  },
  {
    title: "Send a few photos",
    desc: "The unit's model label, the error code on the controller, and the indoor and outdoor units.",
  },
  {
    title: "We advise and attend",
    desc: "We confirm availability and the likely cause, and arrange an emergency visit if needed.",
  },
];

const emergencyMsg =
  "EMERGENCY - Hello Ad1 Airconditioning Ltd,\n\nProblem:\nPostcode:\nResidential or commercial:\nError code (if any):";

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency call-outs · 24/7 · London"
        title="Emergency air conditioning support, day or night."
        lead="If your system is down, leaking, showing error codes or causing overheating, contact us now. Residential and commercial call-outs across London, 24/7."
      >
        <Button href={site.phoneHref} icon="phone">
          Call {site.phoneDisplay}
        </Button>
        <Button href={waLink(emergencyMsg)} variant="whatsapp" icon="whatsapp">
          WhatsApp emergency
        </Button>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <ImageReveal className="relative aspect-[4/5] rounded-xl">
              <Image
                src="/work/work8.jpg"
                alt="Engineer commissioning an outdoor air conditioning unit with gauges"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </ImageReveal>

            <div>
              <Reveal>
                <Eyebrow>What we handle</Eyebrow>
                <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  Emergency issues we fix
                </h2>
              </Reveal>
              <Stagger as="ul" className="mt-10 border-t border-line">
                {issues.map((issue) => (
                  <StaggerItem as="li" key={issue} className="flex items-center gap-4 border-b border-line py-5 text-lg">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {issue}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <Reveal>
            <Eyebrow>What to do right now</Eyebrow>
            <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Three steps to get you running again
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="rounded-xl border border-line bg-panel p-8">
                <p className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-12 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl tracking-[-0.02em]">Coverage and details</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">
                For the fastest help, include your postcode and whether it&apos;s residential or commercial.
                Response times depend on location and availability.
              </p>
            </div>
            <DetailRows
              rows={[
                { label: "Coverage", value: site.coverage },
                { label: "Availability", value: "24 hours a day, 7 days a week" },
                { label: "Experience", value: site.experience },
                { label: "Phone", value: <a href={site.phoneHref} className="link-draw">{site.phoneDisplay}</a> },
                { label: "Company No.", value: site.companyNumber },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Need emergency help now?"
        text="Call or WhatsApp us. We'll respond as quickly as possible."
      />
    </>
  );
}
