import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "FISPOGROUP | Partner pro váš provoz", template: "%s | FISPOGROUP" },
  description: "Profesionální úklidové technologie, celorepublikový servis strojů a odborné stavební práce.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "cs_CZ", siteName: "FISPOGROUP", title: "FISPOGROUP | Tři divize, jeden silný partner", description: "Technologie, servis a stavební práce pro spolehlivý provoz.", url: siteUrl },
  twitter: { card: "summary_large_image", title: "FISPOGROUP | Tři divize, jeden silný partner", description: "Technologie, servis a stavební práce pro spolehlivý provoz." }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0d2028" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "FISPOGROUP s.r.o.", url: siteUrl, email: "info@fispo.cz", telephone: "+420606657161", address: { "@type": "PostalAddress", streetAddress: "Na Drahách 22", postalCode: "252 41", addressLocality: "Zlatníky", addressCountry: "CZ" } };
  return <html lang="cs"><body className={manrope.variable}><Header /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
