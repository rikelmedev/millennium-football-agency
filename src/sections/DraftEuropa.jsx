import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function DraftEuropa({ language }) {
  const carouselRef = useRef(null);

  const t = {
    PT: { title: "ELITE EM ", accent: "CAMPO" },
    EN: { title: "ELITE ON ", accent: "THE PITCH" }
  }[language] || { title: "ELITE EM ", accent: "CAMPO" };

  // Seus 8 atletas
  const athletes = [
    { name: "JHONATAN PEREIRA", club: "NK SLOBODA", video: "/assets/case-jhonatan.mp4" },
    { name: "RAUL FRANCISCO", club: "NK NAFTA", video: "/assets/case-raul.mp4" },
    { name: "HUGO", club: "NK DRAVA", video: "/assets/case-hugo.mp4" },
    { name: "JOÃO VICTOR", club: "NK NAFTA", video: "/assets/case-joaovictor.mp4" },
    { name: "DANIEL RIBEIRO", club: "NK SUHOPOLJE", video: "/assets/case-daniel.mp4" },
    { name: "DIOGO", club: "NK NAFTA", video: "/assets/case-diogo.mp4" },
    { name: "VITOR", club: "NK NAFTA", video: "/assets/case-vitor.mp4" },
    { name: "HUGO", club: "NK NAFTA", video: "/assets/case-hugo.mp4" },
    
  ];

  // Função do botão de seta
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-white px-6 overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        
        {/* TÍTULO E SETAS LADO A LADO */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <h2 className="font-heading text-4xl md:text-7xl font-black italic text-brand-dark uppercase text-center md:text-left leading-none">
            {t.title} <span className="text-brand-accent">{t.accent}</span>
          </h2>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')} 
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all shadow-sm text-2xl font-bold"
            >
              &larr;
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all shadow-sm text-2xl font-bold"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {athletes.map((athlete, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col flex-none w-[260px] md:w-[280px] lg:w-[300px] snap-center rounded-[1.5rem] overflow-hidden shadow-xl shadow-zinc-200 border border-zinc-100 group bg-brand-accent"
            >
              <div className="relative aspect-[4/5] w-full bg-black">
                <video 
                  src={athlete.video}
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-brand-accent py-4 px-4">
                <h4 className="text-white font-black italic text-lg uppercase leading-tight truncate">{athlete.name}</h4>
                <p className="text-white/80 font-bold text-[10px] uppercase tracking-widest mt-1 truncate">{athlete.club}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}