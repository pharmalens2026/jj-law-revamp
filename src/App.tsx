import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Services } from './components/home/Services';
import { Timeline } from './components/home/Timeline';
import { Difference } from './components/home/Difference';
import { CaseResults } from './components/home/CaseResults';
import { Team } from './components/team/Team';
import { Blog } from './components/blog/Blog';
import { ContactForm } from './components/contact/ContactForm';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { Toaster } from './components/ui/sonner';
import { ServiceDetail } from './components/services/ServiceDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Timeline />
    <Difference />
    <CaseResults />
    <Team />
    <Blog />
    <ContactForm />
  </>
);

function App() {
  useEffect(() => {
    document.title = "Kinyua Mwaniki & Wainaina Advocates | Elite Legal Intelligence";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDFDFB]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;