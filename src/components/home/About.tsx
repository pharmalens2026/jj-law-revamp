import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Briefcase, Users, Award, ChevronRight, CheckCircle2, FileQuestion } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '20+', icon: Award },
    { label: 'Primary Expertise', value: '5+', icon: Scale },
    { label: 'Global Clients', value: '100+', icon: Users },
    { label: 'Branch Offices', value: '2', icon: Briefcase },
  ];

  const clientBase = [
    'Multinational Corporations',
    'Non-Governmental Organizations (NGOs)',
    'Local Businesses',
    'Banking Institutions',
    'High-Net-Worth Individuals'
  ];

  return (
    <section id="about" className="bg-[#F8FAF9] py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Established 20+ Years</span>
            </div>
            <h2 className="mb-8 text-5xl font-serif font-bold text-primary leading-tight md:text-6xl">
              Serving Kenya with <span className="italic font-normal">Integrity</span> & Mastery
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600 font-sans">
              Kinyua Mwaniki & Wainaina Advocates (KMW Advocates) is an established corporate and commercial law firm that has been serving local and multinational clients in Kenya for over 20 years.
            </p>
            <p className="mb-12 text-lg leading-relaxed text-slate-600 font-sans">
              Our multidisciplinary practice focuses on high-end corporate services and dispute resolution, bridging the gap between complex legal challenges and practical commercial success.
            </p>
            
            <div className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="mb-6 flex items-center space-x-2 text-xl font-bold text-primary">
                <Users className="h-5 w-5 text-accent" />
                <span>Our Diverse Client Base</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clientBase.map((client, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm font-medium">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl bg-primary/5 p-8 border border-primary/10">
              <h3 className="mb-4 flex items-center space-x-2 text-xl font-bold text-primary">
                <FileQuestion className="h-5 w-5 text-accent" />
                <span>Consultation Preparation</span>
              </h3>
              <p className="text-slate-600 leading-relaxed italic">
                "If you are planning an in-person consultation at our head office, are there specific legal documents or a particular transaction you would like to prepare for beforehand? Reach out to us for guidance."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 border-t border-slate-200 pt-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <span className="text-4xl font-serif font-bold text-primary">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl shadow-[-20px_20px_60px_rgba(0,0,0,0.1)]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/peter-kinyua-portrait-22f6704b-1778829137924.webp" 
                alt="Peter Kinyua - Kinyua Mwaniki & Wainaina Advocates" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-2xl font-bold">Peter Kinyua</p>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">Founding Partner</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-3xl bg-accent/5 -z-10" />
            <div className="absolute -top-10 -left-10 h-40 w-40 border border-accent/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};