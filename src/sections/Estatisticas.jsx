import React from 'react';
import { motion } from 'framer-motion';

export default function Estatisticas({ language }) {
  const stats = [
    { value: "63%", label: language === 'PT' ? "TAXA DE EMPREGABILIDADE" : "EMPLOYABILITY RATE" },
    { value: "34", label: language === 'PT' ? "CLUBES ENVOLVIDOS" : "CLUBS INVOLVED" },
    { value: "21", label: language === 'PT' ? "ATLETAS CONTRATADOS" : "CONTRACTED ATHLETES" },
    { value: "9", label: language === 'PT' ? "PAÍSES REPRESENTADOS" : "COUNTRIES REPRESENTED" }
  ];

  return (
    <section className="py-20 bg-brand-dark text-white px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-wider">
            NÚMEROS QUE <span className="text-brand-accent">COMPROVAM</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-lg">Resultados oficiais da Janela 25/26</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-black italic text-white mb-2 tracking-tighter drop-shadow-lg">
                {stat.value}
              </span>
              <span className="text-brand-accent font-bold text-xs md:text-sm uppercase tracking-widest text-center max-w-[150px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}