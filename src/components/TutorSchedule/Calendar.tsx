import React, { useState } from 'react';
import EventTooltip from './EventTooltip';

interface TimeSlot {
  date: string;
  time: string;
  duration: string;
}

const Calendar: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const handleSlotClick = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const closeTooltip = () => {
    setSelectedSlot(null);
  };

  const slots = [
    { time: '12:00 AM', isAvailable: false },
    { time: '2:30 AM', isAvailable: true },
    { time: '4:00 AM', isAvailable: true },
    { time: '6:00 AM', isAvailable: false },
  ];

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 font-semibold text-center text-gray-700 border-b">
        This week, May 12-18 2024 <span className="text-blue-500 text-sm ml-2">Change</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2 text-sm font-semibold">
            {day}
          </div>
        ))}
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${slot.isAvailable ? 'bg-green-100' : 'bg-gray-100'} hover:bg-green-300`}
            onClick={() =>
              slot.isAvailable &&
              handleSlotClick({
                date: 'Mon, 13 May, 2024',
                time: slot.time,
                duration: '30 Min',
              })
            }
          >
            {slot.time}
          </div>
        ))}
      </div>
      {selectedSlot && <EventTooltip slot={selectedSlot} onClose={closeTooltip} />}
    </div>
  );
};

export default Calendar;
