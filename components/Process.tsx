'use client';

import { motion } from 'framer-motion';
import { Compass, Palette, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'Phase 01',
    icon: Compass,
    title: 'Discover',
    description: 'We begin by understanding your vision, personal aesthetics, and the emotional essence of your gathering.',
  },
  {
    number: '02',
    phase: 'Phase 02',
    icon: Palette,
    title: 'Design',
    description: 'We shape the visual identity, floral architecture, lighting mood, and spatial styling tailored to your venue.',
  },
  {
    number: '03',
    phase: 'Phase 03',
    icon: CalendarCheck,
    title: 'Coordinate',
    description: 'We orchestrate vendors, timelines, culinary tastings, and backstage rehearsals with meticulous precision.',
  },
  {
    number: '04',
    phase: 'Phase 04',
    icon: Sparkles,
    title: 'Celebrate',
    description: 'You immerse yourself completely in the moment. Our team directs every cue silently from behind the curtain.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-3">
            How We Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight">
            From first idea to final toast.
          </h2>
        </div>

        {/* 4 Process Cards with Defined Borders & Structure */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-cream-300 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-burgundy-700/60 hover:shadow-[0_20px_40px_-15px_rgba(94,25,37,0.12)] transition-all duration-300 flex flex-col justify-between group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                {/* Card Top: Icon & Step Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center text-burgundy-700 group-hover:bg-burgundy-700 group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-3xl font-light text-burgundy-700/30 group-hover:text-burgundy-700 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-600 font-light leading-relaxed mb-8">
                  {step.description}
                </p>
              </div>

              {/* Card Bottom: Phase Tag */}
              <div className="pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs font-sans text-charcoal-500">
                <span className="uppercase tracking-widest text-[11px] font-medium text-burgundy-700/80">
                  {step.phase}
                </span>
                <ArrowRight className="w-4 h-4 text-cream-400 group-hover:text-burgundy-700 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
