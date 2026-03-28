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
  const t = {
    PT: {
      title: "Mais de ",
      accent: "150+ Atletas",
      subtitle: " Colocados na Europa",
      desc: "Estes são apenas os mais recentes. A nossa rampa de acesso é real e comprovada."
    },
    EN: {
      title: "More than ",
      accent: "150+ Athletes",
      subtitle: " Placed in Europe",
      desc: "These are just the most recent ones. Our gateway is real and proven."
    }
  }[language];

  return (
    <section id="conquistas" className="py-24 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white italic uppercase leading-none">
              {t.title}
              <span className="text-[#C5A47E]">{t.accent}</span>
              <br className="hidden md:block" />
              {t.subtitle}
            </h2>
          </div>
          <p className="text-slate-400 italic text-lg max-w-sm">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group bg-zinc-900"
            >
              <img 
                src={src} 
                alt={`Atleta Millennium - ${i}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C5A47E]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}