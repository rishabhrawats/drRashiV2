import React from 'react';
import { advancedTechniques } from '../data/mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Zap, Target, Scan, Crosshair, Radio, Waves } from 'lucide-react';

const iconMap = {
  0: Zap,
  1: Scan,
  2: Target,
  3: Crosshair,
  4: Radio,
  5: Waves,
};

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header & Visual */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
              Advanced Technology
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
              Precision Radiation Techniques
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8">
              Access to the full spectrum of modern radiation therapy technologies, 
              from stereotactic radiosurgery to image-guided brachytherapy.
            </p>

            {/* Visual Element */}
            <div className="relative p-8 bg-[#fffef8] border border-[#e5e4df]">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[Zap, Scan, Target, Crosshair, Radio, Waves].map((Icon, index) => (
                  <div
                    key={index}
                    className="aspect-square flex items-center justify-center bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63] hover:bg-[#0d5c63]/5 transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={24} className="text-[#0d5c63]" />
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-l-2 border-[#0d5c63] bg-[#f8f7f2]">
                <p className="text-sm text-[#4a4a4a] italic leading-relaxed">
                  "Technology matters — but outcomes depend on planning, experience, and judgement."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {advancedTechniques.map((technique, index) => {
                const IconComponent = iconMap[index] || Zap;
                
                return (
                  <AccordionItem
                    key={technique.id}
                    value={`item-${technique.id}`}
                    className="bg-[#fffef8] border border-[#e5e4df] px-6 data-[state=open]:border-[#0d5c63]/40"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10">
                          <IconComponent size={18} className="text-[#0d5c63]" />
                        </div>
                        <div>
                          <span className="font-serif text-xl text-[#1a1a1a] block">
                            {technique.name}
                          </span>
                          <span className="text-xs text-[#7a7a7a] mt-0.5 block">
                            {technique.fullName}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-14">
                        <p className="text-[#4a4a4a] leading-relaxed">
                          {technique.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
