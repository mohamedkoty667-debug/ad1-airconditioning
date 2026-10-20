import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
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
    images: ["/work/11.jpg"],
    locale: "en_GB",
    type: "website",
  },
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
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
