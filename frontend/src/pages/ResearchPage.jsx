import React from 'react';
import { researchInfo, quotes, doctorInfo } from '../data/mock';
import { BookOpen, Users, FileText, Mail } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Academic</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Research & Teaching
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            {quotes[4]}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Conference Sessions */}
            <div className="p-8 bg-[#f8f7f2] border border-[#e5e4df]">
              <div className="w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10 mb-6">
                <Users size={24} className="text-[#0d5c63]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Conference Leadership</h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                {researchInfo.sessions}
              </p>
            </div>

            {/* Publications */}
            <div className="p-8 bg-[#f8f7f2] border border-[#e5e4df]">
              <div className="w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10 mb-6">
                <FileText size={24} className="text-[#0d5c63]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Publications</h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                {researchInfo.publications}
              </p>
            </div>

            {/* DNB Teaching */}
            <div className="p-8 bg-[#f8f7f2] border border-[#e5e4df]">
              <div className="w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10 mb-6">
                <BookOpen size={24} className="text-[#0d5c63]" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">DNB Teaching</h3>
              <p className="text-[#4a4a4a] leading-relaxed">
                Actively involved in DNB teaching and mentoring the next generation of radiation oncologists.
              </p>
            </div>

            {/* Contact for Publications */}
            <div className="p-8 bg-[#0d5c63] text-white">
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-xl text-white mb-4">Publication List</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {researchInfo.contactNote}
              </p>
              <a
                href={`mailto:${doctorInfo.email}`}
                className="inline-flex items-center gap-2 text-sm text-white hover:underline"
              >
                <Mail size={14} />
                {doctorInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
