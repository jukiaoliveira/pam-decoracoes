import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

import decoracao from "../assets/images/decoracao.jpeg";

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-250, 250], [12, -12]);
  const rotateY = useTransform(mouseX, [-250, 250], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#FAF9F6]">
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-amber-200/20 rounded-full blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-stone-200/40 rounded-full blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-700 font-medium"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span className="tracking-widest uppercase text-[10px] sm:text-xs">
                  Transformando espaços em histórias
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl md:text-7xl font-serif text-stone-900 leading-[1.15] tracking-tight"
              >
                Pâmela <br />
                <span className="text-amber-600 font-normal italic relative">
                  Decor
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-amber-200/60 -z-10" />
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-1"
              >
                Você sonhou com cada detalhe, e nós estamos aqui para tornar
                real. Criamos cenários autorais que não apenas encantam os
                olhos, mas que abraçam a sua alma. É sobre a sua história, do
                seu jeito, perfeita como você sempre quis.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
              >
                <a
                  href="#orcamento"
                  className="w-full sm:w-auto px-7 py-3.5 bg-stone-900 text-white rounded-full font-medium tracking-wide hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-stone-900/10 active:scale-98 group text-xs sm:text-sm"
                >
                  <Calendar size={16} />
                  Solicitar Orçamento
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-7 py-3.5 border border-stone-300 text-stone-800 rounded-full font-medium tracking-wide hover:bg-stone-100 hover:border-stone-400 transition-all text-center active:scale-98 text-xs sm:text-sm"
                >
                  Conhecer Portfólio
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex-1 w-full flex justify-center items-center px-2 sm:px-0">
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-[450px] aspect-[4/5] cursor-pointer"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] bg-stone-200 overflow-hidden shadow-[0_20px_45px_-10px_rgba(0,0,0,0.15)] border-4 sm:border-[6px] border-white relative z-10 transition-all duration-200 ease-out"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              >
                <img
                  src={decoracao}
                  alt="Decoração Exclusiva de Evento"
                  className="w-full h-full object-cover pointer-events-none select-none scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-4 sm:left-auto sm:-left-10 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-white/40 max-w-[180px] sm:max-w-[220px]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="text-amber-600 font-serif text-2xl sm:text-3xl font-bold">
                  100%
                </div>
                <div className="text-stone-700 text-[11px] sm:text-sm font-medium mt-0.5 leading-snug">
                  Projetos autorais e personalizados
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-full h-full border border-amber-500/10 rounded-[2rem] sm:rounded-[2.5rem] -z-10 hidden sm:block"
                style={{
                  rotateX,
                  rotateY,
                  x: useTransform(mouseX, (v) => v * 0.1),
                  y: useTransform(mouseY, (v) => v * 0.1),
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
