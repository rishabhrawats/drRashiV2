import React from 'react';
import { doctorInfo } from '../../data/mock';
import { Play, Youtube, Instagram, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
            <Play size={16} />
            Video Introduction
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Meet Dr. Rashi Agrawal
          </h2>
          <p className="text-lg text-slate-600">
            Watch educational videos and learn more about cancer treatment options.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Video Embed */}
          <div className="lg:col-span-2">
            <div className="glass-card-strong rounded-3xl overflow-hidden">
              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 group overflow-hidden"
              >
                {/* Cover Image */}
                <img
                  src={doctorInfo.profileImage}
                  alt="Dr. Rashi Agrawal - Cancer Specialist"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
                
                {/* Play Button & Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl shadow-red-600/30">
                        <Play size={32} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <p className="text-white font-semibold text-lg">Watch on YouTube</p>
                    <p className="text-white/70 text-sm mt-1">Educational Cancer Care Videos</p>
                  </div>
                </div>
                
                {/* YouTube Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-red-600 rounded-lg shadow-lg">
                    <Youtube size={18} className="text-white" />
                    <span className="text-white text-sm font-medium">YouTube</span>
                  </div>
                </div>
                
                {/* Channel Name Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RA</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Dr. Rashi Agrawal</p>
                      <p className="text-white/60 text-xs">Cancer Specialist • Radiation Oncologist</p>
                    </div>
                  </div>
                </div>
              </a>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-800 mb-2">
                  Dr. Rashi Agrawal - Cancer Specialist
                </h3>
                <p className="text-slate-600">
                  Educational videos on radiation oncology, cancer awareness, and treatment options.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            {/* YouTube Card */}
            <a
              href={doctorInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-strong rounded-2xl p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                <Youtube size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">YouTube Channel</p>
                <p className="text-sm text-slate-500">In-depth treatment explainers</p>
              </div>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-red-600 transition-colors" />
            </a>

            {/* Instagram Card */}
            <a
              href={doctorInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-strong rounded-2xl p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                <Instagram size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">Instagram</p>
                <p className="text-sm text-slate-500">Health tips & awareness reels</p>
              </div>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-pink-600 transition-colors" />
            </a>

            {/* Google Reviews Card */}
            <a
              href={doctorInfo.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-strong rounded-2xl p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">Google Reviews</p>
                <p className="text-sm text-slate-500">See patient feedback</p>
              </div>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
