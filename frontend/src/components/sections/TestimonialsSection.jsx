import React, { useState } from 'react';
import { testimonials } from '../../data/mock';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
            <Heart size={16} />
            Patient Stories
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Healing Journeys
          </h2>
          <p className="text-lg text-blue-100">
            Stories of hope and recovery from patients who trusted their care with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12">
            <Quote size={48} className="text-white/30 mb-6" />
            
            <p className="font-display text-xl lg:text-2xl text-white leading-relaxed mb-8">
              "{testimonials[activeIndex].text}"
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonials[activeIndex].name}</p>
                  <p className="text-blue-200 text-sm">
                    {testimonials[activeIndex].location} • {testimonials[activeIndex].treatment}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
