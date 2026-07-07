import React from 'react';
import FadeIn from '../components/shared/FadeIn';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information that you provide directly to us, including your name, email address, organisation, country, phone number, and any messages or enquiry details submitted through our contact form. We may also collect technical information about your device and how you interact with our website.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information we collect to respond to your enquiries, provide advisory services, communicate with you about our services, and improve our website experience. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: 'Data Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All consultation enquiries are treated with the highest level of confidentiality.',
  },
  {
    title: 'Data Retention',
    content: 'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided on our Contact page.',
  },
  {
    title: 'Cookies',
    content: 'Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date.',
  },
  {
    title: 'Contact',
    content: 'If you have any questions about this Privacy Policy, please contact us through our Contact page.',
  },
];

export default function Privacy() {
  return (
    <div>
      <section className="pt-32 pb-24 bg-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Legal</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl font-medium text-white mt-6">Privacy Policy</h1>
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