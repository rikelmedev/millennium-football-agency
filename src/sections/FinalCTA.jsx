import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-brand-accent text-center text-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none mb-8"
        >
          Estás pronto para <br /> ser o próximo?
        </motion.h2>
        
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="text-xl md:text-2xl text-brand-dark/80 font-medium mb-12 max-w-2xl font-body"
        >
          Se possuis o perfil federado e o budget exigido, a tua vaga na elite europeia está à distância de um clique.
        </motion.p>
        
        <motion.button 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-dark text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-heading font-black text-2xl md:text-3xl uppercase italic shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all tracking-tighter"
        >
          Candidatar-se à Seleção
        </motion.button>
        
        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="mt-8 text-brand-dark font-bold uppercase tracking-widest text-xs md:text-sm bg-brand-dark/10 px-6 py-2 rounded-full"
        >
          ⚠️ Apenas leads qualificados serão contactados.
        </motion.p>
      </div>
    </section>
  );
}