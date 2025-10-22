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
  title: "Jhoni Purba - Pengacara",
  description: "Professional Pengacara Jhoni Purba",
  icons: {
    icon: "/iconn.png",
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
