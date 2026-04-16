import React from 'react';
import { expertiseAreas } from '../../data/mock';
import { Heart, User, Activity, Bone, Brain, ArrowRight } from 'lucide-react';

const iconMap = {
  Heart, User, Activity, Bone, Brain
};

const colorMap = {
  pink: 'from-pink-500 to-rose-500',
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-violet-500',
  teal: 'from-teal-500 to-emerald-500'
};

const bgColorMap = {
  pink: 'bg-pink-50 hover:bg-pink-100',
  blue: 'bg-blue-50 hover:bg-blue-100',
  purple: 'bg-purple-50 hover:bg-purple-100',
  teal: 'bg-teal-50 hover:bg-teal-100'
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4">
            <Heart size={16} />
            Areas of Expertise
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Specialized Cancer Care
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive oncology services tailored to each patient's unique needs, 
            with special focus on women's cancers and complex cases.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Heart;
            const gradientClass = colorMap[area.color] || colorMap.blue;
            const bgClass = bgColorMap[area.color] || bgColorMap.blue;
            
            return (
              <div
                key={area.id}
                className={`group glass-card rounded-3xl p-8 hover-lift cursor-pointer ${bgClass} transition-all duration-300`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <IconComponent size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-slate-800 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{area.shortDesc}</p>
                    <p className="text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
