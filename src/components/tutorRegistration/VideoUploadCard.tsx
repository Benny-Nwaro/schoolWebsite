import React, { useState } from 'react';
 import { PlayIcon } from '@heroicons/react/20/solid';
 import { CameraIcon } from '@heroicons/react/24/outline';
 import VideoUploaderModal from './VideoUploaderModal'; // Ensure the Modal version is imported
 import VideoPreviewCard from './VideoPreviewCard';
 import RecordingModal from './RecordingModal'; // Import the RecordingModal

 interface VideoUploadProps {
  onUploadVideo: (file: File) => void;
  onUploadVideoLink: (link: string) => void;
  onProceed: () => void;
 }

 const VideoUploadCard: React.FC<VideoUploadProps> = ({
  onUploadVideo,
  onUploadVideoLink,
  onProceed,
 }) => {
  const [selectedOption, setSelectedOption] = useState<'record' | 'upload' | 'link'>('record');
  const [videoLink, setVideoLink] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null); // To store the selected video
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);


  const handleOptionChange = (option: 'record' | 'upload' | 'link') => {
    setSelectedOption(option);
    if (option === 'upload') {
      setIsUploadModalOpen(true);
      setIsRecordingModalOpen(false);
    } else if (option === 'record') {
      setIsRecordingModalOpen(true);
      setIsUploadModalOpen(false);
    } else {
      setIsUploadModalOpen(false);
      setIsRecordingModalOpen(false);
    }
  };

  const handleProceed = () => {
    if (selectedOption === 'upload' && selectedVideo) {
      onUploadVideo(selectedVideo);
      setIsPreviewOpen(true);
    } else if (selectedOption === 'link') {
      if (videoLink.trim() !== '') {
        onUploadVideoLink(videoLink.trim());
        setIsPreviewOpen(true); // Consider if you want a preview for links
      }
    }
    onProceed(); // Call proceed regardless
  };

  const closeUploadModal = () => setIsUploadModalOpen(false);
  const closeRecordingModal = () => setIsRecordingModalOpen(false);
  const closePreviewModal = () => setIsPreviewOpen(false);


  // Function to handle the selected video from the uploader
  const handleVideoSelected = (file: File) => {
    const url = URL.createObjectURL(file); // Generate a URL for the video
    setSelectedVideo(file);
    setVideoUrl(url); // Pass the URL to the preview modal
    setIsUploadModalOpen(false); // Close modal after selecting file
    setIsPreviewOpen(true);
  };

  // Functions for handling actions in the preview modal
  const handleUploadAnother = () => {
    setSelectedVideo(null); // Reset the selected video
    setVideoUrl(''); // Clear the preview URL
    setIsPreviewOpen(false);
    setIsUploadModalOpen(true);
  };

  const handleSubmitVideo = () => {
    console.log('Video submitted:', selectedVideo);
    setIsPreviewOpen(false);
    // Call a function prop to handle final submission in the parent
  };


  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-48">

      {/* Video Placeholder */}
      <div className="flex justify-center w-24 h-24 rounded-3xl mx-auto items-center bg-gray-500 aspect-video mb-12">
        <PlayIcon className="w-12 h-12 text-white" />
      </div>

      {/* Instructions */}
      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-2">
          A good video helps you communicate faster to potential students and their parents.
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          <li>Introduce yourself and explain what you offer.</li>
          <li>You can record directly using your webcam, upload a file, or paste a video link.</li>
          <li className="mt-1">
            <span className="font-semibold">NB:</span> Please use videos you recorded yourself.
          </li>
        </ul>
      </div>

      {/* Video Options */}
      <div className="space-y-4 mb-6">
        {/* Record Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="record"
            value="record"
            className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            checked={selectedOption === 'record'}
            onChange={() => handleOptionChange('record')}
          />
          <label htmlFor="record" className="ml-2 text-sm text-gray-700">
            Record a video
          </label>
          {isRecordingModalOpen && selectedOption === 'record' && (
            <RecordingModal onClose={closeRecordingModal} onStopRecording={() => {
              closeRecordingModal();
              setIsPreviewOpen(true);
              // Potentially pass a dummy URL or handle the recorded video
              setVideoUrl('recorded_video.mp4');
            }} />
          )}
        </div>

        {/* Upload Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="upload"
            value="upload"
            className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            checked={selectedOption === 'upload'}
            onChange={() => handleOptionChange('upload')}
          />
          <label htmlFor="upload" className="ml-2 text-sm text-gray-700">
            Upload a video file
          </label>
          {isUploadModalOpen && selectedOption === 'upload' && (
            <VideoUploaderModal onClose={closeUploadModal} onVideoSelected={handleVideoSelected} />
          )}
        </div>

        {/* Upload Link Option */}
        <div className="flex items-start flex-col">
          <div className="flex items-center">
            <input
              type="radio"
              id="link"
              value="link"
              className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              checked={selectedOption === 'link'}
              onChange={() => handleOptionChange('link')}
            />
            <label htmlFor="link" className="ml-2 text-sm text-gray-700">
              Paste video link
            </label>
          </div>
          {selectedOption === 'link' && (
            <input
              type="text"
              className="mt-2 w-full border border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-2"
              placeholder="Enter video link (e.g. YouTube, Vimeo)"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <button
          onClick={handleProceed}
          className="bg-gray-800 hover:bg-gray-900 w-full mt-8 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2"
          disabled={selectedOption === 'link' && videoLink.trim() === ''}
        >
          <CameraIcon className="h-5 w-5" />
          {selectedOption === 'record'
            ? 'Proceed to Preview'
            : selectedOption === 'upload'
            ? 'Proceed to Preview'
            : 'Proceed'} →
        </button>
      </div>

      {/* Render the upload modal conditionally */}
      {isUploadModalOpen && selectedOption === 'upload' && (
        <VideoUploaderModal onClose={closeUploadModal} onVideoSelected={handleVideoSelected} />
      )}

      {/* Render the recording modal conditionally */}
      {isRecordingModalOpen && selectedOption === 'record' && (
        <RecordingModal onClose={closeRecordingModal} onStopRecording={() => {
          closeRecordingModal();
          setIsPreviewOpen(true);
          setVideoUrl('recorded_video.mp4'); // Replace with actual recorded video URL
        }} />
      )}

      {/* Render the preview modal conditionally */}
      {isPreviewOpen && (
        <VideoPreviewCard
          videoUrl={videoUrl}
          onUploadAnother={handleUploadAnother}
          onSubmitVideo={() => {
            console.log('Final video submitted:', selectedVideo || videoLink);
            setIsPreviewOpen(false);
          }}
          onClose={closePreviewModal}
        />
      )}
    </div>
  );
};

export default VideoUploadCard;