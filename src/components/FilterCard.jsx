import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function FilterCard({ icon: Icon, title, desc, accent = false }) {
  const cardBase = "p-8 md:p-10 bg-brand-dark border rounded-3xl text-center flex flex-col items-center justify-center transition-all shadow-xl";
  const cardStyle = accent 
      ? `${cardBase} border-brand-accent/30 shadow-brand-accent/10 hover:border-brand-accent/60 hover:shadow-brand-accent/20`
      : `${cardBase} border-white/5 shadow-black/30 hover:border-white/10 hover:shadow-black/60`;

  return (
      <motion.div variants={fadeInUp} className={cardStyle}>
          <div className="w-20 h-20 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8">
              <Icon className="text-brand-accent" size={40} />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-5 uppercase italic tracking-tight text-white">{title}</h3>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-body">{desc}</p>
      </motion.div>
  );
}