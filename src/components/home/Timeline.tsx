import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2013',
    title: 'The Foundation',
    description: 'Established in Nairobi with a vision to redefine commercial legal advisory in Kenya.'
  },
  {
    year: '2016',
    title: 'Regional Influence',
    description: 'Expanded practice to handle major infrastructure and property developments across East Africa.'
  },
  {
    year: '2019',
    title: 'Legal Leadership',
    description: 'Recognized as a leading firm in constitutional litigation and high-stakes commercial disputes.'
  },
  {
    year: '2022',
    title: 'Tech Integration',
    description: 'Pioneered digital legal frameworks for tech enterprises and data privacy in the region.'
  },
  {
    year: '2025',
    title: 'Present Excellence',
    description: 'Operating as Kinyua Mwaniki & Wainaina Advocates, an elite legal institution.'
  }
];

export const Timeline = () => {
  return (
    <section className="bg-[#1a2e25] py-32 text-white lg:py-48 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '64px 64px' }} />
           
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center space-x-4"
          >
            <div className="h-px w-16 bg-[#c5a059]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Our Evolution</span>
            <div className="h-px w-16 bg-[#c5a059]" />
          </motion.div>
          <h3 className="text-7xl font-serif font-black md:text-9xl tracking-tighter">The Heritage</h3>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-white/10 hidden md:block" />

          <div className="space-y-24 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col items-center md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 p-6">
                  <div className={`rounded-[2.5rem] bg-white/5 p-12 backdrop-blur-3xl border border-white/10 ${
                    index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                  } group hover:bg-white/10 transition-colors duration-500`}>
                    <span className="mb-4 block text-4xl font-serif font-black text-[#c5a059]">{milestone.year}</span>
                    <h4 className="mb-4 text-2xl font-serif font-black">{milestone.title}</h4>
                    <p className="text-white/60 leading-relaxed font-medium">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 md:block">
                  <div className="h-full w-full rounded-full bg-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.5)]" />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};