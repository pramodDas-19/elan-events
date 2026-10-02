'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Shield, Clock, Users, Wine } from 'lucide-react';

const distinctions = [
  {
    icon: Crown,
    title: 'Couture Creative Direction',
    description:
      'We reject cookie-cutter templates. Every floral chandelier, customized stage, and paper suite is drafted from scratch to mirror your aesthetic legacy.',
    badge: '100% Bespoke',
  },
  {
    icon: Sparkles,
    title: 'The Artisanal Black Book',
    description:
      'Privileged relationships with world-class Dutch floral importers, renowned classical ensembles, and award-winning international lighting architects.',
    badge: 'Curated Roster',
  },
  {
    icon: Shield,
    title: 'Absolute Privacy & Discretion',
    description:
      'Rigorous non-disclosure protocols, private venue shielding, and VIP security escorts for distinguished hosts and public figures.',
    badge: 'Confidentiality',
  },
  {
    icon: Clock,
    title: 'Millisecond Precision Management',
    description:
      'Micro-timelines coordinated across 60+ team members, ensuring effortless transitions between cocktails, ceremonies, and after-hours revelry.',
    badge: 'Seamless Timing',
  },
  {
    icon: Wine,
    title: 'Epicurean & Mixology Labs',
    description:
      'We collaborate directly with master chefs and cocktail alchemists to design sensory pairings that delight discerning palates.',
    badge: 'Sensory Dining',
  },
  {
    icon: Users,
    title: 'VIP Guest Hospitality Desk',
    description:
      'From chartered airport arrivals and bespoke welcome suites to 24/7 on-call concierges caring for your cherished attendees.',
    badge: 'White-Glove',
  },
];

export default function WhyElan() {
  return (
    <section className="py-24 md:py-36 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-bg border border-secondary-border mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-burgundy-600">
              THE ÉLAN DISTINCTION
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-noir-900 leading-tight mb-4">
            Why Discerning Hosts <br />
            <span className="italic text-burgundy-600">Entrust Their Milestones to Us.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-primary-muted font-light">
            When there are no second chances, perfection is the baseline.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distinctions.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-8 rounded-3xl bg-secondary-bg/50 border border-secondary-border hover:border-gold-400 hover:bg-white hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-bg border border-secondary-border flex items-center justify-center text-burgundy-600 group-hover:bg-burgundy-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gold-700 bg-gold-100/60 px-2.5 py-1 rounded-full border border-gold-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-noir-900 font-normal mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-primary-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-secondary-border/60 flex items-center text-xs font-sans text-burgundy-600 font-medium">
                <span>The Élan Standard</span>
                <span className="ml-auto">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
