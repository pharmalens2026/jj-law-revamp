import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/constants/services';

export const Services = () => {
  return (
    <section id="services" className="bg-[#FDFDFB] py-32 lg:py-56 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center space-x-4"
          >
            <div className="h-px w-16 bg-[#c5a059]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Expertise & Specialization</span>
            <div className="h-px w-16 bg-[#c5a059]" />
          </motion.div>
          <h3 className="text-7xl font-serif font-black text-[#1a2e25] md:text-9xl tracking-tighter">Practice Areas</h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Link to={`/services/${service.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(40,50,45,0.08)] transition-all duration-700 hover:shadow-[0_60px_100px_-25px_rgba(40,50,45,0.2)]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/20 to-transparent" />
                  
                  <div className="absolute top-10 right-10">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 group-hover:bg-[#c5a059] group-hover:border-[#c5a059] transition-all duration-500">
                      <ArrowUpRight className="h-6 w-6 text-white group-hover:text-[#1a2e25]" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-10 right-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c5a059] text-[#1a2e25]">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h4 className="mb-4 text-3xl font-serif font-black text-white leading-tight">{service.title}</h4>
                    <p className="text-white/60 text-sm font-medium line-clamp-2 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};