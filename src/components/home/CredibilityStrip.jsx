import React from 'react';
import FadeIn from '../shared/FadeIn';
import { Building2, Coins, Landmark, BookOpen, Server } from 'lucide-react';

const capabilities = [
  { icon: Building2, label: 'Real Estate Development Advisory' },
  { icon: Coins, label: 'RWA Tokenisation' },
  { icon: Landmark, label: 'Sovereign & Central-Bank Strategy' },
  { icon: BookOpen, label: 'Islamic Finance Digital Structures' },
  { icon: Server, label: 'Institutional Blockchain Infrastructure' },
];

export default function CredibilityStrip() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-3">
                <cap.icon className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
                <span className="text-white/50 text-xs font-sans-body uppercase tracking-wider leading-relaxed">
                  {cap.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}