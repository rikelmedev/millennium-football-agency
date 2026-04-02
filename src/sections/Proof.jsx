import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, DollarSign } from 'lucide-react';

export default function Proof({ language }) {
  const t = {
    PT: {
      title: "DE SUSHIMAN À", accent: "CONFERENCE LEAGUE",
      marketValue: "VALOR DE MERCADO ATUAL", value: "€ 1.500.000,00+",
      steps: [
        { year: "2021", title: "AMADOR", desc: "Trabalhava como sushiman no Brasil." },
        { year: "2022", title: "6ª DIV (CRO)", desc: "Porta de entrada via Millennium." },
        { year: "2023", title: "3ª DIV (SLO)", desc: "Destaque e transferência estratégica." },
        { year: "HOJE", title: "ELITE UEFA", desc: "Estrela do Olimpija Ljubljana." }
      ]
    },
    EN: {
      title: "FROM SUSHIMAN TO", accent: "CONFERENCE LEAGUE",
      marketValue: "CURRENT MARKET VALUE", value: "€ 1,500,000.00+",
      steps: [
        { year: "2021", title: "AMATEUR", desc: "Worked as a sushiman in Brazil." },
        { year: "2022", title: "6TH DIV (CRO)", desc: "Entry point via Millennium." },
        { year: "2023", title: "3RD DIV (SLO)", desc: "Performance-led strategic transfer." },
        { year: "TODAY", title: "UEFA ELITE", desc: "Star of Olimpija Ljubljana." }
      ]
    }
  }[language] || {};

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-black italic text-brand-dark uppercase leading-[0.9] mb-8">{t.title} <br/><span className="text-brand-accent">{t.accent}</span></h2>
          <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl">
             <span className="text-brand-accent font-black text-xs uppercase mb-2 block">{t.marketValue}</span>
             <h3 className="text-4xl md:text-5xl font-black italic">{t.value}</h3>
          </div>
        </div>
        <div className="space-y-4">
          {t.steps?.map((step, i) => (
            <div key={i} className="p-6 rounded-[2rem] flex gap-6 items-center border border-zinc-100 bg-zinc-50 shadow-sm">
              <span className="text-2xl font-black italic opacity-30 w-16">{step.year}</span>
              <div>
                <h4 className="font-black italic uppercase text-lg">{step.title}</h4>
                <p className="text-sm opacity-70">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}