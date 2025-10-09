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
    <section className="relative -mt-15 pb-20 bg-transparent">
      {/* Services Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white p-8 shadow-md transition-all duration-500 cursor-pointer hover:shadow-lg hover:rounded-xl"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 transition-all duration-300 group-hover:bg-white/20">
                    <IconComponent className="h-8 w-8 text-amber-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-serif text-[#0a172b] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-white/90 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/10 transition-all duration-300 group-hover:bg-white/10" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
