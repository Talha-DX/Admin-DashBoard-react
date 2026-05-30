import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const events = [
    { date: "2026-05-28", title: "Team Meeting", time: "10:00 AM", color: "blue" },
    { date: "2026-05-30", title: "Product Launch", time: "02:00 PM", color: "green" },
    { date: "2026-06-02", title: "Client Presentation", time: "11:30 AM", color: "purple" },
    { date: "2026-06-05", title: "Marketing Review", time: "09:00 AM", color: "orange" },
  ];

  const renderCalendarDays = () => {
    const days = [];
    // Empty slots
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-20"></div>);
    }
    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasEvent = events.some(event => event.date === dateStr);
      const isSelected = selectedDate.getDate() === day && 
                        selectedDate.getMonth() === currentDate.getMonth();

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          className={`h-20 border border-gray-100 flex flex-col items-center justify-center hover:bg-blue-50 cursor-pointer transition rounded-xl ${isSelected ? 'bg-blue-100 border-blue-500' : ''}`}
        >
          <span className="font-medium">{day}</span>
          {hasEvent && <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
          <p className="text-gray-600">Manage your schedule and events</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700">
          <Plus size={20} /> New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <ChevronLeft size={24} />
            </button>
            
            <h2 className="text-2xl font-semibold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>

            <button 
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-5">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-1">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date} • {event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;