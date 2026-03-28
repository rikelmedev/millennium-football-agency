import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Proof({ language }) {
  const videoRef = useRef(null);

  const t = {
    PT: {
      tag: "CASE DE SUCESSO: THALISSON",
      title: "VALORIZAÇÃO DE",
      accent_main: "10.000% EM 3 ANOS",
      desc: "O talento era inegável, mas faltava a ponte certa. Ao entrar no ecossistema da Millennium, Thalisson saltou do anonimato para vestir a braçadeira de capitão na Europa e disputar a Conference League da UEFA. Nós não apenas prometemos contratos, nós construímos legados. Qual será o tamanho da sua história?",
    },
    EN: {
      tag: "SUCCESS CASE: THALISSON",
      title: "APPRECIATION OF",
      accent_main: "10,000% IN 3 YEARS",
      desc: "The talent was undeniable, but the right bridge was missing. By joining the Millennium ecosystem, Thalisson leaped from anonymity to wearing the captain's armband in Europe and playing in the UEFA Conference League. We don't just promise contracts; we build legacies. How big will your story be?",
    }
  }[language];

  return (
    <section id="conquistas" className="py-24 md:py-32 px-6 bg-brand-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200"
        >

          <video 
            ref={videoRef}
            src="/assets/thalisson-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            controls 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:pl-12"
        >
          <span className="text-brand-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            {t.tag}
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-black italic uppercase leading-tight text-brand-dark mb-8 drop-shadow-sm">
            {t.title} <br />
            <span className="text-brand-accent drop-shadow-sm">{t.accent_main}</span>
          </h2>
          
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
             {t.desc}
          </p>
            
        </motion.div>

      </div>
    </section>
  );
}