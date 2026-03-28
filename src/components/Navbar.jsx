import React from 'react';

export default function Navbar({ onCtaClick, language, setLanguage }) {
  return (
    <nav className="fixed w-full z-50 bg-brand-white/95 backdrop-blur-sm border-b border-zinc-100 px-6 py-4 shadow-sm relative h-24 flex items-center justify-end">
      
      <div className="hidden md:block flex-1"></div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
         <img src="/assets/logo-millennium-icon.png" alt="Millennium Logo" className="h-14 md:h-16 w-auto" />
         <span className="font-heading font-black italic text-2xl md:text-3xl text-brand-dark tracking-tighter uppercase leading-none">
            MILLENNIUM<span className="text-brand-accent">FOOTBALL</span>
         </span>
      </div>
      
      {/* 3. AÇÕES NA DIREITA (Idiomas e CTA) */}
      <div className="flex items-center gap-4 z-10">
        <div className="flex bg-zinc-100 rounded-full p-1 border border-zinc-200">
          <button onClick={() => setLanguage('PT')} className={`px-4 py-2 rounded-full text-xs font-bold ${language === 'PT' ? 'bg-brand-accent text-white shadow-md' : 'text-zinc-500'}`}>PT</button>
          <button onClick={() => setLanguage('EN')} className={`px-4 py-2 rounded-full text-xs font-bold ${language === 'EN' ? 'bg-brand-accent text-white shadow-md' : 'text-zinc-500'}`}>EN</button>
        </div>
        
        {/* Botão CTA Principal */}
        <button onClick={onCtaClick} className="bg-brand-dark text-white text-xs font-black px-7 py-3 rounded-full uppercase italic hover:bg-brand-accent hover:scale-105 transition-all shadow-md">
          {language === 'PT' ? 'CANDIDATAR-SE' : 'APPLY NOW'}
        </button>
      </div>
    </nav>
  );
}