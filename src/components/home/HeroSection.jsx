import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';

const HERO_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/c89e7d3ef_generated_63e07fec.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Dubai financial district skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">
              Strategic Advisory · Dubai · Global
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-8 leading-[1.15]"
          >
            Institutional Advisory for Real-World Asset Tokenisation and Sovereign Digital Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/50 font-sans-body text-base md:text-lg mt-8 leading-relaxed max-w-2xl"
          >
            Elite Icon Group advises governments, financial institutions, sovereign entities, and strategic developers on regulated digital asset frameworks, institutional blockchain architecture, Shariah-compliant structures, and modern financial infrastructure design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <GoldButton to="/Contact">Request Private Consultation</GoldButton>
            <GoldButton to="/Services" variant="outline">Explore Advisory Services</GoldButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/40" />
      </motion.div>
    </section>
  );
}