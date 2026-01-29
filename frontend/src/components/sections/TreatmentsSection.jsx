import React from 'react';
import { techniques } from '../../data/mock';
import { Target, Scan, Layers, CircleDot, Crosshair, Zap, ArrowRight } from 'lucide-react';

const iconMap = {
  Target, Scan, Layers, CircleDot, Crosshair, Zap
};

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 text-sm font-semibold rounded-full mb-4">
            <Target size={16} />
            Advanced Technology
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Precision Radiation Techniques
          </h2>
          <p className="text-lg text-slate-600">
            State-of-the-art treatment modalities for optimal outcomes with minimal side effects.
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techniques.map((technique, index) => {
            const IconComponent = iconMap[technique.icon] || Target;
            
            return (
              <div
                key={technique.id}
                className="group glass-card rounded-2xl p-6 text-center hover-lift cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-teal-500 flex items-center justify-center transition-all">
                  <IconComponent size={24} className="text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{technique.name}</h3>
                <p className="text-xs text-slate-500 leading-tight">{technique.fullName}</p>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="mt-12 glass-card rounded-3xl p-8 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <Zap size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-800">Technology as Enabler</h3>
                <p className="text-slate-600">Outcomes depend on planning, experience, and clinical judgement.</p>
              </div>
            </div>
            <a
              href="/#contact"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              <span>Consult Now</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
