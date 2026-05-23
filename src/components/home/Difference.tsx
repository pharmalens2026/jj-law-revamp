import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Users, Smile, Award } from 'lucide-react';

const features = [
  {
    title: 'Global Standards',
    description: 'We apply international legal benchmarks to every local matter we handle.',
    icon: Globe,
  },
  {
    title: 'Absolute Integrity',
    description: 'Our reputation is built on an unwavering commitment to ethical practice.',
    icon: Shield,
  },
  {
    title: 'Elite Network',
    description: 'Unmatched access to regulatory bodies and regional legal experts.',
    icon: Users,
  },
  {
    title: 'Rapid Execution',
    description: 'Agile legal responses that match the speed of modern commerce.',
    icon: Zap,
  },
];

const stats = [
  { label: 'Matters Resolved', value: '5K+', icon: Smile },
  { label: 'Client Retention', value: '98%', icon: Award },
];

export const Difference = () => {
  return (
    <section id="difference" className="bg-[#1a2e25] py-32 lg:py-56 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 flex items-center space-x-4"
            >
              <div className="h-px w-16 bg-[#c5a059]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a059]">The KMW Advantage</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-10 text-6xl font-serif font-black text-white leading-[1.05] md:text-8xl tracking-tighter"
            >
              Commanding <span className="italic font-normal text-[#c5a059]">Excellence</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-20 text-xl text-white/60 leading-relaxed font-medium max-w-xl"
            >
              Kinyua Mwaniki & Wainaina Advocates operates at the intersection of deep local knowledge and international legal sophistication.
            </motion.p>

            <div className="grid gap-12 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white/5 border border-white/10 text-[#c5a059] transition-all duration-500 group-hover:bg-[#c5a059] group-hover:text-[#1a2e25] group-hover:-translate-y-2">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h4 className="mb-4 text-2xl font-serif font-black text-white">{feature.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:pl-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-12 rounded-[3rem] bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center backdrop-blur-3xl group overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                  <stat.icon className="h-40 w-40 text-white" />
                </div>
                <div className="text-8xl font-serif font-black text-[#c5a059] mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};