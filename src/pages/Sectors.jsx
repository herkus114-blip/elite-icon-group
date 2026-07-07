import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import GoldButton from '../components/shared/GoldButton';

const INFRA_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/76065e810_generated_bad11699.png';

const sectors = [
  {
    title: 'Real Estate & Hospitality',
    description: 'Advisory for large-scale residential, commercial, and hospitality developments seeking to integrate digital asset infrastructure, tokenised capital formation, and institutional investor participation.',
    capabilities: ['Token-based investment structures', 'Hospitality asset digitisation', 'Institutional capital attraction', 'Regulatory-compliant offerings'],
  },
  {
    title: 'Sovereign Development & Economic Zones',
    description: 'Strategic counsel for governments and sovereign entities establishing digital economic zones, modernizing financial architecture, and implementing regulated tokenisation frameworks.',
    capabilities: ['Digital economic zone design', 'Sovereign asset tokenisation', 'Treasury modernization', 'Policy framework development'],
  },
  {
    title: 'Infrastructure & Strategic Assets',
    description: 'Advisory for infrastructure projects, strategic national assets, and mega-developments requiring institutional-grade digital capital markets and governance infrastructure.',
    capabilities: ['Mega-project advisory', 'Infrastructure tokenisation', 'Public-private partnership structures', 'Strategic asset digitisation'],
  },
  {
    title: 'Islamic Finance & Cross-Border Capital',
    description: 'Shariah-compliant structuring for cross-border capital flows, digital sukuk concepts, and halal investment participation in tokenised asset markets.',
    capabilities: ['Digital sukuk advisory', 'Cross-border capital structures', 'Shariah governance frameworks', 'Halal investment design'],
  },
  {
    title: 'Central Banking & Monetary Innovation',
    description: 'Strategic advisory for central banks and monetary authorities exploring digital currency architecture, digital asset regulatory frameworks, and financial system modernization.',
    capabilities: ['CBDC strategy advisory', 'Digital monetary policy', 'Regulatory framework design', 'Financial system modernization'],
  },
];

export default function Sectors() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <img src={INFRA_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/70 to-[#0A1628]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Sector Focus</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              Industries at the frontier of institutional digital transformation
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {sectors.map((sector, i) => (
            <FadeIn key={sector.title} delay={i * 0.05}>
              <div className="bg-charcoal border border-white/5 p-10 md:p-14 hover:border-gold/10 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <span className="text-gold/40 font-sans-body text-xs tracking-widest">0{i + 1}</span>
                    <h2 className="font-serif-display text-2xl md:text-3xl text-white font-medium mt-3">
                      {sector.title}
                    </h2>
                    <p className="text-white/45 font-sans-body text-sm leading-relaxed mt-4">
                      {sector.description}
                    </p>
                  </div>
                  <div className="lg:border-l lg:border-white/5 lg:pl-10">
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-sans-body mb-5">Capabilities</h4>
                    <div className="space-y-3">
                      {sector.capabilities.map((cap, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                          <span className="text-white/50 font-sans-body text-sm">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-white">
              Discuss your sector-specific needs
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <GoldButton to="/Contact">Request Consultation</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}