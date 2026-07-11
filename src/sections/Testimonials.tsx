import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    role: "Mãe da Mel (Festa Bosque Encantado)",
    content:
      "A Pâmela transformou o salão em um verdadeiro conto de fadas! Cada detalhe do cenário e da mesa de doces superou o que combinamos. Todo mundo elogiou o capricho da decoração.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Juliana Santos",
    role: "Mãe do Léo (Festa Safári)",
    content:
      "Contratei o kit com os cilindros, painel e arco e fiquei encantada. Super pontual na montagem e o acabamento dos balões é impecável. O aniversário do meu filho ficou lindo nas fotos!",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Roberta Lima",
    role: "Mãe do Theo (Festa Astronauta)",
    content:
      "Eu queria algo menor para poucas pessoas, mas que não parecesse simples demais. A Pâmela conseguiu trazer um charme absurdo para o espaço usando os balões e mesas maravilhosas.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      transition: { duration: 0.25, ease: "easeIn" },
    }),
  };

  return (
    <section
      className="py-16 md:py-32 bg-white overflow-hidden relative"
      id="depoimentos"
    >
      <div className="absolute right-[-10%] bottom-0 w-[25vw] h-[25vw] bg-amber-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-2">
            Histórias Reais
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            O que dizem nossos{" "}
            <span className="italic text-amber-600 font-normal">Clientes</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
        </div>

        <div className="relative bg-[#FAF9F6] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-20 shadow-xl border border-stone-200/40">
          <Quote className="absolute top-10 left-10 text-amber-600/5 w-32 h-32 pointer-events-none select-none hidden sm:block" />

          <div className="relative min-h-[260px] flex flex-col justify-between overflow-hidden">
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
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonialsData[currentIndex].stars)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                      />
                    ),
                  )}
                </div>

                <p className="text-stone-700 text-base sm:text-xl font-serif font-light italic leading-relaxed mb-8 max-w-2xl px-1">
                  "{testimonialsData[currentIndex].content}"
                </p>

                <div className="flex items-center gap-3.5 text-left w-full justify-center sm:w-auto sm:justify-start">
                  <img
                    src={testimonialsData[currentIndex].image}
                    alt={testimonialsData[currentIndex].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover shadow-md border-2 border-white ring-4 ring-amber-500/5"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif font-medium text-stone-900 text-base sm:text-lg">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-stone-500 text-[10px] tracking-wider uppercase font-medium mt-0.5">
                      {testimonialsData[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3.5 mt-8 sm:mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white text-stone-700 shadow-sm hover:text-stone-900 border border-stone-200/60 transition-all cursor-pointer active:scale-95"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white text-stone-700 shadow-sm hover:text-stone-900 border border-stone-200/60 transition-all cursor-pointer active:scale-95"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
