// src/sections/Packages.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { packagesData } from "../data/packagesData";

import type { Package } from "../data/packagesData";

export const Packages: React.FC = () => {
  const handleWhatsappLink = (packageName: string) => {
    const phoneNumber = "5512996185350";
    const message = encodeURIComponent(
      `Oi Pâmela! Gostaria de fazer um orçamento para o pacote: ${packageName}.`,
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-32 px-6 bg-gradient-to-b from-white to-[#FAF9F6] overflow-hidden"
      id="valores"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção Premium */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            Pacotes &{" "}
            <span className="italic text-amber-600 font-normal">
              Experiências
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
        </motion.div>

        {/* Grid Responsivo de Cards habilitando perspectiva 3D global */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          style={{ perspective: 1200 }}
        >
          {packagesData.map((pkg: Package, index: number) => (
            <motion.div
              key={pkg.id}
              className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl border transition-all flex flex-col justify-between overflow-hidden
                ${pkg.isPopular ? "border-amber-500/40 shadow-amber-900/5 ring-1 ring-amber-500/20" : "border-stone-200/40"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 40px 70px -15px rgba(28, 25, 23, 0.12)",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Badge de Destaque Flutuante Chique */}
              {pkg.isPopular && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-bl-[1.5rem] shadow-sm">
                  Destaque ✨
                </span>
              )}

              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-serif text-stone-900 font-light mb-2 mt-2">
                  {pkg.title}
                </h3>
                <p className="text-stone-500 text-sm mb-6 min-h-[48px] font-light leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-serif font-light text-stone-900 tracking-tight">
                    {pkg.price}
                  </span>
                </div>

                <hr className="border-stone-100 mb-6" />

                {/* Lista de Vantagens Tipada */}
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start text-stone-600 text-sm font-light leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Orçamento com Chamada de Ação Rápida */}
              <a
                href={handleWhatsappLink(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl text-xs sm:text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-95
                  ${
                    pkg.isPopular
                      ? "bg-amber-600 text-white hover:bg-amber-700 shadow-xl shadow-amber-600/10"
                      : "bg-stone-900 text-white hover:bg-stone-800 shadow-xl shadow-stone-900/5"
                  }`}
                style={{ transform: "translateZ(30px)" }}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Orçamento Rápido
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
