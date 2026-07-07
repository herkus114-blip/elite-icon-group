import React from 'react';
import FadeIn from '../components/shared/FadeIn';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.',
  },
  {
    title: 'Nature of Services',
    content: 'Elite Icon Group provides strategic advisory services. The information on this website is for general informational purposes only and does not constitute financial, legal, investment, or other professional advice. Nothing on this website should be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for any financial product or service.',
  },
  {
    title: 'No Investment Advice',
    content: 'The content provided on this website does not constitute investment advice. Any decisions made based on information contained herein are made at your own risk. We strongly recommend seeking independent professional advice before making any investment or financial decisions.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on this website, including text, graphics, logos, images, and digital downloads, is the property of Elite Icon Group and is protected by international copyright and intellectual property laws.',
  },
  {
    title: 'Confidentiality',
    content: 'All enquiries and consultations are treated as confidential. However, we cannot guarantee the security of information transmitted electronically. Detailed project discussions requiring enhanced confidentiality will be conducted under appropriate non-disclosure agreements.',
  },
  {
    title: 'Limitation of Liability',
    content: 'Elite Icon Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any information contained herein. Our total liability shall not exceed the amount paid, if any, by you for accessing this website.',
  },
  {
    title: 'Disclaimer',
    content: 'This website and its content are provided "as is" without warranty of any kind, either express or implied. Elite Icon Group does not guarantee the accuracy, completeness, or timeliness of the information on this website. Past performance discussed in any insights or articles does not guarantee future results.',
  },
  {
    title: 'Regulatory Notice',
    content: 'Elite Icon Group operates as a strategic advisory firm. We are not a broker-dealer, investment advisor, or exchange. Our advisory services relate to strategic structuring and institutional consultation, not securities trading or financial product sales.',
  },
  {
    title: 'Governing Law',
    content: 'These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, specifically the Dubai International Financial Centre (DIFC) where applicable.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website following any changes constitutes acceptance of the revised terms.',
  },
];

export default function Terms() {
  return (
    <div>
      <section className="pt-32 pb-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Legal</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl font-medium text-white mt-6">Terms & Disclaimer</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 font-sans-body text-sm mt-6">Last updated: March 2026</p>
          </FadeIn>

          <div className="mt-16 space-y-12">
            {sections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.05}>
                <div>
                  <h2 className="font-serif-display text-xl text-white font-medium">{section.title}</h2>
                  <p className="text-white/45 font-sans-body text-sm leading-relaxed mt-4">{section.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}