import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jícara | Taquería Oaxaqueña — Orlando, FL",
  description:
    "Jícara — hand-pressed tortillas, wood-fired meats, and mezcal rooted in Oaxacan tradition. Now open in Orlando, FL.",
  openGraph: {
    title: "Jícara Taquería",
    description:
      "Hand-pressed tortillas, wood-fired meats, and mezcal rooted in Oaxacan tradition.",
    images: [
      "https://pub-a138722f99774b24bde1c2c94a389145.r2.dev/hero.jpeg",
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Jícara Taquería",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4280 Alafaya Trail, Suite 120",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32826",
  },
  telephone: "+1-407-555-0182",
  url: "https://jicaraorlando.com",
  servesCuisine: "Mexican, Oaxacan",
  priceRange: "$$",
  openingHours: ["Tu-Th 11:30-22:00", "Fr-Sa 11:30-24:00", "Su 10:00-21:00"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
