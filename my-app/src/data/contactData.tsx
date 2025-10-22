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
        <p>pengacara.jhonipurba@gmail.com</p>
      </>
    ),
  },
  {
    icon: Phone,
    title: "Hubungi Kami",
    desc: (
      <>
        <p>+62 813-1956-256</p>
      </>
    ),
  },
];

export default contactData;
