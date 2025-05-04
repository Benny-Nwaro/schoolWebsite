"use client"

import React, { useState, useCallback } from 'react';
import { CameraIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import RecordingModal from './RecordingModal';
import VideoPreviewModal from './VideoPreviewModal';
import teaching from "@/src/assets/images/teaching.png"
import Image from 'next/image';

interface SampleLessonVideoProps {
  onRecordVideo: (videoBlob: Blob) => void;
  onFinish?: () => void; // Optional prop for a "Finish" action
  showFinishButton?: boolean; // New prop to control button text
}

const SampleLesson: React.FC<SampleLessonVideoProps> = ({ onRecordVideo, onFinish, showFinishButton }) => {
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
  const [isVideoPreviewOpen, setIsVideoPreviewOpen] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState<Blob | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isVideoSubmitted, setIsVideoSubmitted] = useState(false); // Track submission state

  const handleStartRecording = useCallback(() => {
    setIsRecordingModalOpen(true);
  }, []);

  const handleStopRecording = useCallback(
    (videoBlob: Blob) => {
      setRecordedVideoBlob(videoBlob);
      const url = URL.createObjectURL(videoBlob);
      setVideoUrl(url);
      setIsRecordingModalOpen(false);
      setIsVideoPreviewOpen(true);
    },
    []
  );

  const handleCloseRecordingModal = useCallback(() => {
    setIsRecordingModalOpen(false);
  }, []);

  const handlePreviewClose = () => {
    setIsVideoPreviewOpen(false);
    setVideoUrl('');
  };

  const handleVideoSubmit = () => {
    if (recordedVideoBlob) {
      onRecordVideo(recordedVideoBlob);
      setIsVideoSubmitted(true); // Set submission state
      if (onFinish) {
        onFinish(); // Call the onFinish prop if provided
      }
    }
    setIsVideoPreviewOpen(false);
    setRecordedVideoBlob(null);
    setVideoUrl('');
  };

  const handleRecordAgain = () => {
    setRecordedVideoBlob(null);
    setVideoUrl('');
    setIsVideoPreviewOpen(false);
    setIsRecordingModalOpen(true);
    setIsVideoSubmitted(false); // Reset submission state when recording again.
  };

  const buttonText = isVideoSubmitted || showFinishButton ? 'Finish' : 'Record a Video';
  const buttonIcon = isVideoSubmitted || showFinishButton ? <CheckCircleIcon className="h-5 w-5" /> : <CameraIcon className="h-5 w-5" />;


  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-48">
      {/* Video Placeholder */}
      <div className="flex justify-center w-32 h-32 rounded-3xl mx-auto items-center bg-gray-200 overflow-hidden mb-8">
        <Image
          src={teaching}
          alt="Sample Lesson Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Instructions */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Record a Sample Lesson Video</h2>
        <p className="text-sm text-gray-700 mb-4">
          Create a 3-5 minute video showcasing a sample lesson from the class you described. This video will be private and not accessible to
          students or their families. It's a way for our team at Educify to understand who you are and the teaching environment you'll create
          for our learners.
        </p>

        <div className="text-left pl-6">
          <p className="text-sm text-gray-700 font-semibold mb-2">In your video, please:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Demonstrate your teaching personality.</li>
            <li>
              Share your expertise! Teach something you're passionate about to give us a glimpse of what students will experience in your class on
              Educify.
            </li>
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <button
          onClick={isVideoSubmitted ? (onFinish ? () => onFinish() : () => { }) : handleStartRecording} // Use onFinish if submitted
          className={`w-full mt-8 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2
                      ${isVideoSubmitted || showFinishButton ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-900'}`}
          disabled={isVideoSubmitted && !onFinish} // Disable button after submission if no onFinish
        >
          {buttonIcon}
          {buttonText}
        </button>
      </div>

      {/* RecordingModal */}
      {isRecordingModalOpen && (
        <RecordingModal
          onStopRecording={handleStopRecording}
          onClose={handleCloseRecordingModal}
        />
      )}

      {/* VideoPreviewModal */}
      {isVideoPreviewOpen && videoUrl && (
        <VideoPreviewModal
          videoUrl={videoUrl}
          onClose={handlePreviewClose}
          onPrimaryAction={handleVideoSubmit}
          onSecondaryAction={handleRecordAgain}
          primaryButtonText="Submit Video"
          secondaryButtonText="Record Again"
        />
      )}
    </div>
  );
};

export default SampleLesson;
