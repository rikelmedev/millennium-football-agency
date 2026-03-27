import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import Filter from './sections/Filter';
import VitrineInternacional from './sections/VitrineInternacional';
import PlacementGallery from './sections/PlacementGallery';
import FamilyTrust from './sections/FamilyTrust';
import InsideShowcase from './sections/InsideShowcase';
import DraftEuropa from './sections/DraftEuropa';
import Proof from './sections/Proof';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import QualificationModal from './components/QualificationModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('PT');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent/30 overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onCtaClick={openModal} language={language} setLanguage={setLanguage} />
          <main>
            <Hero 
             videoID={language === 'PT' ? 'CJjp8afhPT4' : 'hqwE-6tbSIE'} 
             onCtaClick={openModal} 
             language={language} 
             />
            <Filter language={language} />
            <VitrineInternacional language={language} />
            <PlacementGallery language={language} />
            <FamilyTrust language={language} />
            <InsideShowcase language={language} />
            <DraftEuropa language={language} />
            <Proof language={language} />
            <FAQ language={language} />
            <FinalCTA onCtaClick={openModal} language={language} />
          </main>
          <footer className="py-16 text-center border-t border-white/5 px-6 bg-[#080808]">
            <div className="text-brand-accent font-heading font-black italic uppercase tracking-widest text-xl mb-4">
              Millennium<span className="text-white">Football</span>
            </div>
            <p className="text-slate-600 font-heading text-sm uppercase tracking-widest leading-loose">
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