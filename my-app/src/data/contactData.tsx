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

export default contactData;
