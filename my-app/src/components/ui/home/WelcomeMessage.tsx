"use client";

import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

export default function WelcomeMessage() {
  return (
    <motion.section
      className="bg-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start leading-relaxed">
        {/* Kolom kiri */}
        <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
          <div className="flex items-start">
            <span className="text-7xl font-serif font-bold text-[#1a2540] mr-3">
              S
            </span>
            <p className="text-lg">
              selamat datang semuanya, di mana kami berdedikasi untuk memberikan
              representasi hukum yang luar biasa dengan integritas, ketelitian,
              dan kepercayaan. Firma kami berspesialisasi dalam hukum perdata,
              korporasi, dan pidana - memberikan panduan ahli untuk individu
              maupun perusahaan.
            </p>
          </div>

          <p className="mt-6 text-lg">
            kami percaya dalam membela hak-hak klien dan memperjuangkan hasil
            terbaik. Misi kami adalah memberikan nasihat hukum strategis,
            komunikasi yang jelas, dan dedikasi tanpa henti di setiap langkah
            proses hukum.
          </p>

          <p className="mt-8 font-semibold text-xl text-[#1a2540] font-['Windsong']">
            Jhoni Purba
          </p>
        </motion.div>

        {/* Kolom kanan */}
        <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
          <div className="space-y-6 text-justify">
            <p className="text-lg">
              Percayakan kami sebagai mitra hukum Anda - berkomitmen untuk
              melindungi kepentingan Anda dan memastikan penyelesaian yang adil
              serta efisien. Ketentraman pikiran dan keberhasilan Anda adalah
              prioritas utama kami.
            </p>

            <p className="mt-6 text-lg">
              Kami menangani setiap kasus dengan perhatian mendetail dan
              pemahaman mendalam terhadap hukum. Komitmen kami terhadap
              keunggulan memastikan Anda mendapatkan representasi dengan
              kualitas terbaik.
            </p>

            <p className="mt-6 text-lg">
              Keyakinan kami adalah bahwa keadilan harus dapat diakses dan dapat
              dipercaya oleh semua orang. kesuksesan dan keamanan Anda akan
              selalu menjadi prioritas utama kami.
            </p>

            <motion.div
              className="flex items-center gap-4 mt-10"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="/img/icon.png"
                alt="CEO"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-[#1a2540] text-lg">
                  Jhoni H. P. Purba, S.H.
                </p>
                <p className="text-gray-500 text-sm">
                  Founder & Managing Partner
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
