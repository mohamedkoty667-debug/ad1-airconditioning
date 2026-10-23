import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/motion";
import { site, areas } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Air Conditioning Services in London`,
    template: `%s | ${site.name}`,
  },
  description:
    "Air conditioning installation, servicing, repair and maintenance across London. Residential and commercial. Open 24/7 for emergency call-outs.",
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${site.name} | Air Conditioning Services in London`,
    description:
      "Installation, servicing, repair and maintenance across London. Open 24/7 for emergencies.",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* Business details in the format Google reads (shows in search results and Maps) */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#business`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/house/ad1-icon.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 2, 119 Courthill Road",
    addressLocality: "London",
    postalCode: "SE13 6DR",
    addressCountry: "GB",
  },
  areaServed: [{ "@type": "City", name: "London" }, ...areas.flatMap((r) => r.boroughs).map((b) => ({ "@type": "AdministrativeArea", name: b }))],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  description: "Air conditioning installation, servicing, repair and maintenance across London. Residential and commercial. Open 24/7 for emergency call-outs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1015",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-ink text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCallBar />
        </MotionProvider>
      </body>
    </html>
  );
}
