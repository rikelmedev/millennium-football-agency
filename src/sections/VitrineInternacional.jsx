import React from 'react';

export default function VitrineInternacional({ language }) {
  const t = {
    PT: { 
      title: "ENFRENTAMOS", 
      accent: "OS GIGANTES", 
      desc: "Descubra como a Millennium coloca os seus atletas frente a frente com os maiores do mundo." 
    },
    EN: { 
      title: "WE FACE", 
      accent: "THE GIANTS", 
      desc: "Discover how Millennium puts its athletes face to face with the world's biggest clubs." 
    }
  }[language];

  // Os 3 IDs dos vídeos do YouTube Shorts
  const shortsIds = [
    "lH2NArI9J2A", 
    "Po5FQA09Hsg", 
    "XNDEXRHpukc"  
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-brand-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
          VITRINE DE ALTO NÍVEL
        </span>
        <h2 className="text-4xl md:text-7xl font-black italic text-brand-dark mb-6 uppercase leading-tight">
          {t.title} <br className="hidden md:block"/> <span className="text-brand-accent">{t.accent}</span>
        </h2>
        <p className="text-zinc-500 mb-16 text-lg max-w-2xl mx-auto">
          {t.desc}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {shortsIds.map((id, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden border-4 border-zinc-100 shadow-xl shadow-zinc-200 bg-black hover:-translate-y-2 transition-transform duration-300"
            >
              <iframe 
                src={`https://www.youtube.com/embed/${id}?controls=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}