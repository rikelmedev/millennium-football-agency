import React from 'react';
import { motion } from 'framer-motion';
import { Users, Euro, Trophy } from 'lucide-react';
import FilterCard from '../components/FilterCard';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Filter() {
  return (
    <section id="filtro" className="py-24 md:py-32 px-6 bg-[#080808] border-y border-white/5">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} 
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl font-black italic uppercase mb-6 leading-tight text-white">
            Apenas para quem <br/> quer <span className="text-brand-accent">o topo</span>
          </h2>
          <p className="text-slate-400 italic text-lg md:text-xl font-body">
            Filtramos curiosos. Nosso foco é transformar atletas de alto rendimento em profissionais na Europa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <FilterCard 
            icon={Users} 
            title="Idade e Perfil" 
            desc="Exclusivo para atletas 18+ prontos para o nível de exigência do mercado profissional europeu." 
          />
          <FilterCard 
            icon={Euro} 
            title="Investimento" 
            desc="Budget mínimo de €2.6k Euros disponível para viabilizar o seu projeto de carreira." 
            accent={true} 
          />
          <FilterCard 
            icon={Trophy} 
            title="Background" 
            desc="Experiência comprovada em categorias de base ou histórico em clubes federados." 
          />
        </div>
      </motion.div>
    </section>
  );
}