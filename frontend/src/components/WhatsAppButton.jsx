import React from 'react';
import { doctorInfo } from '../data/mock';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${doctorInfo.whatsapp}?text=Hello%20Dr.%20Rashi%20Agrawal,%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <MessageCircle size={28} className="text-white" fill="white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-slate-800" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
