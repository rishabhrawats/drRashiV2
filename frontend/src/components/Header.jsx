import React, { useState, useEffect } from 'react';
import { navigationLinks, doctorInfo } from '../data/mock';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffef8]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl text-[#1a1a1a] tracking-tight">
              {doctorInfo.name}
            </span>
            <span className="text-xs text-[#7a7a7a] tracking-wide">
              {doctorInfo.subtitle}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-[#4a4a4a] hover:text-[#0d5c63] transition-colors duration-200 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0d5c63] transition-all duration-500 ease-in-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-[#0d5c63] text-[#0d5c63] text-sm font-medium hover:bg-[#0d5c63] hover:text-white transition-all duration-200"
            >
              <Phone size={16} />
              <span>Book Appointment</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1a1a1a]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#fffef8] border-t border-[#e5e4df] shadow-lg">
            <nav className="flex flex-col py-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#0d5c63] text-white text-sm font-medium"
                >
                  <Phone size={16} />
                  <span>Book Appointment</span>
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
