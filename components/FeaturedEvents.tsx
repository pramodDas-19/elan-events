'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Users, MapPin, X, Sparkles } from 'lucide-react';

const featuredStories = [
  {
    id: 'coastal-mandap',
    title: 'The Whispering Palms Matrimony',
    category: 'Couture Wedding',
    location: 'South Goa Coastline',
    guests: '240 Honored Guests',
    date: 'Winter Season',
    description:
      'Set upon the golden shores of South Goa, this celebration featured a cantilevered mandap crowned with thousands of fresh white tuberoses and cascading blush orchids, echoing the rhythm of Arabian Sea tides.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85',
    palette: ['#FAF7F2', '#EBD998', '#6B2030', '#3D6151'],
    details:
      'We constructed a 60-meter elevated timber boardwalk over the sands, lined with hurricane lamps and custom fragrance diffusers emitting jasmine and bergamot. The reception featured a glasshouse structure illuminated by 400 bespoke filament chandeliers.',
  },
  {
    id: 'regal-gala',
    title: 'An Evening of Golden Reverie',
    category: 'Palatial Gala',
    location: 'Udaipur Heritage Grounds',
    guests: '420 Global Dignitaries',
    date: 'Autumn Solstice',
    description:
      'A nocturnal gala held amidst 300-year-old marble courtyards. Hand-hammered brass lanterns and deep crimson drapes echoed imperial Rajput splendour while accommodating an international symphony ensemble.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85',
    palette: ['#DFC27D', '#541523', '#151311', '#B89041'],
    details:
      'The central fountain was transformed into a floating lotus stage with underwater LED fiber optics. A 7-course royal degustation was paired with rare vintages curated by our master sommelier.',
  },
  {
    id: 'golden-soiree',
    title: 'The Starlit Citrus Orchard',
    category: 'Milestone Celebration',
    location: 'Private Villa Estate',
    guests: '80 Intimate Friends',
    date: 'Spring Equinox',
    description:
      'An intimate golden anniversary framed by citrus groves and candlelit long tables. Guests dined under a custom fairy light canopy that mirrored the constellations of the night sky.',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=1200&q=85',
    palette: ['#F7EFCF', '#842D3F', '#F4EFEA', '#A47F35'],
    details:
      'Hand-calligraphed linen menus, bespoke ceramic tableware sculpted specifically for the host, and a surprise acoustic performance by an Italian string quartet created an intensely emotional ambiance.',
  },
];

export default function FeaturedEvents() {
  const [selectedStory, setSelectedStory] = useState<(typeof featuredStories)[0] | null>(null);

  return (
    <section id="featured" className="py-24 md:py-36 bg-secondary-bg/50 border-t border-secondary-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-bg border border-secondary-border mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-600" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-burgundy-600">
                CASE STUDIES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-noir-900 leading-tight">
              Moments We Have <br />
              <span className="italic text-burgundy-600">Brought to Life.</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-primary-muted max-w-md font-light leading-relaxed">
            Every gathering is born from a blank slate. Here is an intimate look into three distinct celebrations curated by the Élan Atelier.
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-16 lg:space-y-24">
          {featuredStories.map((story, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={story.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-primary-bg p-6 sm:p-10 lg:p-12 rounded-3xl border border-secondary-border shadow-luxury group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Visual Canvas */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md ${
                    isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent" />
                  
                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-noir-950/80 backdrop-blur-md text-white font-sans text-[11px] uppercase tracking-widest border border-gold-400/30">
                    {story.category}
                  </div>

                  {/* Palette dots */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <span className="text-[10px] text-white/80 font-sans tracking-wider mr-1 uppercase">Palette:</span>
                    {story.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Meta stats */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-primary-muted mb-4">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-burgundy-600" />
                        {story.location}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold-600" />
                        {story.guests}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-noir-900 font-light leading-tight mb-4">
                      {story.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-primary-muted font-light leading-relaxed mb-6">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-secondary-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-burgundy-600 hover:text-burgundy-700 transition-colors"
                    >
                      <span>Explore Scenography Story</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <span className="font-serif text-2xl text-gold-500/40 font-light">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-noir-950/80 backdrop-blur-xl">
            <motion.div
              className="relative w-full max-w-2xl bg-primary-bg rounded-3xl p-6 sm:p-10 border border-gold-400/30 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button
                onClick={() => setSelectedStory(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary-bg hover:bg-secondary-border text-noir-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-100 text-burgundy-600 font-sans text-xs uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {selectedStory.category}
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-noir-900 font-light mb-2">
                {selectedStory.title}
              </h3>
              <p className="font-sans text-xs text-primary-muted uppercase tracking-wider mb-6">
                {selectedStory.location} · {selectedStory.guests} · {selectedStory.date}
              </p>

              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 font-sans text-sm text-primary-muted leading-relaxed font-light mb-8">
                <p>{selectedStory.description}</p>
                <div className="p-4 rounded-xl bg-secondary-bg/80 border border-secondary-border text-noir-900">
                  <h4 className="font-serif font-medium text-lg mb-1">Architectural &amp; Floral Direction</h4>
                  <p className="text-xs text-primary-muted">{selectedStory.details}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <a
                  href="#curate"
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-3 rounded-full bg-burgundy-600 text-white font-sans text-xs uppercase tracking-widest font-semibold text-center hover:bg-burgundy-700 transition-colors"
                >
                  Curate a Similar Gathering
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
