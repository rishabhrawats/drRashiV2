import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, navigationLinks, memberships, hospitals } from '../data/mock';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Award, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-4">
              {doctorInfo.name}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {doctorInfo.title}, {doctorInfo.department} with {doctorInfo.experience} of experience.
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
              <a
                href={`mailto:${doctorInfo.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">{doctorInfo.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={doctorInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Hospitals */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">
              Hospitals
            </h4>
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <div key={hospital.id}>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#c4a35a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">{hospital.name}</p>
                      <p className="text-xs text-white/60">{hospital.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 - Memberships */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">
              Professional Memberships
            </h4>
            <div className="space-y-2">
              {memberships.slice(0, 6).map((membership) => (
                <div key={membership.id} className="flex items-start gap-2">
                  <Award size={12} className="text-[#c4a35a] mt-1 flex-shrink-0" />
                  <span className="text-xs text-white/70">{membership.fullName}</span>
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
            <Link to="/contact" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
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
          We will never share your personal information. Please consult with the doctor for specific medical advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
