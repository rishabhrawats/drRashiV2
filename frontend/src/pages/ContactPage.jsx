import React, { useState } from 'react';
import { hospitals, doctorInfo } from '../data/mock';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import OPDTimingsTable from '../components/OPDTimingsTable';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', whatsapp: true });
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-[#f8f7f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Get in Touch</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl">
            Schedule a consultation or reach out with any questions about cancer care and treatment options.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Contact */}
            <div className="space-y-6">
              <div className="p-6 bg-[#0d5c63] text-white">
                <h3 className="font-serif text-xl text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  >
                    <Phone size={18} />
                    <span>{doctorInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${doctorInfo.email}`}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">{doctorInfo.email}</span>
                  </a>
                </div>
              </div>

              {/* Callback Form */}
              <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Request Callback</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#fffef8] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#4a4a4a] mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#fffef8] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="whatsapp-contact"
                      checked={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="whatsapp-contact" className="text-xs text-[#4a4a4a]">
                      Get updates on WhatsApp. I agree to the Terms & Conditions.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors"
                  >
                    <Send size={16} />
                    Request Callback
                  </button>
                </form>
                <p className="mt-4 text-xs text-[#7a7a7a] text-center">
                  We will never share your personal information.
                </p>
              </div>
            </div>

            {/* Hospital Cards */}
            <div className="lg:col-span-2 space-y-6">
              {hospitals.map((hospital) => (
                <div key={hospital.id} className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#0d5c63]/10 flex-shrink-0">
                      <MapPin size={24} className="text-[#0d5c63]" />
                    </div>
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-[#c4a35a]/10 text-[#c4a35a] text-xs mb-2">
                        {hospital.type}
                      </span>
                      <h3 className="font-serif text-2xl text-[#1a1a1a]">{hospital.name}</h3>
                      <p className="text-[#7a7a7a]">{hospital.location}</p>
                      <p className="text-sm text-[#7a7a7a] mt-1">{hospital.address}</p>
                    </div>
                  </div>

                  {hospital.hasTimings && (
                    <div>
                      <div className="flex items-center gap-2 text-sm text-[#0d5c63] mb-4">
                        <Clock size={16} />
                        <span className="font-medium">OPD Timings</span>
                      </div>
                      <OPDTimingsTable timings={hospital.opdTimings} />
                    </div>
                  )}

                  {!hospital.hasTimings && (
                    <p className="text-sm text-[#7a7a7a] italic">
                      Please call {doctorInfo.phone} for appointment timings at this location.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
