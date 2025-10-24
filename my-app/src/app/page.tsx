import Home from "@/components/section/Home";
import BenefitProjects from "@/components/ui/home/BenefitProjects";
import NumberTickerSection from "@/components/ui/home/NumberTicker";
import Services from "@/components/ui/home/Services";
import StrategySection from "@/components/ui/home/StrategySection";
import WelcomeMessage from "@/components/ui/home/WelcomeMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kantor Hukum Jhoni H P Purba, S.H. | Pengacara Bogor",
  description:
    "Kantor Hukum Jhoni H P Purba, S.H. — Pengacara profesional di Bogor yang menyediakan layanan hukum perdata, pidana, perceraian, dan konsultasi hukum terpercaya.",
  keywords:
    "pengacara bogor, lawyer bogor, jhoni purba, kantor hukum bogor, advokat perdata pidana, jasa hukum, konsultasi hukum",
};

export default function Page() {
  return (
    <>
      <div>
        <Home />
      </div>
      <div className="mb-30">
        <Services />
      </div>
      <div className="mb-30">
        <WelcomeMessage />
      </div>
      <div className="mb-30">
        <NumberTickerSection />
      </div>
      <div className="mb-30">
        <StrategySection />
      </div>
      <div className="mb-15">
        <BenefitProjects />
      </div>
    </>
  );
}
