import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { caseResults, caseResultsSubtitle, caseResultsDescription, caseResultsDisclaimer } from '@/constants/caseResults';

export const CaseResults = () => {
  return (
    <section id="track-record" className="bg-background py-32 lg:py-56 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center space-x-4"
          >
            <div className="h-px w-16 bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Impact & Success</span>
            <div className="h-px w-16 bg-accent" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 text-7xl font-serif font-black text-primary md:text-[8rem] tracking-tighter leading-none"
          >
            Selected <br /><span className="text-accent italic font-normal">Triumphs</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-primary/60 font-medium leading-relaxed"
          >
            {caseResultsDescription}
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {caseResults.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="h-full border border-primary/5 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 overflow-hidden group">
                <div className="h-3 bg-accent w-0 group-hover:w-full transition-all duration-1000" />
                <CardHeader className="pt-12 px-8">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-primary text-accent group-hover:rotate-6 transition-transform">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                    {item.category}
                  </div>
                  <CardTitle className="text-2xl font-serif font-black text-primary leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-12">
                  <p className="text-primary/60 text-base leading-relaxed font-medium border-t border-primary/5 pt-8">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 text-center"
        >
          <p className="text-[10px] text-primary/30 font-black uppercase tracking-[0.3em] italic">
            {caseResultsDisclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};