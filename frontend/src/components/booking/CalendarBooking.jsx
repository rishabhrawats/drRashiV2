import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isBefore, startOfDay, isToday, getDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Check } from 'lucide-react';
import { toast } from 'sonner';

const CalendarBooking = ({ hospital }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState(1); // 1: Calendar, 2: Slots, 3: Details, 4: Confirmation
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: true
  });

  const today = startOfDay(new Date());
  
  // Get available days from OPD timings
  const dayMap = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 0
  };
  
  const availableDays = hospital.opdTimings.map(t => dayMap[t.day]);

  // Generate calendar days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Add empty days for proper alignment
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
    const timing = hospital.opdTimings.find(t => t.day === dayName);
    if (!timing) return [];
    
    // Parse timing string and generate slots
    const slots = [];
    const timeRanges = timing.time.split(' / ');
    
    timeRanges.forEach(range => {
      const [start] = range.split('–');
      // Generate 30-min slots (simplified)
      slots.push(start.trim());
    });
    
    return slots.length > 0 ? slots : ['10:00am', '11:00am', '12:00pm'];
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
    toast.success('Appointment request submitted! We will contact you shortly.');
  };

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setStep(1);
    setFormData({ name: '', phone: '', whatsapp: true });
  };

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <React.Fragment key={s}>
            <div className={`w-8 h-8 flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-[#0d5c63] text-white' : 'bg-[#f8f7f2] text-[#7a7a7a]'
            }`}>
              {step > s ? <Check size={16} /> : s}
            </div>
            {s < 4 && <div className={`w-12 h-[2px] ${step > s ? 'bg-[#0d5c63]' : 'bg-[#e5e4df]'}`} />}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Calendar */}
      {step === 1 && (
        <div>
          <p className="text-sm text-[#7a7a7a] mb-4 text-center">Step 2: Select Date</p>
          
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className="p-2 hover:bg-[#f8f7f2] transition-colors"
            >
              <ChevronLeft size={20} className="text-[#4a4a4a]" />
            </button>
            <h3 className="font-serif text-xl text-[#1a1a1a]">
              {format(currentMonth, 'MMMM yyyy')}
            </h3>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="p-2 hover:bg-[#f8f7f2] transition-colors"
            >
              <ChevronRight size={20} className="text-[#4a4a4a]" />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-xs text-[#7a7a7a] py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {paddedDays.map((day, index) => {
              if (!day) return <div key={`empty-${index}`} />;
              
              const available = isDateAvailable(day);
              const isSelected = selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
              const isPast = isBefore(day, today);
              
              return (
                <button
                  key={format(day, 'yyyy-MM-dd')}
                  onClick={() => handleDateSelect(day)}
                  disabled={!available}
                  className={`
                    aspect-square flex items-center justify-center text-sm transition-all
                    ${!isSameMonth(day, currentMonth) ? 'text-[#d5d4cf]' : ''}
                    ${isPast ? 'text-[#d5d4cf] cursor-not-allowed' : ''}
                    ${available && !isPast ? 'hover:bg-[#0d5c63] hover:text-white cursor-pointer' : ''}
                    ${available ? 'bg-[#0d5c63]/10 text-[#0d5c63] font-medium' : ''}
                    ${isSelected ? 'bg-[#0d5c63] text-white' : ''}
                    ${isToday(day) ? 'ring-2 ring-[#c4a35a]' : ''}
                  `}
                >
                  {format(day, 'd')}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-[#7a7a7a]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#0d5c63]/10" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 ring-2 ring-[#c4a35a]" />
              <span>Today</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Time Slots */}
      {step === 2 && selectedDate && (
        <div>
          <p className="text-sm text-[#7a7a7a] mb-4 text-center">Step 3: Select Time Slot</p>
          <p className="text-center mb-6">
            <span className="font-serif text-xl text-[#1a1a1a]">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {getTimeSlotsForDate(selectedDate).map((slot) => (
              <button
                key={slot}
                onClick={() => handleSlotSelect(slot)}
                className={`
                  p-4 text-sm font-medium border transition-all
                  ${selectedSlot === slot 
                    ? 'bg-[#0d5c63] text-white border-[#0d5c63]' 
                    : 'bg-[#fffef8] text-[#1a1a1a] border-[#e5e4df] hover:border-[#0d5c63]'
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(1)}
            className="mt-6 text-sm text-[#0d5c63] hover:underline block mx-auto"
          >
            ← Change Date
          </button>
        </div>
      )}

      {/* Step 3: Patient Details */}
      {step === 3 && (
        <div>
          <p className="text-sm text-[#7a7a7a] mb-4 text-center">Step 4: Your Details</p>
          
          <div className="text-center mb-6 p-4 bg-[#f8f7f2]">
            <p className="text-sm text-[#7a7a7a]">Appointment</p>
            <p className="font-serif text-lg text-[#1a1a1a]">
              {format(selectedDate, 'EEEE, MMMM d')} at {selectedSlot}
            </p>
            <p className="text-sm text-[#0d5c63]">{hospital.name}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-[#4a4a4a] mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#fffef8] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm text-[#4a4a4a] mb-2">Mobile Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#fffef8] border border-[#e5e4df] text-[#1a1a1a] focus:border-[#0d5c63] focus:outline-none"
                placeholder="+91 00000 00000"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="whatsapp"
                checked={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                className="mt-1"
              />
              <label htmlFor="whatsapp" className="text-sm text-[#4a4a4a]">
                Get updates on WhatsApp. I agree to the Terms & Conditions.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors"
            >
              Confirm Appointment
            </button>
          </form>

          <button
            onClick={() => setStep(2)}
            className="mt-4 text-sm text-[#0d5c63] hover:underline block mx-auto"
          >
            ← Change Time
          </button>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#0d5c63] flex items-center justify-center">
            <Check size={32} className="text-white" />
          </div>
          <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">Request Confirmed!</h3>
          <p className="text-[#4a4a4a] mb-6">
            We will contact you shortly to confirm your appointment.
          </p>
          
          <div className="p-6 bg-[#f8f7f2] mb-6">
            <p className="text-sm text-[#7a7a7a]">Appointment Details</p>
            <p className="font-serif text-lg text-[#1a1a1a] mt-2">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedSlot}
            </p>
            <p className="text-sm text-[#0d5c63]">{hospital.name}, {hospital.location}</p>
            <p className="text-sm text-[#4a4a4a] mt-2">
              Patient: {formData.name} | {formData.phone}
            </p>
          </div>

          <button
            onClick={resetBooking}
            className="text-sm text-[#0d5c63] hover:underline"
          >
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;
