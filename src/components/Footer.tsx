import Link from "next/link";
import { nav, services, site, waLink } from "@/lib/site";
import { Container, Wordmark } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <Wordmark size="lg" />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">{site.tagline}</p>
            <div className="mt-8 space-y-1.5 text-fg">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="link-draw-clean">
                  {site.phoneDisplay}
                </a>
                <span className="px-2 text-muted">{"//"}</span>
                <a href={`mailto:${site.email}`} className="link-draw-clean break-all">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm text-muted">Pages</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw-clean text-fg/90 hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw-clean text-fg/90 hover:text-fg"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm text-muted">Services</p>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="link-draw-clean text-fg/90 hover:text-fg"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Company No. {site.companyNumber}
          </p>
          <p>Open 24/7 · Serving all of London</p>
        </div>
      </Container>
    </footer>
  );
}
