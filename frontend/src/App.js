import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import BookAppointmentPage from './pages/BookAppointmentPage';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #e2e8f0',
            color: '#1e293b',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
          },
        }}
      />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
