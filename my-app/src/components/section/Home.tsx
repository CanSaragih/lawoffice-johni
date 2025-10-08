"use client";
import { motion, easeOut } from "framer-motion";
import handleWhatsAppClick from "../ui/wa/openWhatsApp";

// Data untuk reusability
const heroData = {
  badge: "hukum ★ keadilan",
  title: "solusi kreatif untuk masalah hukum",
  description:
    "Kami berkomitmen memberikan layanan hukum terbaik dan dukungan penuh untuk melindungi hak-hak Anda serta mencapai hasil yang optimal dengan pengalaman bertahun-tahun di bidang hukum.",
  ctaButton: "buat janji konsultasi",
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textPanelVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function Home() {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/bg-2.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent" />

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full"
      >
        {/* Left Panel - Empty space for face image in background */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right Panel - Text Content */}
        <motion.div
          variants={textPanelVariants}
          className="flex w-full items-center justify-center px-8 py-16 lg:w-1/2 lg:justify-start lg:pr-16 xl:pr-24"
        >
          <div className="max-w-xl lg:ml-auto">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-xl leading-tight font-serif font-bold tracking-widest text-amber-500 uppercase">
                  {heroData.badge}
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-center text-4xl font-bold leading-tight text-[#0C1D36] lg:text-left lg:text-5xl xl:text-6xl font-serif capitalize">
                {heroData.title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-center text-lg leading-relaxed text-gray-700 lg:text-left font-semibold">
                {heroData.description}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="inline-block bg-[#0C1D36] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#1a2f4a] hover:shadow-lg rounded-md font-serif capitalize"
              >
                {heroData.ctaButton}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
