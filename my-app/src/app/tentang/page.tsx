import PageHeader from "@/components/PageHeader";
import About from "@/components/section/About";
import BenefitProjects from "@/components/ui/home/BenefitProjects";
import NumberTickerSection from "@/components/ui/home/NumberTicker";

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
