import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ad1 Airconditioning Ltd",
  description:
    "installation, service, repair and maintenance — residential and commercial. Open 24/7 for emergency call-outs.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // لو الهيدر عندك أطول/أقصر، عدّل الرقم ده
  const HEADER_HEIGHT = 92;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#f6f8fb",
          color: "#0b1220",
        }}
      >
        {/* هيدر يختفي مع النزول ويظهر مع الطلوع */}
        <StickyHeader height={HEADER_HEIGHT} />

        {/* عشان المحتوى يبدأ تحت الهيدر */}
        <div style={{ paddingTop: HEADER_HEIGHT }}>
          <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 14px" }}>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
