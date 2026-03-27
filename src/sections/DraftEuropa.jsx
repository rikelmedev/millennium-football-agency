import React from 'react';
import { motion } from 'framer-motion';

const athletes = [
  { name: "Vitor", club: "NK Sloboda", video: "/assets/ADS NK SLOBODA - 02.mp4" },
  { name: "Renan", club: "NK Sloboda", video: "/assets/ADS NK SLOBODA - 03.mp4" },
  { name: "Daniel Ribeiro", club: "NK Suhopolje", video: "/assets/ADS NK SU 01.mp4" },
  { name: "Diogo", club: "NK Suhopolje", video: "/assets/ADS NK SU 02.mp4" },
  { name: "Jhonatan Pereira", club: "NK Drava", video: "/assets/case-drava.mp4" },
  { name: "João Victor", club: "NK Nafta", video: "/assets/case-nafta.mp4" },
  { name: "Raul Francisco", club: "NK Podravina", video: "/assets/case-podravia.mp4" },
  { name: "Hugo Henrique", club: "NK Sloboda", video: "/assets/case-sloboda.mp4" },
  { name: "Millennium x Al Saad", club: "Vitrine Internacional", video: "/assets/millennium-x-al-saad_.mp4" }
];

export default function DraftEuropa({ language }) {
  return (
    <section className="py-24 bg-[#080808] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-5xl font-black text-white italic uppercase mb-16 text-center lg:text-left leading-none">
          Elite em <span className="text-brand-accent">Campo</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {athletes.map((ath, i) => (
            <motion.div key={i} className="relative aspect-[9/16] rounded-3xl overflow-hidden group border border-white/5 bg-zinc-900 shadow-xl">
              <video src={ath.video} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500" 
                muted loop playsInline onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10 group-hover:translate-y-[-4px] transition-transform">
                <h3 className="text-white font-black italic uppercase text-xl tracking-tighter leading-tight mb-1">{ath.name}</h3>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">{ath.club}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}