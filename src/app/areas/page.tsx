import type { Metadata } from "next";
import { areas, postcodes, site, waLink } from "@/lib/site";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/areas" },
  title: "Areas We Cover",
  description:
    "Air conditioning installation, servicing and repairs in every London borough, from Lewisham, Greenwich and Bromley to Westminster, Camden, Ealing and Croydon. 24/7 emergency call-outs.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we cover · All 32 boroughs + the City"
        title="Air conditioning engineers across all of London."
        lead={`Based in Lewisham (SE13), our engineers cover every London borough for installation, servicing and repairs, with 24/7 emergency call-outs wherever you are.`}
      >
        <Button href="/quote">Get a free quote</Button>
        <Button
          href={waLink("Hello Ad1 Airconditioning Ltd,\nDo you cover my area?\n\nPostcode:\nService needed:")}
          variant="whatsapp"
          icon="whatsapp"
        >
          Check your postcode
        </Button>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Stagger className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((r) => (
              <StaggerItem key={r.region} className="bg-ink p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl tracking-tight">{r.region}</h2>
                  <span className="font-mono text-sm text-muted">{r.codes}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {r.boroughs.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-fg/90">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${b === "Lewisham" ? "bg-whatsapp" : "bg-accent"}`}
                        aria-hidden
                      />
                      {b}
                      {b === "Lewisham" && <span className="text-sm text-muted">· our base</span>}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <Eyebrow>Postcodes</Eyebrow>
              <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                London postcode areas we cover
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Not sure if we reach you? Send us your postcode on WhatsApp or call{" "}
                <a href={site.phoneHref} className="link-draw text-fg">
                  {site.phoneDisplay}
                </a>
                . We&apos;ll confirm straight away.
              </p>
            </Reveal>
            <Stagger className="flex flex-wrap content-start gap-2.5">
              {postcodes.map((p) => (
                <StaggerItem key={p.code}>
                  <span className="inline-flex items-baseline gap-2 rounded-md border border-line bg-panel px-4 py-2.5">
                    <span className="font-mono text-fg">{p.code}</span>
                    <span className="text-sm text-muted">{p.name}</span>
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Wherever you are in London, we'll come to you."
        text="Tell us your postcode and what you need. We'll reply quickly with availability and a clear quote."
      />
    </>
  );
}
