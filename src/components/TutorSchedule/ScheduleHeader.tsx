import React from 'react';

interface ScheduleHeaderProps {
  isFlexible: boolean;
  onToggle: () => void;
}

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ isFlexible, onToggle }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-white shadow-md rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <button
            onClick={onToggle}
            className={`py-2 px-4 rounded-md font-semibold ${
              isFlexible ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={onToggle}
            className={`py-2 px-4 rounded-md font-semibold ${
              isFlexible ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            Flexible
          </button>
        </div>
        <p className="text-sm text-gray-600">
          The <b>weekly</b> schedule allows you to attend your classes on the same day every week. Switch to the{' '}
          <b>flexible</b> schedule if you wish to take your classes whenever you want.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Available</span>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ScheduleHeader;
