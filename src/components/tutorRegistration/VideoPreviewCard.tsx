import React, { useState } from 'react';
 import { CloudArrowUpIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
 

 interface VideoPreviewProps {
  videoUrl: string; // URL of the video to preview
  onUploadAnother: () => void;
  onSubmitVideo: () => void;
  onClose: () => void; // Prop to handle closing the modal
 }
 

 const VideoPreviewCard: React.FC<VideoPreviewProps> = ({
  videoUrl,
  onUploadAnother,
  onSubmitVideo,
  onClose,
 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
 

  const handlePlayPause = () => {
  setIsPlaying(!isPlaying);
  // Add logic to control video playback if needed
  };
 

  const handleSubmit = () => {
  onSubmitVideo();
  onClose(); // Call the onClose function when submitting
  };
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
         <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl relative">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
                <span className="text-xl font-semibold">&times;</span>
            </button>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Preview</h2>
            

            {/* Video Preview Area */}
            <div className="relative rounded-md overflow-hidden aspect-video mb-8">
            <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls // Basic browser controls for preview
            />
            </div>
            

            {/* Action Buttons */}
                <div className="flex lg:justify-center max-md:flex-col gap-4">
                    <button
                    onClick={onUploadAnother}
                    className="bg-black   hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                    >
                    <CloudArrowUpIcon className="h-5 w-5" />
                    Upload Another Video
                    </button>
                    <button
                    onClick={handleSubmit} // Use the handleSubmit function
                    className="bg-black hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                    >
                    <CheckCircleIcon className="h-5 w-5" />
                    Submit Video
                    </button>
                </div>
            </div>
        </div>
  );
 };
 

 export default VideoPreviewCard;