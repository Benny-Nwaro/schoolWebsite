import React from 'react';

interface EventTooltipProps {
  slot: {
    date: string;
    time: string;
    duration: string;
  };
  onClose: () => void;
}

const EventTooltip: React.FC<EventTooltipProps> = ({ slot, onClose }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-md p-4 w-64">
      <div className="text-sm text-gray-700">
        <p className="font-medium">Date: {slot.date}</p>
        <p>Time: {slot.time}</p>
        <p>
          Duration: {slot.duration}{' '}
          <span className="text-blue-500 cursor-pointer">Change</span>
        </p>
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={() => alert('Book Lesson Clicked')}
      >
        Book Lesson
      </button>
      <button
        className="mt-2 w-full text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default EventTooltip;
