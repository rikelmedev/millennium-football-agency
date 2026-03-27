import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

export default function QualificationModal({ isOpen, onClose, language }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ age: '', budget: '', name: '', phone: '' });

  const t = {
    PT: { title: "Verificação de Perfil", next: "Próximo", send: "Enviar Candidatura", success: "Enviado com Sucesso!" },
    EN: { title: "Profile Verification", next: "Next", send: "Apply Now", success: "Application Sent!" }
  }[language];

  const handleNext = () => (parseInt(formData.age) >= 16 && formData.budget === 'sim') ? setStep(2) : setStep(4);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-zinc-900 border border-white/10 p-8 rounded-[2rem] max-w-md w-full relative">
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-500"><X /></button>
            
            {step === 1 && (
              <div className="text-center">
                <h3 className="font-heading text-2xl font-black italic uppercase text-white mb-6">{t.title}</h3>
                <input type="number" placeholder="Sua Idade" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white mb-4 outline-none focus:border-brand-accent" onChange={(e) => setFormData({...formData, age: e.target.value})} />
                <p className="text-xs text-slate-500 mb-2 uppercase font-bold text-left">Possui budget para investimento (Passagens/Showcase)?</p>
                <div className="flex gap-2">
                  <button onClick={() => setFormData({...formData, budget: 'sim'})} className={`flex-1 py-3 rounded-xl border transition-all ${formData.budget === 'sim' ? 'bg-brand-accent border-brand-accent text-white' : 'border-white/10 text-slate-400'}`}>Sim</button>
                  <button onClick={() => setFormData({...formData, budget: 'nao'})} className={`flex-1 py-3 rounded-xl border transition-all ${formData.budget === 'nao' ? 'bg-red-500/20 border-red-500 text-red-500' : 'border-white/10 text-slate-400'}`}>Não</button>
                </div>
                <button onClick={handleNext} className="w-full bg-white text-brand-dark font-black py-4 rounded-xl mt-8 uppercase italic hover:bg-brand-accent hover:text-white transition-colors">{t.next}</button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
                <h3 className="font-heading text-2xl font-black italic uppercase text-white">Contato Direto</h3>
                <input required placeholder="Nome Completo" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-brand-accent" />
                <input required placeholder="WhatsApp (com DDD)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-brand-accent" />
                <button className="w-full bg-brand-accent text-white font-black py-4 rounded-xl uppercase italic shadow-lg shadow-brand-accent/20">{t.send}</button>
              </form>
            )}

            {step === 3 && <div className="text-center py-10"><CheckCircle className="text-brand-accent mx-auto mb-4" size={60} /><h3 className="text-white font-black italic uppercase">{t.success}</h3></div>}
            {step === 4 && <div className="text-center py-10"><h3 className="text-white font-black italic uppercase">Infelizmente você não se enquadra</h3><p className="text-slate-500 mt-2">Buscamos atletas com idade competitiva e disponibilidade financeira para o projeto.</p></div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}