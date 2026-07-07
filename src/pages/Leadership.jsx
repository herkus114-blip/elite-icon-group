import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import SectionHeading from '../components/shared/SectionHeading';
import GoldButton from '../components/shared/GoldButton';
import { GraduationCap, Award, Globe } from 'lucide-react';

const PORTRAIT_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/976300a66_generated_bc60904b.png';

const credentials = [
  { icon: GraduationCap, title: 'Oxford Blockchain Strategy Programme', desc: 'Advanced blockchain strategy and institutional deployment certification from the University of Oxford.' },
  { icon: Award, title: 'Nasdaq Dubai Islamic Finance & Wealth Management', desc: 'Professional certification in Islamic finance principles applied to capital markets and wealth management.' },
  { icon: Globe, title: 'Certified Fatwa — Shariah-Compliant Hotel Tokenisation', desc: 'Certified religious ruling supporting the tokenisation of five-star hotels under Shariah-compliant standards.' },
];

const expertise = [
  'Real estate tokenisation and digital asset structuring',
  'Sovereign advisory and government-level blockchain consultation',
  'Shariah-compliant digital investment frameworks',
  'Institutional blockchain infrastructure design',
  'Central bank digital asset strategy',
  'Cross-border capital formation and regulatory mapping',
  'Multi-jurisdictional compliance framework development',
  'Cybersecurity and institutional digital custody models',
];

export default function Leadership() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Leadership</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              Executive Leadership & Advisory Network
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <FadeIn className="lg:col-span-1">
              <div className="relative max-w-sm mx-auto lg:mx-0 sticky top-32">
                <div className="absolute -inset-1 bg-gradient-to-b from-gold/10 to-transparent" />
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Marius Jedlickij"
                  className="relative w-full aspect-[3/4] object-cover"
                />
                <div className="mt-6">
                  <h3 className="font-serif-display text-2xl text-white font-medium">Marius Jedlickij</h3>
                  <p className="text-gold/70 font-sans-body text-sm mt-1">Founder & Managing Director</p>
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-2 space-y-16">
              {/* Bio */}
              <FadeIn>
                <div>
                  <span className="text-gold/50 text-xs uppercase tracking-widest font-sans-body">Biography</span>
                  <p className="text-white/55 font-sans-body text-base leading-relaxed mt-4">
                    Marius Jedlickij is a blockchain strategist and institutional consultant with over seven years of experience in digital real estate tokenisation, Shariah-compliant structuring, and institutional blockchain infrastructure.
                  </p>
                  <p className="text-white/45 font-sans-body text-base leading-relaxed mt-4">
                    He founded Elite Icon Group to provide governments, sovereign entities, and institutional investors with the strategic advisory necessary to navigate the convergence of real-world assets and digital financial infrastructure.
                  </p>
                  <p className="text-white/45 font-sans-body text-base leading-relaxed mt-4">
                    His career has spanned advisory roles across the UAE, EU, and United States, with a particular focus on building institutional frameworks that bridge traditional finance with regulated digital asset ecosystems.
                  </p>
                </div>
              </FadeIn>

              {/* Credentials */}
              <div>
                <FadeIn>
                  <span className="text-gold/50 text-xs uppercase tracking-widest font-sans-body">Credentials & Certifications</span>
                </FadeIn>
                <div className="space-y-4 mt-6">
                  {credentials.map((cred, i) => (
                    <FadeIn key={cred.title} delay={i * 0.1}>
                      <div className="bg-charcoal border border-white/5 p-6 flex items-start gap-5">
                        <cred.icon className="w-5 h-5 text-gold/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                        <div>
                          <h4 className="font-sans-body text-white/80 text-sm font-medium">{cred.title}</h4>
                          <p className="text-white/40 font-sans-body text-sm mt-1">{cred.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <FadeIn>
                  <span className="text-gold/50 text-xs uppercase tracking-widest font-sans-body">Areas of Expertise</span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {expertise.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-gold/40 mt-2.5 shrink-0" />
                        <span className="text-white/50 font-sans-body text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Network */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Advisory Network"
            title="Institutional Advisory Capabilities"
            description="Elite Icon Group maintains a network of institutional advisors, legal counsel, Shariah scholars, and technical specialists to support complex multi-jurisdictional engagements."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-white">
              Engage with our leadership team
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <GoldButton to="/Contact">Request Introduction</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}