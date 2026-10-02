'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Weddings',
    description: 'From intimate barefoot ceremonies to grand destination celebrations, we create weddings that feel unmistakably yours.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85',
  },
  {
    title: 'Corporate Events',
    description: 'Conferences, gala dinners, and brand milestones designed with architectural purpose and executive precision.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=85',
  },
  {
    title: 'Private Celebrations',
    description: 'Birthdays, anniversaries, and personal milestones transformed into warm, unforgettable gatherings.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=85',
  },
  {
    title: 'Destination Events',
    description: 'Breathtaking multi-day celebrations in Goa and world-class retreats with end-to-end guest hospitality.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=85',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-3">
            Our Services
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight">
            Everything your celebration needs.
          </h2>
        </div>

        {/* 2x2 Clean Spacious Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark gradient overlay at bottom only for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-white">
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
