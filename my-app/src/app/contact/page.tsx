import PageHeader from "@/components/PageHeader";
import ContactPage from "@/components/section/Contact";
import FormContact from "@/components/ui/contact/FormContact";

export default function Contact() {
  return (
    <div className="mt-17 md:mt-22">
      <PageHeader title="Contact Us" bgImage="/img/header.jpg" />
      <div>
        <ContactPage />
      </div>
      <div className="mb-10 md:mb-15">
        <FormContact />
      </div>
    </div>
  );
}
