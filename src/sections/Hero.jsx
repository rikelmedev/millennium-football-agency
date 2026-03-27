import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ videoID, onCtaClick, language }) {
  const content = {
    PT: { title: "O Teu Próximo Contrato ", accent: "Na Europa", cta: "Candidatar-se Agora" },
    EN: { title: "Your Next Professional ", accent: "Contract", cta: "Apply Now" }
  };
  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0 pointer-events-none scale-[1.5]"> 
        <iframe
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`}
          className="w-full h-full object-cover opacity-30"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-8xl font-black italic uppercase text-white leading-[0.9]"
        >
          {t.title} <br /> <span className="text-brand-accent">{t.accent}</span>
        </motion.h1>
        
        <button 
          onClick={onCtaClick}
          className="mt-12 bg-brand-accent text-white px-10 py-5 rounded-full font-black uppercase italic text-xl shadow-2xl hover:scale-105 transition-transform"
        >
          {t.cta}
        </button>
      </div>
    </section>
  );
}