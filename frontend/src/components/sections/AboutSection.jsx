import React from 'react';
import { doctorInfo, credentials, awards } from '../../data/mock';
import { Award, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 text-sm font-semibold rounded-full mb-4">
            <GraduationCap size={16} />
            About Dr. Agrawal
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            A Pioneer in Precision Radiation Oncology
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            With {doctorInfo.experience} years of clinical excellence, Dr. Rashi Agrawal combines international training 
            with deep expertise in advanced radiation techniques to deliver world-class cancer care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Credentials Timeline */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <GraduationCap className="text-cyan-600" />
              Training & Fellowships
            </h3>
            <div className="space-y-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white/60 rounded-2xl hover:bg-white transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    cred.type === 'fellowship' 
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500' 
                      : 'bg-gradient-to-br from-cyan-400 to-cyan-600'
                  }`}>
                    {cred.type === 'fellowship' ? (
                      <Award size={20} className="text-white" />
                    ) : (
                      <GraduationCap size={20} className="text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{cred.title}</p>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                      <MapPin size={14} />
                      <span>{cred.location}</span>
                      {cred.year && (
                        <span className="ml-2 px-2 py-0.5 bg-pink-100 text-pink-600 text-xs rounded-full">
                          {cred.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Highlights */}
          <div className="space-y-6">
            {/* Awards Card */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-amber-500" />
                Awards & Recognition
              </h3>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={16} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{award.title}</p>
                      <p className="text-sm text-slate-500">{award.org} {award.year && `\u2022 ${award.year}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Card */}
            <div className="bg-gradient-to-br from-pink-600 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-4">Treatment Approach</h3>
              <ul className="space-y-3">
                {[
                  "Patient-centered care with clear communication",
                  "Precision techniques minimizing side effects",
                  "Evidence-based treatment protocols",
                  "Comprehensive follow-up and support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyan-200 flex-shrink-0 mt-0.5" />
                    <span className="text-pink-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
