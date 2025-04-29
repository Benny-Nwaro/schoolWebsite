import React from 'react';
import { CloudArrowUpIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

interface VideoPreviewModalProps {
  videoUrl: string;              // URL or Blob URL of the video to preview
  onClose: () => void;            // Close the modal
  onPrimaryAction: () => void;    // Primary action (e.g., Submit or Save)
  onSecondaryAction: () => void;  // Secondary action (e.g., Upload Another or Record Again)
  primaryButtonText?: string;     // Custom text for primary button
  secondaryButtonText?: string;   // Custom text for secondary button
}

const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  videoUrl,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  primaryButtonText = "Submit Video",
  secondaryButtonText = "Upload Another",
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <span className="text-xl font-semibold">&times;</span>
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Preview</h2>

        {/* Video Area */}
        <div className="relative rounded-md overflow-hidden aspect-video mb-8">
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls
            autoPlay
          />
        </div>

        {/* Action Buttons */}
        <div className="flex lg:justify-center max-md:flex-col gap-4">
          <button
            onClick={onSecondaryAction}
            className="bg-black hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none flex items-center gap-2"
          >
            <CloudArrowUpIcon className="h-5 w-5" />
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryAction}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none flex items-center gap-2"
          >
            <CheckCircleIcon className="h-5 w-5" />
            {primaryButtonText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default VideoPreviewModal;
