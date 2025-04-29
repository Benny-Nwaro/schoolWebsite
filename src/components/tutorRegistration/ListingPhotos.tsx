import React, { useRef, useState } from 'react';
import ListingPhotosCard from './ListingPhotosCard'; // Adjust the path if needed

interface ListingPhotoProps {
    onProceed: () => void;
  }

const ListingPhotos: React.FC<ListingPhotoProps>  = ({ onProceed }) => {
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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

  const handleProceed = () => {
    console.log('Proceed with photos:', uploadedPhotos);
    // Proceed to the next step, or submit
  };

  const handleSkip = () => {
    console.log('User skipped adding photos.');
    // Skip to the next step
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <ListingPhotosCard
        onProceed={onProceed}
        onSkip={handleSkip}
      />
      
      {/* Hidden file input for uploading */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default ListingPhotos;
