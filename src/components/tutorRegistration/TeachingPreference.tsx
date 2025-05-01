import React, { useState, useEffect } from 'react';
import AddressModal from './AddressModal';

interface TeachingPreferenceProps {
  onProceed: () => void;
  onLocationPreferenceChange: (
    preference: 'atYourLocation' | 'studentLocation' | 'online',
    checked: boolean
  ) => void;
  atYourLocationSelected: boolean;
  studentLocationSelected: boolean;
  onlineSelected: boolean;
}

const TeachingPreference: React.FC<TeachingPreferenceProps> = ({
  onProceed,
  onLocationPreferenceChange,
  atYourLocationSelected,
  studentLocationSelected,
  onlineSelected,
}) => {
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    onLocationPreferenceChange(value as 'atYourLocation' | 'studentLocation' | 'online', checked);

    if (value === 'atYourLocation' && checked) {
      setShowAddressModal(true);
    }
  };

  const handleModalClose = () => {
    setShowAddressModal(false);
  };

  const handleAddressSelect = (address: string) => {
    console.log('Selected address:', address);
    // You can also save the address somewhere if you want!
    setShowAddressModal(false);
  };
  

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <p className="text-sm text-gray-700 mb-4">
        Your address will never appear on the site. It will only be shared with students to whom you have agreed to give lessons.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        At your location: You can give lessons at your home at the address indicated. Click on the address field and find your location from the map.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        Student homes: Choose the max distance that you can travel to student's place.
      </p>

      <div className="space-y-4">
        {/* At Your Location */}
        <label
          className={`flex items-center rounded-md border p-4 cursor-pointer ${
            atYourLocationSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          <input
            type="checkbox"
            value="atYourLocation"
            checked={atYourLocationSelected}
            onChange={handlePreferenceChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-3 text-sm text-gray-900 font-medium">At your Location</span>
        </label>

        {/* Student's Location */}
        <div
          className={`rounded-md border p-4 space-y-3 ${
            studentLocationSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="studentLocation"
              checked={studentLocationSelected}
              onChange={handlePreferenceChange}
              className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-3 text-sm text-gray-900 font-medium">Student's location</span>
          </label>

          {/* Extra fields if checked */}
          {studentLocationSelected && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Maximum travel distance (KM)"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}
        </div>

        {/* Online */}
        <label
          className={`flex items-center rounded-md border p-4 cursor-pointer ${
            onlineSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          <input
            type="checkbox"
            value="online"
            checked={onlineSelected}
            onChange={handlePreferenceChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-3 text-sm text-gray-900 font-medium">Online</span>
        </label>
      </div>

      <div className="flex justify-center w-full mt-4">
        <button
          onClick={onProceed}
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-1/2 mt-6"
        >
          Proceed →
        </button>
      </div>

      {/* Address Modal */}
      {showAddressModal && <AddressModal onClose={handleModalClose} onAddressSelect={handleAddressSelect} />}
      </div>
  );
};

export default TeachingPreference;
