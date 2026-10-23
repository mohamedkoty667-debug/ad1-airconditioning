import React from "react";
import { waLink } from "@/lib/site";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion";

/** Big page heading used at the top of inner pages */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pb-16 pt-36 sm:pb-24 sm:pt-44">
      <Container>
        <Stagger immediate>
          <StaggerItem>
            <Eyebrow>{eyebrow}</Eyebrow>
          </StaggerItem>
          <TextReveal
            as="h1"
            immediate
            delay={0.1}
            text={title}
            className="max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          />
          {lead && (
            <StaggerItem>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
            </StaggerItem>
          )}
          {children && (
            <StaggerItem>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>
            </StaggerItem>
          )}
        </Stagger>
      </Container>
    </section>
  );
}

/** Closing call-to-action band */
export function CtaBand({
  title = "Ready for a higher standard of air conditioning?",
  text = "Tell us what you need and your postcode. We'll reply quickly with next steps and a clear quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line bg-panel px-6 py-14 sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div>
                <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  {title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{text}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/quote">Get a free quote</Button>
                <Button
                  href={waLink("Hello Ad1 Airconditioning Ltd,\nI'd like a quote.\n\nService needed:\nPostcode:\nDetails:")}
                  variant="whatsapp"
                  icon="whatsapp"
                >
                  WhatsApp us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** "How it works" steps */
export function Process({
  title = "A simple, clear process",
  steps = [
    { title: "Get in touch", desc: "Call or WhatsApp us with the service you need and your postcode." },
    { title: "Share the details", desc: "Send photos, the unit model or any error code. It helps us come prepared." },
    { title: "Clear quote", desc: "We advise on the best option and give you a clear price before any work starts." },
    { title: "Job done properly", desc: "Clean, tested, tidy workmanship, with a proper handover at the end." },
  ],
}: {
  title?: string;
  steps?: { title: string; desc: string }[];
}) {
  return (
    <Section className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">{title}</h2>
        </Reveal>
        <Stagger as="ol" className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem as="li" key={s.title} className="bg-ink p-8">
              <p className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-10 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/** Label / value rows (company details etc.) */
export function DetailRows({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map((r) => (
        <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
          <dt className="text-muted">{r.label}</dt>
          <dd className="break-words">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
