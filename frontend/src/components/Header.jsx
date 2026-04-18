import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks, doctorInfo } from '../data/mock';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.slice(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" data-testid="header-logo">
            <img
              src={doctorInfo.logo}
              alt="Dr. Rashi Agrawal"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-pink-600 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-pink-600 rounded-lg transition-colors"
              data-testid="header-call-btn"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <Link
              to="/book-appointment"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              data-testid="header-book-btn"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl">
            <nav className="flex flex-col p-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 text-slate-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-pink-600 font-medium border border-pink-200 rounded-xl hover:bg-pink-50"
                >
                  <Phone size={16} />
                  {doctorInfo.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
