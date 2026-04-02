import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AtletasContratados({ language }) {
  const carouselRef = useRef(null);

  const t = {
    PT: { title: "NOSSOS ", accent: "CONTRATADOS", desc: "Eles viveram o Showcase e hoje assinaram seus contratos na Europa." },
    EN: { title: "OUR ", accent: "SIGNED ATHLETES", desc: "They lived the Showcase and today have signed their contracts in Europe." }
  }[language];

  const athletes = [
    { name: "ADONAI", club: "NK POLET", image: "/assets/cases/case-Adonai.jpg" },
    { name: "CARIOCA", club: "NK NEDELISCE", image: "/assets/cases/case-Carioca.jpg" },
    { name: "CASSIANO", club: "NK BREŽICE 1919", image: "/assets/cases/case-Cassiano.jpg" },
    { name: "CHRISTIAN", club: "NK SVLACIONICA", image: "/assets/cases/case-Christian.jpg" },
    { name: "CRISTOPHER", club: "NK DARUVAR", image: "/assets/cases/case-Cristopher.jpg" },
    { name: "DANIEL", club: "NK VARTEKS U20", image: "/assets/cases/case-Daniel.jpg" },
    { name: "EDSON", club: "NK PITOMACA", image: "/assets/cases/case-Edson.jpg" },
    { name: "EDUARDO", club: "NK JALZABET", image: "/assets/cases/case-Eduardo.jpg" },
    { name: "ENZO", club: "NK BILOGORA", image: "/assets/cases/case-Enzo.jpg" },
    { name: "GABRIEL", club: "NK DOBROVCE", image: "/assets/cases/case-Gabriel.jpg" },
    { name: "GABRIEL CASTRO", club: "NK SLOGA STRONCA", image: "/assets/cases/case-GabrielCastro.jpg" },
    { name: "GUILHERME", club: "NK MLADOST IVANOVEC", image: "/assets/cases/case-Guilherme.jpg" },
    { name: "INDIO", club: "NK BISTRA", image: "/assets/cases/case-Indio.jpg" },
    { name: "JONAS", club: "NK IVANICA", image: "/assets/cases/case-Jonas.jpg" },
    { name: "LEANDRO", club: "NK DARUVAR", image: "/assets/cases/case-Leandro.jpg" },
    { name: "LUIZINHO", club: "NK MARSONIA", image: "/assets/cases/case-Luizinho.jpg" },
    { name: "MARCELO", club: "NK NEDESLICEV", image: "/assets/cases/case-Marcelo.jpg" },
    { name: "MATEUS", club: "NK BILOGORAC", image: "/assets/cases/case-Mateus.jpg" },
    { name: "NICO", club: "NK BILOGORAC", image: "/assets/cases/case-Nico.jpg" },
    { name: "PEDRO", club: "NK NEDELIŠĆEUHOPOLJE", image: "/assets/cases/case-Pedro.jpg" },
    { name: "RANDER", club: "NK MEĐIMUREC PRETETINEC", image: "/assets/cases/case-Rander.jpg" },
    { name: "RODRIGO", club: "NK NEDELIŠĆE", image: "/assets/cases/case-Rodrigo.jpg" },
    { name: "TALISSON", club: "NK PLIVITCA", image: "/assets/cases/case-Talisson.jpg" },
    { name: "THIAGO", club: "NK SUHOPOLJE", image: "/assets/cases/case-Thiago.jpg" },
    { name: "THIAGO PATO", club: "NK PITOMACA", image: "/assets/cases/case-ThiagoPato.jpg" },
    { name: "WILSON KLEBER", club: "NK NEDELIŠĆ", image: "/assets/cases/case-Wilson.jpg" },
    { name: "YASSINE", club: "NK BILOGORA", image: "/assets/cases/case-Yassine.jpg" }
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = 320; 
      
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // EFEITO DE AUTO-PLAY (Passa sozinho a cada 3 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3000); 
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="py-24 bg-brand-white px-6 overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-black italic text-brand-dark uppercase leading-none mb-4">
              {t.title} <span className="text-brand-accent">{t.accent}</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium">{t.desc}</p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all text-2xl font-bold">&larr;</button>
            <button onClick={() => scroll('right')} className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all text-2xl font-bold">&rarr;</button>
          </div>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth">
          {athletes.map((athlete, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col flex-none w-[260px] md:w-[280px] snap-center rounded-[1.5rem] overflow-hidden shadow-xl shadow-zinc-200 border border-zinc-100 bg-white relative"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-black italic px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-md">
                Contratado
              </div>

              <div className="relative aspect-[4/5] w-full bg-zinc-100">
                <img src={athlete.image} alt={athlete.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="bg-white py-5 px-5 border-t border-zinc-100">
                <h4 className="text-brand-dark font-black italic text-xl uppercase leading-tight truncate">{athlete.name}</h4>
                <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mt-1 truncate">{athlete.club}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}