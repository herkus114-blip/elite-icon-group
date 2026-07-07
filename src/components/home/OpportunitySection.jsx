import React from 'react';
import FadeIn from '../shared/FadeIn';
import SectionHeading from '../shared/SectionHeading';

const NETWORK_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b8610322e57832d39d21df/6a7be1999_generated_d7eb478c.png';

export default function OpportunitySection() {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={NETWORK_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="The Opportunity"
              title="Bridging Real Assets and Next-Generation Financial Systems"
              center={false}
            />
            <FadeIn delay={0.3}>
              <p className="text-white/45 font-sans-body text-base leading-relaxed mt-8">
                Institutions are moving beyond theory toward implementable tokenisation, regulated digital issuance, and digitally structured capital formation. The challenge is no longer whether digital infrastructure matters, but how to align it with governance, law, finance, and sovereign priorities.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-white/60 font-sans-body text-base leading-relaxed mt-6 font-medium">
                Elite Icon Group bridges that gap.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/5 to-transparent rounded-sm" />
              <img
                src={NETWORK_IMAGE}
                alt="Abstract blockchain network visualization"
                className="relative w-full aspect-video object-cover rounded-sm opacity-80"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}