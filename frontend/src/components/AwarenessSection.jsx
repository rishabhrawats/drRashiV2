import React from 'react';
import { awarenessData } from '../data/mock';
import { Ribbon, Users, Tv, Heart, Quote } from 'lucide-react';

const iconMap = {
  0: Ribbon,
  1: Users,
  2: Tv,
  3: Heart,
};

const AwarenessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#fffef8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
              Cancer Awareness & Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
              Beyond Treatment — Building Awareness
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8">
              Cancer awareness is part of clinical responsibility, not charity. 
              Active engagement in community health education, particularly focused on women's cancers.
            </p>

            {/* Quote */}
            <div className="p-6 bg-[#f8f7f2] border-l-2 border-[#c4a35a] mb-8">
              <Quote size={24} className="text-[#c4a35a] mb-3" />
              <p className="font-serif text-xl text-[#1a1a1a] italic leading-relaxed">
                "{awarenessData.quote}"
              </p>
            </div>
          </div>

          {/* Right Column - Initiative Cards */}
          <div className="grid grid-cols-2 gap-4">
            {awarenessData.initiatives.map((initiative, index) => {
              const IconComponent = iconMap[index] || Heart;
              
              return (
                <div
                  key={index}
                  className={`group p-6 border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-200 ${
                    index === 0 ? 'bg-[#0d5c63] text-white' : 'bg-[#f8f7f2]'
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-white/10' : 'bg-[#0d5c63]/10'
                  }`}>
                    <IconComponent 
                      size={20} 
                      className={index === 0 ? 'text-[#c4a35a]' : 'text-[#0d5c63]'} 
                    />
                  </div>
                  <h3 className={`font-serif text-lg mb-2 ${
                    index === 0 ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {initiative.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    index === 0 ? 'text-white/80' : 'text-[#7a7a7a]'
                  }`}>
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
