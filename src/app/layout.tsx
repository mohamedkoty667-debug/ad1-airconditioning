import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ad1 Airconditioning Ltd - London",
  description:
    "Air conditioning installation, service, repair and maintenance across London. Open 24/7 for emergency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
