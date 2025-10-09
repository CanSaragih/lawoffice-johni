import Home from "@/components/section/Home";
import NumberTickerSection from "@/components/ui/home/NumberTicker";
import Services from "@/components/ui/home/Services";
import WelcomeMessage from "@/components/ui/home/WelcomeMessage";

export default function Page() {
  return (
    <>
      <Home />
      <Services />
      <WelcomeMessage />
      <NumberTickerSection />
      <div className="flex align-center justify-center py-40">
        <h1>TESTTTT</h1>
      </div>
    </>
  );
}
