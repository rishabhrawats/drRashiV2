import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hospitals, doctorInfo } from '../data/mock';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, startOfDay, isToday, getDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Check, Phone, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const BookAppointmentPage = () => {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: true
  });

  const today = startOfDay(new Date());
  
  const dayMap = {
    'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4,
    'Friday': 5, 'Saturday': 6, 'Sunday': 0
  };
  
  const availableDays = selectedHospital.opdTimings
    .filter(t => t.available)
    .map(t => dayMap[t.day]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startPadding = getDay(monthStart);
  const paddedDays = [...Array(startPadding).fill(null), ...days];

  const isDateAvailable = (date) => {
    if (!date) return false;
    if (isBefore(date, today)) return false;
    return availableDays.includes(getDay(date));
  };

  const getTimeSlotsForDate = (date) => {
    if (!date) return [];
    const dayName = format(date, 'EEEE');
    const timing = selectedHospital.opdTimings.find(t => t.day === dayName);
    if (!timing || !timing.available) return [];
    return timing.time.split(', ').map(t => t.split(' – ')[0]);
  };

  const handleDateSelect = (date) => {
    if (!isDateAvailable(date)) return;
    setSelectedDate(date);
    setSelectedSlot(null);
    setStep(2);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setStep(4);
    toast.success('Appointment request submitted!');
  };

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setStep(1);
    setFormData({ name: '', phone: '', whatsapp: true });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Book Your Appointment
          </h1>
          <p className="text-slate-600">
            Schedule a consultation with {doctorInfo.name}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {['Hospital', 'Date & Time', 'Details', 'Confirm'].map((label, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  step > i + 1 
                    ? 'bg-green-500 text-white' 
                    : step === i + 1 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg' 
                      : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > i + 1 ? <Check size={18} /> : i + 1}
                </div>
                <span className={`text-xs mt-2 hidden sm:block ${
                  step >= i + 1 ? 'text-slate-700' : 'text-slate-400'
                }`}>
                  {label}
                </span>
              </div>
              {i < 3 && (
                <div className={`w-12 lg:w-20 h-1 rounded-full ${
                  step > i + 1 ? 'bg-green-500' : 'bg-slate-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Content */}
        <div className="glass-card-strong rounded-3xl p-6 lg:p-10">
          {/* Step 1: Hospital Selection */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-xl font-bold text-slate-800 mb-6 text-center">
                Select Hospital
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {hospitals.map((hospital) => (
                  <button
                    key={hospital.id}
                    onClick={() => setSelectedHospital(hospital)}
                    className={`p-6 rounded-2xl text-left transition-all ${
                      selectedHospital.id === hospital.id
                        ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-xl'
                        : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedHospital.id === hospital.id ? 'bg-white/20' : 'bg-blue-100'
                      }`}>
                        <MapPin size={22} className={selectedHospital.id === hospital.id ? 'text-white' : 'text-blue-600'} />
                      </div>
                      <div>
                        <p className={`font-semibold ${selectedHospital.id === hospital.id ? 'text-white' : 'text-slate-800'}`}>
                          {hospital.name}
                        </p>
                        <p className={`text-sm ${selectedHospital.id === hospital.id ? 'text-blue-100' : 'text-slate-500'}`}>
                          {hospital.location}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={20} className="text-slate-600" />
                  </button>
                  <h3 className="font-display text-lg font-bold text-slate-800">
                    {format(currentMonth, 'MMMM yyyy')}
                  </h3>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <ChevronRight size={20} className="text-slate-600" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-slate-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {paddedDays.map((day, index) => {
                    if (!day) return <div key={`empty-${index}`} />;
                    const available = isDateAvailable(day);
                    const isSelected = selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                    
                    return (
                      <button
                        key={format(day, 'yyyy-MM-dd')}
                        onClick={() => handleDateSelect(day)}
                        disabled={!available}
                        className={`
                          aspect-square flex items-center justify-center text-sm rounded-xl transition-all
                          ${isBefore(day, today) ? 'text-slate-300 cursor-not-allowed' : ''}
                          ${available && !isSelected ? 'bg-blue-50 text-blue-600 font-medium hover:bg-blue-100' : ''}
                          ${isSelected ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white font-semibold shadow-lg' : ''}
                          ${!available && !isBefore(day, today) ? 'text-slate-400' : ''}
                          ${isToday(day) ? 'ring-2 ring-amber-400' : ''}
                        `}
                      >
                        {format(day, 'd')}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-6 mt-6 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-100 rounded" />
                    <span className="text-slate-500">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 ring-2 ring-amber-400 rounded" />
                    <span className="text-slate-500">Today</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && selectedDate && (
            <div>
              <h2 className="font-display text-xl font-bold text-slate-800 mb-2 text-center">
                Select Time Slot
              </h2>
              <p className="text-center text-slate-500 mb-8">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {getTimeSlotsForDate(selectedDate).map((slot) => (
                  <button
                    key={slot}
                    onClick={() => handleSlotSelect(slot)}
                    className={`p-4 rounded-xl text-center font-medium transition-all ${
                      selectedSlot === slot
                        ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-blue-600 font-medium hover:underline block mx-auto"
              >
                ← Change Date
              </button>
            </div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <div>
              <h2 className="font-display text-xl font-bold text-slate-800 mb-2 text-center">
                Your Details
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-8 text-center">
                <p className="text-sm text-slate-500">Appointment</p>
                <p className="font-semibold text-slate-800">
                  {format(selectedDate, 'EEEE, MMMM d')} at {selectedSlot}
                </p>
                <p className="text-sm text-blue-600">{selectedHospital.name}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="whatsapp-booking"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                    className="mt-1 w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="whatsapp-booking" className="text-sm text-slate-600">
                    Get updates on WhatsApp. I agree to T&C.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Confirm Appointment
                </button>
              </form>

              <button
                onClick={() => setStep(2)}
                className="text-blue-600 font-medium hover:underline block mx-auto mt-6"
              >
                ← Change Time
              </button>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-800 mb-2">
                Request Confirmed!
              </h2>
              <p className="text-slate-600 mb-8">
                We will contact you shortly to confirm your appointment.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 max-w-sm mx-auto mb-8">
                <p className="text-sm text-slate-500 mb-2">Appointment Details</p>
                <p className="font-semibold text-slate-800">
                  {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </p>
                <p className="text-blue-600">{selectedSlot}</p>
                <p className="text-sm text-slate-500 mt-2">{selectedHospital.name}</p>
                <p className="text-sm text-slate-500">{formData.name} | {formData.phone}</p>
              </div>

              <button
                onClick={resetBooking}
                className="text-blue-600 font-medium hover:underline"
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>

        {/* Backup Contact */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a
            href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
            className="glass-card-strong rounded-2xl p-5 flex items-center gap-4 hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Phone size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Call to Book</p>
              <p className="font-semibold text-slate-800">{doctorInfo.phone}</p>
            </div>
          </a>
          <a
            href={`tel:${doctorInfo.phone2.replace(/\s/g, '')}`}
            className="glass-card-strong rounded-2xl p-5 flex items-center gap-4 hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
              <Phone size={22} className="text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Alternate Number</p>
              <p className="font-semibold text-slate-800">{doctorInfo.phone2}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
