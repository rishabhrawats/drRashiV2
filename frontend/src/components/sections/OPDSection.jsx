import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hospitals, doctorInfo } from '../../data/mock';
import { MapPin, Clock, Phone, Calendar, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

const OPDSection = () => {
  const [activeHospital, setActiveHospital] = useState(hospitals[0]);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
            <Clock size={16} />
            OPD Timings
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Hospital Locations & Timings
          </h2>
          <p className="text-lg text-slate-600">
            Visit us at Max Healthcare facilities for consultations and treatments.
          </p>
        </div>

        {/* Hospital Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex glass-card rounded-2xl p-1.5">
            {hospitals.map((hospital) => (
              <button
                key={hospital.id}
                onClick={() => setActiveHospital(hospital)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeHospital.id === hospital.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="block">{hospital.name}</span>
                <span className="block text-xs opacity-80">{hospital.location}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hospital Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="glass-card-strong rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-2">
                  {activeHospital.type}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-800">
                  {activeHospital.name}
                </h3>
                <p className="text-slate-500">{activeHospital.location}</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">{activeHospital.address}</p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-600 font-medium rounded-xl hover:bg-blue-100 transition-colors"
              >
                <Phone size={18} />
                {doctorInfo.phone}
              </a>
              <a
                href={activeHospital.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors"
              >
                <ExternalLink size={18} />
                View on Map
              </a>
            </div>
          </div>

          {/* OPD Timings Card */}
          <div className="glass-card-strong rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Clock size={20} className="text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800">OPD Schedule</h3>
            </div>

            {activeHospital.hasTimings ? (
              <div className="space-y-2">
                {activeHospital.opdTimings.map((timing, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl ${
                      timing.available ? 'bg-green-50' : 'bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {timing.available ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <XCircle size={18} className="text-slate-400" />
                      )}
                      <span className={`font-medium ${
                        timing.available ? 'text-slate-800' : 'text-slate-400'
                      }`}>
                        {timing.day}
                      </span>
                    </div>
                    <span className={`text-sm ${
                      timing.available ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {timing.time}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-500 mb-4">Please call for appointment timings at this location.</p>
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Book CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
          >
            <Calendar size={22} />
            Book Your Appointment Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OPDSection;
