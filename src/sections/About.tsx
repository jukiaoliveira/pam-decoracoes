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
    if (window.innerWidth < 768) return;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 md:py-32 bg-white relative overflow-hidden"
      id="sobre"
    >
      <div className="hidden md:block absolute right-0 top-1/4 text-[12rem] font-serif text-stone-50/80 pointer-events-none select-none tracking-tighter font-light">
        Pamela
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          <div className="order-1 md:order-2 md:hidden text-center">
            <div className="flex items-center justify-center gap-2 text-amber-600 font-medium tracking-widest uppercase text-xs mb-3">
              <Sparkles size={13} />
              <span>A Essência do Design</span>
            </div>
            <h2 className="text-3xl font-serif text-stone-900 leading-tight tracking-tight">
              A mente criativa por trás{" "}
              <span className="text-amber-600 italic font-normal block">
                de cada detalhe
              </span>
            </h2>
            <div className="w-12 h-[1.5px] bg-amber-500/60 rounded mx-auto mt-4" />
          </div>

          <div className="order-2 md:order-1 flex justify-center px-4 sm:px-0">
            <motion.div
              className="relative w-full max-w-[280px] md:max-w-sm aspect-square md:aspect-[3/4] cursor-pointer p-3 bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-stone-100"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-full h-full rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden border-2 border-stone-50 relative z-10"
                style={{
                  // Só aplica rotação 3D se for desktop para remover o lag do celular
                  rotateX: window.innerWidth >= 768 ? rotateX : 0,
                  rotateY: window.innerWidth >= 768 ? rotateY : 0,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={pamela}
                  alt="Pâmela - Decoradora"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/5 to-transparent mix-blend-multiply" />
              </motion.div>
            </motion.div>
          </div>

          {/* 3. CONTEÚDO ESCRITO: No mobile fica no fim (order-3), no desktop volta para a direita (md:order-2) */}
          <div className="order-3 md:order-2 text-center md:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-5"
            >
              {/* Esse bloco de título aqui só aparece do tablet/computador para cima */}
              <div className="hidden md:block space-y-4">
                <div className="flex items-center gap-2 text-amber-600 font-medium tracking-widest uppercase text-sm">
                  <Sparkles size={13} />
                  <span>A Essência do Design</span>
                </div>
                <h2 className="text-5xl font-serif text-stone-900 leading-tight tracking-tight">
                  A mente criativa por trás{" "}
                  <span className="text-amber-600 italic font-normal inline">
                    de cada detalhe
                  </span>
                </h2>
                <div className="w-12 h-[1.5px] bg-amber-500/60 rounded my-1" />
              </div>

              <motion.p
                variants={textFadeVariants}
                className="text-stone-600 text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
              >
                Olá, eu sou a <strong>Pâmela</strong>. Minha paixão por festas
                começou cedo, mas foi ao decorar o primeiro aniversário da minha
                sobrinha que percebi: meu propósito é materializar sonhos.
              </motion.p>

              <motion.p
                variants={textFadeVariants}
                className="text-stone-600 text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
              >
                Para nós, decorar não é só espalhar balões e flores pelo salão.
                É sobre criar o cenário onde os sorrisos mais sinceros da sua
                família vão acontecer. Cada projeto nasce da sua história,
                desenhado com o carinho e a exclusividade que os seus momentos
                mais felizes merecem.
              </motion.p>

              <motion.div
                variants={textFadeVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-stone-100 text-left"
              >
                <div className="space-y-1">
                  <h4 className="font-serif font-medium text-stone-900 text-base sm:text-lg">
                    Design Exclusivo
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
                    Sem fórmulas prontas. Cada celebração recebe um conceito
                    visual totalmente inédito.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-medium text-stone-900 text-base sm:text-lg">
                    Pontualidade Absolute
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light">
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
