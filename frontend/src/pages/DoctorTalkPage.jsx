import React, { useState } from 'react';
import { doctorInfo, mediaContent } from '../data/mock';
import { Play, Instagram, Youtube, Filter, ExternalLink } from 'lucide-react';

const DoctorTalkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...mediaContent.categories];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Media</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Doctor Talk
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            Educational videos and health tips from Dr. Rashi Agrawal on cancer care, radiation oncology, and wellness.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-[#fffef8] border-b border-[#e5e4df] sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={16} className="text-[#7a7a7a] flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-[#0d5c63] text-white'
                    : 'bg-[#f8f7f2] text-[#4a4a4a] hover:bg-[#e5e4df]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href={doctorInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                  <Instagram size={28} className="text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#1a1a1a]">Instagram</p>
                  <p className="text-sm text-[#7a7a7a]">Short health tips, reels & updates</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-[#7a7a7a] group-hover:text-[#0d5c63] transition-colors" />
            </a>

            <a
              href={doctorInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#FF0000]">
                  <Youtube size={28} className="text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#1a1a1a]">YouTube</p>
                  <p className="text-sm text-[#7a7a7a]">In-depth explainers & patient education</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-[#7a7a7a] group-hover:text-[#0d5c63] transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Embeds */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-[#1a1a1a] mb-8">Latest Videos</h2>
          
          {/* Featured Video */}
          <div className="mb-8">
            <a
              href={doctorInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video bg-[#1a1a1a] group overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center bg-white/90 group-hover:bg-white transition-colors mb-4">
                    <Play size={32} className="text-[#0d5c63] ml-1" />
                  </div>
                  <p className="text-white/80">Watch on YouTube</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="px-2 py-1 bg-[#FF0000] text-white text-xs">YouTube</span>
                </div>
              </div>
            </a>
            <div className="p-4 bg-[#f8f7f2] border border-t-0 border-[#e5e4df]">
              <h3 className="font-serif text-xl text-[#1a1a1a]">Dr. Rashi Agrawal - Cancer Specialist</h3>
              <p className="text-sm text-[#7a7a7a] mt-1">Educational content on radiation oncology and cancer treatment</p>
            </div>
          </div>

          {/* Instagram Embed Placeholder */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-[#1a1a1a] mb-8">Instagram Reels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <a
                  key={item}
                  href={doctorInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all group"
                >
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/80 group-hover:bg-white transition-colors mb-2">
                        <Play size={24} className="text-[#833ab4] ml-0.5" />
                      </div>
                      <p className="text-sm text-[#4a4a4a]">View on Instagram</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Instagram size={18} className="text-[#833ab4]" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#1a1a1a] font-medium">Health Tip #{item}</p>
                    <p className="text-xs text-[#7a7a7a] mt-1">Watch this reel</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorTalkPage;
