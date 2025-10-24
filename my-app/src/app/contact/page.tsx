import PageHeader from "@/components/PageHeader";
import EmbeddingMaps from "@/components/ui/contact/EmbeddingMaps";
import FormContact from "@/components/ui/contact/FormContact";
import GridContact from "@/components/ui/contact/GridContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kantor Hukum Jhoni H P Purba, S.H. | Pengacara Bogor",
  description:
    "Contact Us - Kantor Hukum Jhoni H P Purba, S.H. menyediakan layanan hukum profesional di Bogor, termasuk perdata, pidana, perceraian, dan konsultasi hukum terpercaya.",
  keywords:
    "pengacara bogor, lawyer bogor, jhoni purba, kantor hukum bogor, advokat perdata pidana, jasa hukum, konsultasi hukum",
};

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
