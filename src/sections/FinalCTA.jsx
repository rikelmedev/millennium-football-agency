import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA({ language, onCtaClick }) {
  const t = {
    PT: {
      title: "Está pronto para ser o próximo?",
      desc: "Se possui o perfil adquado e o budget exigido, a tua vaga está à um clique de distância.",
      btn: "Candidatar-se à Seleção"
    },
    EN: {
      title: "Ready to be the next one?",
      desc: "If you have the adequate profile and the required budget, your job opening is just a click away.",
      btn: "Apply for Selection"
    }
  }[language];

  return (
    <section className="py-32 px-6 bg-brand-accent text-center text-brand-dark relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 className="font-heading text-5xl md:text-8xl font-black italic uppercase leading-none mb-8">
          {t.title}
        </motion.h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl font-medium font-body italic">
          {t.desc}
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-brand-dark text-white px-10 py-6 rounded-full font-heading font-black text-2xl uppercase italic shadow-2xl hover:scale-105 transition-all"
        >
          {t.btn}
        </button>
      </div>
    </section>
  );
}