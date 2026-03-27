import React, { useState } from 'react';

const vlogs = [
  { id: 'JP5au2CRRp0', title: 'Dia 1: A Chegada', desc: 'O início da busca pelo contrato.' },
  { id: '7N_ZtyBm4Lo', title: 'Dia 2: Treinos', desc: 'Adaptação e nível técnico.' },
  { id: 'RQhGIiE5roo', title: 'Dias 3 e 4: Jogos', desc: 'Vitrine contra clubes europeus.' },
  { id: 'qoo3UyFqwlI', title: 'Aftermovie 2024', desc: 'O resumo da última edição.' }
];

export default function InsideShowcase({ language }) {
  const [activeVideo, setActiveVideo] = useState(vlogs[0].id);

  return (
    <section className="py-24 bg-brand-dark px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl font-black text-white italic uppercase mb-12">
          Inside the <span className="text-brand-accent">Showcase</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10">
            <iframe src={`https://www.youtube.com/embed/${activeVideo}?rel=0`} className="w-full h-full" allowFullScreen />
          </div>
          <div className="flex flex-col gap-4">
            {vlogs.map((v) => (
              <button key={v.id} onClick={() => setActiveVideo(v.id)} 
                className={`flex gap-4 p-4 rounded-2xl border transition-all text-left ${activeVideo === v.id ? 'bg-brand-accent/10 border-brand-accent' : 'bg-white/5 border-white/5'}`}>
                <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} className="w-20 h-14 rounded-lg object-cover" />
                <div><h4 className="text-white font-bold text-xs uppercase italic">{v.title}</h4></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}