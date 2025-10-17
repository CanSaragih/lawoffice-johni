import { Mail, MapPin, Phone } from "lucide-react";

const contactData = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    desc: "Jl. Haur Jaya II No.2, RT.05/RW.07, Kb. Pedes, Kec. Tanah Sereal, Kota Bogor, Jawa Barat",
  },
  {
    icon: Mail,
    title: "Email Kami",
    desc: (
      <>
        <p>info@lawofficejohni.com</p>
        <p>contact@lawofficejohni.com</p>
      </>
    ),
  },
  {
    icon: Phone,
    title: "Hubungi Kami",
    desc: (
      <>
        <p>+62 812-3456-7890</p>
        <p>+62 812-9876-5432</p>
      </>
    ),
  },
];

export default function GridContact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-0">
      {contactData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
  );
}
