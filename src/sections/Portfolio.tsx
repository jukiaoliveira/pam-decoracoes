import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import type { PortfolioItem } from "../data/portfolioData";

export const Portfolio: React.FC = () => {
  return (
    <section
      className="py-32 bg-[#FAF9F6] relative overflow-hidden"
      id="portfolio"
    >
      <div className="absolute left-[-10%] top-1/3 w-[30vw] h-[30vw] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
            Portfólio Autoral
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            Cenários{" "}
            <span className="italic text-amber-600 font-normal">
              Inesquecíveis
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="popLayout">
            {portfolioData.map((item: PortfolioItem) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  boxShadow: "0 30px 60px -15px rgba(28, 25, 23, 0.15)",
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-[2rem] bg-stone-100 aspect-[4/5] shadow-md cursor-pointer border border-stone-200/20"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay Elegante em Degradê Gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-8">
                  {/* Conteúdo empurrado para frente no eixo Z */}
                  <div
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-white text-xl sm:text-2xl font-serif font-light leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Borda interna de reflexo chique fina */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
