import React from 'react';
import { aboutData, doctorInfo } from '../data/mock';
import { Separator } from './ui/separator';
import { Quote } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            A Clinician Who Has Witnessed the Complete Evolution of Radiation Oncology
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Stats */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-[#fffef8] border border-[#e5e4df] p-8">
                <div className="space-y-8">
                  {aboutData.highlights.map((item, index) => (
                    <div key={index}>
                      <p className="font-serif text-4xl text-[#0d5c63] mb-1">
                        {item.value}
                      </p>
                      <p className="text-sm text-[#7a7a7a]">{item.label}</p>
                      {index < aboutData.highlights.length - 1 && (
                        <Separator className="mt-8 bg-[#e5e4df]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 border-l-2 border-[#c4a35a] bg-[#fffef8]">
                <Quote size={24} className="text-[#c4a35a] mb-3" />
                <p className="font-serif text-lg text-[#1a1a1a] italic leading-relaxed">
                  "Technology matters — but outcomes depend on planning, experience, and judgement."
                </p>
                <p className="text-sm text-[#7a7a7a] mt-3">— {doctorInfo.name}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {aboutData.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#4a4a4a] leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Points */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/30 transition-colors duration-200">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                  <span className="text-[#0d5c63] font-serif text-xl">01</span>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Global Perspective
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  Training across USA, Europe, and premier Indian institutions brings world-class protocols to every patient.
                </p>
              </div>

              <div className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/30 transition-colors duration-200">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                  <span className="text-[#0d5c63] font-serif text-xl">02</span>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Brachytherapy Expert
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  Deep specialization in image-guided brachytherapy for gynecological cancers with exceptional outcomes.
                </p>
              </div>

              <div className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/30 transition-colors duration-200">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                  <span className="text-[#0d5c63] font-serif text-xl">03</span>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Women's Health Focus
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  Special dedication to breast and gynecological cancers with compassionate, patient-centered care.
                </p>
              </div>

              <div className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/30 transition-colors duration-200">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                  <span className="text-[#0d5c63] font-serif text-xl">04</span>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  Technology Pioneer
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">
                  Experience spanning from cobalt to proton therapy — understanding the complete evolution of the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
