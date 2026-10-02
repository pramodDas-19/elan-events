'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-24 md:py-36 bg-primary-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-bg border border-secondary-border mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-burgundy-600">
              THE ALCHEMY OF SPACE
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-noir-900 leading-tight mb-4">
            From Raw Canvas <br />
            <span className="italic text-burgundy-600">to Ethereal Wonder.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-primary-muted font-light">
            Slide horizontally to reveal how we transform an unadorned venue into an architectural dreamscape.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] md:aspect-[21/10] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-luxury-lg border border-secondary-border"
          >
            {/* "After" / Transformed Image (Background) */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85"
                alt="Transformed Luxury Event"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-noir-950/80 backdrop-blur-md text-white border border-gold-400/40 font-sans text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span>The Élan Scenography</span>
              </div>
            </div>

            {/* "Before" / Raw Canvas Image (Clipped via slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85"
                alt="Raw Venue Canvas"
                fill
                className="object-cover grayscale contrast-125 brightness-90"
                priority
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-noir-950/80 backdrop-blur-md text-white border border-white/20 font-sans text-xs uppercase tracking-widest font-semibold">
                Raw Bare Canvas
              </div>
            </div>

            {/* Vertical Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-white to-gold-400 shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-noir-950 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-xl pointer-events-auto">
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Quick Caption */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-primary-muted px-2 gap-3">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-600" />
              Venue: South Goa Heritage Estate (4,200 sq.ft lawn space)
            </span>
            <span className="italic">
              Drag left or right to inspect the floral &amp; lighting metamorphosis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
