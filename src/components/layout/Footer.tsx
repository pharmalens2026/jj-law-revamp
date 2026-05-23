import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Scale, Globe } from 'lucide-react';
import { servicesData } from '@/constants/services';

export const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-accent text-primary">
                <Scale className="h-7 w-7" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-serif font-bold tracking-tight">
                  Kinyua Mwaniki <span className="text-accent">&</span> Wainaina
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">
                  Advocates
                </span>
              </div>
            </div>
            <p className="mb-8 text-white/60 leading-relaxed text-sm">
              An established corporate and commercial law firm serving local and multinational clients in Kenya for over 20 years. Committed to excellence, integrity, and strategic legal solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">Firm</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/#about" className="hover:text-white transition-colors">About the Firm</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Our Practice Areas</Link></li>
              <li><Link to="/#team" className="hover:text-white transition-colors">Legal Experts</Link></li>
              <li><Link to="/#blog" className="hover:text-white transition-colors">Insights & News</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">Expertise</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">Contact Info</h4>
            <ul className="space-y-6 text-white/60 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div className="leading-relaxed">
                  <p className="font-bold text-white mb-1">Nairobi Head Office</p>
                  <p>Viewpark Towers, 16th Floor, Nairobi</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div className="leading-relaxed">
                  <p className="font-bold text-white mb-1">Branch Office</p>
                  <p>Banista Complex, 2nd Floor, off Garissa Road, Mwingi Town</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p>+254 020 222 9866</p>
                  <p>+254 0733 720 468</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@kmwadvocates.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-accent shrink-0" />
                <span>kmwadvocates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Kinyua Mwaniki & Wainaina Advocates. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};