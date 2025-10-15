import PageHeader from "@/components/PageHeader";
import LayananKami from "@/components/ui/about/LayananKami";

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
      </div>
    </>
  );
}
