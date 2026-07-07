import React, { useState } from 'react';
import FadeIn from '../components/shared/FadeIn';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

const projectCategories = [
  'Real Estate Tokenisation',
  'Sovereign Advisory',
  'Islamic Finance Structuring',
  'Institutional Blockchain',
  'Central Bank Strategy',
  'Technology & Compliance',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', organisation: '', country: '', category: '', email: '', phone: '', message: '', nda: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organisation || !form.message || !form.nda) {
      toast.error('Please fill in all required fields and accept the confidentiality agreement.');
      return;
    }
    setSubmitting(true);

    await base44.integrations.Core.SendEmail({
      to: 'jedlickijherkus@gmail.com',
      subject: `New Enquiry from ${form.name} — ${form.organisation}`,
      body: `
New consultation enquiry received from the Elite Icon Group website.

Name: ${form.name}
Organisation: ${form.organisation}
Country: ${form.country || 'Not provided'}
Project Category: ${form.category || 'Not specified'}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}

Message:
${form.message}
      `.trim(),
    });

    toast.success('Your enquiry has been received. We will respond within 48 business hours.');
    setForm({ name: '', organisation: '', country: '', category: '', email: '', phone: '', message: '', nda: false });
    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <FadeIn>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans-body font-medium">Contact</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6 leading-[1.15] max-w-4xl">
              Request a Confidential Consultation
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 font-sans-body text-lg mt-8 leading-relaxed max-w-3xl">
              We review institutional enquiries only. Confidential projects can be discussed under NDA where appropriate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Name *</label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="bg-charcoal border-white/10 text-white font-sans-body h-12 focus:border-gold/40"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Organisation *</label>
                  <Input
                    value={form.organisation}
                    onChange={e => setForm({ ...form, organisation: e.target.value })}
                    className="bg-charcoal border-white/10 text-white font-sans-body h-12 focus:border-gold/40"
                    placeholder="Company or institution"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Country</label>
                  <Input
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                    className="bg-charcoal border-white/10 text-white font-sans-body h-12 focus:border-gold/40"
                    placeholder="Country of operation"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Project Category</label>
                  <Select value={form.category} onValueChange={v => setForm({ ...form, category: v })}>
                    <SelectTrigger className="bg-charcoal border-white/10 text-white font-sans-body h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-white/10">
                      {projectCategories.map(cat => (
                        <SelectItem key={cat} value={cat} className="text-white/70 font-sans-body">{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="bg-charcoal border-white/10 text-white font-sans-body h-12 focus:border-gold/40"
                    placeholder="Professional email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Phone (optional)</label>
                  <Input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="bg-charcoal border-white/10 text-white font-sans-body h-12 focus:border-gold/40"
                    placeholder="+971 ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/50 text-xs uppercase tracking-widest font-sans-body">Message *</label>
                <Textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="bg-charcoal border-white/10 text-white font-sans-body min-h-[160px] focus:border-gold/40"
                  placeholder="Describe your project or enquiry..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  checked={form.nda}
                  onCheckedChange={v => setForm({ ...form, nda: v })}
                  className="mt-0.5 border-white/20 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                />
                <label className="text-white/40 font-sans-body text-sm leading-relaxed">
                  I acknowledge that this enquiry is confidential and agree that all information shared will be treated with discretion. I understand that Elite Icon Group may require an NDA for detailed project discussions. *
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto text-xs uppercase tracking-[0.2em] font-sans-body font-medium px-12 py-4 bg-gold text-[#0A1628] hover:bg-[#B8953D] transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}