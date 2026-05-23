import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '@/constants/services';
import { CheckCircle2, ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/" className="mt-4 text-primary hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 flex items-center justify-center space-x-4"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Practice Area</span>
              <div className="h-px w-8 bg-accent" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-serif font-bold text-white md:text-6xl"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link 
              to="/#services" 
              className="mb-10 inline-flex items-center text-sm font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            
            <h2 className="mb-8 text-3xl font-serif font-bold text-primary">Overview</h2>
            <p className="mb-10 text-xl leading-relaxed text-slate-600">
              {service.fullContent}
            </p>

            <h3 className="mb-8 text-2xl font-serif font-bold text-primary">Key Specializations</h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-12">
              {service.specializations.map((spec) => (
                <div key={spec} className="flex items-start space-x-3 rounded-2xl bg-slate-50 p-6 border border-slate-100 transition-all hover:border-accent/20 hover:bg-white">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent shrink-0" />
                  <span className="font-bold text-primary uppercase tracking-widest text-[10px]">{spec}</span>
                </div>
              ))}
            </div>
            
            <div className="rounded-[2.5rem] bg-primary p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <service.icon className="h-32 w-32" />
              </div>
              <h3 className="mb-6 text-3xl font-serif font-bold relative z-10">Strategic Advisory</h3>
              <p className="mb-10 text-white/70 leading-relaxed text-lg relative z-10">
                We provide more than just legal documents; we provide the strategic foresight needed to navigate the complexities.
              </p>
              <Button size="lg" className="h-14 bg-accent text-primary hover:bg-white font-bold uppercase tracking-widest text-xs px-10 relative z-10">
                Request Advisory
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="rounded-[2rem] border-none bg-slate-50 shadow-none overflow-hidden">
              <CardContent className="p-10">
                <h4 className="mb-8 text-xl font-serif font-bold text-primary">Direct Contact</h4>
                <ul className="space-y-8 text-sm text-slate-600">
                  <li className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-bold">+254 700 000 000</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-bold">info@kmwadvocates.co.ke</span>
                  </li>
                </ul>
                <Button className="mt-10 w-full h-14 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-xs">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};