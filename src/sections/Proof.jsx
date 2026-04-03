import React from 'react';
import { motion } from 'framer-motion';

export default function Proof({ language }) {
  const t = {
    PT: {
      tag: "O MAIOR CASE DE SUCESSO",
      title: "DE SUSHIMAN À", 
      accent: "CONFERENCE LEAGUE",
      marketValue: "VALOR DE MERCADO ATUAL", 
      value: "€ 1.500.000,00+",
      videoID: "CNuYovNsoiE", 
      steps: [
        { year: "2021", title: "SUSHIMAN NO BRASIL", desc: "Dividia o tempo entre o trabalho no sushi e o sonho de jogar." },
        { year: "2022", title: "6ª DIVISÃO (CRO)", desc: "Porta de entrada via Millennium no NK Sloboda." },
        { year: "2023", title: "ASCENSÃO EUROPEIA", desc: "Destaque tático e físico no mercado do Leste Europeu." },
        { year: "HOJE", title: "ELITE UEFA", desc: "Protagonista no Olimpija Ljubljana e Conference League." }
      ]
    },
    EN: {
      tag: "THE GREATEST SUCCESS CASE",
      title: "FROM SUSHIMAN TO", 
      accent: "CONFERENCE LEAGUE",
      marketValue: "CURRENT MARKET VALUE", 
      value: "€ 1,500,000.00+",
      videoID: "CNuYovNsoiE",
      steps: [
        { year: "2021", title: "SUSHIMAN IN BRAZIL", desc: "Split his time between sushi work and the dream of playing." },
        { year: "2022", title: "6TH DIV (CRO)", desc: "Entry point via Millennium at NK Sloboda." },
        { year: "2023", title: "EUROPEAN RISE", desc: "Tactical and physical standout in the Eastern European market." },
        { year: "TODAY", title: "UEFA ELITE", desc: "Star at Olimpija Ljubljana and Conference League." }
      ]
    }
  }[language] || {};

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-4 block">{t.tag}</span>
          <h2 className="text-5xl md:text-7xl font-black italic text-brand-dark uppercase leading-[0.9] mb-8">
            {t.title} <br/><span className="text-brand-accent">{t.accent}</span>
          </h2>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-brand-dark mb-8 bg-black aspect-video relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${t.videoID}?autoplay=0&rel=0`}
              title="Thalisson Story - Millennium Football"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl shadow-brand-accent/10">
             <span className="text-brand-accent font-black text-xs uppercase mb-2 block">{t.marketValue}</span>
             <h3 className="text-4xl md:text-5xl font-black italic">{t.value}</h3>
          </div>
        </div>

        <div className="space-y-4 lg:pt-24">
          {t.steps?.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] flex gap-6 items-center border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl transition-all group"
            >
              <span className="text-2xl md:text-4xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all w-24">
                {step.year}
              </span>
              <div className="h-12 w-[1px] bg-zinc-200"></div>
              <div>
                <h4 className="font-black italic uppercase text-lg md:text-xl text-brand-dark">{step.title}</h4>
                <p className="text-sm opacity-70 font-medium text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}