import React from 'react';
import { workExperience } from '../data/mock';
import { Building, MapPin, CheckCircle } from 'lucide-react';

const WorkExperiencePage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Career</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Work Experience
          </h1>
        </div>
      </section>

      {/* Experience List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-6">
            {workExperience.map((item) => (
              <div
                key={item.id}
                className={`p-6 border ${
                  item.current
                    ? 'bg-[#0d5c63]/5 border-[#0d5c63]/30'
                    : 'bg-[#f8f7f2] border-[#e5e4df]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                    item.current ? 'bg-[#0d5c63]' : 'bg-[#0d5c63]/10'
                  }`}>
                    <Building size={20} className={item.current ? 'text-white' : 'text-[#0d5c63]'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#0d5c63] font-medium">{item.institution}</p>
                      </div>
                      {item.current && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-[#0d5c63] text-white text-xs">
                          <CheckCircle size={12} />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[#7a7a7a] mt-2">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-sm text-[#4a4a4a] mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperiencePage;
