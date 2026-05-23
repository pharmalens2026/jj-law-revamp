import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[900px] w-full overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/f9915650-7141-4201-8235-b051096a6e79/hero-background-law-office-7481a0c4-1778829470231.webp")',
        }}
      >
        <div className="absolute inset-0 bg-[#1a2e25]/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/70 to-transparent lg:bg-gradient-to-r" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10 text-7xl font-serif font-black leading-[0.95] text-white md:text-[9rem] tracking-tighter"
          >
            Unrivaled <br />
            <span className="text-[#c5a059] italic font-normal">Authority.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16 max-w-xl text-xl text-white/80 leading-relaxed font-medium"
          >
            Kinyua Mwaniki & Wainaina Advocates is a powerhouse of legal intelligence. We specialize in complex litigation and strategic advisory for global enterprises navigating the African market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Button size="lg" className="h-20 px-12 text-xs uppercase tracking-[0.2em] font-black bg-[#c5a059] text-[#1a2e25] hover:bg-white hover:text-[#1a2e25] transition-all duration-500 rounded-2xl shadow-2xl">
              Explore Our Expertise
              <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-20 border-white/30 bg-white/10 px-12 text-xs uppercase tracking-[0.2em] font-black text-white backdrop-blur-xl hover:bg-white hover:text-[#1a2e25] transition-all duration-500 rounded-2xl">
              Request Consultation
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 flex flex-wrap items-center gap-12 border-t border-white/10 pt-12"
          >
            <div className="flex items-center space-x-4 text-white/40">
              <Shield className="h-6 w-6 text-[#c5a059]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Tier 1 Legal Rankings 2025</span>
            </div>
            <div className="flex items-center space-x-4 text-white/40">
              <Award className="h-6 w-6 text-[#c5a059]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Excellence in Corporate Law</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};