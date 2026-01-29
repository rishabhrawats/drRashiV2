import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ExpertisePage from './pages/ExpertisePage';
import TreatmentsPage from './pages/TreatmentsPage';
import TrainingPage from './pages/TrainingPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import MembershipsPage from './pages/MembershipsPage';
import AwardsPage from './pages/AwardsPage';
import ResearchPage from './pages/ResearchPage';
import AwarenessPage from './pages/AwarenessPage';
import DoctorTalkPage from './pages/DoctorTalkPage';
import DiscoverPage from './pages/DiscoverPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-[#fffef8]">
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
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/work-experience" element={<WorkExperiencePage />} />
            <Route path="/memberships" element={<MembershipsPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/awareness" element={<AwarenessPage />} />
            <Route path="/doctor-talk" element={<DoctorTalkPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/discover/:topic" element={<DiscoverPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
