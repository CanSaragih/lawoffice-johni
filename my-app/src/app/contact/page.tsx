import PageHeader from "@/components/PageHeader";
import ContactPage from "@/components/section/Contact";

export default function Contact() {
  return (
    <div className="mt-17 md:mt-22">
      <PageHeader title="Contact Us" bgImage="/img/header.jpg" />
      <div className="mb-10 md:mb-20">
        <ContactPage />
      </div>
    </div>
  );
}
