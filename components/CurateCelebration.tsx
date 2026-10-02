'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight, RotateCcw, MessageSquare, Send } from 'lucide-react';

const occasions = [
  { id: 'wedding', name: 'Couture Destination Wedding', icon: '💍', desc: 'Bespoke coastal or palatial multi-day matrimony' },
  { id: 'gala', name: 'Regal Gala or Brand Summit', icon: '✨', desc: 'High-concept corporate assembly & experiential dinners' },
  { id: 'soiree', name: 'Intimate Milestone Soirée', icon: '🥂', desc: 'Curated birthdays, anniversaries, and villa affairs' },
  { id: 'retreat', name: 'Private Luxury Haven Retreat', icon: '🌴', desc: 'Immersive weekend experiences for distinguished guests' },
];

const aesthetics = [
  { id: 'opulence', name: 'Old-World Opulence & Gold', palette: ['#DFC27D', '#6B2030', '#1C1917'], desc: 'Velvet drapery, vintage crystal, gilded arches' },
  { id: 'minimal', name: 'Modern Minimalist Haute', palette: ['#FAF7F2', '#181513', '#C5A059'], desc: 'Clean architectural lines, monochromatic floral sculptures' },
  { id: 'coastal', name: 'Coastal Tropical Romance', palette: ['#E9D696', '#3D6151', '#FAF7F2'], desc: 'Driftwood elements, ocean breezes, cascading orchids' },
  { id: 'celestial', name: 'Moody Celestial Noir', palette: ['#0F0D0C', '#C5A059', '#842D3F'], desc: 'Thousand-candle illuminations, starlit canopy structures' },
];

const locations = [
  { id: 'goa', name: 'Goa Coastal Cliffs & Sands', season: 'Nov — May', vibe: 'Sunset Serenity' },
  { id: 'rajasthan', name: 'Udaipur / Jaipur Palaces', season: 'Oct — March', vibe: 'Royal Grandeur' },
  { id: 'riviera', name: 'International Havens (Como/Bali)', season: 'Year Round', vibe: 'Global Jet-Set' },
  { id: 'estate', name: 'Private Exclusive Heritage Estate', season: 'Custom', vibe: 'Absolute Privacy' },
];

const guestScales = [
  'Intimate (20 – 60 guests)',
  'Refined (60 – 150 guests)',
  'Grand Scale (150 – 350 guests)',
  'Imperial (350+ guests)',
];

export default function CurateCelebration() {
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState(occasions[0].id);
  const [selectedAesthetic, setSelectedAesthetic] = useState(aesthetics[0].id);
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [selectedGuests, setSelectedGuests] = useState(guestScales[1]);

  const activeOccasionObj = occasions.find((o) => o.id === selectedOccasion) || occasions[0];
  const activeAestheticObj = aesthetics.find((a) => a.id === selectedAesthetic) || aesthetics[0];
  const activeLocationObj = locations.find((l) => l.id === selectedLocation) || locations[0];

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Élan Events Atelier! I curated a celebration concept on your website:\n• Occasion: ${activeOccasionObj.name}\n• Aesthetic Vibe: ${activeAestheticObj.name}\n• Location: ${activeLocationObj.name}\n• Guest Scale: ${selectedGuests}\n\nI would love to discuss bringing this vision to life.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setStep(1);
    setSelectedOccasion(occasions[0].id);
    setSelectedAesthetic(aesthetics[0].id);
    setSelectedLocation(locations[0].id);
    setSelectedGuests(guestScales[1]);
  };

  return (
    <section id="curate" className="py-24 md:py-36 bg-noir-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-burgundy-900/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-white/5 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="font-sans text-xs tracking-[0.25em] text-gold-200 uppercase font-medium">
              THE ÉLAN ATELIER EXPERIENCE
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
            Curate Your Celebration. <br />
            <span className="italic text-gold-gradient">Architect your custom vision.</span>
          </h2>

          <p className="font-sans text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto">
            Design your ideal event concept in under 60 seconds. Our creative directors will prepare a bespoke scenography preview.
          </p>

          {/* Stepper Progress Bar */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm transition-all duration-300 ${
                    step === s
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-noir-950 font-bold shadow-gold-glow ring-2 ring-gold-400/40'
                      : step > s
                      ? 'bg-burgundy-600 text-white'
                      : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className={`text-[11px] uppercase tracking-wider font-sans hidden md:inline ${
                  step === s ? 'text-gold-300 font-semibold' : 'text-stone-400'
                }`}>
                  {s === 1 && 'Occasion'}
                  {s === 2 && 'Aesthetic'}
                  {s === 3 && 'Setting & Scale'}
                  {s === 4 && 'Your Dossier'}
                </span>
                {s < 4 && <div className="w-6 sm:w-10 h-[1px] bg-white/15" />}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Steps Container */}
        <div className="bg-noir-900/90 rounded-3xl border border-gold-400/20 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Occasion */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 text-center sm:text-left">
                  <span className="text-gold-400 font-sans text-xs tracking-widest uppercase">Movement 01</span>
                  <h3 className="font-serif text-3xl font-light mt-1">What celebration are we crafting?</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {occasions.map((occ) => (
                    <button
                      key={occ.id}
                      onClick={() => setSelectedOccasion(occ.id)}
                      className={`p-6 rounded-2xl text-left border transition-all duration-300 ${
                        selectedOccasion === occ.id
                          ? 'bg-burgundy-900/40 border-gold-400 shadow-gold-glow'
                          : 'bg-white/5 border-white/10 hover:border-gold-400/50 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-3xl block mb-3">{occ.icon}</span>
                      <h4 className="font-serif text-2xl text-white font-normal mb-1">{occ.name}</h4>
                      <p className="font-sans text-xs text-stone-300 leading-relaxed font-light">{occ.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-noir-950 font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Proceed to Aesthetic</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Aesthetic */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 text-center sm:text-left">
                  <span className="text-gold-400 font-sans text-xs tracking-widest uppercase">Movement 02</span>
                  <h3 className="font-serif text-3xl font-light mt-1">Select the sensory mood &amp; aesthetic palette</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {aesthetics.map((aes) => (
                    <button
                      key={aes.id}
                      onClick={() => setSelectedAesthetic(aes.id)}
                      className={`p-6 rounded-2xl text-left border transition-all duration-300 ${
                        selectedAesthetic === aes.id
                          ? 'bg-burgundy-900/40 border-gold-400 shadow-gold-glow'
                          : 'bg-white/5 border-white/10 hover:border-gold-400/50 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {aes.palette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <h4 className="font-serif text-2xl text-white font-normal mb-1">{aes.name}</h4>
                      <p className="font-sans text-xs text-stone-300 leading-relaxed font-light">{aes.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button
                    onClick={() => setStep(1)}
                    className="font-sans text-xs uppercase tracking-widest text-stone-400 hover:text-white"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-noir-950 font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Proceed to Location</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Setting & Scale */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 text-center sm:text-left">
                  <span className="text-gold-400 font-sans text-xs tracking-widest uppercase">Movement 03</span>
                  <h3 className="font-serif text-3xl font-light mt-1">Envision the destination and guest scale</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-stone-300 mb-3">
                      Preferred Destination Havens
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {locations.map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() => setSelectedLocation(loc.id)}
                          className={`p-4 rounded-xl text-left border transition-all ${
                            selectedLocation === loc.id
                              ? 'bg-burgundy-900/50 border-gold-400 text-white'
                              : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10'
                          }`}
                        >
                          <p className="font-serif text-xl text-white">{loc.name}</p>
                          <p className="font-sans text-[11px] text-gold-300 mt-1">Best Season: {loc.season} · {loc.vibe}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-stone-300 mb-3">
                      Expected Guest Count
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {guestScales.map((scale) => (
                        <button
                          key={scale}
                          onClick={() => setSelectedGuests(scale)}
                          className={`p-3 rounded-xl text-center text-xs font-sans border transition-all ${
                            selectedGuests === scale
                              ? 'bg-gold-500 text-noir-950 font-bold border-gold-400 shadow-md'
                              : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10'
                          }`}
                        >
                          {scale}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button
                    onClick={() => setStep(2)}
                    className="font-sans text-xs uppercase tracking-widest text-stone-400 hover:text-white"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-noir-950 font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Generate Atelier Dossier</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Dossier Generated */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-noir-950 via-noir-900 to-burgundy-950 border border-gold-400/40 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gold-400/20 pb-6 mb-6 gap-4">
                    <div>
                      <span className="font-sans text-[11px] tracking-[0.25em] text-gold-300 uppercase font-medium">
                        CONFIDENTIAL ATELIER CONCEPT
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mt-1">
                        Your Bespoke Celebration Dossier
                      </h3>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs font-sans text-stone-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Re-curate Concept</span>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-stone-400 block mb-1">Occasion</span>
                        <p className="font-serif text-2xl text-gold-200">{activeOccasionObj.name}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-stone-400 block mb-1">Atmospheric Mood</span>
                        <p className="font-serif text-2xl text-gold-200">{activeAestheticObj.name}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-stone-400 block mb-1">Sanctuary &amp; Season</span>
                        <p className="font-serif text-2xl text-gold-200">{activeLocationObj.name}</p>
                        <p className="font-sans text-xs text-stone-400 mt-0.5">{activeLocationObj.vibe}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-sans text-[11px] uppercase tracking-wider text-stone-400 block mb-1">Celebration Scale</span>
                        <p className="font-serif text-2xl text-gold-200">{selectedGuests}</p>
                      </div>
                    </div>
                  </div>

                  {/* Curators Note */}
                  <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-400/30 text-stone-200 text-xs leading-relaxed font-light mb-8">
                    <span className="font-serif font-medium text-gold-300 text-sm block mb-1">
                      Creative Director&apos;s Initial Assessment:
                    </span>
                    This gathering requires an estimated 4 to 8 months of scenography production. We will weave artisanal floral installations, custom acoustic zoning, and an epicurean banquet tailored to your desired palette.
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2.5 shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit Dossier to WhatsApp Concierge</span>
                    </button>

                    <a
                      href="#contact"
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-burgundy-700 to-burgundy-500 hover:from-burgundy-600 hover:to-burgundy-400 text-white font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2.5 shadow-gold-glow border border-gold-400/30 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Schedule Atelier Consultation</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
