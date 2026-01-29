import React from 'react';
import { credentials } from '../../data/mock';
import { Award, GraduationCap, MapPin, Globe } from 'lucide-react';

const CredentialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full mb-4">
            <Globe size={16} />
            Global Training
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            International Excellence
          </h2>
          <p className="text-lg text-slate-600">
            Training at world-renowned institutions across USA, Europe, and India.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400 hidden lg:block" />

          <div className="space-y-8">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="glass-card-strong rounded-2xl p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        cred.type === 'fellowship'
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                          : 'bg-gradient-to-br from-blue-400 to-teal-500'
                      }`}>
                        {cred.type === 'fellowship' ? (
                          <Award size={22} className="text-white" />
                        ) : (
                          <GraduationCap size={22} className="text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 text-lg">{cred.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                          <MapPin size={14} />
                          <span>{cred.location}</span>
                        </div>
                        {cred.year && (
                          <span className="inline-flex mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {cred.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full ring-4 ring-white shadow-lg" />

                {/* Empty space */}
                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
