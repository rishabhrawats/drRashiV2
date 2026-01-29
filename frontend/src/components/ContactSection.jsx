import React, { useState } from 'react';
import { hospitalData, doctorInfo, memberships } from '../data/mock';
import { MapPin, Phone, Clock, Calendar, ArrowRight, Building } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hospital: hospitalData[0].name,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Appointment request submitted. We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      hospital: hospitalData[0].name,
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">
            Appointments & Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Care Begins with a Conversation
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Schedule a consultation to discuss your treatment options with personalized attention and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hospital Cards */}
          <div className="lg:col-span-1 space-y-6">
            {hospitalData.map((hospital) => (
              <div
                key={hospital.id}
                className="p-6 bg-[#fffef8] border border-[#e5e4df] hover:border-[#0d5c63]/40 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10 flex-shrink-0">
                    <Building size={20} className="text-[#0d5c63]" />
                  </div>
                  <div>
                    <span className="inline-flex px-2 py-0.5 bg-[#c4a35a]/10 text-[#c4a35a] text-xs mb-2">
                      {hospital.type}
                    </span>
                    <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">
                      {hospital.name}
                    </h3>
                    <p className="text-sm text-[#7a7a7a] mb-3">{hospital.location}</p>
                    <p className="text-xs text-[#7a7a7a] leading-relaxed">
                      {hospital.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact Card */}
            <div className="p-6 bg-[#0d5c63] text-white">
              <h3 className="font-serif text-xl text-white mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>{doctorInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock size={18} />
                  <span className="text-sm">Mon - Sat: 10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-[#fffef8] border border-[#e5e4df]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10">
                  <Calendar size={20} className="text-[#0d5c63]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a]">Request Appointment</h3>
                  <p className="text-sm text-[#7a7a7a]">We'll contact you to confirm the schedule</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f8f7f2] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f8f7f2] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f8f7f2] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Preferred Hospital *</label>
                    <select
                      name="hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f8f7f2] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none transition-colors"
                    >
                      {hospitalData.map((hospital) => (
                        <option key={hospital.id} value={hospital.name}>
                          {hospital.name} - {hospital.location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#4a4a4a] mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#f8f7f2] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none transition-colors resize-none"
                    placeholder="Brief description of your concern or any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors duration-200"
                >
                  <span>Request Appointment</span>
                  <ArrowRight size={16} />
                </button>
              </form>

              {/* Disclaimer */}
              <p className="mt-8 pt-6 border-t border-[#e5e4df] text-xs text-[#7a7a7a] leading-relaxed">
                Medical decisions are individualized. Treatment plans are discussed after clinical evaluation. 
                This form is for appointment requests only and does not constitute medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
