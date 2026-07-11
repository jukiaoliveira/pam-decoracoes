// src/components/Footer.tsx
import React from "react";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Marca / Logo Textual */}
          <div className="space-y-1">
            <h3 className="text-white font-serif text-2xl font-light tracking-wide">
              Pâmela{" "}
              <span className="text-amber-500 italic font-normal">
                Decorações
              </span>
            </h3>
            <p className="text-stone-500 text-sm font-light">
              Criando cenários para histórias inesquecíveis.
            </p>
          </div>

          {/* Links de Navegação Rápidos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider font-medium">
            <a
              href="#sobre"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#portfolio"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Portfólio
            </a>
            <a
              href="#valores"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Pacotes
            </a>
            <a
              href="#depoimentos"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Depoimentos
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/pamellaart_decor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-stone-800/50 text-stone-400 hover:text-stone-900 hover:bg-amber-500 transition-all duration-300 flex items-center justify-center shadow-inner"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="border-stone-800/60 my-10" />

        {/* Direitos Autorais e Créditos */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 font-light">
          <p>
            &copy; {currentYear} Pâmela Decorações. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1">
            Desenvolvido com{" "}
            <Heart size={12} className="fill-amber-500 text-amber-500" /> por
            você.
          </p>
        </div>
      </div>
    </footer>
  );
};
