import React from 'react';
import { motion } from 'framer-motion';
import { Users, Euro, Trophy } from 'lucide-react';
import FilterCard from '../components/FilterCard';

export default function Filter({ language }) {
  const t = {
    PT: {
      title: "ESTA OPORTUNIDADE É", accent: "PARA VOCÊ?",
      desc: "Não vendemos apenas pacotes, selecionamos talentos. Vagas limitadas por posição.",
      card1: { title: "PERFIL ATLETA", desc: "Buscamos mentalidade profissional e base técnica sólida." },
      card2: { title: "INVESTIMENTO", desc: "Estrutura de elite com acesso direto ao mercado europeu." },
      card3: { title: "FOCO TOTAL", desc: "25 dias de imersão absoluta para mudar a sua carreira." }
    },
    EN: {
      title: "IS THIS OPPORTUNITY", accent: "FOR YOU?",
      desc: "We don't just sell packages; we select talent. Spots are limited by position.",
      card1: { title: "ATHLETE PROFILE", desc: "We look for a professional mindset and solid technical base." },
      card2: { title: "INVESTMENT", desc: "Elite structure with direct access to the European market." },
      card3: { title: "TOTAL FOCUS", desc: "25 days of absolute immersion to change your career." }
    }
  }[language] || {};

  return (
    <section className="py-24 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black italic uppercase text-brand-dark">
            {t.title} <span className="text-brand-accent">{t.accent}</span>
          </h2>
          <p className="text-zinc-500 italic text-xl mt-4">{t.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <FilterCard icon={Users} title={t.card1?.title} desc={t.card1?.desc} />
          <FilterCard icon={Euro} title={t.card2?.title} desc={t.card2?.desc} />
          <FilterCard icon={Trophy} title={t.card3?.title} desc={t.card3?.desc} />
        </div>
      </div>
    </section>
  );
}