import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks, doctorInfo, hospitals } from '../data/mock';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffef8]/95 backdrop-blur-sm shadow-sm'
          : 'bg-[#fffef8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-lg lg:text-xl text-[#1a1a1a] tracking-tight">
              {doctorInfo.name}
            </span>
            <span className="text-[10px] lg:text-xs text-[#7a7a7a] tracking-wide">
              {doctorInfo.department}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            {navigationLinks.slice(0, 7).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative text-sm transition-colors duration-200 py-2 group ${
                  location.pathname === link.href
                    ? 'text-[#0d5c63]'
                    : 'text-[#4a4a4a] hover:text-[#0d5c63]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#0d5c63] transition-all duration-500 ease-in-out ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-[#4a4a4a] hover:text-[#0d5c63] py-2">
                More
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-48 bg-[#fffef8] border border-[#e5e4df] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/work-experience" className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f8f7f2] hover:text-[#0d5c63]">
                  Work Experience
                </Link>
                <Link to="/memberships" className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f8f7f2] hover:text-[#0d5c63]">
                  Memberships
                </Link>
                <Link to="/awards" className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f8f7f2] hover:text-[#0d5c63]">
                  Awards
                </Link>
                <Link to="/doctor-talk" className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f8f7f2] hover:text-[#0d5c63]">
                  Doctor Talk
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Side CTAs */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Hospital Selector - Desktop */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setShowHospitalDropdown(!showHospitalDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#4a4a4a] bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/30 transition-colors"
              >
                <span className="max-w-[120px] truncate">{selectedHospital.location}</span>
                <ChevronDown size={12} />
              </button>
              {showHospitalDropdown && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-[#fffef8] border border-[#e5e4df] shadow-lg z-50">
                  {hospitals.map((hospital) => (
                    <button
                      key={hospital.id}
                      onClick={() => {
                        setSelectedHospital(hospital);
                        setShowHospitalDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#f8f7f2] ${
                        selectedHospital.id === hospital.id ? 'text-[#0d5c63] bg-[#f8f7f2]' : 'text-[#4a4a4a]'
                      }`}
                    >
                      <span className="font-medium block">{hospital.name}</span>
                      <span className="text-xs text-[#7a7a7a]">{hospital.location}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call Now */}
            <a
              href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm text-[#0d5c63] hover:bg-[#0d5c63]/5 transition-colors"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">Call Now</span>
            </a>

            {/* Book Appointment CTA */}
            <Link
              to="/book-appointment"
              className="flex items-center gap-1.5 px-4 py-2 lg:px-5 lg:py-2.5 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors"
            >
              <span className="hidden sm:inline">Book</span> Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#1a1a1a]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-16 left-0 right-0 bg-[#fffef8] border-t border-[#e5e4df] shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col py-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-6 py-3 text-sm ${
                    location.pathname === link.href
                      ? 'text-[#0d5c63] bg-[#f8f7f2]'
                      : 'text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[#e5e4df] mt-2 pt-2">
                <Link to="/work-experience" className="px-6 py-3 text-sm text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2] block">
                  Work Experience
                </Link>
                <Link to="/memberships" className="px-6 py-3 text-sm text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2] block">
                  Memberships
                </Link>
                <Link to="/awards" className="px-6 py-3 text-sm text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2] block">
                  Awards
                </Link>
                <Link to="/doctor-talk" className="px-6 py-3 text-sm text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#f8f7f2] block">
                  Doctor Talk
                </Link>
              </div>
              
              {/* Hospital Selector - Mobile */}
              <div className="border-t border-[#e5e4df] mt-2 pt-2 px-6">
                <p className="text-xs text-[#7a7a7a] mb-2">Select Hospital</p>
                {hospitals.map((hospital) => (
                  <button
                    key={hospital.id}
                    onClick={() => setSelectedHospital(hospital)}
                    className={`w-full text-left py-2 text-sm ${
                      selectedHospital.id === hospital.id ? 'text-[#0d5c63]' : 'text-[#4a4a4a]'
                    }`}
                  >
                    {hospital.name} - {hospital.location}
                  </button>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="px-6 pt-4 pb-4 space-y-3">
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#0d5c63] text-[#0d5c63] text-sm font-medium"
                >
                  <Phone size={16} />
                  Call Now: {doctorInfo.phone}
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
