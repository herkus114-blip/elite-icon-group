import React from 'react';
import FadeIn from '../shared/FadeIn';
import SectionHeading from '../shared/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    category: 'Sovereign Strategy',
    title: 'Tokenisation Strategy for Sovereign Real Estate Platforms',
    excerpt: 'How governments can structure tokenised real estate frameworks that align with sovereign economic priorities.',
  },
  {
    category: 'Islamic Finance',
    title: 'Shariah-Compliant Digital Asset Structures for Institutional Markets',
    excerpt: 'Exploring the intersection of halal investment principles and digital asset infrastructure.',
  },
  {
    category: 'Governance',
    title: 'What Governments Should Demand from a Regulated Tokenisation Architecture',
    excerpt: 'Key governance requirements for institutional-grade tokenisation frameworks.',
  },
  {
    category: 'Technology',
    title: 'The Governance Layer Behind Institutional Digital Asset Platforms',
    excerpt: 'Understanding the compliance and governance infrastructure that powers institutional digital assets.',
  },
];

export default function InsightsPreview() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Insights"
          title="Featured Thought Leadership"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.1}>
              <Link to="/Insights" className="block group">
                <div className="bg-charcoal border border-white/5 p-8 md:p-10 h-full hover:border-gold/15 transition-all duration-500">
                  <span className="text-gold/60 text-xs uppercase tracking-widest font-sans-body">{article.category}</span>
                  <h3 className="font-serif-display text-lg md:text-xl text-white font-medium mt-4 leading-snug group-hover:text-gold/90 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-white/35 font-sans-body text-sm leading-relaxed mt-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-gold/40 text-xs uppercase tracking-widest font-sans-body mt-6 group-hover:text-gold/70 transition-colors duration-300">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}