/* Slowly scrolling list of London boroughs, linking to the Areas page */
import Link from "next/link";
import { areas } from "@/lib/site";
import { ArrowLink, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion";

export default function AreasStrip() {
  const names = areas.flatMap((r) => r.boroughs);
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {names.map((n) => (
        <span key={n} className="flex items-center gap-10 whitespace-nowrap text-3xl tracking-tight text-fg/60 sm:text-4xl">
          {n}
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ))}
    </div>
  );
  return (
    <section className="overflow-hidden border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Areas we cover</Eyebrow>
            <h2 className="max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Every London borough, day or night
            </h2>
          </div>
          <ArrowLink href="/areas">See all areas</ArrowLink>
        </Reveal>
      </Container>
      <Link
        href="/areas"
        aria-label="See all areas we cover"
        className="group relative flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row}
          {row}
        </div>
      </Link>
    </section>
  );
}
