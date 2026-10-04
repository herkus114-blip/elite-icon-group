import React from 'react';
import FadeIn from '../components/shared/FadeIn';
import SectionHeading from '../components/shared/SectionHeading';
import GoldButton from '../components/shared/GoldButton';
import { Shield, Scale, Landmark, Lock, Target, TrendingUp, FileBadge } from 'lucide-react';

const BOARDROOM_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/63dcff97e_generated_289d83e9.png';

const principles = [
  { icon: Shield, title: 'Compliance First', desc: 'Every recommendation is anchored in regulatory awareness and institutional standards.' },
  { icon: Scale, title: 'Governance-Led Strategy', desc: 'We prioritize governance frameworks that stand up to sovereign-level scrutiny.' },
  { icon: Landmark, title: 'Sovereign Alignment', desc: 'Our advisory aligns with national economic development priorities.' },
  { icon: Lock, title: 'Discretion & Confidentiality', desc: 'All engagements are treated with the highest level of confidentiality.' },
  { icon: Target, title: 'Execution Realism', desc: 'We deliver strategies that are implementable, not theoretical.' },
  { icon: TrendingUp, title: 'Long-Term Capital Formation', desc: 'Our focus is building enduring value, not short-term market positioning.' },
  { icon: FileBadge, title: 'Services Licence', desc: 'LICENCE NO: 47038205. ACTIVITY: 1. Innovation & Artificial Intelligence Research; 2. Consultancies Software House; 3. Computer Systems and Software Designing.' },
  { icon: FileBadge, title: 'Media Licence', desc: 'LICENCE NO: 17010521. ACTIVITY: Artificial Intelligence Developer.' },
  { icon: FileBadge, title: 'Commercial Licence RAKIA - UAE', desc: 'ACTIVITY: Commercial Brokers. LICENCE NO: RAKIA51FZ307125749.' },
];

const divisions = [
  { region: 'EU Division', focus: 'Strategic and Monetary Advisory', desc: 'Providing strategic counsel on European regulatory frameworks and monetary policy alignment.' },
  { region: 'UAE Division', focus: 'Technology and Innovation', desc: 'Headquartered in Dubai, leading digital infrastructure and blockchain innovation initiatives.' },
  { region: 'USA Division', focus: 'Policy Relations and Government Interface', desc: 'Managing policy relations and interfacing with government stakeholders across the Americas.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy">
        <div className="absolute inset-0 opacity-15">
          <img src={BOARDROOM_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/70 to-[#0A1628]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">About Elite Icon Group</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              A multinational strategic advisory platform
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 font-sans-body text-lg mt-8 leading-relaxed max-w-3xl">
              Elite Icon Group is a multinational strategic advisory platform headquartered in Dubai and focused on real-world asset tokenisation, sovereign financial architecture, institutional blockchain systems, and large-scale real estate advisory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-sans-body font-medium">Our Mission</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif-display text-2xl md:text-3xl lg:text-4xl font-medium text-white mt-6 leading-tight italic">
                "To help institutions structure secure, compliant, and investable digital asset ecosystems linked to real-world economic value."
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Institutional Principles"
            title="How We Operate"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="bg-charcoal border border-white/5 p-8 h-full hover:border-gold/15 transition-all duration-500">
                  <p.icon className="w-6 h-6 text-gold/50" strokeWidth={1.5} />
                  <h3 className="font-serif-display text-lg text-white font-medium mt-5">{p.title}</h3>
                  <p className="text-white/40 font-sans-body text-sm leading-relaxed mt-3">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Corporate Structure"
            title="Global Presence"
            description="Operating across three strategic divisions to provide comprehensive institutional advisory coverage."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {divisions.map((div, i) => (
              <FadeIn key={div.region} delay={i * 0.1}>
                <div className="bg-navy border border-white/5 p-10 h-full">
                  <span className="text-gold/70 text-xs uppercase tracking-widest font-sans-body">{div.region}</span>
                  <h3 className="font-serif-display text-xl text-white font-medium mt-4">{div.focus}</h3>
                  <p className="text-white/40 font-sans-body text-sm leading-relaxed mt-4">{div.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-white">
              Ready to explore institutional advisory?
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
