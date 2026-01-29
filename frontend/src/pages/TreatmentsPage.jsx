import React from 'react';
import { techniques, quotes } from '../data/mock';
import { Zap, Scan, Target, Crosshair, Radio, Waves, CircleDot, Focus } from 'lucide-react';

const iconMap = {
  sbrt: Zap,
  igrt: Scan,
  imrt: Target,
  srt: Crosshair,
  conformal: Focus,
  electron: Waves,
  brachytherapy: CircleDot,
  'ig-brachytherapy': Radio
};

const TreatmentsPage = () => {
  const externalBeam = techniques.filter(t => t.category === 'External Beam');
  const brachytherapy = techniques.filter(t => t.category === 'Brachytherapy');

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Technology</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Treatments & Techniques
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            {quotes[2]}
          </p>
        </div>
      </section>

      {/* External Beam Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-[#1a1a1a] mb-8">External Beam Radiotherapy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalBeam.map((technique) => {
              const IconComponent = iconMap[technique.id] || Zap;
              
              return (
                <div
                  key={technique.id}
                  className="p-6 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10">
                      <IconComponent size={20} className="text-[#0d5c63]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#1a1a1a]">{technique.name}</h3>
                      <p className="text-xs text-[#7a7a7a]">{technique.fullName}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[#c4a35a] uppercase tracking-wider">What it is</p>
                      <p className="text-sm text-[#4a4a4a]">{technique.what}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#c4a35a] uppercase tracking-wider">Why it's used</p>
                      <p className="text-sm text-[#4a4a4a]">{technique.why}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brachytherapy Section */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-[#1a1a1a] mb-8">Brachytherapy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brachytherapy.map((technique) => {
              const IconComponent = iconMap[technique.id] || Radio;
              
              return (
                <div
                  key={technique.id}
                  className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0d5c63]/10">
                      <IconComponent size={20} className="text-[#0d5c63]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#1a1a1a]">{technique.name}</h3>
                      <p className="text-xs text-[#7a7a7a]">{technique.fullName}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[#c4a35a] uppercase tracking-wider">What it is</p>
                      <p className="text-sm text-[#4a4a4a]">{technique.what}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#c4a35a] uppercase tracking-wider">Why it's used</p>
                      <p className="text-sm text-[#4a4a4a]">{technique.why}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
