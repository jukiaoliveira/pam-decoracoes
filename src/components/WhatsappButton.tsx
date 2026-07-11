// src/components/WhatsappButton.tsx
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsappButton: React.FC = () => {
  const phoneNumber = "5512996185350";
  const message = encodeURIComponent(
    "Oi Pâmela! Acessei seu site e gostaria de fazer um orçamento para uma decoração.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-emerald-400 cursor-pointer"
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
          "0 10px 30px 10px rgba(16, 185, 129, 0.6)",
          "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} className="fill-white text-emerald-500" />
    </motion.a>
  );
};
