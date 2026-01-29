import React from 'react';
import { Link } from 'react-router-dom';
import { doctorInfo, quickStats, specialties, hospitals, expertiseAreas, techniques, credentials, awards, testimonials, faqs, googleReviews } from '../data/mock';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import AboutSection from '../components/sections/AboutSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import TreatmentsSection from '../components/sections/TreatmentsSection';
import OPDSection from '../components/sections/OPDSection';
import CredentialsSection from '../components/sections/CredentialsSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import VideoSection from '../components/sections/VideoSection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExpertiseSection />
      <TreatmentsSection />
      <OPDSection />
      <VideoSection />
      <CredentialsSection />
      <ReviewsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
