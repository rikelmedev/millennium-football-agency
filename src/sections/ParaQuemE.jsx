import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function ParaQuemE({ language }) {
  const t = {
    PT: {
      title: "PARA QUEM É",
      accent: "O SHOWCASE?",
      forWho: [
        "Atletas de 18 a 23 anos buscando a primeira oportunidade na Europa.",
        "Jogadores que já têm base, mas não têm contatos no mercado.",
        "Atletas com passaporte europeu ou disponibilidade imediata para viajar."
      ],
      notFor: [
        "Atletas que buscam turismo na Europa.",
        "Jogadores fora de forma ou sem histórico de treinos.",
        "Quem espera promessas falsas de contratação garantida."
      ]
    },
    EN: {
      title: "WHO IS THE",
      accent: "SHOWCASE FOR?",
      forWho: [
        "Athletes aged 18 to 23 seeking their first opportunity in Europe.",
        "Players with foundation but lack contacts in the market.",
        "Athletes with a European passport or immediate availability to travel."
      ],
      notFor: [
        "Athletes looking for a tourist trip to Europe.",
        "Players out of shape or without a training history.",
        "Those expecting false promises of guaranteed contracts."
      ]
    }
  }[language];

  return (
    <section className="py-20 bg-zinc-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic text-brand-dark uppercase">
            {t.title} <span className="text-brand-accent">{t.accent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border-t-4 border-green-500 shadow-lg">
            <h3 className="text-2xl font-black italic uppercase text-brand-dark mb-6">É para você se...</h3>
            <ul className="space-y-4">
              {t.forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-zinc-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border-t-4 border-red-500 shadow-lg">
            <h3 className="text-2xl font-black italic uppercase text-brand-dark mb-6">NÃO é para você se...</h3>
            <ul className="space-y-4">
              {t.notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-zinc-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}