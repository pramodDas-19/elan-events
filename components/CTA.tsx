'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-36 bg-noir-950 text-white relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-burgundy-900/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-gold-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          <span className="font-sans text-xs tracking-[0.25em] text-gold-200 uppercase font-medium">
            STRICTLY EXCLUSIVE COMMISSIONS
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Architect an <br />
          <span className="italic text-gold-gradient">Unforgettable Chapter?</span>
        </motion.h2>

        <motion.p
          className="font-sans text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          To maintain our uncompromising standard of artistry, we accept a strictly limited number of commissions each calendar year. Connect with our creative directors to begin the dialogue.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#curate"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-burgundy-700 via-burgundy-600 to-burgundy-500 hover:from-burgundy-600 hover:to-burgundy-400 text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 shadow-gold-glow border border-gold-400/30 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>CURATE YOUR CELEBRATION</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </motion.a>

          <motion.a
            href="https://wa.me/919876543210?text=Hello%20%C3%89lan%20Events%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20event%20dates."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-gold-300 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-sans text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>DIRECT WHATSAPP CONCIERGE</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
