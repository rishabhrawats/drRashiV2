import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, specialties, expertiseAreas, techniques, hospitals, quotes, mediaContent } from '../data/mock';
import { ArrowRight, Award, Clock, Phone, Play, Instagram, Youtube, MapPin, Calendar } from 'lucide-react';
import OPDTimingsTable from '../components/OPDTimingsTable';

const HomePage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#fffef8] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#e5e4df] hidden lg:block" />
                
                {/* Main image */}
                <div className="relative bg-[#f8f7f2] overflow-hidden">
                  <img
                    src={doctorInfo.profileImage}
                    alt={doctorInfo.name}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-[#0d5c63] text-white p-6 shadow-lg">
                  <p className="font-serif text-4xl">{doctorInfo.experience}</p>
                  <p className="text-sm text-white/80">Experience</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Title Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f8f7f2] border border-[#e5e4df]">
                <Award size={16} className="text-[#c4a35a]" />
                <span className="text-sm text-[#4a4a4a]">
                  {doctorInfo.title}
                </span>
              </div>

              {/* Name & Title */}
              <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                {doctorInfo.name}
              </h1>
              <p className="text-xl text-[#0d5c63] font-serif">
                {doctorInfo.department}
              </p>

              {/* Specialty Tags */}
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 4).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#f8f7f2] border border-[#e5e4df] text-sm text-[#4a4a4a]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust Quote */}
              <div className="pt-6 border-t border-[#e5e4df]">
                <p className="text-[#4a4a4a] italic leading-relaxed">
                  "{quotes[0]}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Oncology Care */}
      <section className="py-16 lg:py-24 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Expertise</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Areas of Oncology Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.slice(0, 4).map((area) => (
              <Link
                key={area.id}
                to={`/expertise#${area.id}`}
                className="group p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-200"
              >
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-3 group-hover:text-[#0d5c63] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-[#7a7a7a] leading-relaxed line-clamp-3">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#0d5c63]">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Used Routinely */}
      <section className="py-16 lg:py-24 bg-[#fffef8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Technology</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Techniques Used Routinely
            </h2>
            <p className="text-[#4a4a4a]">
              Precision techniques used routinely: stereotactic, image-guided, and intensity-modulated approaches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techniques.map((technique) => (
              <Link
                key={technique.id}
                to="/treatments"
                className="group p-5 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-200 text-center"
              >
                <p className="font-serif text-lg text-[#1a1a1a] group-hover:text-[#0d5c63] transition-colors">
                  {technique.name}
                </p>
                <p className="text-xs text-[#7a7a7a] mt-1">{technique.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals & OPD Timings */}
      <section className="py-16 lg:py-24 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Locations</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
              Hospitals & OPD Timings
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="bg-[#fffef8] border border-[#e5e4df] p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10 flex-shrink-0">
                    <MapPin size={20} className="text-[#0d5c63]" />
                  </div>
                  <div>
                    <span className="inline-flex px-2 py-0.5 bg-[#c4a35a]/10 text-[#c4a35a] text-xs mb-2">
                      {hospital.type}
                    </span>
                    <h3 className="font-serif text-xl text-[#1a1a1a]">{hospital.name}</h3>
                    <p className="text-sm text-[#7a7a7a]">{hospital.location}</p>
                    <p className="text-xs text-[#7a7a7a] mt-1">{hospital.address}</p>
                  </div>
                </div>

                {hospital.hasTimings && (
                  <OPDTimingsTable timings={hospital.opdTimings} />
                )}

                {!hospital.hasTimings && (
                  <p className="text-sm text-[#7a7a7a] italic">Please call for appointment timings.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media: Doctor Talk */}
      <section className="py-16 lg:py-24 bg-[#fffef8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Media</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
                Doctor Talk
              </h2>
            </div>
            <Link
              to="/doctor-talk"
              className="inline-flex items-center gap-2 text-sm text-[#0d5c63] hover:underline"
            >
              View all videos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured Video */}
            <div className="md:col-span-2 bg-[#f8f7f2] border border-[#e5e4df] overflow-hidden">
              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-[#1a1a1a] group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/90 group-hover:bg-white transition-colors">
                    <Play size={24} className="text-[#0d5c63] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-1 bg-[#0d5c63] text-white text-xs">YouTube</span>
                </div>
              </a>
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#1a1a1a]">Watch Expert Cancer Care Videos</h3>
                <p className="text-sm text-[#7a7a7a] mt-1">Educational content on radiation oncology and cancer treatment</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href={doctorInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">Instagram</p>
                    <p className="text-xs text-[#7a7a7a]">Short health tips & reels</p>
                  </div>
                </div>
              </a>

              <a
                href={doctorInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-[#f8f7f2] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FF0000]">
                    <Youtube size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">YouTube</p>
                    <p className="text-xs text-[#7a7a7a]">In-depth explainers</p>
                  </div>
                </div>
              </a>

              <Link
                to="/doctor-talk"
                className="block p-6 bg-[#0d5c63] text-white text-center hover:bg-[#094449] transition-colors"
              >
                <p className="font-medium">View All Media</p>
                <p className="text-xs text-white/70 mt-1">Videos, reels & more</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl text-white mb-2">Ready to Schedule Your Consultation?</h2>
              <p className="text-white/70">Book an appointment in under 30 seconds.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="px-8 py-4 bg-white text-[#1e3a5f] text-sm font-medium hover:bg-[#f8f7f2] transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {doctorInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
