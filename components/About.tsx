'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: 'Creative Direction',
      desc: 'Tailored aesthetic vision, floral installations, and spatial styling designed around your story.',
    },
    {
      title: 'Seamless Coordination',
      desc: 'Meticulous backstage logistics, timeline flow, and vendor coordination with silent precision.',
    },
    {
      title: 'Personal Dedication',
      desc: 'Direct principal attention from first consultation until the final celebratory toast.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Large High-Resolution Real Event Photo */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=85"
                alt="Luxury banquet hall with floral installations and chandeliers"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-4">
              About Élan Events
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight mb-8">
              We don&apos;t just plan events. <br />
              <span className="italic font-normal text-burgundy-700">We create experiences.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-charcoal-600 font-light leading-relaxed mb-10">
              Élan Events brings together thoughtful planning, creative direction, and seamless coordination to create celebrations that feel effortless, immersive, and deeply personal.
            </p>

            {/* Three Clean Values */}
            <div className="space-y-6 pt-6 border-t border-cream-200">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-burgundy-700 mt-2 shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl text-charcoal-900 font-normal">
                      {v.title}
                    </h3>
                    <p className="font-sans text-sm text-charcoal-500 font-light mt-0.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
