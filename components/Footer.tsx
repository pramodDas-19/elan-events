'use client';

import Image from 'next/image';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream-200 border-t border-cream-300 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-300/70">
          {/* Logo & Description */}
          <div className="lg:col-span-6 space-y-6">
            <a href="#" className="inline-block">
              <div className="relative h-14 sm:h-16 w-52 sm:w-64">
                <Image
                  src="/elan-logo.png"
                  alt="Élan Events Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>

            <p className="font-sans text-sm text-charcoal-600 font-light leading-relaxed max-w-md">
              We design and coordinate unforgettable celebrations, from intimate gatherings to extraordinary destination experiences. Based in Goa, crafting memories worldwide.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 hover:text-burgundy-700 hover:border-burgundy-700 transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@elanevents.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 hover:text-burgundy-700 hover:border-burgundy-700 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 hover:text-burgundy-700 hover:border-burgundy-700 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-wider text-charcoal-600">
              <li>
                <a href="#about" className="hover:text-burgundy-700 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-burgundy-700 transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-burgundy-700 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-burgundy-700 transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-burgundy-700 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-burgundy-700 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700">
              Atelier
            </h4>
            <div className="space-y-2 font-sans text-sm text-charcoal-600 font-light">
              <p>Élan Events Atelier</p>
              <p>Goa, India</p>
              <p className="pt-2">hello@elanevents.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-charcoal-500 gap-4">
          <p>© {new Date().getFullYear()} Élan Events. All rights reserved.</p>
          <p className="font-serif italic text-charcoal-600 text-sm">
            Beautifully Planned. Effortlessly Remembered.
          </p>
        </div>
      </div>
    </footer>
  );
}
