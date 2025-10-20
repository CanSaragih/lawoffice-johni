"use client";

import benefitData from "@/data/benefitData";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export default function BenefitProjects() {
  return (
    <motion.section
      className="bg-white text-zinc-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Judul Section */}
        <motion.div
          className="mb-5 md:mb-12"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-2xl sm:text-2xl md:text-4xl text-center md:text-left leading-snug font-bold text-zinc-700 mt-3">
            Bersama kami
          </h1>
        </motion.div>

        {/* Grid Benefit */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
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
          {benefitData.map((benefit, index) => (
            <motion.div
              key={index}
              className="
                relative flex flex-col bg-white shadow-lg hover:shadow-xl 
                transition-shadow rounded-lg p-8 overflof-hidden
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:h-[3px] before:bg-red-700 before:w-0 
                before:transition-[width] before:ease-out before:duration-500 hover:before:w-full"
              variants={fadeUp}
            >
              <div className="mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={50}
                  height={50}
                />
              </div>

              <h2 className="text-2xl text-zinc-700 hover:text-red-800 transition-colors duration-300 mb-3 font-['Fjord_One']">
                {benefit.title}
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Penutup / deskripsi tambahan */}
        <motion.div
          className="mt-14 text-justify mx-auto"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-base leading-relaxed">
            Kami percaya bahwa setiap kasus hukum memiliki cerita dan dinamika
            tersendiri, yang memerlukan dedikasi, strategi, serta empati
            mendalam untuk menemukan jalan terbaik menuju penyelesaian yang
            adil. Dengan pengalaman yang luas dan pendekatan yang berorientasi
            pada solusi, kami hadir bukan sekadar sebagai penasihat hukum,
            tetapi sebagai mitra yang memahami kebutuhan dan kepentingan klien
            secara menyeluruh.
            <br />
            Setiap langkah yang kami ambil didasari pada integritas,
            profesionalisme, dan tanggung jawab yang tinggi. Kami memastikan
            bahwa setiap klien mendapatkan perhatian pribadi, strategi hukum
            yang tepat, serta penjelasan yang transparan agar setiap keputusan
            dapat diambil dengan keyakinan penuh.
            <br />
            <br />
            Dengan komitmen terhadap keadilan dan kepuasan klien, kami terus
            berupaya menjadi mitra hukum yang dapat Anda andalkan dalam setiap
            situasi—baik untuk penyelesaian sengketa, konsultasi bisnis, maupun
            perlindungan hak pribadi. Bersama kami, Anda tidak hanya mendapatkan
            bantuan hukum, tetapi juga ketenangan, kepercayaan, dan solusi nyata
            untuk setiap permasalahan hukum yang Anda hadapi.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
