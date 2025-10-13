import PageHeader from "@/components/PageHeader";
import LayananKami from "@/components/ui/about/LayananKami";
import NumberTickerSection from "@/components/ui/home/NumberTicker";

export default function TentangPage() {
  return (
    <>
      <div className="mt-17 md:mt-22">
        <PageHeader title="Tentang Kami" bgImage="/img/header.jpg" />

        <div className="mb-10 md:mb-20">
          <LayananKami />
        </div>
        <div>
          <NumberTickerSection />
        </div>
      </div>
    </>
  );
}
