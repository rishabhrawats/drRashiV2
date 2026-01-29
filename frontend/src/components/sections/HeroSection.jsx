import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, specialties } from '../../data/mock';
import { Calendar, Phone, Play, Award, Star, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-teal-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm">
              <div className="flex items-center -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700">Top Rated Oncologist</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Advanced
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Cancer Care
                </span>
                with Compassion
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {doctorInfo.experience} years of expertise in precision radiation oncology. 
              Combining world-class technology with personalized patient care.
            </p>

            {/* Specialty Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {specialties.slice(0, 4).map((specialty, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm text-slate-600"
                >
                  <CheckCircle size={14} className="text-teal-500" />
                  {specialty}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/book-appointment"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <Phone size={20} />
                <span>{doctorInfo.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-amber-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">AROI Fellow</p>
                  <p className="text-sm font-semibold text-slate-700">2013-14</p>
                </div>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">UICC Fellow</p>
                  <p className="text-sm font-semibold text-slate-700">Geneva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Video */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative glass-card-strong rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={doctorInfo.profileImage}
                alt={doctorInfo.name}
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white">
                      {doctorInfo.name}
                    </h2>
                    <p className="text-blue-300 text-sm">
                      {doctorInfo.department}
                    </p>
                  </div>
                  <a
                    href={doctorInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm hover:bg-white/30 transition-colors"
                  >
                    <Play size={16} fill="currentColor" />
                    Watch Videos
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-5 shadow-xl animate-float">
              <div className="text-center">
                <p className="font-display text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {doctorInfo.experience}
                </p>
                <p className="text-xs text-slate-500 font-medium">Years</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </div>

            {/* Floating Max Hospital Card */}
            <div className="absolute -right-4 lg:-right-8 bottom-20 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  MAX
                </div>
                <div>
                  <p className="text-xs text-slate-500">Currently at</p>
                  <p className="text-sm font-semibold text-slate-700">Max Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
