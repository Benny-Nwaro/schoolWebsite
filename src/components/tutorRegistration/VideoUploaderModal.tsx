import React from 'react';
 import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
 

 interface VideoUploaderModalProps {
  onClose: () => void; // Prop to handle closing the modal
  onVideoSelected: (file: File) => void; // Prop to handle the selected video
 }
 

 const VideoUploaderModal: React.FC<VideoUploaderModalProps> = ({ onClose, onVideoSelected }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
  console.log('Selected file:', file);
  onVideoSelected(file); // Call the prop to handle the selected video
  onClose(); // Close the modal after a video is selected
  }
  };
 

  return (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
  {/* Modal Container */}
  <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
  {/* Close Button */}
  <button
  onClick={onClose}
  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
  >
  <span className="text-xl font-semibold">&times;</span>
  </button>
 

  {/* Heading */}
  <div className="text-center mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload a Video</h2>
  <p className="text-gray-500 text-sm">Post a video to your account</p>
  </div>
 

  {/* Upload Box */}
  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center text-center">
  <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mb-4" />
 

  <p className="font-semibold text-gray-700 mb-1">Select video to upload</p>
  <p className="text-gray-400 text-sm mb-4">Or drag and drop a file</p>
 

  <ul className="text-gray-400 text-xs mb-6 space-y-1">
  <li>MP4 or WebM</li>
  <li>720x1280 resolution or higher</li>
  <li>Up to 30 minutes</li>
  <li>Less than 2 GB</li>
  </ul>
 

  {/* File Input */}
  <div>
  <label
  htmlFor="file-upload"
  className="bg-black text-white py-2 px-6 rounded-full cursor-pointer hover:bg-gray-900 text-sm font-semibold"
  >
  Select file
  </label>
  <input
  id="file-upload"
  type="file"
  accept="video/mp4,video/webm"
  className="hidden"
  onChange={handleFileChange}
  />
  </div>
  </div>
  </div>
  </div>
  );
 };
 

 export default VideoUploaderModal;