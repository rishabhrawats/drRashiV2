import React from 'react';
import { awarenessInfo, quotes } from '../data/mock';
import { Heart, Users, Megaphone, Newspaper } from 'lucide-react';

const iconMap = [
  Heart,
  Megaphone,
  Users,
  Newspaper
];

const AwarenessPage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Community</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Cancer Awareness & Education
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            {quotes[3]}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {/* Story Section */}
          <div className="mb-12 p-8 bg-[#f8f7f2] border border-[#e5e4df]">
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              {awarenessInfo.description}
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {awarenessInfo.initiatives.map((initiative, index) => {
              const IconComponent = iconMap[index] || Heart;
              
              return (
                <div
                  key={index}
                  className={`p-6 border ${
                    index === 0
                      ? 'bg-[#0d5c63] text-white border-[#0d5c63]'
                      : 'bg-[#f8f7f2] border-[#e5e4df]'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-white/10' : 'bg-[#0d5c63]/10'
                  }`}>
                    <IconComponent size={20} className={index === 0 ? 'text-white' : 'text-[#0d5c63]'} />
                  </div>
                  <h3 className={`font-serif text-xl mb-2 ${
                    index === 0 ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {initiative.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    index === 0 ? 'text-white/80' : 'text-[#4a4a4a]'
                  }`}>
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwarenessPage;
