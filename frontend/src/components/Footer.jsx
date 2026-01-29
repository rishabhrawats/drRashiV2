import React from 'react';
import { doctorInfo, navigationLinks, memberships } from '../data/mock';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-4">
              {doctorInfo.name}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-md">
              Senior Director & Program Coordinator in Radiation Oncology with 22+ years 
              of experience across the full spectrum of radiotherapy — combining advanced 
              technology with compassionate patient care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>{doctorInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={16} />
                <span className="text-sm">Max Super Speciality Hospital, Vaishali</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Memberships */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">
              Professional Memberships
            </h4>
            <div className="space-y-3">
              {memberships.slice(0, 5).map((membership, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Award size={14} className="text-[#c4a35a] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/70">{membership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {currentYear} {doctorInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a 
              href="https://www.maxhealthcare.in/doctor/dr-rashi-agrawal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Max Healthcare Profile
            </a>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <p className="mt-6 pt-6 border-t border-white/10 text-xs text-white/40 leading-relaxed text-center">
          Disclaimer: The information on this website is for general informational purposes only. 
          Medical decisions are individualized and treatment plans should be discussed after clinical evaluation. 
          Please consult with the doctor for specific medical advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
