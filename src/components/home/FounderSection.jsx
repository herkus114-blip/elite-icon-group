import React from 'react';
import FadeIn from '../shared/FadeIn';
import GoldButton from '../shared/GoldButton';

const PORTRAIT_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/976300a66_generated_bc60904b.png';

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <FadeIn className="lg:col-span-2" direction="right">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-b from-gold/10 to-transparent" />
              <img
                src={PORTRAIT_IMAGE}
                alt="Executive leadership"
                className="relative w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>

          <div className="lg:col-span-3">
            <FadeIn>
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-sans-body font-medium">Founding Leadership</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-white mt-4 leading-tight">
                Led by institutional expertise in tokenisation and financial architecture
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/45 font-sans-body text-base leading-relaxed mt-6">
                Marius Jedlickij is a blockchain strategist and institutional consultant with over seven years of experience in digital real estate tokenisation, Shariah-compliant structuring, and institutional blockchain infrastructure.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 space-y-3">
                {[
                  'Oxford Blockchain Strategy Programme',
                  'Nasdaq Dubai Islamic Finance & Wealth Management certification',
                  'Certified fatwa supporting tokenisation of five-star hotels under Shariah-compliant standards',
                ].map((cred, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 shrink-0" />
                    <span className="text-white/50 font-sans-body text-sm leading-relaxed">{cred}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10">
                <GoldButton to="/Leadership" variant="outline">View Full Profile</GoldButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}