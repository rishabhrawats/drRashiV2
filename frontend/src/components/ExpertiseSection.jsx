import React from 'react';
import { clinicalExpertise } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Heart, Wind, Flower2, Activity, ArrowRight } from 'lucide-react';

const iconMap = {
  Heart: Heart,
  Wind: Wind,
  Flower2: Flower2,
  Activity: Activity,
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-[#fffef8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
            Clinical Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Specialized Cancer Care Across Multiple Domains
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Comprehensive radiation oncology services tailored to each patient's unique needs, 
            combining precision technology with decades of clinical expertise.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {clinicalExpertise.map((item) => {
            const IconComponent = iconMap[item.icon] || Heart;
            
            return (
              <Card
                key={item.id}
                className="group bg-[#fffef8] border-[#e5e4df] rounded-none hover:border-[#0d5c63]/40 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10 group-hover:bg-[#0d5c63] transition-colors duration-300">
                      <IconComponent 
                        size={24} 
                        className="text-[#0d5c63] group-hover:text-white transition-colors duration-300" 
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#4a4a4a] leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Outcome Box */}
                      <div className="p-4 bg-[#f8f7f2] border-l-2 border-[#c4a35a]">
                        <p className="text-sm text-[#7a7a7a] mb-1">Precision Advantage</p>
                        <p className="text-sm text-[#4a4a4a] leading-relaxed">
                          {item.outcome}
                        </p>
                      </div>

                      {/* Learn More */}
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 mt-6 text-sm text-[#0d5c63] group/link"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0d5c63] transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
