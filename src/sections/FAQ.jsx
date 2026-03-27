import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck, TrendingUp } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-black text-white italic uppercase leading-none">
            O que garante a tua <span className="text-brand-accent">Segurança?</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="space-y-8 md:space-y-12"
        >
          {/* Objeção 1: Logística */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
            <div className="bg-brand-accent/10 p-4 rounded-full flex-shrink-0">
              <Plane className="text-brand-accent" size={32} />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white italic uppercase">Logística e Suporte Europeu</h4>
              <p className="text-slate-400 text-lg font-body leading-relaxed">
                A Millennium possui sede própria e estrutura na Croácia. Nós gerenciamos tudo: desde a tua chegada ao aeroporto até a tua estadia, transporte e alimentação de alta performance durante os 26 dias. Foca apenas em jogar futebol.
              </p>
            </div>
          </motion.div>

          {/* Objeção 2: Preocupação Familiar */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
            <div className="bg-brand-accent/10 p-4 rounded-full flex-shrink-0">
              <ShieldCheck className="text-brand-accent" size={32} />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white italic uppercase">Segurança Familiar e Contratual</h4>
              <p className="text-slate-400 text-lg font-body leading-relaxed">
                Sabemos da preocupação da tua família. Oferecemos suporte jurídico completo, contratos sob o padrão FIFA e acompanhamento humano 24/7. Transparência total para que a tua família durma tranquila no Brasil.
              </p>
            </div>
          </motion.div>

          {/* Objeção 3: Retorno sobre Investimento */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-brand-accent p-8 md:p-10 rounded-3xl border border-brand-accent shadow-2xl shadow-brand-accent/10 text-brand-dark">
            <div className="bg-brand-dark/10 p-4 rounded-full flex-shrink-0">
              <TrendingUp className="text-brand-dark" size={32} />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-heading font-black mb-3 italic uppercase">Investimento vs. Ativo</h4>
              <p className="text-brand-dark/80 text-lg font-body leading-relaxed font-medium">
                O valor exigido não é um custo, é o investimento no teu maior ativo: a tua carreira profissional. Salários na elite europeia compensam rapidamente o aporte inicial. Estamos construindo um plano de carreira, não vendendo uma viagem.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}