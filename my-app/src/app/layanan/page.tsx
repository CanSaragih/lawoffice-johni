import PageHeader from "@/components/PageHeader";
import LayananKami from "@/components/ui/about/LayananKami";
import StrategySection from "@/components/ui/home/StrategySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Kami | Kantor Hukum Jhoni H P Purba, S.H. | Pengacara Bogor",
  description:
    "Layanan Kami - Kantor Hukum Jhoni H P Purba, S.H. menyediakan layanan hukum profesional di Bogor, termasuk perdata, pidana, perceraian, dan konsultasi hukum terpercaya.",
  keywords:
    "pengacara bogor, lawyer bogor, jhoni purba, kantor hukum bogor, advokat perdata pidana, jasa hukum, konsultasi hukum",
};

export default function LayananPage() {
  return (
    <>
      <div className="mt-17 md:mt-22">
        <div className="mb-10 md:mb-20">
          <PageHeader title="Layanan Kami" bgImage="/img/header.jpg" />
        </div>
        <div className="mb-10 md:mb-20">
          <LayananKami />
        </div>
        <div className="mb-10 md:mb-20">
          <StrategySection />
        </div>
      </div>
    </>
  );
}
