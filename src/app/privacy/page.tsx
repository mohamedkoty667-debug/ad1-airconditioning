import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

// Update this date whenever you change the policy
const LAST_UPDATED = "23 October 2026";

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "Who we are",
    body: (
      <>
        <p>
          This website is run by {site.name}, a company registered in England and Wales (company number {site.companyNumber}).
          Our address is {site.address}. For anything to do with your personal information, contact us at{" "}
          <a href={`mailto:${site.email}`} className="link-draw text-fg">{site.email}</a> or call {site.phoneDisplay}.
        </p>
        <p>We are the &ldquo;controller&rdquo; of the personal information described in this policy.</p>
      </>
    ),
  },
  {
    h: "What information we collect",
    body: (
      <>
        <p>We only collect information you choose to give us, for example when you:</p>
        <ul>
          <li>fill in our quote form (your name, phone number, email address if given, postcode, property type, the service you need and any details you add);</li>
          <li>call, WhatsApp or email us (your phone number or email address and what you tell us, including any photos you send);</li>
          <li>book work with us (the address where the work takes place and details needed to carry it out and invoice you).</li>
        </ul>
        <p>We don&apos;t ask for, and you shouldn&apos;t send us, sensitive information such as health details or payment card numbers through the website.</p>
      </>
    ),
  },
  {
    h: "How we use it and why",
    body: (
      <>
        <ul>
          <li><strong>To reply to your enquiry and give you a quote:</strong> because you asked us to (steps before entering into a contract).</li>
          <li><strong>To carry out and invoice the work you book:</strong> to perform our contract with you.</li>
          <li><strong>To keep records we must keep by law</strong> (for example tax and accounting records, and records of work on refrigerant systems): legal obligation.</li>
          <li><strong>To keep the website secure and stop spam:</strong> our legitimate interests.</li>
        </ul>
        <p>We don&apos;t sell your information, and we don&apos;t send marketing messages unless you&apos;ve asked us to.</p>
      </>
    ),
  },
  {
    h: "Who we share it with",
    body: (
      <>
        <p>We only share your information with trusted services that help us run the business, and only as much as they need:</p>
        <ul>
          <li>our website host and the email service that delivers quote-form messages to us;</li>
          <li>WhatsApp (Meta) and our email provider, when you contact us that way;</li>
          <li>our accountant, and authorities such as HMRC where the law requires it.</li>
        </ul>
        <p>Some of these services may store data outside the UK. Where they do, they use legal safeguards approved under UK data protection law.</p>
      </>
    ),
  },
  {
    h: "How long we keep it",
    body: (
      <p>
        Enquiries that don&apos;t turn into work are deleted within 12 months. If we do work for you, we keep job and invoice
        records for at least 6 years, as required for tax purposes, and longer where equipment records must be kept by law.
      </p>
    ),
  },
  {
    h: "Cookies",
    body: (
      <p>
        This website does not use advertising or tracking cookies. If we ever add analytics or other cookies that aren&apos;t
        strictly necessary, we&apos;ll update this policy and ask for your consent first.
      </p>
    ),
  },
  {
    h: "Your rights",
    body: (
      <>
        <p>
          Under UK data protection law you can ask us for a copy of your information, ask us to correct or delete it,
          object to or restrict how we use it, or ask us to transfer it. Just email{" "}
          <a href={`mailto:${site.email}`} className="link-draw text-fg">{site.email}</a>. We&apos;ll reply within one month.
        </p>
        <p>
          If you&apos;re unhappy with how we&apos;ve handled your information, please tell us first so we can put it right.
          You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
          <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer" className="link-draw text-fg">ico.org.uk</a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={`Privacy · Last updated ${LAST_UPDATED}`}
        title="Privacy policy"
        lead="How we collect, use and look after your personal information when you use this website or contact us."
      />
      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="max-w-3xl divide-y divide-line border-y border-line">
            {sections.map((s) => (
              <div key={s.h} className="grid gap-4 py-10 md:grid-cols-[220px_1fr] md:gap-10">
                <h2 className="text-xl tracking-tight">{s.h}</h2>
                <div className="space-y-4 leading-relaxed text-muted [&_li]:pl-1 [&_strong]:font-normal [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
