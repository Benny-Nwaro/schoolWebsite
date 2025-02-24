import React from 'react';

const LessonSummaryCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-nowrap">
      <h3 className="font-bold text-lg mb-4">Lesson Summary</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm">Tutor Name</label>
          <p className="font-medium">Guy Hawkins</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm">Selected Lesson</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Algebra</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm">Class Location</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Online</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm">Availability</label>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Wed</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>3-6pm</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSummaryCard;
