'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello%20%C3%89lan%20Events%2C%20I%20would%20like%20to%20plan%20an%20event."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.92 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
