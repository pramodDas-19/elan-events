'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Every single detail felt intentional, beautiful, and completely us. The Élan team understood our vision from day one and executed it beyond our wildest dreams.',
    author: 'Priya & Rahul',
    event: 'Goa Coastal Matrimony',
  },
  {
    quote:
      'The team handled everything seamlessly behind the scenes so we could actually enjoy every minute of our celebration. It felt completely effortless.',
    author: 'Ananya Sharma',
    event: 'Private Estate Anniversary',
  },
  {
    quote:
      'Our summit gala felt extraordinary from beginning to end. The attention to spatial lighting, sound, and hospitality was world-class.',
    author: 'Vikram Mehta',
    event: 'Leadership Gala Dinner',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-3">
            Client Reflections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight">
            What our clients say.
          </h2>
        </div>

        {/* 3 Clean Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-cream-200 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="font-serif text-lg sm:text-xl text-charcoal-800 leading-relaxed font-light mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-cream-100">
                <p className="font-serif text-xl font-normal text-charcoal-900">
                  {t.author}
                </p>
                <p className="font-sans text-xs text-burgundy-700 font-medium mt-0.5">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
