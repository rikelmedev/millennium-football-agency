import React from 'react';
import { motion } from 'framer-motion';
import { Users, Euro, Trophy } from 'lucide-react';
import FilterCard from '../components/FilterCard';

export default function Filter({ language }) {
  const t = {
    PT: {
      title: "APENAS PARA QUEM QUER", accent: " O TOPO",
      desc: "Filtramos curiosos. Nosso foco é transformar atletas de alto rendimento em profissionais.",
      card1: { title: "IDADE E PERFIL", desc: "Exclusivo para atletas 18+ prontos para o nível de exigência do mercado europeu." },
      card2: { title: "INVESTIMENTO", desc: "Budget mínimo de €2.6k Euros disponível para viabilizar o seu projeto." },
      card3: { title: "BACKGROUND", desc: "Experiência comprovada em categorias de base ou clubes federados." }
    },
    EN: {
      title: "ONLY FOR THOSE SEEKING", accent: " THE TOP",
      desc: "We filter out the curious. Our focus is turning high-performance athletes into professionals.",
      card1: { title: "AGE & PROFILE", desc: "Exclusive for 18+ athletes ready for the European professional market." },
      card2: { title: "INVESTMENT", desc: "Minimum budget of €2.6k Euros available to enable your project." },
      card3: { title: "BACKGROUND", desc: "Proven experience in youth academies or federated clubs." }
    }
  }[language];

  return (
    <section id="filtro" className="py-16 md:py-24 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-7xl font-black italic uppercase mb-6 leading-tight text-brand-dark">
            {t.title} <span className="text-brand-accent">{t.accent}</span>
          </h2>
          <p className="text-zinc-500 italic text-xl">{t.desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FilterCard icon={Users} title={t.card1.title} desc={t.card1.desc} />
          <FilterCard icon={Euro} title={t.card2.title} desc={t.card2.desc} />
          <FilterCard icon={Trophy} title={t.card3.title} desc={t.card3.desc} />
        </div>
      </div>
    </section>
  );
}