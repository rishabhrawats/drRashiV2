import React from 'react';
import { awards, quotes } from '../data/mock';
import { Trophy, Medal, Star } from 'lucide-react';

const AwardsPage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Recognition</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Awards & Recognition
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            {quotes[5]}
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`p-8 border ${
                  index === 0
                    ? 'md:col-span-2 bg-[#c4a35a]/10 border-[#c4a35a]/30'
                    : 'bg-[#f8f7f2] border-[#e5e4df]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? 'bg-[#c4a35a]' : 'bg-[#c4a35a]/20'
                  }`}>
                    {index === 0 ? (
                      <Trophy size={24} className="text-white" />
                    ) : index < 3 ? (
                      <Medal size={24} className="text-[#c4a35a]" />
                    ) : (
                      <Star size={24} className="text-[#c4a35a]" />
                    )}
                  </div>
                  <div>
                    {award.year && (
                      <span className="inline-flex px-2 py-0.5 bg-[#c4a35a]/10 text-[#c4a35a] text-xs mb-2">
                        {award.year}
                      </span>
                    )}
                    <h3 className={`font-serif text-[#1a1a1a] mb-2 ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {award.title}
                    </h3>
                    <p className="text-[#0d5c63] font-medium mb-2">{award.organization}</p>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">
                      {award.description}
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

export default AwardsPage;
