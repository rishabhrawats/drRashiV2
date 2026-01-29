import React from 'react';
import { doctorInfo } from '../data/mock';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fffef8] pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-[#f0efea] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8f7f2] border border-[#e5e4df]">
              <Award size={16} className="text-[#c4a35a]" />
              <span className="text-sm text-[#4a4a4a]">
                Senior Director — Radiation Oncology
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight">
              {doctorInfo.tagline.split('.')[0]}.
              <span className="block text-[#0d5c63] mt-2">
                {doctorInfo.tagline.split('.')[1]}.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-[#4a4a4a] leading-relaxed max-w-xl">
              {doctorInfo.subTagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors duration-200"
              >
                <span>Book Appointment</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
              >
                <span>View Specialties</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#e5e4df]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#f8f7f2] border border-[#e5e4df]">
                  <Clock size={20} className="text-[#0d5c63]" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-[#1a1a1a]">22+</p>
                  <p className="text-xs text-[#7a7a7a]">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#f8f7f2] border border-[#e5e4df]">
                  <Award size={20} className="text-[#c4a35a]" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-[#1a1a1a]">UICC</p>
                  <p className="text-xs text-[#7a7a7a]">International Fellow</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#f8f7f2] border border-[#e5e4df]">
                  <Shield size={20} className="text-[#1e3a5f]" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-[#1a1a1a]">50+</p>
                  <p className="text-xs text-[#7a7a7a]">Publications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#e5e4df]" />
              
              {/* Main image placeholder with elegant styling */}
              <div className="relative bg-gradient-to-br from-[#f8f7f2] to-[#f0efea] aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#0d5c63]/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-5xl text-[#0d5c63]">
                      RA
                    </span>
                  </div>
                  <p className="font-serif text-2xl text-[#1a1a1a] mb-2">
                    {doctorInfo.name}
                  </p>
                  <p className="text-sm text-[#7a7a7a]">
                    MBBS, MD (Radiation Oncology)
                  </p>
                  <p className="text-sm text-[#7a7a7a]">
                    UICC Fellow, ESTRO Member
                  </p>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-lg border border-[#e5e4df] max-w-xs">
                <p className="text-sm text-[#7a7a7a] mb-2">Specialized in</p>
                <p className="font-serif text-lg text-[#0d5c63]">
                  Precision Brachytherapy & Women's Cancers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
