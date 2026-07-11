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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white to-[#FAF9F6] overflow-hidden"
      id="valores"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
        >
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-2">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            Pacotes &{" "}
            <span className="italic text-amber-600 font-normal">
              Experiências
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
          style={{ perspective: 1200 }}
        >
          {packagesData.map((pkg: Package, index: number) => (
            <motion.div
              key={pkg.id}
              className={`relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 shadow-xl border transition-all flex flex-col justify-between overflow-hidden
                ${pkg.isPopular ? "border-amber-500/40 shadow-amber-900/5 ring-1 ring-amber-500/20" : "border-stone-200/40"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -3,
                boxShadow: "0 30px 60px -15px rgba(28, 25, 23, 0.12)",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {pkg.isPopular && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-bl-[1.5rem] shadow-sm">
                  Destaque ✨
                </span>
              )}

              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl sm:text-2xl font-serif text-stone-900 font-light mb-1.5 mt-1">
                  {pkg.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mb-5 min-h-[auto] md:min-h-[48px] font-light leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-5">
                  <span className="text-2xl sm:text-3xl font-serif font-light text-stone-900 tracking-tight">
                    {pkg.price}
                  </span>
                </div>

                <hr className="border-stone-100 mb-5" />

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start text-stone-600 text-xs sm:text-sm font-light leading-relaxed"
                    >
                      <Check className="w-3.5 h-3.5 text-amber-600 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={handleWhatsappLink(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95
                  ${
                    pkg.isPopular
                      ? "bg-amber-600 text-white hover:bg-amber-700 shadow-xl shadow-amber-600/10"
                      : "bg-stone-900 text-white hover:bg-stone-800 shadow-xl shadow-stone-900/5"
                  }`}
                style={{ transform: "translateZ(30px)" }}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Orçamento Rápido
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
