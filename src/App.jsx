import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';


import Navbar from './components/Navbar';
import Preloader from './components/Preloader';


import Hero from './sections/Hero';
import OqueEShowcase from './sections/OqueEShowcase';   
import ParaQuemE from './sections/ParaQuemE';           
import OqueInclui from './sections/OqueInclui';         
import InsideShowcase from './sections/InsideShowcase'; 
import AtletasContratados from './sections/AtletasContratados'; 
import Estatisticas from './sections/Estatisticas';     
import Proof from './sections/Proof';                   
import VitrineInternacional from './sections/VitrineInternacional'; 
import Filter from './sections/Filter';                
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import QualificationModal from './sections/QualificationModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('PT');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-accent/20 overflow-x-hidden font-sans">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onCtaClick={openModal} language={language} setLanguage={setLanguage} />
          
          <main className="flex flex-col w-full">
            <Hero 
              videoID={language === 'PT' ? 'CJjp8afhPT4' : 'hqwE-6tbSIE'} 
              onCtaClick={openModal} 
              language={language} 
              backgroundImage="/assets/time.jpg" 
            />

            <OqueEShowcase language={language} />

            <ParaQuemE language={language} />

            <OqueInclui language={language} />

            <InsideShowcase language={language} />

            <AtletasContratados language={language} />

            <Estatisticas language={language} />

            <Proof language={language} />

            <VitrineInternacional language={language} />

            <Filter language={language} />

            <FAQ language={language} />
            <FinalCTA onCtaClick={openModal} language={language} />
          </main>
          
          <footer className="py-24 text-center border-t border-zinc-100 px-6 bg-zinc-50">
            <div className="text-brand-accent font-heading font-black italic uppercase tracking-widest text-2xl mb-4">
              Millennium<span className="text-zinc-900">Football</span>
            </div>
            <p className="text-zinc-400 font-heading text-xs uppercase tracking-[0.3em] font-bold">
              © 2026 Millennium Football Agency. <br className="md:hidden" /> Todos os direitos reservados.
            </p>
          </footer>
        </>
      )}

      <QualificationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}

export default App;