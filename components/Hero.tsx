'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Event Video - Raw & Vivid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/15496387_1920_1080_50fps.mp4" type="video/mp4" />
        </video>
        {/* Subtle cinematic gradient so text is razor-sharp without any white wash */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-sans text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-white mb-6 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-md">
            Event Planning · Weddings · Celebrations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] leading-[1.08] mb-8"
        >
          Moments Worth <br />
          <span className="italic font-normal text-gold-300">Remembering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base sm:text-lg md:text-xl text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] max-w-2xl mx-auto font-light leading-relaxed mb-12 text-balance"
        >
          We design and coordinate unforgettable celebrations, from intimate coastal gatherings to extraordinary destination affairs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <span>Let&apos;s Create Your Event</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/40 font-sans text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center transition-all shadow-md"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
