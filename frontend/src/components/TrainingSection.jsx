import React from 'react';
import { trainingTimeline } from '../data/mock';
import { MapPin, GraduationCap, Globe } from 'lucide-react';

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 lg:py-32 bg-[#fffef8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
            Global Training & Fellowships
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            International Excellence in Oncology Education
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Training at world-renowned institutions across three continents, 
            each adding unique dimensions to patient care and clinical expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#e5e4df]" />

          <div className="space-y-8 lg:space-y-0">
            {trainingTimeline.map((item, index) => (
              <div
                key={item.id}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="group p-8 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-300">
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d5c63]/10 text-[#0d5c63] text-xs font-medium mb-4">
                      <Globe size={12} />
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                      {item.institution}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-[#7a7a7a] mb-4">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-[#4a4a4a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d5c63] border-4 border-[#fffef8] rounded-full" />

                {/* Empty Space for other half */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-16 p-8 bg-[#1e3a5f] text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10">
                <GraduationCap size={28} className="text-[#c4a35a]" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Continuous Learning</p>
                <p className="font-serif text-xl">
                  Focus on what each training added to patient care, not just certificates.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-[#1e3a5f] transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
