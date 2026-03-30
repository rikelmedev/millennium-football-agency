import React from 'react';
import { Check } from 'lucide-react';

export default function OqueInclui({ language }) {
  const t = {
    PT: {
      title: "VOCÊ SÓ PRECISA",
      accent: "JOGAR BOLA",
      desc: "Nós cuidamos de toda a estrutura para que sua única preocupação seja o seu desempenho em campo. O Showcase inclui:",
      items: [
        { label: "Alojamento em CT Profissional", detail: "Ambiente focado 100% em performance." },
        { label: "Alimentação de Atleta", detail: "Dieta balanceada inclusa (Café, Almoço e Jantar)." },
        { label: "Uniformes Oficiais", detail: "Material de treino e jogo da Millennium Football." },
        { label: "Transporte Exclusivo", detail: "Logística completa para treinos e estádios." },
        { label: "Gravação Profissional", detail: "Suas partidas gravadas para criação de Scouting Report." },
        { label: "Assessoria Internacional", detail: "Acompanhamento 24h da nossa equipe na Europa." }
      ]
    },
    EN: {
      title: "YOU JUST NEED",
      accent: "TO PLAY BALL",
      desc: "We take care of the entire structure so your only concern is your performance on the pitch. The Showcase includes:",
      items: [
        { label: "Pro-level Accommodation", detail: "Environment 100% focused on high performance." },
        { label: "Athlete's Nutrition", detail: "Full balanced diet included (Breakfast, Lunch, and Dinner)." },
        { label: "Official Kits", detail: "Millennium Football training and match gear." },
        { label: "Exclusive Transport", detail: "Full logistics for all training sessions and stadiums." },
        { label: "Pro Recording", detail: "Your matches recorded for Scouting Report creation." },
        { label: "International Support", detail: "24/7 assistance from our team on the ground in Europe." }
      ]
    }
  }[language];

  return (
    <section className="py-24 bg-brand-dark px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-tight">
            {t.title} <br/> <span className="text-brand-accent">{t.accent}</span>
          </h2>
          <p className="text-zinc-400 mt-6 text-xl max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-brand-accent rounded-full p-1 mt-1">
                <Check className="text-white" size={16} />
              </div>
              <div>
                <span className="text-white font-black italic uppercase block text-lg">{item.label}</span>
                <span className="text-zinc-500 text-sm font-medium">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}