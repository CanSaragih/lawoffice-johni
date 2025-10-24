import type { Metadata } from "next";
import {
  Hanken_Grotesk,
  WindSong,
  Koh_Santepheap,
  Vidaloka,
  Fjord_One,
} from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/layout/NavbarDemo";
import FloatingWhatsApp from "@/components/FloaringWhatsApp";
import FooterSection from "@/components/ui/Footer/Footer";
import { Toaster } from "react-hot-toast";

const hankenGrotesk = Hanken_Grotesk({
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const windSong = WindSong({
  weight: ["400"],
  variable: "--font-windsong",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Pengacara Jhoni H P Purba, S.H. | Pengacara Profesional Bogor | Konsultasi Hukum Gratis | Layanan Hukum Terpercaya",
  description:
    "Kantor Hukum Jhoni H P Purba, S.H. — Advokat profesional menangani perkara perdata, pidana, perceraian, dan konsultasi hukum di Bogor serta seluruh Indonesia.",
  keywords:
    "pengacara bogor, lawyer bogor, jhoni purba, kantor hukum bogor, advokat perdata pidana, jasa hukum, konsultasi hukum",
  authors: [{ name: "Jhoni H P Purba, S.H.", url: "https://jhonipurba.com" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jhonipurba.com",
  },
  openGraph: {
    title: "Pengacara Jhoni H P Purba, S.H.",
    description:
      "Layanan hukum profesional — perdata, pidana, dan konsultasi hukum terpercaya.",
    url: "https://jhonipurba.com",
    siteName: "Law Office Jhoni H P Purba, S.H.",
    images: [
      {
        url: "https://jhonipurba.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Law Office Jhoni H P Purba, S.H.",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengacara Jhoni H P Purba, S.H.",
    description:
      "Layanan hukum profesional — perdata, pidana, dan konsultasi hukum terpercaya di Bogor dan seluruh Indonesia.",
    images: ["https://jhonipurba.com/og-image.jpg"],
  },
};

const kohSantepheap = Koh_Santepheap({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-koh-santepheap",
});

const fjordOne = Fjord_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fjord-one",
});

const vidaloka = Vidaloka({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vidaloka",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} ${windSong.variable} ${kohSantepheap.variable} ${vidaloka.variable} ${fjordOne.variable} antialiased`}
      >
        <NavbarDemo />
        {children}

        <FloatingWhatsApp />
        <FooterSection />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{ duration: 6000, removeDelay: 1000 }}
        />
      </body>
    </html>
  );
}
