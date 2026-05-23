import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Team', href: isHome ? '#team' : '/#team' },
    { name: 'Insights', href: isHome ? '#blog' : '/#blog' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const brandColor = scrolled || !isHome ? 'text-[#1a2e25]' : 'text-white';
  const subBrandColor = scrolled || !isHome ? 'text-[#1a2e25]/60' : 'text-white/60';

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled || !isHome 
          ? 'bg-[#FDFDFB]/95 shadow-xl backdrop-blur-2xl border-b border-[#1a2e25]/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col leading-tight group">
              <span className={`text-xl font-serif font-black tracking-tighter transition-colors duration-300 ${brandColor}`}>
                KINYUA MWANIKI <span className="text-[#c5a059]">&</span> WAINAINA
              </span>
              <span className={`text-[9px] font-sans font-black uppercase tracking-[0.4em] transition-colors duration-300 ${subBrandColor}`}>
                Advocates
              </span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-[#c5a059] relative group/link ${brandColor}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover/link:w-full" />
                </a>
              ))}
              <Button 
                className={`rounded-full font-bold px-8 h-12 text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform ${
                  scrolled || !isHome ? 'bg-[#1a2e25] text-white hover:bg-[#1a2e25]/90' : 'bg-white text-[#1a2e25] hover:bg-white/90'
                }`}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-full p-3 transition-colors ${
                scrolled || !isHome ? 'bg-[#1a2e25] text-white' : 'bg-white/10 text-white backdrop-blur-md'
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-[100] lg:hidden bg-[#1a2e25] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-12">
          <div className="flex justify-between items-center mb-16">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-serif font-black tracking-tighter text-white">
                KMW <span className="text-[#c5a059]">&</span> CO
              </span>
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-white/40">
                Advocates
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <X className="h-8 w-8" />
            </button>
          </div>
          <div className="space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-4xl font-serif font-black text-white hover:text-[#c5a059] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <Button className="w-full h-16 rounded-2xl text-sm font-black uppercase tracking-widest bg-[#c5a059] text-[#1a2e25]">
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};