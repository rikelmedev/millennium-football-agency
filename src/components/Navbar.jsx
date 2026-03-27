import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onCtaClick, language, setLanguage }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO E NOME */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo-millennium-icon.png" 
            alt="Millennium Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:rotate-12 transition-transform duration-300" 
          />
          <span className="font-heading text-white text-xl md:text-2xl font-black italic uppercase tracking-tighter">
            Millennium<span className="text-brand-accent">Football</span>
          </span>
        </a>

        {/* CONTROLES DIREITOS */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* SELETOR DE IDIOMA */}
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <button 
              onClick={() => setLanguage('PT')}
              className={`transition-colors ${language === 'PT' ? 'text-brand-accent' : 'text-slate-500 hover:text-white'}`}
            >
              PT
            </button>
            <span className="text-slate-800">/</span>
            <button 
              onClick={() => setLanguage('EN')}
              className={`transition-colors ${language === 'EN' ? 'text-brand-accent' : 'text-slate-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          {/* BOTÃO CTA (Candidatar-se) */}
          <button 
            onClick={onCtaClick}
            className="bg-white text-brand-dark hover:bg-brand-accent hover:text-white px-5 py-2 md:px-7 md:py-2.5 rounded-full font-heading font-black italic uppercase text-xs md:text-sm tracking-widest transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
          >
            {language === 'PT' ? 'Candidatar-se' : 'Apply Now'}
          </button>
        </div>
      </div>
    </nav>
  );
}