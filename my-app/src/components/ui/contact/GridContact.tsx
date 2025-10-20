"use client";

import contactData from "@/data/contactData";
import { easeOut, motion } from "framer-motion";

const fadeUpZoom = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function GridContact() {
  return (
    <motion.section
      className="max-w-6xl mx-auto"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-0">
        {contactData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 sm:p-8 md:p-10 rounded-xl  shadow-[0_0_10px_rgba(0,0,0,0.04),0_0_25px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(0,0,0,0.10)] transition-shadow duration-300"
            variants={fadeUpZoom}
          >
            {/* Ikon dalam lingkaran abu muda */}
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mb-5 sm:mb-6">
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
            </div>

            {/* Judul */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-['Fjord_One'] text-gray-800 mb-2 sm:mb-3 text-center">
              {item.title}
            </h3>

            {/* Deskripsi */}
            <div className="text-center text-gray-600 leading-relaxed text-sm sm:text-[15px]">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
