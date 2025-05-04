'use client';

import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries: ("places")[] = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '24rem', // Increased height
};
const center = {
  lat: 9.0820,
  lng: 8.6753,
};

interface AddressModalProps {
  onClose: () => void;
  onAddressSelect: (address: string) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({ onClose, onAddressSelect }) => {
  const [selected, setSelected] = useState<google.maps.LatLngLiteral | null>(null);
  const [addressInput, setAddressInput] = useState('');
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    libraries,
  });

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.formatted_address && place.geometry?.location) {
        const location = place.geometry.location;
        const latLng = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setSelected(latLng);
        setAddressInput(place.formatted_address);
        onAddressSelect(place.formatted_address);
      }
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

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
          <div></div>
        </div>

        {/* Address Input */}
        <div className="p-4">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              className="w-full border border-gray-500 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Start typing in your address"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
            />
          </Autocomplete>
        </div>

        {/* Map */}
        <div className="p-4">
          <div className="w-full h-96 bg-gray-100 rounded-md overflow-hidden"> {/* h-96 = 24rem */}
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={selected ? 15 : 6}
              center={selected || center}
            >
              {selected && <Marker position={selected} />}
            </GoogleMap>
          </div>
          <p className="mt-2 text-xs text-gray-500">Search your address and verify the location on the map.</p>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
