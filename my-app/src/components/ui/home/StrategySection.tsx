"use client";

import tabs from "@/data/strategyData";
import Image from "next/image";
import { useState } from "react";
import { motion, easeInOut } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeInOut } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export default function StrategySection() {
  const [activeTab, setActiveTab] = useState("Perkara Perdata");

  return (
    <section className="bg-white py-16 px-4 sm:py-20 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            transition={{ delay: 0.1 }}
          >
            <p className="text-red-700 font-extrabold tracking-wide uppercase mb-2 text-sm sm:text-base">
              Strategi Kami
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-800 leading-snug mb-4 sm:mb-6 font-['Fjord_One']">
              Mengapa Memilih Kami Sebagai Pendamping Hukum Anda?
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Kami adalah firma hukum dengan komitmen tinggi untuk memberikan
              solusi hukum yang cepat, tepat, dan berintegritas bagi setiap
              klien kami.
            </p>

            {/* Tabs - Mobile friendly */}
            <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-gray-200 pb-3 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`text-sm sm:text-lg font-medium transition relative cursor-pointer py-2 px-1 sm:px-0 ${
                    activeTab === tab.name
                      ? "text-red-700 font-semibold after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-red-700"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-6 transition-all duration-500 ease-in-out">
              {tabs.find((t) => t.name === activeTab)?.content}
            </div>
          </motion.div>

          {/* Right image - Mobile optimized */}
          <motion.div
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            transition={{ delay: 0.2 }}
          >
            {/* Decorative background circle - Hidden on mobile, visible on larger screens */}
            <div className="absolute top-0 right-0 bg-red-700 rounded-full w-40 h-40 sm:w-45 sm:h-45 md:w-55 md:h-55 lg:w-65 lg:h-65 -translate-x-2 -translate-y-2 sm:-translate-x-2 sm:-translate-y-2 md:-translate-x-35 md:-translate-y-2 lg:-translate-x-0 lg:-translate-y-10"></div>

            {/* Border decoration - Adjusted for mobile */}
            <div className="hidden sm:block absolute top-4 -left-4 sm:top-8 sm:-left-8 w-24 h-32 sm:w-32 sm:h-40 lg:w-130 lg:h-162 border border-zinc-200 rounded-tr-[50px] lg:rounded-tr-[120px]"></div>

            {/* Main image - Responsive sizing */}
            <div className="relative z-10">
              <Image
                src="/img/img22.png"
                alt="Law Consultation"
                width={400}
                height={320}
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 object-cover"
              />
            </div>

            {/* Mobile decorative element */}
            <div className="sm:hidden absolute -bottom-4 -right-4 bg-red-500 rounded-full w-12 h-12 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
