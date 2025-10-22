const handleWhatsAppClick = () => {
  const phoneNumber = "628131956256";
  const message = "Hallo Pak Jhoni, saya ingin konsultasi hukum.";

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};

export default handleWhatsAppClick;
