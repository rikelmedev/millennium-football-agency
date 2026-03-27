import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <img src="/assets/logo-millennium-icon.png" alt="Millennium Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-[-10px] border-t-2 border-brand-accent rounded-full opacity-40"
        />
      </motion.div>
      
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="font-heading text-white text-xl md:text-2xl font-black italic uppercase tracking-[0.4em]"
        >
          Millennium<span className="text-brand-accent">Football</span>
        </motion.h2>
      </div>
      <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-4 opacity-60">Construindo a Elite Europeia</p>
    </motion.div>
  );
}