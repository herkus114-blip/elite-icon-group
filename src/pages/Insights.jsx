import React, { useState } from 'react';
import FadeIn from '../components/shared/FadeIn';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Sovereign Strategy',
    title: 'Tokenisation Strategy for Sovereign Real Estate Platforms',
    excerpt: 'Sovereign real estate platforms represent one of the most significant opportunities for governments seeking to leverage digital infrastructure. This analysis explores how tokenisation frameworks can be structured to align with national economic priorities while maintaining institutional credibility.',
    date: 'March 2026',
    readTime: '8 min read',
  },
  {
    id: 2,
    category: 'Islamic Finance',
    title: 'Shariah-Compliant Digital Asset Structures for Institutional Markets',
    excerpt: 'The intersection of Islamic finance principles and digital asset infrastructure presents unique opportunities for institutional investors. We examine the structural requirements for building Shariah-compliant tokenisation frameworks that meet both religious governance and regulatory standards.',
    date: 'February 2026',
    readTime: '10 min read',
  },
  {
    id: 3,
    category: 'Governance',
    title: 'What Governments Should Demand from a Regulated Tokenisation Architecture',
    excerpt: 'As governments increasingly evaluate tokenisation frameworks, the key question shifts from whether to adopt digital infrastructure to what governance standards should be required. This paper outlines the essential requirements for institutional-grade tokenisation architecture.',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    id: 4,
    category: 'Technology',
    title: 'The Governance Layer Behind Institutional Digital Asset Platforms',
    excerpt: 'Understanding the compliance, cybersecurity, and governance infrastructure that powers institutional digital asset platforms is critical for any organization evaluating blockchain integration. We break down the essential layers of a governance-first approach.',
    date: 'December 2025',
    readTime: '9 min read',
  },
];

const categories = ['All', 'Sovereign Strategy', 'Islamic Finance', 'Governance', 'Technology'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Insights</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              Thought Leadership & Strategic Analysis
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 font-sans-body text-lg mt-8 leading-relaxed max-w-3xl">
              Institutional perspectives on real-world asset tokenisation, sovereign digital infrastructure, and the future of regulated digital finance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest font-sans-body whitespace-nowrap py-2 border-b-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-gold border-gold'
                    : 'text-white/40 border-transparent hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {filteredArticles.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.05}>
                <article className="bg-charcoal border border-white/5 p-10 md:p-14 hover:border-gold/10 transition-all duration-500 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-gold/60 text-xs uppercase tracking-widest font-sans-body">{article.category}</span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/30 text-xs font-sans-body">{article.date}</span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/30 text-xs font-sans-body">{article.readTime}</span>
                      </div>
                      <h2 className="font-serif-display text-xl md:text-2xl text-white font-medium mt-4 group-hover:text-gold/90 transition-colors duration-300">
                        {article.title}
                      </h2>
                      <p className="text-white/40 font-sans-body text-sm leading-relaxed mt-4 max-w-3xl">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 text-gold/40 text-xs uppercase tracking-widest font-sans-body group-hover:text-gold/70 transition-colors duration-300">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}