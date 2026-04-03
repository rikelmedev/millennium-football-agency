import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AtletasContratados({ language }) {
  const carouselRef = useRef(null);

  const t = {
    PT: {
      title: "NOSSOS ", accent: "CONTRATADOS",
      desc: "Atletas que viveram o Showcase e hoje assinaram seus contratos profissionais na Europa."
    },
    EN: {
      title: "OUR ", accent: "SIGNED ATHLETES",
      desc: "Athletes who lived the Showcase and today have signed their professional contracts in Europe."
    }
  }[language] || {};

  const athletes = [
    { name: "ADONAI", club: "NK POLET", image: "/assets/case-Adonai.jpg" },
    { name: "CARIOCA", club: "NK NEDELISCE", image: "/assets/case-Carioca.jpg" },
    { name: "CASSIANO", club: "NK BREŽICE 1919", image: "/assets/case-Cassiano.jpg" },
    { name: "CHRISTIAN", club: "NK SVLACIONICA", image: "/assets/case-Christian.jpg" },
    { name: "CRISTOPHER", club: "NK DARUVAR", image: "/assets/case-Cristopher.jpg" },
    { name: "DANIEL", club: "NK VARTEKS U20", image: "/assets/case-Daniel.jpg" },
    { name: "EDSON", club: "NK PITOMACA", image: "/assets/case-Edson.jpg" },
    { name: "EDUARDO", club: "NK JALZABET", image: "/assets/case-Eduardo.jpg" },
    { name: "ENZO", club: "NK BILOGORA", image: "/assets/case-Enzo.jpg" },
    { name: "GABRIEL", club: "NK DOBROVCE", image: "/assets/case-Gabriel.jpg" },
    { name: "GABRIEL CASTRO", club: "NK SLOGA STRONCA", image: "/assets/case-GabrielCastro.jpg" },
    { name: "GUILHERME", club: "NK MLADOST IVANOVEC", image: "/assets/case-Guilherme.jpg" },
    { name: "INDIO", club: "NK BISTRA", image: "/assets/case-Indio.jpg" },
    { name: "JONAS", club: "NK IVANICA", image: "/assets/case-Jonas.jpg" },
    { name: "LEANDRO", club: "NK DARUVAR", image: "/assets/case-Leandro.jpg" },
    { name: "LUIZINHO", club: "NK MARSONIA", image: "/assets/case-Luizinho.jpg" },
    { name: "MARCELO", club: "NK NEDESLICEV", image: "/assets/case-Marcelo.jpg" },
    { name: "MATEUS", club: "NK BILOGORAC", image: "/assets/case-Mateus.jpg" },
    { name: "NICO", club: "NK BILOGORAC", image: "/assets/case-Nico.jpg" },
    { name: "PEDRO", club: "NK NEDELIŠĆEUHOPOLJE", image: "/assets/case-Pedro.jpg" },
    { name: "RANDER", club: "NK MEĐIMUREC PRETETINEC", image: "/assets/case-Rander.jpg" },
    { name: "RODRIGO", club: "NK NEDELIŠĆE", image: "/assets/case-Rodrigo.jpg" },
    { name: "TALISSON", club: "NK PLIVITCA", image: "/assets/case-Talisson.jpg" },
    { name: "THIAGO", club: "NK SUHOPOLJE", image: "/assets/case-Thiago.jpg" },
    { name: "THIAGO PATO", club: "NK PITOMACA", image: "/assets/case-ThiagoPato.jpg" },
    { name: "WILSON KLEBER", club: "NK NEDELIŠĆ", image: "/assets/case-Wilson.jpg" },
    { name: "YASSINE", club: "NK BILOGORA", image: "/assets/case-Yassine.jpg" }
  ];

  // Efeito de Auto-play (Passar sozinho)
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' }); 
        }
      }
    }, 1000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-white px-6 overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-black italic text-brand-dark uppercase leading-none mb-4">
              {t.title} <span className="text-brand-accent">{t.accent}</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium max-w-2xl">{t.desc}</p>
          </div>
        </div>

        <div 
          ref={carouselRef} 
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {athletes.map((a, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex-none w-[280px] md:w-[300px] snap-center rounded-[1.5rem] overflow-hidden shadow-xl shadow-zinc-200 border border-zinc-100 bg-white"
            >
              <div className="relative aspect-[4/5] w-full bg-zinc-950 flex items-center justify-center">
                
                <img 
                  src={a.image} 
                  alt={a.name} 
                  className="w-full h-full object-contain" 
                />
                
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-black italic px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-md">
                  Aprovado
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}