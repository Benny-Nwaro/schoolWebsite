"use client"

import React from 'react';
import VideoUploadCard from './VideoUploadCard';

interface ProceedProps {
  onProceed: () => void;
}

const VideoUploadPage: React.FC<ProceedProps> = ({onProceed}) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const closeModal = () => setIsModalOpen(!isModalOpen);

  const handleRecordVideo = () => {
    console.log('User wants to record a video');
    // Open a webcam modal or start recording
  };

  const handleUploadVideo = (file: File) => {
    console.log('User uploaded a video file:', file);
    // Upload the file to your server or process it
  };

  const handleUploadVideoLink = (link: string) => {
    console.log('User provided a video link:', link);
    // Validate or save the video link
  };

  const handleProceed = () => {
    console.log('Proceed clicked');
    // Move to next step or show success
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <VideoUploadCard
          onUploadVideo={handleUploadVideo}
          onUploadVideoLink={handleUploadVideoLink}
          onProceed={onProceed}
          onPrimaryButtonClick={handleProceed}
          onSubmitRecordedVideo={handleRecordVideo}
        />
    </div>
  );
};

export default VideoUploadPage;
