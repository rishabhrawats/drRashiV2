import React from 'react';
import { leadershipData } from '../data/mock';
import { Separator } from './ui/separator';
import { BookOpen, Users, FileText, Microscope } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
            Leadership, Teaching & Research
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Shaping the Future of Oncology
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Committed to advancing the field through education, research, and active participation 
            in the global oncology community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Teaching & Roles */}
          <div className="lg:col-span-2">
            <div className="h-full p-8 bg-[#fffef8] border border-[#e5e4df]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10">
                  <Users size={22} className="text-[#0d5c63]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1a1a1a]">
                  Academic & Leadership Roles
                </h3>
              </div>

              <ul className="space-y-4">
                {leadershipData.roles.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#f8f7f2] text-[#0d5c63] text-xs font-medium mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[#4a4a4a] leading-relaxed">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Publications Badge */}
          <div className="lg:col-span-1">
            <div className="h-full p-8 bg-[#0d5c63] text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 mb-6">
                  <FileText size={22} className="text-[#c4a35a]" />
                </div>
                <p className="text-white/70 text-sm mb-2">Peer-Reviewed</p>
                <p className="font-serif text-5xl text-white mb-2">50+</p>
                <p className="text-white/80">Publications</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                  Contributing to national and international journals in radiation oncology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-[#e5e4df]" />

        {/* Research Focus Areas */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10">
              <Microscope size={22} className="text-[#0d5c63]" />
            </div>
            <h3 className="font-serif text-2xl text-[#1a1a1a]">
              Research Focus Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipData.research.map((area, index) => (
              <div
                key={index}
                className="group p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#c4a35a]/10 text-[#c4a35a] text-sm font-serif mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-[#1a1a1a] font-medium leading-relaxed">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
