import React from 'react';
import FadeIn from '../shared/FadeIn';
import SectionHeading from '../shared/SectionHeading';
import { Building, Landmark, HardHat, BookOpen, Banknote } from 'lucide-react';

const sectors = [
  { icon: Building, title: 'Real Estate & Hospitality' },
  { icon: Landmark, title: 'Sovereign Development & Economic Zones' },
  { icon: HardHat, title: 'Infrastructure & Strategic Assets' },
  { icon: BookOpen, title: 'Islamic Finance & Cross-Border Capital' },
  { icon: Banknote, title: 'Central Banking & Monetary Innovation' },
];

export default function SectorFocus() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Sector Focus"
          title="Industries We Serve"
          description="Our advisory services span critical sectors where real-world asset infrastructure meets institutional digital transformation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {sectors.map((sector, i) => (
            <FadeIn key={sector.title} delay={i * 0.1}>
              <div className="bg-charcoal border border-white/5 p-8 text-center hover:border-gold/20 transition-all duration-500 group h-full">
                <sector.icon className="w-7 h-7 text-gold/50 mx-auto group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-sans-body text-white/80 text-sm font-medium mt-5 leading-relaxed">
                  {sector.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}