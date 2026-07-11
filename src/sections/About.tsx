import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { Sparkles } from "lucide-react";

import pamela from "../assets/images/pamela.jpeg";

export const About: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

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

  const textFadeVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="sobre">
      <div className="absolute right-0 top-1/4 text-[12rem] font-serif text-stone-50/80 pointer-events-none select-none tracking-tighter font-light">
        Pamela
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
            <motion.div
              className="relative w-full max-w-sm aspect-[3/4] cursor-pointer"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-stone-50 relative z-10 transition-all duration-200 ease-out"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              >
                <img
                  src={pamela}
                  alt="Pâmela - Decoradora"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent mix-blend-multiply" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-amber-500/10 w-full h-full rounded-[2rem] -z-10 border border-amber-500/20"
                style={{
                  rotateX,
                  rotateY,
                  x: useTransform(mouseX, (v) => v * -0.05),
                  y: useTransform(mouseY, (v) => v * -0.05),
                }}
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-6"
            >
              <motion.div
                variants={textFadeVariants}
                className="flex items-center gap-2 text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm"
              >
                <Sparkles size={14} />
                <span>A Essência do Design</span>
              </motion.div>

              <motion.h2
                variants={textFadeVariants}
                className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight"
              >
                A mente criativa por trás <br />
                <span className="text-amber-600 italic font-normal">
                  de cada detalhe
                </span>
              </motion.h2>

              <motion.div
                variants={textFadeVariants}
                className="w-12 h-[2px] bg-amber-500 rounded my-2"
              />

              <motion.p
                variants={textFadeVariants}
                className="text-stone-600 text-lg leading-relaxed font-light"
              >
                Olá, eu sou a <strong>Pâmela</strong>. Minha paixão por festas
                começou cedo, mas foi ao decorar o primeiro aniversário da minha
                sobrinha que percebi: meu propósito é materializar sonhos.
              </motion.p>

              <motion.p
                variants={textFadeVariants}
                className="text-stone-600 text-lg leading-relaxed font-light"
              >
                Para nós, decorar não é só espalhar balões e flores pelo salão.
                É sobre criar o cenário onde os sorrisos mais sinceros da sua
                família vão acontecer. Cada projeto nasce da sua história,
                desenhado com o carinho e a exclusividade que os seus momentos
                mais felizes merecem.
              </motion.p>

              {/* Grid de Diferenciais de Negócio */}
              <motion.div
                variants={textFadeVariants}
                className="grid grid-cols-2 gap-8 pt-4 border-t border-stone-100"
              >
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-stone-900 text-lg">
                    Design Exclusivo
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    Sem fórmulas prontas. Cada celebração recebe um conceito
                    visual totalmente inédito.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-stone-900 text-lg">
                    Pontualidade Absoluta
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    Cronograma milimétrico para que sua única preocupação seja
                    viver o momento.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
