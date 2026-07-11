// src/sections/Contact.tsx
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Send, Calendar, MapPin, MessageCircle } from "lucide-react"; // Removido o ícone Users

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState(""); // Removido o estado guests

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "5512996185350"; // Mantido o seu número real

    // Mensagem estruturada sem o número de convidados
    const messageText =
      `Oi Pâmela! Gostaria de solicitar um orçamento:\n\n` +
      `• *Nome:* ${name}\n` +
      `• *Tipo de Evento:* ${eventType}\n` +
      `• *Data Prevista:* ${eventDate}\n` +
      `• *Local/Cidade:* ${location}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-32 bg-[#FAF9F6] relative overflow-hidden"
      id="orcamento"
    >
      {/* Detalhe de fundo geométrico sutil */}
      <div className="absolute left-[-5%] bottom-[-5%] w-[30vw] h-[30vw] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <span className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
            Vamos Planejar?
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 font-light tracking-tight">
            Solicitar{" "}
            <span className="italic text-amber-600 font-normal">Orçamento</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4"></div>
          <p className="text-stone-500 text-sm font-light mt-4 max-w-md mx-auto leading-relaxed">
            Preencha os detalhes abaixo para que possamos desenhar um projeto
            exclusivo para a sua celebração.
          </p>
        </motion.div>

        {/* Formulário Premium com Design Minimalista */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-stone-200/40"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-stone-700 text-xs uppercase tracking-wider font-medium"
                >
                  Seu Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  placeholder="Ex: Maria Souza"
                  className="w-full bg-stone-50 border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white transition-all font-light"
                />
              </div>

              {/* Campo Tipo de Evento */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="eventType"
                  className="text-stone-700 text-xs uppercase tracking-wider font-medium"
                >
                  Tipo de Evento
                </label>
                <input
                  id="eventType"
                  type="text"
                  required
                  value={eventType}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEventType(e.target.value)
                  }
                  placeholder="Ex: Casamento, Infantil, 15 anos"
                  className="w-full bg-stone-50 border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white transition-all font-light"
                />
              </div>

              {/* Campo Data - Expandido para ocupar as duas colunas no desktop */}
              <div className="flex flex-col space-y-1.5 sm:col-span-2">
                <label
                  htmlFor="eventDate"
                  className="text-stone-700 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5"
                >
                  <Calendar size={14} className="text-stone-400" /> Data
                  Prevista
                </label>
                <input
                  id="eventDate"
                  type="text"
                  required
                  value={eventDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEventDate(e.target.value)
                  }
                  placeholder="Ex: 15 de Outubro ou A Definir"
                  className="w-full bg-stone-50 border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white transition-all font-light"
                />
              </div>
            </div>

            {/* Campo Localização Completo */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="location"
                className="text-stone-700 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5"
              >
                <MapPin size={14} className="text-stone-400" /> Local ou Cidade
                do Evento
              </label>
              <input
                id="location"
                type="text"
                required
                value={location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLocation(e.target.value)
                }
                placeholder="Ex: Salão de Festas X ou Cidade"
                className="w-full bg-stone-50 border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white transition-all font-light"
              />
            </div>

            {/* Botão de Envio com Efeito de Presença */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-stone-900 text-white hover:bg-stone-800 rounded-xl text-xs sm:text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xl shadow-stone-900/10 active:scale-[0.99]"
              >
                <MessageCircle size={16} className="fill-current" />
                Enviar Dados via WhatsApp
                <Send size={14} className="ml-1" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
