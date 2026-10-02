'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const categories = ['All', 'Weddings', 'Tablescapes', 'Floral Design', 'Galas'];

const portfolioItems = [
  {
    title: 'Coastal Sunset Mandap',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85',
  },
  {
    title: 'Candlelit Tablescape & Crystal',
    category: 'Tablescapes',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1000&q=85',
  },
  {
    title: 'Cascading White Orchid Canopy',
    category: 'Floral Design',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1000&q=85',
  },
  {
    title: 'Grand Palace Evening Reception',
    category: 'Galas',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=85',
  },
  {
    title: 'Oceanfront Petal Aisle Ceremony',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&q=85',
  },
  {
    title: 'Imperial Banquet Room',
    category: 'Tablescapes',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=85',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const filtered = portfolioItems.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-3">
            Our Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight">
            Moments We&apos;ve Brought to Life.
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all ${
                activeTab === cat
                  ? 'bg-burgundy-700 text-white shadow-sm'
                  : 'bg-white text-charcoal-700 border border-cream-200 hover:border-burgundy-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] bg-white"
              onClick={() => setActivePhoto(item.image)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-sans uppercase tracking-widest text-gold-300 mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-light">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close"
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-5xl w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={activePhoto} alt="Event detail" fill className="object-cover" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
