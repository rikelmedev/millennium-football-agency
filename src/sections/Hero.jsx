import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ videoID, onCtaClick, language, backgroundImage }) {
  const t = {
    PT: { title: "O SEU PRÓXIMO ", accent: "CONTRATO", cta: "CANDIDATAR-SE AGORA" },
    EN: { title: "YOUR NEXT PROFESSIONAL ", accent: "CONTRACT", cta: "APPLY NOW" }
  }[language];

  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 border-b border-zinc-100 py-16 text-white">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage || "/assets/time.jpg"} 
          alt="Millennium Team"
          className="w-full h-full object-cover filter blur-sm scale-110" 
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 lg:gap-12 items-center z-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 lg:col-span-6 text-center md:text-left z-10"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black italic uppercase text-white leading-tight drop-shadow-sm">
            {t.title} <br className="hidden md:block"/> 
            <span className="text-brand-accent">{t.accent}</span>
          </h1>
          <p className="mt-6 text-zinc-300 font-medium text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
             Muitos sonham com a Europa, poucos sabem o caminho. Acesse a rampa de lançamento definitiva e construa uma carreira sólida.
          </p>
          <button 
            onClick={onCtaClick}
            className="mt-10 bg-brand-accent text-white px-8 py-4 rounded-full font-black uppercase italic text-lg shadow-xl shadow-brand-accent/30 hover:bg-white hover:text-brand-accent transition-all"
          >
            {t.cta}
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="md:col-span-7 lg:col-span-6 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-950 border-4 border-white/10 z-10 bg-black"
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&controls=1&showinfo=0&rel=0`}
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </motion.div>
      </div>
    </section>
  );
}