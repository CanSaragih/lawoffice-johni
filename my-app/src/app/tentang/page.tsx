import PageHeader from "@/components/PageHeader";
import About from "@/components/section/About";
import BenefitProjects from "@/components/ui/home/BenefitProjects";
import NumberTickerSection from "@/components/ui/home/NumberTicker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Kantor Hukum Jhoni H P Purba, S.H. | Pengacara Bogor",
  description:
    "Tentang Kami - Profil Kantor Hukum Jhoni H P Purba, S.H. — Pengacara profesional di Bogor yang menyediakan layanan hukum perdata, pidana, perceraian, dan konsultasi hukum terpercaya.",
  keywords:
    "pengacara bogor, lawyer bogor, jhoni purba, kantor hukum bogor, advokat perdata pidana, jasa hukum, konsultasi hukum",
};

export default function TentangPage() {
  return (
    <>
      <div className="mt-17 md:mt-22">
        <PageHeader title="Tentang Kami" bgImage="/img/header.jpg" />

        <div className="mb-10 md:mb-20">
          <About />
        </div>

        <div className="mb-10 md:mb-20">
          <BenefitProjects />
        </div>

        <div>
          <NumberTickerSection />
        </div>
      </div>
    </>
  );
}
