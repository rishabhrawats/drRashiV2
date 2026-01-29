import React, { useState } from 'react';
import { hospitals, doctorInfo } from '../data/mock';
import CalendarBooking from '../components/booking/CalendarBooking';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const BookAppointmentPage = () => {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#f8f7f2]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            Book Appointment
          </h1>
          <p className="text-[#4a4a4a]">
            Schedule your consultation with {doctorInfo.name}
          </p>
        </div>

        {/* Hospital Toggle */}
        <div className="mb-8">
          <p className="text-sm text-[#7a7a7a] mb-3 text-center">Step 1: Select Hospital</p>
          <div className="flex justify-center">
            <div className="inline-flex bg-[#fffef8] border border-[#e5e4df] p-1">
              {hospitals.map((hospital) => (
                <button
                  key={hospital.id}
                  onClick={() => setSelectedHospital(hospital)}
                  className={`px-6 py-3 text-sm font-medium transition-all ${
                    selectedHospital.id === hospital.id
                      ? 'bg-[#0d5c63] text-white'
                      : 'text-[#4a4a4a] hover:bg-[#f8f7f2]'
                  }`}
                >
                  <span className="block">{hospital.name}</span>
                  <span className="block text-xs opacity-70">{hospital.location}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Booking */}
        <div className="bg-[#fffef8] border border-[#e5e4df] p-6 lg:p-8">
          <CalendarBooking hospital={selectedHospital} />
        </div>

        {/* Backup CTAs */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a
            href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10">
              <Phone size={20} className="text-[#0d5c63]" />
            </div>
            <div>
              <p className="text-sm text-[#7a7a7a]">Call to Book</p>
              <p className="font-medium text-[#1a1a1a]">{doctorInfo.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${doctorInfo.email}`}
            className="flex items-center gap-4 p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10">
              <Mail size={20} className="text-[#0d5c63]" />
            </div>
            <div>
              <p className="text-sm text-[#7a7a7a]">Email</p>
              <p className="font-medium text-[#1a1a1a]">{doctorInfo.email}</p>
            </div>
          </a>
        </div>

        {/* Selected Hospital Info */}
        <div className="mt-8 p-6 bg-[#fffef8] border border-[#e5e4df]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10 flex-shrink-0">
              <MapPin size={20} className="text-[#0d5c63]" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{selectedHospital.name}</h3>
              <p className="text-sm text-[#7a7a7a]">{selectedHospital.address}</p>
              
              {selectedHospital.hasTimings && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-[#0d5c63] mb-2">
                    <Clock size={14} />
                    <span>OPD Timings</span>
                  </div>
                  <div className="space-y-1">
                    {selectedHospital.opdTimings.map((timing, index) => (
                      <p key={index} className="text-sm text-[#4a4a4a]">
                        <span className="font-medium">{timing.day}:</span> {timing.time}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
