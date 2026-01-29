import React from 'react';
import { quickStats } from '../../data/mock';
import { Clock, FileText, Users, Globe } from 'lucide-react';

const iconMap = {
  Clock, FileText, Users, Globe
};

const StatsSection = () => {
  return (
    <section className="relative -mt-8 z-10 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || Clock;
              
              return (
                <div
                  key={index}
                  className={`p-6 text-center ${
                    index < quickStats.length - 1 ? 'border-r border-slate-100' : ''
                  } ${index < 2 ? 'border-b lg:border-b-0 border-slate-100' : ''}`}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <IconComponent size={22} className="text-blue-600" />
                  </div>
                  <p className="font-display text-3xl font-bold text-slate-800">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
