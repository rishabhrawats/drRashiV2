import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, navigationLinks, memberships, hospitals } from '../data/mock';
import { Phone, Globe, MapPin, Instagram, Youtube, Heart, ExternalLink, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" data-testid="main-footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="inline-block bg-white rounded-lg px-3 py-2">
                <img
                  src={doctorInfo.logo}
                  alt="Dr. Rashi Agrawal"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {doctorInfo.title}. {doctorInfo.designation}, {doctorInfo.hospital}.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href={doctorInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-pink-600 rounded-lg transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-red-600 rounded-lg transition-colors"
                data-testid="footer-youtube"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href={doctorInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-blue-700 rounded-lg transition-colors"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={doctorInfo.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors"
                data-testid="footer-google-reviews"
                aria-label="Google Reviews"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/book-appointment"
                className="block text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
              >
                Book Appointment
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-slate-800 group-hover:bg-pink-600 rounded-lg transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm">{doctorInfo.phone}</span>
              </a>
              <a
                href={`tel:${doctorInfo.phone2.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-slate-800 group-hover:bg-pink-600 rounded-lg transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm">{doctorInfo.phone2}</span>
              </a>
              <a
                href={`https://${doctorInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-slate-800 group-hover:bg-cyan-600 rounded-lg transition-colors">
                  <Globe size={14} />
                </div>
                <span className="text-sm">{doctorInfo.website}</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
              Locations
            </h4>
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <a
                  key={hospital.id}
                  href={hospital.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-800 group-hover:bg-pink-600 rounded-lg flex-shrink-0 transition-colors mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{hospital.name}</p>
                    <p className="text-xs text-slate-500">{hospital.location}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Memberships */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center mb-3">Professional Memberships</p>
          <div className="flex flex-wrap justify-center gap-2">
            {memberships.map((m, i) => (
              <span key={i} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} {doctorInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              Made with <Heart size={11} className="text-pink-500" fill="currentColor" /> for better healthcare
            </p>
          </div>
          <p className="mt-3 text-[11px] text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            Disclaimer: Information provided is for educational purposes. Individual treatment plans vary. 
            Consult Dr. Agrawal for personalized medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
