import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, hospitals } from '../../data/mock';
import { Phone, Globe, MapPin, Send, Calendar, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    whatsapp: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success('Message sent! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
            <MessageCircle size={16} />
            Get in Touch
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600">
            Ready to start your treatment journey? Reach out to schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="glass-card-strong rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors"
                  data-testid="contact-phone-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Now</p>
                    <p className="font-semibold text-slate-800">{doctorInfo.phone}</p>
                  </div>
                </a>
                
                <a
                  href={`tel:${doctorInfo.phone2.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors"
                  data-testid="contact-phone-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Alternate Number</p>
                    <p className="font-semibold text-slate-800">{doctorInfo.phone2}</p>
                  </div>
                </a>
                
                <a
                  href={`https://${doctorInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cyan-50 rounded-2xl hover:bg-cyan-100 transition-colors"
                  data-testid="contact-website"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <Globe size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Website</p>
                    <p className="font-semibold text-slate-800">{doctorInfo.website}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Hospitals */}
            <div className="glass-card-strong rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Locations</h3>
              <div className="space-y-4">
                {hospitals.map((hospital) => (
                  <a
                    key={hospital.id}
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">{hospital.name}</p>
                      <p className="text-sm text-slate-500">{hospital.location}</p>
                      <p className="text-xs text-slate-400 mt-1">{hospital.address}</p>
                    </div>
                    <ExternalLink size={16} className="text-slate-400 flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card-strong rounded-3xl p-8">
            {!submitted ? (
              <>
                <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                      data-testid="contact-name-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 00000 00000"
                      data-testid="contact-phone-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your concern..."
                      data-testid="contact-message-input"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="whatsapp"
                      checked={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                      className="mt-1 w-4 h-4 text-pink-600 rounded"
                    />
                    <label htmlFor="whatsapp" className="text-sm text-slate-600">
                      I agree to receive updates via WhatsApp and accept the Terms & Conditions.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    data-testid="contact-submit-btn"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12" data-testid="contact-success">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">We will contact you within 24 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', message: '', whatsapp: true });
                  }}
                  className="text-pink-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card-strong rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-slate-800 mb-4">
              Ready to Book Your Appointment?
            </h3>
            <p className="text-slate-600 mb-6">Schedule your consultation in under 30 seconds.</p>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-pink-500/25 hover:shadow-2xl hover:shadow-pink-500/30 transition-all"
              data-testid="contact-book-btn"
            >
              <Calendar size={22} />
              Book Appointment Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
