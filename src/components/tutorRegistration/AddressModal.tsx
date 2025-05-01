import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface AddressModalProps {
  onClose: () => void;
  onAddressSelect: (address: string) => void; // Optional: If you want to pass back a selected address
}

const AddressModal: React.FC<AddressModalProps> = ({ onClose, onAddressSelect }) => {
  const [addressInput, setAddressInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]); // Placeholder for address suggestions

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddressInput(value);
    // In a real application, you would call an address autocomplete API here
    // based on the 'value' and update the 'suggestions' state.
    // For this example, we'll provide some static suggestions.
    if (value.length > 2) {
      setSuggestions([
        `${value}, Abuja, Nigeria`,
        `${value} Crescent, Lagos, Nigeria`,
        `${value} Street, Kano, Nigeria`,
        // ... more suggestions based on input
      ]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setAddressInput(suggestion);
    setSuggestions([]);
    if (onAddressSelect) {
      onAddressSelect(suggestion);
    }
    // You might want to trigger an action to update the map or proceed
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl mt-16">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button onClick={onClose} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Enter your home/studio address</h2>
          <div></div> {/* Spacer for alignment */}
        </div>

        {/* Address Input */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Start typing in your address"
              value={addressInput}
              onChange={handleInputChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* Address Suggestions (Placeholder) */}
          {suggestions.length > 0 && (
            <ul className="mt-1 border border-gray-200 rounded-md shadow-sm bg-white">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Map */}
        <div className="p-4">
        <div className="w-full h-64 bg-gray-100 rounded-md overflow-hidden">
            {/* <MapContainer center={[9.0820, 8.6753]} zoom={6} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[9.0820, 8.6753]}>
                <Popup>Nigeria Center</Popup>
            </Marker>
            </MapContainer> */}
        </div>
        <p className="mt-2 text-xs text-gray-500">Click on the address field and find your location on the map.</p>
        </div>

        {/* Optional: Footer Buttons */}
        {/* <div className="flex justify-end p-4 border-t border-gray-200">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Cancel
          </button>
          <button onClick={() => { if (addressInput) onAddressSelect(addressInput); onClose(); }} className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Select Address
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AddressModal;