import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck, TrendingUp } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FAQ({ language }) {
  const t = {
    PT: {
      title: "O que garante a tua ", accent: "Segurança?",
      q1: { title: "Logística Europeia", desc: "Sede própria na Croácia. Gerenciamos tudo: aeroporto, estadia e alimentação de performance." },
      q2: { title: "Segurança Familiar", desc: "Suporte jurídico, contratos padrão FIFA e acompanhamento humano 24/7." },
      q3: { title: "Investimento vs Ativo", desc: "Não é custo, é investimento no teu maior ativo. Salários na elite europeia compensam o aporte." }
    },
    EN: {
      title: "What guarantees your ", accent: "Safety?",
      q1: { title: "European Logistics", desc: "Own headquarters in Croatia. We manage everything: airport, stay, and performance meals." },
      q2: { title: "Family Security", desc: "Full legal support, FIFA standard contracts, and 24/7 human assistance." },
      q3: { title: "Investment vs Asset", desc: "It's not a cost; it's an investment in your greatest asset. Elite salaries quickly pay off." }
    }
  }[language];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" className="text-center font-heading text-4xl md:text-6xl font-black text-white italic uppercase leading-none mb-16">
          {t.title} <span className="text-brand-accent">{t.accent}</span>
        </motion.h2>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
            <Plane className="text-brand-accent flex-shrink-0" size={32} />
            <div>
              <h4 className="text-2xl font-bold text-white italic uppercase mb-2">{t.q1.title}</h4>
              <p className="text-slate-400 font-body">{t.q1.desc}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
            <ShieldCheck className="text-brand-accent flex-shrink-0" size={32} />
            <div>
              <h4 className="text-2xl font-bold text-white italic uppercase mb-2">{t.q2.title}</h4>
              <p className="text-slate-400 font-body">{t.q2.desc}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 bg-brand-accent p-8 rounded-3xl text-brand-dark">
            <TrendingUp className="text-brand-dark flex-shrink-0" size={32} />
            <div>
              <h4 className="text-2xl font-black italic uppercase mb-2">{t.q3.title}</h4>
              <p className="font-medium font-body">{t.q3.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}