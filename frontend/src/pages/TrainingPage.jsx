import React from 'react';
import { trainingCredentials, quotes } from '../data/mock';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

const iconMap = {
  fellowship: Award,
  training: BookOpen,
  education: GraduationCap
};

const TrainingPage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Credentials</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Training & Credentials
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            {quotes[1]}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#e5e4df] hidden md:block" />

            <div className="space-y-8">
              {trainingCredentials.map((item, index) => {
                const IconComponent = iconMap[item.type] || GraduationCap;
                
                return (
                  <div key={item.id} className="relative flex gap-6">
                    {/* Icon */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center bg-[#0d5c63] text-white z-10">
                      <IconComponent size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                      <div className="flex md:hidden items-center gap-2 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63] text-white">
                          <IconComponent size={18} />
                        </div>
                        <span className="text-xs text-[#c4a35a] uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                      
                      {item.year && (
                        <span className="inline-flex px-2 py-0.5 bg-[#c4a35a]/10 text-[#c4a35a] text-xs mb-3">
                          {item.year}
                        </span>
                      )}
                      
                      <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#0d5c63] font-medium mb-1">
                        {item.institution}
                      </p>
                      
                      <div className="flex items-center gap-1 text-sm text-[#7a7a7a] mb-3">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      
                      <p className="text-sm text-[#4a4a4a] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
