import React from 'react';
import { Target, Trophy, Users } from 'lucide-react';

export default function OqueEShowcase({ language }) {
  const t = {
    PT: {
      tag: "O PROJETO",
      title: "UMA IMERSÃO FOCADA EM",
      accent: "RESULTADOS REAIS",
      desc: "O Showcase da Millennium oferece 26 dias na Croácia de treinamento intensivo e jogos contra equipes de diversas divisões europeias. Esta é a sua chance de ser avaliado por olheiros e diretores de clubes que buscam talentos exatamente como você.",
      items: [
        { 
          title: "Jogos Reais", 
          desc: "Partidas contra equipes da 1ª, 2ª e 3ª divisão. Você em campo contra a elite local.",
          icon: <Target className="text-brand-accent" size={32} />
        },
        { 
          title: "Treinamento Europeu", 
          desc: "Preparação física e tática voltada para a exigência do futebol moderno europeu.",
          icon: <Trophy className="text-brand-accent" size={32} />
        },
        { 
          title: "Exposição Direta", 
          desc: "Seu futebol visto de perto por quem assina os contratos nos clubes.",
          icon: <Users className="text-brand-accent" size={32} />
        }
      ]
    },
    EN: {
      tag: "THE PROJECT",
      title: "AN IMMERSION FOCUSED ON",
      accent: "REAL RESULTS",
      desc: "The Millennium Showcase offers 26 days in Croatia of intensive training and matches against teams from various European divisions. This is your chance to be evaluated by scouts and club directors looking for talent just like you.",
      items: [
        { 
          title: "Real Matches", 
          desc: "Games against 1st, 2nd, and 3rd division teams. You on the pitch against local elite.",
          icon: <Target className="text-brand-accent" size={32} />
        },
        { 
          title: "European Training", 
          desc: "Physical and tactical preparation focused on the demands of modern European football.",
          icon: <Trophy className="text-brand-accent" size={32} />
        },
        { 
          title: "Direct Exposure", 
          desc: "Your football seen up close by those who sign the contracts at the clubs.",
          icon: <Users className="text-brand-accent" size={32} />
        }
      ]
    }
  }[language];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-brand-accent font-bold tracking-[0.3em] text-sm uppercase mb-4 block">{t.tag}</span>
            <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark uppercase leading-[0.95] mb-8">
              {t.title} <span className="text-brand-accent">{t.accent}</span>
            </h2>
          </div>
          <div className="md:pt-12">
            <p className="text-zinc-600 text-xl leading-relaxed italic border-l-4 border-brand-accent pl-6">
              "{t.desc}"
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-200 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-black italic text-brand-dark uppercase text-2xl mb-4">{item.title}</h4>
              <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}