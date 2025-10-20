"use client";

import { motion, easeInOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export default function About() {
  return (
    <motion.section
      className="py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp}>
          <h2 className="font-black text-2xl sm:text-2xl md:text-3xl mb-4 text-zinc-700 leading-snug">
            Tentang Kami
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-base md:text-lg">
            Jhoni Purba, S.H. adalah advokat berpengalaman yang telah
            berkecimpung dalam dunia hukum sejak awal kariernya. Berdiri dengan
            komitmen kuat untuk memberikan layanan hukum profesional dan
            terpercaya, ia mendirikan & memimpin kantor hukum yang fokus pada
            perlindungan hak klien, penyelesaian sengketa, serta advokasi yang
            taat hukum dan etika.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-base md:text-lg">
            Selama bertahun-tahun, Jhoni Purba telah menangani berbagai perkara
            di bidang hukum perdata, pidana, perusahaan, hak kekayaan
            intelektual, serta konsultasi hukum untuk usaha dan individu. Dengan
            pendekatan personal dan teliti, beliau selalu berusaha memahami
            situasi unik setiap klien agar solusi yang diberikan efektif dan
            sesuai dengan peraturan yang berlaku.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4  text-base sm:text-base md:text-lg">
            Sebagai bagian dari pelayanan total, Jhoni Purba juga memberikan
            nasihat hukum preventif - termasuk legal drafting, review kontrak,
            dan due diligence - untuk meminimalkan risiko hukum sebelum suatu
            usaha atau perjanjian dijalankan. Etos kerja beliau menekankan
            integritas, kejelasan komunikasi, dan keamanan hukum bagi semua
            pihak yang dilayaninya.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-base md:text-lg">
            Misi beliau adalah menjadi pengacara yang tidak hanya menentukan
            kemenangan dalam persidangan, tetapi juga mitra kepercayaan bagi
            klien, dengan menjaga nilai keadilan, transparansi, dan
            profesionalisme yang tinggi. Jhoni Purba S.H. meyakini bahwa setiap
            orang berhak atas pembelaan yang adil dan layanan hukum yang tidak
            hanya legal secara formal, tetapi juga bermartabat dan manusiawi.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
