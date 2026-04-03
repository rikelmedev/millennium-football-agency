import React from 'react';
import { motion } from 'framer-motion';
import { Users, Euro, Trophy } from 'lucide-react';
import FilterCard from '../components/FilterCard';

export default function Filter({ language }) {
  const t = {
    PT: {
      tag: "PROCESSO DE SELEÇÃO",
      title: "ESTA OPORTUNIDADE É",
      accent: "PARA VOCÊ?",
      desc: "Não vendemos apenas pacotes, selecionamos talentos. Para manter o alto nível de exposição perante os scouts europeus, as vagas são limitadas por posição.",
      card1: { title: "PERFIL ATLETA", desc: "Buscamos jogadores com mentalidade profissional e base técnica sólida." },
      card2: { title: "INVESTIMENTO", desc: "O valor reflete a estrutura de elite e o acesso direto ao mercado europeu." },
      card3: { title: "FOCO TOTAL", desc: "25 dias de imersão absoluta para mudar o patamar da sua carreira." },
      cta: "QUERO MINHA AVALIAÇÃO"
    },
    EN: {
      tag: "SELECTION PROCESS",
      title: "IS THIS OPPORTUNITY",
      accent: "FOR YOU?",
      desc: "We don't just sell packages; we select talent. To maintain a high level of exposure to European scouts, spots are limited.",
      card1: { title: "ATHLETE PROFILE", desc: "We look for players with a professional mindset and solid technical base." },
      card2: { title: "INVESTMENT", desc: "The value reflects the elite structure and direct access to the European market." },
      card3: { title: "TOTAL FOCUS", desc: "25 days of absolute immersion to change the level of your career." },
      cta: "I WANT MY EVALUATION"
    }
  }[language] || {}; 

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
          {/* Agora os títulos e descrições existem no objeto t */}
          <FilterCard icon={Users} title={t.card1?.title} desc={t.card1?.desc} />
          <FilterCard icon={Euro} title={t.card2?.title} desc={t.card2?.desc} />
          <FilterCard icon={Trophy} title={t.card3?.title} desc={t.card3?.desc} />
        </div>
      </div>
    </section>
  );
}