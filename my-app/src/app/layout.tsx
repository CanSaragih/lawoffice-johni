import type { Metadata } from "next";
import {
  Hanken_Grotesk,
  Playfair_Display,
  WindSong,
  Koh_Santepheap,
} from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/layout/NavbarDemo";
import FloatingWhatsApp from "@/components/FloaringWhatsApp";
import FooterSection from "@/components/ui/Footer/Footer";

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
  title: "Jhoni Purba - Pengacara",
  description: "Professional Pengacara Jhoni Purba",
};

const kohSantepheap = Koh_Santepheap({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-koh-santepheap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} ${windSong.variable} ${kohSantepheap.variable} antialiased`}
      >
        <NavbarDemo />
        {children}

        <FloatingWhatsApp />
        <FooterSection />
      </body>
    </html>
  );
}
