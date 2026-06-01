import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rishikeshprewedding.com"),
  title: "Pre Wedding Shoot in Rishikesh with Stay | Cinematic Package",
  description: "Book your pre-wedding shoot in Rishikesh & Dhanaulti. Includes 2-day shoot, hotel stay, and cinematic video. WhatsApp +91 92869 49730",
  keywords: ["pre wedding shoot rishikesh", "rishikesh pre wedding package", "pre wedding shoot with stay", "pre wedding dhanaulti", "cinematic pre wedding", "pre wedding photography rishikesh"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pre Wedding Shoot in Rishikesh with Hotel Stay",
    description: "2 Days Shoot + Hotel + Cinematic Video. Book now at +91 92869 49730",
    type: "website",
    locale: "en_IN",
    siteName: "Rishikesh Pre Wedding",
    url: "/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pre Wedding Shoot in Rishikesh with Luxury Stay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre Wedding Shoot in Rishikesh with Hotel Stay",
    description: "2 Days Shoot + Hotel + Cinematic Video",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rishikesh Pre Wedding Photography",
  description: "Professional pre-wedding photography and stay packages in Rishikesh and Dhanaulti, Uttarakhand.",
  url: "https://rishikeshprewedding.com",
  telephone: "+919286949730",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rishikesh",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0869,
    longitude: 78.2676,
  },
  image: "https://rishikeshprewedding.com/images/og-image.jpg",
  priceRange: "₹₹",
  openingHours: "Mo-Su 09:00-20:00",
  sameAs: [
    "https://www.instagram.com/rishikeshprewedding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
