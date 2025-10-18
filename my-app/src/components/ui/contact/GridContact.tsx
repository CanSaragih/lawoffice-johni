import contactData from "@/data/contactData";

export default function GridContact() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-0">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 md:p-10 rounded-xl  shadow-[0_0_10px_rgba(0,0,0,0.04),0_0_25px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(0,0,0,0.10)] transition-shadow duration-300"
          >
            {/* Ikon dalam lingkaran abu muda */}
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mb-5 sm:mb-6">
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
            </div>

            {/* Judul */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 mb-2 sm:mb-3 text-center">
              {item.title}
            </h3>

            {/* Deskripsi */}
            <div className="text-center text-gray-600 leading-relaxed text-sm sm:text-[15px]">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
