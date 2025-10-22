import PageHeader from "@/components/PageHeader";
import EmbeddingMaps from "@/components/ui/contact/EmbeddingMaps";
import FormContact from "@/components/ui/contact/FormContact";
import GridContact from "@/components/ui/contact/GridContact";

export default function Contact() {
  return (
    <div className="mt-17 md:mt-22">
      <PageHeader title="Contact Us" bgImage="/img/header.jpg" />
      <div className="mb-10 md:mb-15 mt-10 md:mt-15">
        <GridContact />
      </div>
      <div className="mb-5 md:mb-10">
        <FormContact />
      </div>
      <div className="mb-10 md:mb-15">
        <EmbeddingMaps />
      </div>
    </div>
  );
}
