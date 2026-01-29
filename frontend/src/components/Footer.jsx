import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, navigationLinks, memberships, hospitals } from '../data/mock';
import { Phone, Mail, MapPin, Instagram, Youtube, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-display font-bold text-lg">
                RA
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Dr. Rashi Agrawal</p>
                <p className="text-xs text-slate-400">Radiation Oncologist</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {doctorInfo.experience} years of excellence in radiation oncology, combining advanced technology with compassionate care.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={doctorInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-pink-600 rounded-lg transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-red-600 rounded-lg transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href={doctorInfo.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg">
                  <Phone size={16} />
                </div>
                <span className="text-sm">{doctorInfo.phone}</span>
              </a>
              <a
                href={`mailto:${doctorInfo.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg">
                  <Mail size={16} />
                </div>
                <span className="text-sm">{doctorInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Hospitals */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Locations
            </h4>
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <div key={hospital.id} className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{hospital.name}</p>
                    <p className="text-xs text-slate-400">{hospital.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Memberships */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center mb-4">Professional Memberships</p>
          <div className="flex flex-wrap justify-center gap-4">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {currentYear} {doctorInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              Made with <Heart size={12} className="text-red-500" fill="currentColor" /> for better healthcare
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-600 text-center max-w-3xl mx-auto">
            Disclaimer: Information provided is for educational purposes. Individual treatment plans vary. 
            Consult Dr. Agrawal for personalized medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
