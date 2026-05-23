import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';
import { servicesData } from '@/constants/services';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our team will contact you shortly.');
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Contact Us</span>
            </div>
            <h3 className="mb-8 text-4xl font-bold text-primary md:text-5xl">Ready to Start a Conversation?</h3>
            <p className="mb-12 text-lg text-slate-600">
              Whether you're facing a legal challenge or seeking proactive corporate advice, our team is here to help. Reach out to us via the form or through our direct channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-slate-100 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Head Office Location</h4>
                  <p className="text-slate-600">
                    Viewpark Towers, 16th Floor, Nairobi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-slate-100 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Branch Office</h4>
                  <p className="text-slate-600">
                    Banista Complex, 2nd Floor, off Garissa Road, Mwingi Town
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-slate-100 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone Numbers</h4>
                  <p className="text-slate-600">+254 020 222 9866 / +254 0733 720 468</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-slate-100 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Address</h4>
                  <p className="text-slate-600">info@kmwadvocates.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-8 lg:p-12 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <Input placeholder="John Doe" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Legal Service Needed</label>
                <Select required>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicesData.map((service) => (
                      <SelectItem key={service.slug} value={service.slug}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea 
                  placeholder="How can we assist you?" 
                  className="min-h-[150px] bg-white" 
                  required 
                />
              </div>

              <Button type="submit" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};