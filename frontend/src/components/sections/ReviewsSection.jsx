import React from 'react';
import { googleReviews, doctorInfo } from '../../data/mock';
import { Star, ExternalLink, Quote } from 'lucide-react';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            <Star size={16} />
            Google Reviews
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            What Patients Say
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from patients on Google Reviews
          </p>
        </div>

        {/* Google Rating Summary */}
        <div className="glass-card-strong rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-bold text-slate-800">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-500">Based on Google Reviews</p>
              </div>
            </div>
            <a
              href={doctorInfo.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              <span>View All Reviews</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {googleReviews.map((review, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
