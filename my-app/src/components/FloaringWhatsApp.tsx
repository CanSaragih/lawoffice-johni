"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";

import { useState, useEffect } from "react";
import handleWhatsAppClick from "./ui/wa/openWhatsApp";

export default function FloatingWhatsApp() {
  const [showNotification, setShowNotification] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowNotification(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismissNotification = () => {
    setShowNotification(false);
    setIsDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notification Bubble */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-20 right-0 mb-2 w-64 rounded-lg bg-white p-4 shadow-xl ring-1 ring-gray-200"
          >
            <button
              onClick={handleDismissNotification}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              <IconX className="h-4 w-4 cursor-pointer" />
            </button>

            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
                <IconBrandWhatsapp className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Butuh konsultasi hukum?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Chat langsung dengan Pak Jhoni untuk konsultasi gratis
                </p>
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setShowNotification(false);
                  }}
                  className="mt-2 text-xs font-medium text-green-600 hover:text-green-700 cursor-pointer"
                >
                  Chat Sekarang →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 cursor-pointer"
        aria-label="Hubungi via WhatsApp"
      >
        <IconBrandWhatsapp className="h-7 w-7 " />

        {/* Online Indicator */}
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-green-400 ring-2 ring-white">
          <div className="h-full w-full animate-ping rounded-full bg-green-400"></div>
        </div>
      </motion.button>
    </div>
  );
}
