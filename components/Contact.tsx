'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Weddings',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-burgundy-700 block mb-3">
              Get in Touch
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-tight mb-6">
              Let&apos;s create something <br />
              <span className="italic font-normal text-burgundy-700">unforgettable.</span>
            </h2>

            <p className="font-sans text-base text-charcoal-600 font-light leading-relaxed mb-10">
              Every celebration begins with a conversation. Share your vision, preferred dates, and questions with our team.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-burgundy-700 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal-900">Élan Events Atelier</h4>
                  <p className="font-sans text-sm text-charcoal-600 font-light">Goa, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-burgundy-700 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal-900">Email Us</h4>
                  <p className="font-sans text-sm text-charcoal-600 font-light">hello@elanevents.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-burgundy-700 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal-900">Call Us</h4>
                  <p className="font-sans text-sm text-charcoal-600 font-light">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-burgundy-700 mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal-900">Instagram</h4>
                  <p className="font-sans text-sm text-charcoal-600 font-light">@elanevents</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hello%20%C3%89lan%20Events%2C%20I%20would%20like%20to%20plan%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-medium transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Right Column: Clean White Form */}
          <motion.div
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-cream-200 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-charcoal-900">Thank you, {formData.name}</h3>
                <p className="font-sans text-sm text-charcoal-600 max-w-md mx-auto font-light">
                  Your message has been received. Our creative team will get in touch with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-sans uppercase tracking-widest text-burgundy-700 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light mb-6">
                  Send us a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 placeholder:text-charcoal-400 focus:bg-white focus:border-burgundy-700 outline-none transition-all font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 placeholder:text-charcoal-400 focus:bg-white focus:border-burgundy-700 outline-none transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 placeholder:text-charcoal-400 focus:bg-white focus:border-burgundy-700 outline-none transition-all font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-2">
                      Celebration Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 focus:bg-white focus:border-burgundy-700 outline-none transition-all font-sans text-sm"
                    >
                      <option>Weddings</option>
                      <option>Corporate Events</option>
                      <option>Private Celebrations</option>
                      <option>Destination Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-2">
                    Tell us about your event
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your vision, preferred dates, estimated guests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 placeholder:text-charcoal-400 focus:bg-white focus:border-burgundy-700 outline-none transition-all font-sans text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
