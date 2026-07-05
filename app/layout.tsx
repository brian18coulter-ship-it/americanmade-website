import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "American Made Construction",
    template: "%s | American Made Construction",
  },

  description:
    "American Made Construction designs and builds custom decks, patio covers, home additions, remodeling, and outdoor living spaces for homeowners in Farmington, Festus, St. Francois County, and surrounding Southeast Missouri communities.",

  keywords: [
    "Deck Builder Farmington MO",
    "Deck Builder Festus MO",
    "Outdoor Living",
    "Patio Covers",
    "Pergolas",
    "Home Additions",
    "Remodeling",
    "Construction Company",
    "Farmington Missouri",
    "Festus Missouri",
    "St. Francois County",
    "Jefferson County",
    "Custom Decks",
    "American Made Construction",
  ],

  authors: [{ name: "American Made Construction" }],

  creator: "American Made Construction",

  metadataBase: new URL("https://americanmade.works"),

  openGraph: {
    title: "American Made Construction",
    description:
      "Custom decks, patio covers, home additions, remodeling, and outdoor living spaces serving Farmington, Festus, and surrounding Southeast Missouri communities.",

    url: "https://americanmade.works",

    siteName: "American Made Construction",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "American Made Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "American Made Construction",
    description:
      "Custom decks, patio covers, home additions, remodeling, and outdoor living spaces.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}