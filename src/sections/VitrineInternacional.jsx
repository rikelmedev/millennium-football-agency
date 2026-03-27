import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

export default function VitrineInternacional() {
  return (
    <section className="py-24 md:py-32 bg-[#080808] px-6 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 px-4 py-2 rounded-full mb-6 border border-brand-accent/20">
            <Globe className="text-brand-accent" size={16} />
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest">Vitrine de Alto Nível</span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white italic uppercase leading-none mb-8">
            Enfrentamos <span className="text-brand-accent">os Gigantes</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-body leading-relaxed mb-10">
            Não é apenas sobre treinar. É sobre ser testado contra estruturas de elite mundial como o <strong>Al Sadd do Qatar</strong> e clubes da 1ª divisão europeia. 
            A Millennium coloca-te no radar onde os olheiros realmente estão.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
              <Shield className="text-brand-accent mb-4" />
              <h4 className="text-white font-bold uppercase mb-2">Exposição FIFA</h4>
              <p className="text-slate-500 text-sm">Amistosos oficiais e vitrine para clubes de elite.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
              <Globe className="text-brand-accent mb-4" />
              <h4 className="text-white font-bold uppercase mb-2">Network Global</h4>
              <p className="text-slate-500 text-sm">Acesso direto ao mercado do Médio Oriente e Europa.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden border border-brand-accent/30 shadow-2xl relative group"
        >
          <video 
            src="/assets/Millennium-x-Al-Saad.mp4" 
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
          />
          <div className="absolute inset-0 bg-brand-dark/20 group-hover:opacity-0 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
}