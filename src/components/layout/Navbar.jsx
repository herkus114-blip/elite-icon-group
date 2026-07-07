import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
  { label: 'Home', path: '/Home' },
  { label: 'About', path: '/About' },
  { label: 'Advisory Services', path: '/Services' },
  { label: 'Sectors', path: '/Sectors' },
  { label: 'Insights', path: '/Insights' },
  { label: 'Leadership', path: '/Leadership' },
  { label: 'Contact', path: '/Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/Home" className="flex items-center gap-3">
            <span className="text-gold font-serif-display text-xl font-semibold tracking-wide">ELITE ICON GROUP</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-sans-body uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/Contact"
              className="text-xs uppercase tracking-widest font-sans-body px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-[#0A1628] transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>

          <button className="lg:hidden text-white/80" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm uppercase tracking-widest font-sans-body py-2 ${
                    location.pathname === link.path ? 'text-gold' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/Contact"
                className="block text-center text-xs uppercase tracking-widest font-sans-body px-6 py-3 border border-gold/40 text-gold mt-4"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}