"use client";

import layanan from "@/data/layananData";
import handleWhatsAppClick from "../wa/openWhatsApp";
import { motion, easeInOut, easeOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

const cardZoom = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function LayananKami() {
  return (
    <motion.section
      className="py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:grid lg:grid-cols-[30%_1fr] lg:gap-12 items-center">
        {/* KIRI */}
        <motion.div
          className="mb-8 lg:mb-0 w-full"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-36 h-36 sm:w-44 sm:h-44 bg-red-100 rounded-full -z-10"></div>
            <p className="text-red-700 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">
              Layanan Kami
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Fjord_One'] text-zinc-700 leading-snug mb-4 sm:mb-6">
              Keunggulan, layanan hukum
              <br />
              yang kami sediakan untuk Anda.
            </h2>
          </div>
          <p className="text-zinc-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            Kami berkomitmen memberikan solusi hukum yang komprehensif, tepat
            sasaran, dan berintegritas tinggi bagi setiap klien kami.
          </p>
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 transition flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            onClick={handleWhatsAppClick}
          >
            Konsultasi Layanan →
          </button>
        </motion.div>

        {/* KANAN */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {layanan.map((item) => (
            <motion.div
              key={item.id}
              className="relative bg-gray-50 px-6 py-10 sm:px-8 sm:py-12 border border-gray-100
                 hover:text-white hover:rounded-tr-3xl hover:rounded-tl-3xl hover:rounded-br-3xl
                 transition-all duration-300 group cursor-pointer overflow-hidden"
              variants={cardZoom}
            >
              {/* 🔹 Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"
                style={{ backgroundImage: "url('/img/image1.png')" }}
              ></div>

              {/* 🔹 Overlay Merah Transparan */}
              <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-80 transition-all duration-500 z-10"></div>

              {/* Nomor Latar */}
              <div
                className="absolute top-4 right-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent select-none transition-all duration-300 z-[15]"
                style={{
                  WebkitTextStroke: "1px #e5e7eb",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.webkitTextStroke =
                    "1px #fecaca")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.webkitTextStroke =
                    "1px #e5e7eb")
                }
              >
                {item.id}
              </div>

              {/* 🔹 Konten Utama (ikon, teks, deskripsi) */}
              <div className="relative z-20">
                <div className="mb-3 text-red-700 group-hover:text-white text-2xl sm:text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-['Koh_Santepheap'] text-gray-900 group-hover:text-white mb-2 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-500 group-hover:text-white/70 text-sm sm:text-base leading-relaxed transition-all duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
