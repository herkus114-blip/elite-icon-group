import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import SectionHeading from '../components/shared/SectionHeading';
import GoldButton from '../components/shared/GoldButton';
import { Building2, Coins, BookOpen, Landmark, Shield } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Real Estate Development Advisory',
    description: 'Structuring high-value hospitality and mixed-use projects with institutional-grade digital frameworks.',
    details: [
      'Project feasibility and structuring for large-scale real estate developments',
      'Digital layer integration for hospitality, residential, and mixed-use assets',
      'Investor participation models aligned with regulatory standards',
      'Strategic positioning for sovereign and institutional capital attraction',
    ],
  },
  {
    icon: Coins,
    title: 'Real-World Asset Tokenisation',
    description: 'Token design, issuance models, custody architecture, and regulatory integration for institutional assets.',
    details: [
      'Token economic model design and investment structure engineering',
      'Regulatory pathway mapping across multiple jurisdictions',
      'Digital custody architecture and security framework design',
      'Secondary market strategy and liquidity planning',
    ],
  },
  {
    icon: BookOpen,
    title: 'Islamic Finance Digital Infrastructure',
    description: 'Shariah governance, halal investment frameworks, and digital sukuk concepts for the modern financial ecosystem.',
    details: [
      'Shariah-compliant structuring for tokenised asset offerings',
      'Halal investment participation frameworks',
      'Digital sukuk concept development and advisory',
      'Fatwa coordination and Shariah board governance',
    ],
  },
  {
    icon: Landmark,
    title: 'Sovereign & Monetary Advisory',
    description: 'Treasury modernization, digital financial architecture, and sovereign asset strategy for governments.',
    details: [
      'Central bank digital asset strategy and framework design',
      'Treasury modernization and digital transformation advisory',
      'Sovereign wealth fund digital asset integration',
      'National economic zone digital infrastructure planning',
    ],
  },
  {
    icon: Shield,
    title: 'Technology & Compliance',
    description: 'Cybersecurity, blockchain architecture, regulatory frameworks, and system integration for institutional clients.',
    details: [
      'Institutional-grade cybersecurity assessment and design',
      'Multi-chain blockchain architecture and platform selection',
      'Regulatory compliance framework development',
      'System integration and enterprise blockchain deployment',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Advisory Services</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              Institutional advisory across digital infrastructure and real-world assets
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 font-sans-body text-lg mt-8 leading-relaxed max-w-3xl">
              We provide end-to-end strategic advisory that spans from concept design through to implementation, serving governments, sovereign entities, financial institutions, and strategic developers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <div className="bg-charcoal border border-white/5 p-10 md:p-14 hover:border-gold/10 transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-1">
                    <service.icon className="w-8 h-8 text-gold/50" strokeWidth={1.5} />
                    <h2 className="font-serif-display text-2xl md:text-3xl text-white font-medium mt-6">
                      {service.title}
                    </h2>
                    <p className="text-white/45 font-sans-body text-sm leading-relaxed mt-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2 lg:border-l lg:border-white/5 lg:pl-10">
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-sans-body mb-6">Key Capabilities</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-gold/50 mt-2.5 shrink-0" />
                          <span className="text-white/50 font-sans-body text-sm leading-relaxed">{detail}</span>
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
              Explore how our advisory can serve your institution
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <GoldButton to="/Contact">Request Private Consultation</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}