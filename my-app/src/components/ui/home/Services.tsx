"use client";
import servicesData from "@/data/ServiceData";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section className="relative -mt-10 bg-transparent">
      {/* Services Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white p-6 sm:p-8 shadow-md transition-all duration-500 cursor-pointer hover:shadow-lg hover:rounded-tr-2xl hover:rounded-tl-2xl hover:rounded-br-2xl"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/90 to-red-700 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 sm:mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-red-100 transition-all duration-300 group-hover:bg-white/20">
                    <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-red-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-xl md:text-2xl font-['Fjord_One'] text-[#0a172b] transition-colors duration-300 group-hover:text-white text-center sm:text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-sm md:text-base leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-white/90 mb-4 sm:mb-6 text-center sm:text-left">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <IconComponent className="absolute -right-5 -top-5 h-16 w-16 sm:h-20 sm:w-20 text-white transition-all duration-300 group-hover:text-zinc-200/20" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
