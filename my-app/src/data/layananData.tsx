import {
  Briefcase,
  Scale,
  FileText,
  Users,
  Gavel,
  BookOpen,
} from "lucide-react";

const layanan = [
  {
    id: "01",
    icon: <Scale className="w-10 h-10 transition-all duration-300" />,
    title: "Konsultasi Hukum",
    desc: "Memberikan nasihat hukum profesional untuk individu maupun perusahaan sesuai dengan peraturan yang berlaku.",
  },
  {
    id: "02",
    icon: <Briefcase className="w-10 h-10 transition-all duration-300" />,
    title: "Pendampingan Bisnis",
    desc: "Mendampingi klien dalam pembuatan perjanjian, kontrak kerja sama, hingga penyusunan kebijakan hukum perusahaan.",
  },
  {
    id: "03",
    icon: <FileText className="w-10 h-10 transition-all duration-300" />,
    title: "Penyelesaian Sengketa",
    desc: "Mewakili dan mendampingi klien dalam proses litigasi maupun non-litigasi untuk mencapai hasil terbaik.",
  },
  {
    id: "04",
    icon: <Gavel className="w-10 h-10 transition-all duration-300" />,
    title: "Hukum Pidana & Perdata",
    desc: "Menangani berbagai kasus hukum pidana, perdata, dan administrasi dengan strategi yang terukur dan berintegritas.",
  },
  {
    id: "05",
    icon: <Users className="w-10 h-10 transition-all duration-300" />,
    title: "Hukum Keluarga",
    desc: "Menangani perkara perceraian, hak asuh anak, dan pembagian harta bersama dengan pendekatan profesional dan empati.",
  },
  {
    id: "06",
    icon: <BookOpen className="w-10 h-10 transition-all duration-300" />,
    title: "Legal Audit & Due Diligence",
    desc: "Melakukan pemeriksaan hukum menyeluruh terhadap dokumen dan aktivitas bisnis untuk memastikan kepatuhan hukum.",
  },
];

export default layanan;
