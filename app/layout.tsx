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
  title: "Pre Wedding Shoot in Rishikesh with Stay | Cinematic Package",
  description: "Book your pre-wedding shoot in Rishikesh & Dhanaulti. Includes 2-day shoot, hotel stay, and cinematic video. WhatsApp +91XXXXXXXXXX",
  keywords: ["pre wedding shoot rishikesh", "rishikesh pre wedding package", "pre wedding shoot with stay", "pre wedding dhanaulti", "cinematic pre wedding", "pre wedding photography rishikesh"],
  openGraph: {
    title: "Pre Wedding Shoot in Rishikesh with Hotel Stay",
    description: "2 Days Shoot + Hotel + Cinematic Video",
    type: "website",
    locale: "en_IN",
    siteName: "Rishikesh Pre Wedding",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
