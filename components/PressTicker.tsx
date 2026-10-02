'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const publications = [
  { name: 'VOGUE WEDDINGS', quote: 'The gold standard in coastal destination scenography' },
  { name: 'ARCHITECTURAL DIGEST', quote: 'Mastery over ephemeral luxury spaces' },
  { name: "HARPER'S BAZAAR", quote: 'Poetic, breathtaking, and utterly unforgettable' },
  { name: 'CONDÉ NAST TRAVELLER', quote: 'Top 10 Destination Planners to Know' },
  { name: 'ELLE DÉCOR', quote: 'Sensory storytelling through bespoke floral design' },
  { name: 'TATLER ASIA', quote: 'Uncompromising elegance and seamless execution' },
];

export default function PressTicker() {
  return (
    <section className="bg-secondary-bg/80 border-y border-secondary-border/70 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary-muted font-medium">
          Accolades &amp; Features in International Editorial Press
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Repeating marquee list */}
        <motion.div
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 32, repeat: Infinity }}
        >
          {[...publications, ...publications].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-4">
              <span className="font-serif text-lg tracking-[0.2em] font-medium text-noir-900">
                {item.name}
              </span>
              <span className="font-sans text-xs italic text-primary-muted">
                &ldquo;{item.quote}&rdquo;
              </span>
              <Star className="w-3 h-3 text-gold-500 fill-gold-400 mx-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
