/* Customer reviews. Hidden until real reviews are added in src/lib/site.ts */
import { reviewLink, reviews } from "@/lib/site";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-1 text-[#f5b301]" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < n ? "" : "opacity-25"}`} fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <Section className="border-t border-line">
      <Container>
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">What our customers say</h2>
          </div>
          {reviewLink && (
            <Button href={reviewLink} variant="secondary">
              Read all reviews
            </Button>
          )}
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <StaggerItem key={r.name + r.text.slice(0, 20)} className="flex flex-col justify-between rounded-xl border border-line bg-panel p-8">
              <div>
                <Stars n={r.rating} />
                <p className="mt-6 text-lg leading-relaxed text-fg/90">&ldquo;{r.text}&rdquo;</p>
              </div>
              <p className="mt-8 text-muted">
                <span className="text-fg">{r.name}</span>
                {r.area && <> · {r.area}</>}
                {r.source && <> · via {r.source}</>}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
