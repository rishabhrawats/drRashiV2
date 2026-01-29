import React from 'react';
import { memberships } from '../data/mock';
import { Award } from 'lucide-react';

const MembershipsPage = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Affiliations</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Professional Memberships
          </h1>
        </div>
      </section>

      {/* Badge Wall */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memberships.map((membership) => (
              <div
                key={membership.id}
                className="group p-6 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#c4a35a]/40 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#c4a35a]/10 group-hover:bg-[#c4a35a]/20 transition-colors">
                  <Award size={28} className="text-[#c4a35a]" />
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">
                  {membership.name}
                </h3>
                <p className="text-xs text-[#7a7a7a] leading-relaxed">
                  {membership.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipsPage;
