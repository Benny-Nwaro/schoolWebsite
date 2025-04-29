import React, { useRef, useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';

const ListingPhotosCard: React.FC<{
  onProceed: (photos: string[]) => void;
  onSkip: () => void;
}> = ({ onProceed, onSkip }) => {
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setUploadedPhotos((prev) => [...prev, ...fileArray].slice(0, 3)); // Limit to 3
    }
  };

  const handleRemovePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProceed = () => {
    onProceed(uploadedPhotos);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-44">
      <div className="bg-white rounded-2xl p-8  w-full max-w-3xl flex flex-col items-center">

        {/* Photos Section */}
        <div className="flex items-center gap-4 mb-6 flex-wrap justify-center">
          {uploadedPhotos.map((photo, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden w-24 h-24">
              <img src={photo} alt={`Listing Photo ${index + 1}`} className="object-cover w-full h-full" />
              <button
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-70 text-white rounded-full p-1"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
          {uploadedPhotos.length < 3 && (
            <button
              onClick={triggerFileInput}
              className="w-24 h-24 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-lg text-white"
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          ref={fileInputRef}
          className="hidden"
        />

        {/* Add More Button */}
        {uploadedPhotos.length >= 1 && uploadedPhotos.length < 3 && (
          <button
            onClick={triggerFileInput}
            className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
          >
            Add more <PlusIcon className="h-4 w-4" />
          </button>
        )}

        {/* Instructional Text */}
        <div className="text-left w-3/4 text-gray-700 mb-8">
          <p className="text-base mb-2">
            A good listing (lesson picture or photo) makes your listing very attractive to potential students.
          </p>
          <ul className="list-disc list-inside text-base text-gray-700">
            <li>
              Showcase your studio space if you teach from home or a location, or even an online teaching environment.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full justify-center  gap-6">
          <button
            onClick={onSkip}
            className="flex items-center justify-center w-1/2 gap-2 border border-gray-400 text-gray-700 py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Skip
          </button>
          <button
            onClick={handleProceed}
            disabled={uploadedPhotos.length === 0}
            className="flex items-center justify-center w-1/2 gap-2 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPhotosCard;
