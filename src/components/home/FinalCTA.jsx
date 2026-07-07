import React from 'react';
import FadeIn from '../shared/FadeIn';
import GoldButton from '../shared/GoldButton';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/3 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-10 leading-tight">
            Discuss a strategic initiative in confidence
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-white/45 font-sans-body text-base md:text-lg mt-8 leading-relaxed">
            Request a confidential consultation to explore sovereign, institutional, or large-scale real estate tokenisation opportunities.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <GoldButton to="/Contact">Schedule Confidential Briefing</GoldButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}