import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { expertiseAreas, quotes } from '../data/mock';
import { Heart, Wind, Flower2, Activity, Zap, Shield } from 'lucide-react';

const iconMap = {
  Heart, Wind, Flower2, Activity, Zap, Shield
};

const ExpertisePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Clinical Focus</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Areas of Expertise
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            Specialized cancer care across multiple domains, combining advanced technology with decades of clinical experience.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sticky Navigation */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <nav className="bg-[#f8f7f2] border border-[#e5e4df] p-6">
                  <h3 className="text-sm text-[#7a7a7a] uppercase tracking-wider mb-4">Specialties</h3>
                  <ul className="space-y-2">
                    {expertiseAreas.map((area) => (
                      <li key={area.id}>
                        <a
                          href={`#${area.id}`}
                          className="block py-2 px-3 text-sm text-[#4a4a4a] hover:text-[#0d5c63] hover:bg-[#fffef8] transition-colors"
                        >
                          {area.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Quote */}
                <div className="mt-6 p-6 border-l-2 border-[#c4a35a] bg-[#f8f7f2]">
                  <p className="text-sm text-[#4a4a4a] italic leading-relaxed">
                    "{quotes[1]}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-12">
              {expertiseAreas.map((area) => {
                const IconComponent = iconMap[area.icon] || Heart;
                
                return (
                  <div
                    key={area.id}
                    id={area.id}
                    className="scroll-mt-24 p-8 bg-[#f8f7f2] border border-[#e5e4df]"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10">
                        <IconComponent size={24} className="text-[#0d5c63]" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl text-[#1a1a1a]">{area.title}</h2>
                      </div>
                    </div>
                    <p className="text-[#4a4a4a] leading-relaxed">
                      {area.description}
                    </p>
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

export default ExpertisePage;
