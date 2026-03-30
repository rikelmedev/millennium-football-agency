import React from 'react';
import { Target, Trophy, Users } from 'lucide-react';

export default function OqueEShowcase({ language }) {
  const t = {
    PT: {
      tag: "O PROJETO",
      title: "O CAMINHO MAIS CURTO ENTRE VOCÊ E O",
      accent: "FUTEBOL EUROPEU",
      desc: "O Showcase Millennium não é uma 'peneira' comum onde você é apenas mais um. É uma imersão de elite de 10 dias na Eslovênia e Croácia, desenhada estrategicamente para atletas que já possuem o talento, mas não têm os contatos certos. Você vai treinar, viver e jogar como um profissional europeu, sob o olhar atento de quem decide o futuro nos clubes.",
      items: [
        { 
          title: "Exposição Real", 
          desc: "Nada de vídeos editados. Você jogará partidas reais contra clubes da 1ª e 2ª divisão, com scouts oficiais na arquibancada.",
          icon: <Target className="text-brand-accent" size={32} />
        },
        { 
          title: "Metodologia UEFA", 
          desc: "Treinos intensivos com comissão técnica licenciada, focados no que o mercado europeu exige taticamente hoje.",
          icon: <Trophy className="text-brand-accent" size={32} />
        },
        { 
          title: "Network Direto", 
          desc: "Acesso direto à diretoria da Millennium, agência com trânsito livre nos maiores clubes do Leste Europeu.",
          icon: <Users className="text-brand-accent" size={32} />
        }
      ]
    },
    EN: {
      tag: "THE PROJECT",
      title: "THE SHORTEST PATH BETWEEN YOU AND",
      accent: "EUROPEAN FOOTBALL",
      desc: "The Millennium Showcase is not just another 'tryout' where you're just a number. It's a 10-day elite immersion in Slovenia and Croatia, strategically designed for athletes who have the talent but lack the right connections. You will train, live, and play like a European pro, under the watchful eye of those who decide the future in the clubs.",
      items: [
        { 
          title: "Real Exposure", 
          desc: "No edited highlights. You will play real matches against 1st and 2nd division clubs, with official scouts in the stands.",
          icon: <Target className="text-brand-accent" size={32} />
        },
        { 
          title: "UEFA Methodology", 
          desc: "Intensive training with licensed coaching staff, focused on today's tactical demands in the European market.",
          icon: <Trophy className="text-brand-accent" size={32} />
        },
        { 
          title: "Direct Network", 
          desc: "Direct access to Millennium's board, an agency with free passage into the biggest clubs in Eastern Europe.",
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