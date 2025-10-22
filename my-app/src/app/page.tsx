import Home from "@/components/section/Home";
import BenefitProjects from "@/components/ui/home/BenefitProjects";
import NumberTickerSection from "@/components/ui/home/NumberTicker";
import Services from "@/components/ui/home/Services";
import StrategySection from "@/components/ui/home/StrategySection";
import WelcomeMessage from "@/components/ui/home/WelcomeMessage";

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
