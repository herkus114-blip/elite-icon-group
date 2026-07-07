import React from 'react';
import FadeIn from '../shared/FadeIn';
import SectionHeading from '../shared/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    number: '01',
    title: 'RWA Tokenisation Advisory',
    description: 'Structuring token models for real estate, hospitality, infrastructure, and regulated investment platforms.',
  },
  {
    number: '02',
    title: 'Sovereign Advisory',
    description: 'Supporting governments and public-sector stakeholders evaluating digital asset frameworks and treasury modernization.',
  },
  {
    number: '03',
    title: 'Islamic Finance Integration',
    description: 'Shariah-compliant structuring for tokenised offerings and halal investment participation.',
  },
  {
    number: '04',
    title: 'Institutional Technology Architecture',
    description: 'Digital custody models, multi-chain infrastructure, cybersecurity, and compliance-by-design systems.',
  },
];

export default function CapabilityPillars() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Advisory Capabilities"
          title="Our Core Advisory Pillars"
        />

        <div className="grid md:grid-cols-2 gap-px bg-white/5 mt-16">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.number} delay={i * 0.1}>
              <div className="bg-charcoal p-10 md:p-12 group hover:bg-[#1E2B3E] transition-colors duration-500 h-full">
                <span className="text-gold/50 font-sans-body text-xs tracking-widest">{pillar.number}</span>
                <h3 className="font-serif-display text-xl md:text-2xl text-white font-medium mt-4">
                  {pillar.title}
                </h3>
                <p className="text-white/40 font-sans-body text-sm leading-relaxed mt-4">
                  {pillar.description}
                </p>
                <Link
                  to="/Services"
                  className="inline-flex items-center gap-2 text-gold/60 text-xs uppercase tracking-widest font-sans-body mt-8 group-hover:text-gold transition-colors duration-300"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}