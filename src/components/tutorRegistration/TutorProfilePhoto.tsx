import React, { useState } from 'react';
import { UserCircleIcon, CameraIcon, PhotoIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import correctImage from "@/src/assets/images/tutorProfleAvarta.png";
import wrongImage1 from "@/src/assets/images/tutorWrongImage.png";
import wrongImage2 from "@/src/assets/images/tutorWrongImage2.png";
import wrongImage3 from "@/src/assets/images/tutorWrongImage3.png";

import TakePictureModal from './TakePictureModal'; 
import PreviewPictureModal from './PreviewPictureModal';
import UploadPictureCard from './UploadPictureCard';


interface ProfilePhotoProps {
  onTakePhoto: () => void;
  onOpenUploadModal: () => void;
  exampleImages: { src: any; isValid: boolean }[];
  onProceed: () => void; // <-- New prop
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ onTakePhoto, onOpenUploadModal, exampleImages, onProceed }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      {/* Profile Preview or Placeholder */}
      <div className="relative w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
        <UserCircleIcon className="w-32 h-32 text-black" />
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-700 mb-4 text-center">
        Your profile photo is the highlight of your teaching profile. It is important that it is bright and clear and follows our requirements.
      </p>

      {/* Requirements */}
      <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
        <li>Photos of your cat or dog or dark photos without a clear face will not be accepted.</li>
        <li>A very good photo must be: - Clear and directly face front, - not too big and not more than 300mb</li>
      </ul>

      {/* Example Images */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {exampleImages.map((image, index) => (
          <div key={index} className="relative rounded-full aspect-square">
            <Image src={image.src} alt={`Example ${index + 1}`} className="z-50" fill />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 max-md:flex-col max-md:w-full">
          <button
            onClick={onTakePhoto}
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-full focus:outline-none lg:w-1/2"
          >
            Take a picture <CameraIcon className="h-5 w-5 ml-2" />
          </button>

          <button
            onClick={onOpenUploadModal}
            className="flex items-center justify-center bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-full focus:outline-none lg:w-1/2"
          >
            Upload a picture <PhotoIcon className="h-5 w-5 ml-2" />
          </button>
        </div>

        {/* Proceed Button */}
        <button
          onClick={onProceed}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none w-full"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

interface TutorProfilePhotoProps {
  onProceed: () => void;
}


const TutorProfilePhoto: React.FC<TutorProfilePhotoProps> = ({ onProceed }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);

  const handleTakePhoto = () => {
    setIsCameraOpen(true);
  };

  const handleUploadPicture = (file: File | null) => {
    if (file) {
      console.log('Uploaded file:', file);
    } else {
      console.log('Cleared uploaded picture');
    }
  };

  const handleCapture = (photoDataUrl: string) => {
    setPhotoDataUrl(photoDataUrl);
    setIsCameraOpen(false);
    setIsPreviewOpen(true);
  };

  const handleRetake = () => {
    setIsCameraOpen(true);
    setIsPreviewOpen(false);
    setPhotoDataUrl(null);
  };

  const handleSubmit = (editedPhoto: string) => {
    console.log("Submitted photo:", editedPhoto);
    setIsPreviewOpen(false);
  };

  const handleClose = () => {
    setIsCameraOpen(false);
    setIsPreviewOpen(false);
    setIsUploadModalOpen(false);
    setPhotoDataUrl(null);
  };


  const exampleImagesData = [
    { src: correctImage, isValid: true },
    { src: wrongImage1, isValid: false },
    { src: wrongImage2, isValid: false },
    { src: wrongImage3, isValid: false },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <ProfilePhoto
        onTakePhoto={handleTakePhoto}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        onProceed={onProceed} // Pass in the new handler
        exampleImages={exampleImagesData}
      />

      {/* Modals */}
      <>
        {isCameraOpen && (
          <TakePictureModal
            onClose={handleClose}
            onCapture={handleCapture}
          />
        )}

        {isPreviewOpen && photoDataUrl && (
          <PreviewPictureModal
            photoDataUrl={photoDataUrl}
            onRetake={handleRetake}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        )}

        {isUploadModalOpen && (
          <UploadPictureCard
            onFileSelected={(file) => {
              handleUploadPicture(file);
              setIsUploadModalOpen(false);
            }}
            onClose={() => setIsUploadModalOpen(false)}
          />
        )}
      </>
    </div>
  );
};

export default TutorProfilePhoto;
