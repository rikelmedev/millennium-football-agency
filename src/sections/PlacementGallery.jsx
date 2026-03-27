import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/assets/case-novos.jpg', '/assets/case-novos-1.jpg', '/assets/case-novos-2.jpg',
  '/assets/case-novos-3.jpg', '/assets/case-novos-4.jpg', '/assets/case-novos-5.jpg',
  '/assets/case-novos-6.jpg', '/assets/case-novos-7.jpg', '/assets/case-novos-8.webp',
  '/assets/case-novos-9.jpg', '/assets/case-novos-10.webp', '/assets/case-novos-11.jpg',
  '/assets/case-novos-12.webp'
];

export default function PlacementGallery({ language }) {
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="conquistas" className="py-24 md:py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white italic uppercase italic leading-none">
            {language === 'PT' ? 'Mais de ' : 'More than '}
            <span className="text-brand-accent">150+ Atletas</span>
            <br className="hidden md:block" />
            {language === 'PT' ? ' Colocados na Europa' : ' Placed in Europe'}
          </h2>
        </div>
        <p className="text-slate-400 italic text-lg max-w-sm">
           {language === 'PT' 
             ? 'Estes são apenas os mais recentes. A nossa rampa de acesso é real e comprovada.' 
             : 'These are just the most recent ones. Our gateway is real and proven.'}
        </p>
      </div>

      <div className="flex gap-4 overflow-hidden select-none hover:pause-animation transition-all">
        <motion.div 
          variants={marqueeVariants}
          animate="animate"
          className="flex gap-4 shrink-0"
        >
          {[...images, ...images, ...images].map((src, i) => (
            <div key={i} className="w-64 h-80 md:w-80 md:h-[400px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl transition-all hover:border-brand-accent/30">
              <img 
                src={src} 
                alt={`Atleta Millennium Placed - ${i}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out" 
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}