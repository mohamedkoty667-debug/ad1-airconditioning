import Image from "next/image";
import Link from "next/link";
import { services, site, waLink } from "@/lib/site";
import { SwapArrow, ArrowLink, Button, Container, Eyebrow, FlakeIcon, Section } from "@/components/ui";
import { CountUp, ImageReveal, Parallax, Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion";
import { CtaBand, Process } from "@/components/sections";
import RecentWork from "@/components/RecentWork";
import HeroBackground from "@/components/HeroBackground";

const standards = [
  {
    title: "Experienced engineers",
    desc: "Over ten years of hands-on air conditioning work across London, from flats to multi-storey offices.",
  },
  {
    title: "Clean, careful workmanship",
    desc: "Neat pipe routing, tidy finishes and every system tested and commissioned before we hand it over.",
  },
  {
    title: "Clear, honest pricing",
    desc: "You get a clear quote before any work begins. No surprises, just straightforward service.",
  },
];

const featured = ["installation", "servicing", "repair", "commercial"];

export default function Home() {
  const featuredServices = services.filter((s) => featured.includes(s.slug));

  return (
    <>
      {/* ===== HERO (full-screen photo behind the headline) ===== */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <HeroBackground />
        <Container className="pb-14 pt-40 sm:pb-20">
          <Stagger immediate>
            <StaggerItem>
              <Eyebrow>Air conditioning specialists · London</Eyebrow>
            </StaggerItem>
            <TextReveal
              as="h1"
              immediate
              delay={0.3}
              text="Precision cooling for London homes and businesses."
              className="max-w-5xl text-[2.9rem] leading-[1] tracking-[-0.035em] [text-shadow:0_2px_30px_rgb(0_0_0/0.35)] sm:text-7xl lg:text-[5.5rem]"
            />
            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <StaggerItem>
                <p className="max-w-xl text-lg leading-relaxed text-fg/80 sm:text-xl">
                  Installation, servicing, repair and maintenance for residential and commercial
                  properties. Open 24/7 for emergency call-outs.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Button href="/quote" className="sm:min-w-[220px]">
                    Get a free quote
                  </Button>
                  <Button
                    href={waLink("Hello Ad1 Airconditioning Ltd,\nI'd like some help with my air conditioning.\n\nPostcode:\nDetails:")}
                    variant="whatsapp"
                    icon="whatsapp"
                    className="bg-ink/40 backdrop-blur-sm"
                  >
                    WhatsApp us
                  </Button>
                </div>
              </StaggerItem>
            </div>
          </Stagger>
        </Container>
      </section>

      {/* ===== STATS ===== */}
      <section className="pt-16 sm:pt-20">
        <Container>
          <Stagger className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
            {[
              { big: <CountUp to={10} suffix="+" />, label: "Years of experience" },
              { big: "24/7", label: "Emergency call-outs" },
              { big: "All", label: "London areas covered" },
              { big: "2", label: "Sectors: residential & commercial" },
            ].map((s, i) => (
              <StaggerItem
                key={s.label}
                className={`py-8 sm:py-10 ${i % 2 === 1 ? "pl-6 sm:pl-10" : ""} ${
                  i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""
                } ${i % 2 === 1 ? "border-l border-line" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
              >
                <p className="text-4xl tracking-[-0.03em] sm:text-5xl">{s.big}</p>
                <p className="mt-2 text-muted">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== THE AD1 STANDARD ===== */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Why Ad1</Eyebrow>
            <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              The Ad1 standard
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
            {standards.map((s) => (
              <StaggerItem
                key={s.title}
                className="group flex min-h-[300px] flex-col justify-between rounded-xl border border-line bg-panel p-8 transition-[background-color,border-color,transform] duration-500 ease-out-soft hover:-translate-y-1 hover:border-white/15 hover:bg-panel-2"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-lg">{s.title}</h3>
                  <FlakeIcon className="h-6 w-6 shrink-0 text-accent transition-transform duration-700 ease-out-soft group-hover:rotate-90" />
                </div>
                <p className="mt-16 text-xl leading-snug tracking-tight text-fg/90 sm:text-2xl">
                  {s.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ===== SERVICES ===== */}
      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow>Services</Eyebrow>
              <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Our core air conditioning expertise
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                A full range of services, delivered with care, from a single room to a whole building.
              </p>
              <div className="mt-10">
                <ArrowLink href="/services">Explore all services</ArrowLink>
              </div>
            </Reveal>

            <Stagger as="ol" className="border-t border-line">
              {featuredServices.map((s, i) => (
                <StaggerItem as="li" key={s.slug} className="border-b border-line">
                  <Link
                    href={`/services#${s.slug}`}
                    className="group grid gap-4 py-10 sm:grid-cols-[64px_1fr_auto] sm:gap-8"
                  >
                    <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-2xl tracking-tight transition-colors duration-300 group-hover:text-accent-hover sm:text-3xl">
                        {s.title}
                      </span>
                      <span className="mt-3 block max-w-lg leading-relaxed text-muted">{s.short}</span>
                    </span>
                    <span className="hidden text-muted transition-colors group-hover:text-fg sm:block"><SwapArrow className="h-6 w-6" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* ===== RECENT WORK ===== */}
      <Section className="border-t border-line">
        <Container>
          <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Recent work</Eyebrow>
              <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Installed across London
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-muted">
              A selection of recent residential and commercial projects. Tap any photo to view it full size.
            </p>
          </Reveal>
          <RecentWork />
        </Container>
      </Section>

      {/* ===== EMERGENCY ===== */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="grid overflow-hidden rounded-xl border border-line bg-panel lg:grid-cols-2">
            <ImageReveal className="relative min-h-[320px] lg:min-h-[480px]">
              <Parallax className="absolute inset-0" distance={35}>
                <Image
                  src="/work/4.jpg"
                  alt="Outdoor air conditioning units on a London rooftop"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </Parallax>
            </ImageReveal>
            <Reveal className="flex flex-col justify-center p-8 sm:p-14">
              <p className="mb-5 flex items-center gap-3 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available now · 24/7
              </p>
              <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                System down? We&apos;re on call around the clock.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Not cooling, leaking, showing an error code or making noise? Call or WhatsApp us now.
                Residential and commercial, across London.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={site.phoneHref} icon="phone">
                  Call now
                </Button>
                <Button href="/emergency" variant="secondary">
                  Emergency help
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}
