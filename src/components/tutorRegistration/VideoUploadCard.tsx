import React, { useState } from 'react';
import { PlayIcon } from '@heroicons/react/20/solid';
import { CameraIcon } from '@heroicons/react/24/outline';
import VideoUploaderModal from './VideoUploaderModal';
import RecordingModal from './RecordingModal';
import VideoPreviewModal from './VideoPreviewModal';

interface VideoUploadProps {
  onUploadVideo: (file: File) => void;
  onUploadVideoLink: (link: string) => void;
  onProceed: () => void;
  onSubmitRecordedVideo: (videoBlobUrl: string) => void;
  onPrimaryButtonClick: () => void;
}

const VideoUploadCard: React.FC<VideoUploadProps> = ({
  onUploadVideo,
  onUploadVideoLink,
  onProceed,
  onSubmitRecordedVideo,
  onPrimaryButtonClick,
}) => {
  const [selectedOption, setSelectedOption] = useState<'record' | 'upload' | 'link'>('record');
  const [videoLink, setVideoLink] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState<string>('');

  const handleOptionChange = (option: 'record' | 'upload' | 'link') => {
    setSelectedOption(option);
    setIsUploadModalOpen(option === 'upload');
    setIsRecordingModalOpen(option === 'record');
    setIsPreviewOpen(false);
    // Reset relevant states when option changes
    setSelectedVideo(null);
    setVideoUrl('');
    setRecordedVideoUrl('');
  };

  const handleProceed = () => {
    let proceed = false;

    if (selectedOption === 'upload' && selectedVideo) {
      onUploadVideo(selectedVideo);
      setVideoUrl(URL.createObjectURL(selectedVideo));
      proceed = true;
    } else if (selectedOption === 'link' && videoLink.trim()) {
      onUploadVideoLink(videoLink.trim());
      setVideoUrl(videoLink);
      proceed = true;
    } else if (selectedOption === 'record' && recordedVideoUrl) {
      proceed = true;
    }

    setIsRecordingModalOpen(false); // Close RecordingModal before opening PreviewModal
    setIsPreviewOpen(proceed);
    if (proceed) {
      onProceed();
    }
  };

  const handleVideoSelected = (file: File) => {
    const url = URL.createObjectURL(file);
    setSelectedVideo(file);
    setVideoUrl(url);
    setIsUploadModalOpen(false);
    setIsRecordingModalOpen(false); // Close recording modal
    setIsPreviewOpen(true);
  };

  const handleStopRecording = (videoBlob: Blob) => {
    const videoBlobUrl = URL.createObjectURL(videoBlob);
    setRecordedVideoUrl(videoBlobUrl);
    setVideoUrl(videoBlobUrl);
    setIsRecordingModalOpen(false); 
    setIsPreviewOpen(true);
  };

  const handleUploadAnother = () => {
    setSelectedVideo(null);
    setVideoUrl('');
    setRecordedVideoUrl('');
    setIsPreviewOpen(false);
    if (selectedOption === 'upload') setIsUploadModalOpen(true);
    if (selectedOption === 'record') setIsRecordingModalOpen(true);
  };

  const handleSubmitVideo = () => {
    if (selectedOption === 'record' && recordedVideoUrl) {
      onSubmitRecordedVideo(recordedVideoUrl);
    } else if (selectedOption === 'upload' && selectedVideo) {
      onUploadVideo(selectedVideo);
    } else if (selectedOption === 'link' && videoLink) {
      onUploadVideoLink(videoLink);
    }
    onPrimaryButtonClick();
    setIsPreviewOpen(false);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-48">
      <div className="flex justify-center w-24 h-24 rounded-3xl mx-auto items-center bg-gray-500 aspect-video mb-12">
        <PlayIcon className="w-12 h-12 text-white" />
      </div>

      <div className="mb-6 text-sm text-gray-700">
        <p className="mb-2">
          A good video helps you communicate faster to potential students and their parents.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Introduce yourself and explain what you offer.</li>
          <li>You can record directly using your webcam, upload a file, or paste a video link.</li>
          <li className="mt-1">
            <span className="font-semibold">NB:</span> Please use videos you recorded yourself.
          </li>
        </ul>
      </div>

      <div className="space-y-4 mb-6">
        {/* Record Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="record"
            value="record"
            className="form-radio h-4 w-4 text-blue-600"
            checked={selectedOption === 'record'}
            onChange={() => handleOptionChange('record')}
          />
          <label htmlFor="record" className="ml-2 text-sm text-gray-700">Record a video</label>
        </div>

        {/* Upload Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="upload"
            value="upload"
            className="form-radio h-4 w-4 text-blue-600"
            checked={selectedOption === 'upload'}
            onChange={() => handleOptionChange('upload')}
          />
          <label htmlFor="upload" className="ml-2 text-sm text-gray-700">Upload a video file</label>
        </div>

        {/* Link Option */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <input
              type="radio"
              id="link"
              value="link"
              className="form-radio h-4 w-4 text-blue-600"
              checked={selectedOption === 'link'}
              onChange={() => handleOptionChange('link')}
            />
            <label htmlFor="link" className="ml-2 text-sm text-gray-700">Paste video link</label>
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

      <div className="flex justify-center">
        <button
          onClick={handleProceed}
          className="bg-gray-800 hover:bg-gray-900 w-full mt-8 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2"
          disabled={selectedOption === 'link' && videoLink.trim() === ''}
        >
          <CameraIcon className="h-5 w-5" />
          {selectedOption === 'record'
            ? 'Proceed to Record'
            : selectedOption === 'upload'
            ? 'Proceed to Upload'
            : 'Proceed'} →
        </button>
      </div>

      {/* Modals */}
      {isUploadModalOpen && (
        <VideoUploaderModal onClose={() => setIsUploadModalOpen(false)} onVideoSelected={handleVideoSelected} />
      )}
      {isRecordingModalOpen && (
        <RecordingModal onClose={() => setIsRecordingModalOpen(false)} onStopRecording={handleStopRecording} />
      )}

      {isPreviewOpen && (
        <VideoPreviewModal
          videoUrl={videoUrl}
          onClose={() => setIsPreviewOpen(false)}
          onPrimaryAction={() => {
            handleSubmitVideo();
            onPrimaryButtonClick();
          }}
          onSecondaryAction={handleUploadAnother}
          primaryButtonText="Submit Video"
          secondaryButtonText={selectedOption === 'record' ? 'Record Again' : 'Upload Another'}
        />
      )}

  
    </div>
  );
};

export default VideoUploadCard;
