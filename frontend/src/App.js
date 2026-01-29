import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import TechnologySection from './components/TechnologySection';
import TrainingSection from './components/TrainingSection';
import LeadershipSection from './components/LeadershipSection';
import AwarenessSection from './components/AwarenessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#fffef8]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechnologySection />
        <TrainingSection />
        <LeadershipSection />
        <AwarenessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#fffef8',
            border: '1px solid #e5e4df',
            color: '#1a1a1a',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
