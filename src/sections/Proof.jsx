import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Proof() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-dark">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <motion.div variants={fadeInUp} className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl group">
            <img 
              src="/assets/thalisson-millennium-heroi.jpg" 
              alt="Caso de Sucesso Thalisson" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
              <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                Ex-Sushiman
              </span>
              <h4 className="text-white font-heading text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
                De sushiman <br /> <span className="text-brand-accent">a herói</span>
              </h4>
            </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
            <h4 className="font-heading text-brand-accent uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-4">
              Caso Thalisson
            </h4>
            <h3 className="font-heading text-4xl md:text-6xl font-black italic uppercase leading-tight mb-8 text-white">
              Valorização de <br /> <span className="text-brand-accent underline decoration-brand-accent/30">10.000% em 3 anos</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-xl mb-6 font-body leading-relaxed">
              Descubra como a Millennium transformou a carreira do Thalisson, saindo de sushiman no Brasil para jogador profissional campeão na Eslovênia, com vitrine na prestigiada Conference League da UEFA.
            </p>
            <p className="text-slate-400 text-lg md:text-xl mb-10 font-body leading-relaxed">
              Esta não é apenas uma história de superação. É a prova real do nosso caminho estruturado para atletas que possuem o perfil e a determinação exigidos pela Millennium.
            </p>
            <button className="self-start bg-transparent border border-brand-accent text-brand-accent px-8 py-4 rounded-full font-heading font-black text-lg uppercase italic transition-all hover:bg-brand-accent hover:text-white shadow-[0_0_20px_rgba(217,119,87,0.1)] hover:shadow-[0_0_30px_rgba(217,119,87,0.4)]">
              Ver Trajetória Completa
            </button>
        </motion.div>
      </motion.div>
    </section>
  );
}