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
        <motion.div variants={fadeUp} className="text-justify">
          <h2 className="font-black text-2xl sm:text-2xl md:text-3xl mb-6 text-zinc-700 leading-snug">
            Tentang Kami
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-base md:text-lg">
            Jhoni H. P. Purba, S.H. adalah advokat berpengalaman yang
            berdedikasi dalam memberikan layanan hukum yang profesional, jujur,
            dan berintegritas tinggi. Dengan pengalaman panjang dalam dunia
            hukum, beliau memimpin kantor hukum yang berfokus pada penyelesaian
            perkara perdata, pidana, tata usaha negara, dan berbagai bidang
            hukum lainnya secara efektif dan beretika.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-base md:text-lg">
            Kami melayani berbagai kebutuhan hukum - mulai dari perkara
            perceraian dan warisan, sengketa tanah, hingga tindak pidana umum
            maupun khusus seperti korupsi dan pencucian uang. Setiap kasus
            ditangani dengan analisis mendalam dan strategi hukum yang
            disesuaikan dengan kondisi unik masing-masing klien.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-base md:text-lg">
            Selain pendampingan litigasi, kami juga menyediakan layanan
            konsultasi hukum dan pencegahan masalah hukum melalui legal
            drafting, review kontrak, serta nasihat hukum korporasi. Kami
            berkomitmen untuk memberikan solusi hukum yang tidak hanya
            menyelesaikan sengketa, tetapi juga melindungi kepentingan klien
            dalam jangka panjang.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-base md:text-lg">
            Dengan mengedepankan profesionalisme, transparansi, dan keadilan,
            Jhoni H. P. Purba, S.H. percaya bahwa setiap individu dan badan
            hukum berhak atas perlindungan hukum yang bermartabat. Misi kami
            adalah menjadi mitra hukum terpercaya yang membantu klien menghadapi
            tantangan hukum dengan tenang, jelas, dan pasti.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
