export default function EmbeddingMaps() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.81392813293!2d106.792944!3d-6.594835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f7b2b91a2b%3A0x123456789abcdef!2sJl.%20Haur%20Jaya%20II%20No.2%2C%20Kb.%20Pedes%2C%20Kota%20Bogor!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}
