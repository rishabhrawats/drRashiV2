import React, { useState } from 'react';
import { faqs } from '../../data/mock';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-600 text-sm font-semibold rounded-full mb-4">
            <HelpCircle size={16} />
            FAQs
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about radiation therapy and cancer treatment.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card-strong rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? 'ring-2 ring-pink-500/20' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                data-testid={`faq-item-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-pink-500 to-cyan-500'
                      : 'bg-slate-100'
                  }`}>
                    <MessageCircle size={16} className={openIndex === index ? 'text-white' : 'text-slate-500'} />
                  </div>
                  <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180 text-pink-500' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <MessageCircle size={18} />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
