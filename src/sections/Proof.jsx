import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Trophy, Star, DollarSign, Play } from 'lucide-react';

export default function Proof({ language }) {
  const t = {
    PT: {
      tag: "O MAIOR CASE DE SUCESSO",
      title: "A JORNADA DE",
      accent: "THALISSON CHARLES",
      desc: "De sushiman no Brasil a protagonista na elite europeia. O Thalisson não é apenas um exemplo de superação, é a prova da eficiência do nosso plano de carreira.",
      marketValue: "VALOR DE MERCADO ATUAL",
      value: "€ 1.500.000,00+",
      stats: [
        { label: "STATUS", val: "ELITE UEFA" },
        { label: "TÍTULOS", val: "CAMPEÃO NACIONAL" },
        { label: "VITRINE", val: "CONFERENCE LEAGUE" }
      ],
      steps: [
        { year: "2021", title: "VARZEA / SUSHIMAN", desc: "Trabalhava no Brasil sem contrato profissional.", color: "bg-zinc-100" },
        { year: "2022", title: "6ª DIVISÃO (CRO)", desc: "Porta de entrada via Millennium no NK Sloboda.", color: "bg-brand-accent/10" },
        { year: "2023", title: "3ª DIVISÃO (SLO)", desc: "Destaque e transferência estratégica.", color: "bg-brand-accent/20" },
        { year: "HOJE", title: "1ª DIVISÃO (UEFA)", desc: "Estrela do Olimpija Ljubljana.", color: "bg-zinc-900 text-white" }
      ]
    },
    EN: {
      tag: "THE GREATEST SUCCESS CASE",
      title: "THE JOURNEY OF",
      accent: "THALISSON CHARLES",
      desc: "From sushiman in Brazil to a protagonist in the European elite. Thalisson is not just an example of resilience; he is proof of our career plan's efficiency.",
      marketValue: "CURRENT MARKET VALUE",
      value: "€ 1,500,000.00+",
      stats: [
        { label: "STATUS", val: "UEFA ELITE" },
        { label: "TITLES", val: "NATIONAL CHAMPION" },
        { label: "EXPOSURE", val: "CONFERENCE LEAGUE" }
      ],
      steps: [
        { year: "2021", title: "AMATEUR / SUSHIMAN", desc: "Worked in Brazil without a pro contract.", color: "bg-zinc-100" },
        { year: "2022", title: "6TH DIV (CRO)", desc: "Entry via Millennium at NK Sloboda.", color: "bg-brand-accent/10" },
        { year: "2023", title: "3RD DIV (SLO)", desc: "Top performer and strategic transfer.", color: "bg-brand-accent/20" },
        { year: "TODAY", title: "1ST DIV (UEFA)", desc: "Star of Olimpija Ljubljana.", color: "bg-zinc-900 text-white" }
      ]
    }
  }[language];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">{t.tag}</span>
            <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark uppercase leading-[0.9] mb-8">
              {t.title} <br/> <span className="text-brand-accent">{t.accent}</span>
            </h2>
            <p className="text-zinc-600 text-xl mb-10 leading-relaxed italic border-l-4 border-brand-accent pl-6">
              "{t.desc}"
            </p>

            <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-brand-accent/20">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <DollarSign size={120} />
               </div>
               <span className="text-brand-accent font-black tracking-widest text-xs uppercase mb-2 block">{t.marketValue}</span>
               <h3 className="text-4xl md:text-5xl font-black italic mb-8">{t.value}</h3>
               
               <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                 {t.stats.map((s, i) => (
                   <div key={i}>
                     <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">{s.label}</p>
                     <p className="text-white font-black italic text-xs md:text-sm uppercase leading-tight">{s.val}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="space-y-4">
            {t.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 md:p-8 rounded-[2rem] flex gap-6 items-center border border-zinc-100 shadow-sm hover:shadow-xl transition-all ${step.color}`}
              >
                <span className="text-2xl md:text-3xl font-black italic opacity-30 w-16">{step.year}</span>
                <div className="h-12 w-[1px] bg-zinc-300 hidden md:block"></div>
                <div>
                  <h4 className="font-black italic uppercase text-lg md:text-xl mb-1">{step.title}</h4>
                  <p className="text-sm opacity-70 font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* BOTÃO PARA VÍDEO DO CASE */}
            <button className="w-full mt-6 bg-brand-accent hover:bg-brand-dark text-white font-black italic py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group uppercase tracking-widest text-sm">
              <Play className="group-hover:scale-125 transition-transform" fill="currentColor" />
              Ver documentário do case
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}