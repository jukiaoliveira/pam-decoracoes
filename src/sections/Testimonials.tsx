// src/sections/Testimonials.tsx
import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Interface bem estruturada para o verbatimModuleSyntax
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Noiva (Casamento Clássico)",
    content:
      "A Pâmela transformou o salão em um verdadeiro conto de fadas! Cada detalhe do altar e das mesas dos doces superou o que combinamos no projeto. Todo mundo elogiou a elegância da decoração.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Juliana Santos",
    role: "Mãe do Léo (Festa Astronauta)",
    content:
      "Contratei o pacote de balões e painel e fiquei encantada. Super pontual na montagem e o acabamento dos balões desconstruídos é impecável. O aniversário do meu filho ficou lindo nas fotos!",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Roberta Lima",
    role: "Aniversário de 30 anos (Mini Table)",
    content:
      "Eu queria algo intimista, mas que não parecesse simples demais. A Pâmela conseguiu trazer um luxo absurdo para a sala do meu apartamento usando o trio de cilindros e arranjos florais maravilhosos.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para controlar a direção do slide (efeito visual moderno)
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  // Variantes de animação para efeito de slide multidirecional chique
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section
      className="py-32 bg-white overflow-hidden relative"
      id="depoimentos"
    >
      {/* Detalhe fluido de fundo */}
      <div className="absolute right-[-10%] bottom-0 w-[25vw] h-[25vw] bg-amber-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Cabeçalho Premium */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
            Histórias Reais
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            O que dizem nossos{" "}
            <span className="italic text-amber-600 font-normal">Clientes</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
        </div>

        {/* Caixa do Carrossel Animado */}
        <div className="relative bg-[#FAF9F6] rounded-[3rem] p-8 sm:p-20 shadow-xl border border-stone-200/40">
          {/* Ícone de Aspas Minimalista */}
          <Quote className="absolute top-10 left-10 text-amber-600/5 w-32 h-32 pointer-events-none select-none" />

          <div className="relative min-h-[280px] flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center text-center"
              >
                {/* Estrelas com Tipagem no Loop */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(testimonialsData[currentIndex].stars)].map(
                    (_unused: unknown, i: number) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ),
                  )}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-stone-700 text-lg sm:text-xl font-serif font-light italic leading-relaxed mb-10 max-w-2xl">
                  "{testimonialsData[currentIndex].content}"
                </p>

                {/* Avatar e Informações da Cliente */}
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={testimonialsData[currentIndex].image}
                    alt={testimonialsData[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white ring-4 ring-amber-500/10"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif font-medium text-stone-900 text-lg">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-stone-500 text-xs tracking-wider uppercase font-medium mt-0.5">
                      {testimonialsData[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Setas de Navegação Sofisticadas */}
            <div className="flex justify-center gap-4 mt-12 sm:mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3.5 rounded-full bg-white text-stone-700 shadow-sm hover:text-stone-900 hover:bg-stone-50 border border-stone-200/60 transition-all cursor-pointer active:scale-95"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3.5 rounded-full bg-white text-stone-700 shadow-sm hover:text-stone-900 hover:bg-stone-50 border border-stone-200/60 transition-all cursor-pointer active:scale-95"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
