import {
  Scale,
  Briefcase,
  FileText,
  Gavel,
  HeartHandshake,
  Users,
  Landmark,
  MapPin,
  Building2,
  FileSignature,
  ScrollText,
  Lightbulb,
  ShieldCheck,
  HandCoins,
} from "lucide-react";

export const layanan = [
  {
    id: "01",
    icon: <Scale className="w-10 h-10 transition-all duration-300" />,
    title: "Perkara Perdata",
    desc: "Sengketa hak, perjanjian, dan ganti rugi.",
  },
  {
    id: "02",
    icon: <ShieldCheck className="w-10 h-10 transition-all duration-300" />,
    title: "Perkara Pidana",
    desc: "Pendampingan hukum kasus pidana umum.",
  },
  {
    id: "03",
    icon: <FileText className="w-10 h-10 transition-all duration-300" />,
    title: "Hukum Pidana",
    desc: "Konsultasi dan pembelaan perkara pidana.",
  },
  {
    id: "04",
    icon: <Gavel className="w-10 h-10 transition-all duration-300" />,
    title: "Pidana Khusus",
    desc: "Kasus korupsi, narkotika, dan TPPU.",
  },
  {
    id: "05",
    icon: <HeartHandshake className="w-10 h-10 transition-all duration-300" />,
    title: "Perkawinan & Cerai",
    desc: "Perceraian, hak asuh, dan harta bersama.",
  },
  {
    id: "06",
    icon: <Users className="w-10 h-10 transition-all duration-300" />,
    title: "Keluarga & Warisan",
    desc: "Pembagian warisan dan sengketa keluarga.",
  },
  {
    id: "07",
    icon: <Landmark className="w-10 h-10 transition-all duration-300" />,
    title: "Tata Usaha Negara",
    desc: "Sengketa keputusan pejabat negara.",
  },
  {
    id: "08",
    icon: <MapPin className="w-10 h-10 transition-all duration-300" />,
    title: "Sengketa Tanah",
    desc: "Sertifikat, batas, dan kepemilikan tanah.",
  },
  {
    id: "09",
    icon: <Briefcase className="w-10 h-10 transition-all duration-300" />,
    title: "Ketenagakerjaan",
    desc: "Sengketa pekerja dan perusahaan.",
  },
  {
    id: "10",
    icon: <FileSignature className="w-10 h-10 transition-all duration-300" />,
    title: "Hukum Perjanjian",
    desc: "Penyusunan dan peninjauan kontrak.",
  },
  {
    id: "11",
    icon: <ScrollText className="w-10 h-10 transition-all duration-300" />,
    title: "Kepailitan",
    desc: "PKPU dan restrukturisasi utang.",
  },
  {
    id: "12",
    icon: <Lightbulb className="w-10 h-10 transition-all duration-300" />,
    title: "Hak Kekayaan Intelektual",
    desc: "Merek, paten, dan hak cipta.",
  },
  {
    id: "13",
    icon: <HandCoins className="w-10 h-10 transition-all duration-300" />,
    title: "Korupsi & TPPU",
    desc: "Pendampingan kasus korupsi dan TPPU.",
  },
  {
    id: "14",
    icon: <Building2 className="w-10 h-10 transition-all duration-300" />,
    title: "Corporate Lawyer",
    desc: "Hukum bisnis dan perusahaan.",
  },
];

export default layanan;
