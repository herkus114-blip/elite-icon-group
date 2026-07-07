import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CredibilityStrip from '../components/home/CredibilityStrip';
import OpportunitySection from '../components/home/OpportunitySection';
import CapabilityPillars from '../components/home/CapabilityPillars';
import SectorFocus from '../components/home/SectorFocus';
import FounderSection from '../components/home/FounderSection';
import InsightsPreview from '../components/home/InsightsPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CredibilityStrip />
      <OpportunitySection />
      <CapabilityPillars />
      <SectorFocus />
      <FounderSection />
      <InsightsPreview />
      <FinalCTA />
    </div>
  );
}