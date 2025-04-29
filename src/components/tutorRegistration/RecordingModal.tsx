import React, { useEffect, useRef, useState } from 'react';
import { XMarkIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import VideoPreviewModal from './VideoPreviewMoodal'; // Import your reusable preview modal

interface RecordingModalProps {
  onStopRecording: (videoBlob: Blob) => void; // callback to return the recorded video
  onClose: () => void;                        // callback to close the modal
}

const RecordingModal: React.FC<RecordingModalProps> = ({ onStopRecording, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isStopping, setIsStopping] = useState<boolean>(false); // optional loading state

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setMediaStream(stream);

      const options = { mimeType: 'video/webm' };
      const recorder = new MediaRecorder(stream, options);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const completeBlob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(completeBlob);
        setPreviewUrl(url);
        setIsStopping(false); // stop loading
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    mediaRecorderRef.current?.stop();
    mediaStream?.getTracks().forEach((track) => track.stop());
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      setIsStopping(true); // show loading while stopping
      mediaRecorderRef.current.stop(); // triggers onstop event
    }
    mediaStream?.getTracks().forEach((track) => track.stop());
  };

  const handleSubmitVideo = () => {
    const completeBlob = new Blob(recordedChunks, { type: 'video/webm' });
    onStopRecording(completeBlob);
    handleClose();
  };

  const handleRecordAgain = () => {
    setPreviewUrl(null);
    setRecordedChunks([]);
    startCamera();
  };

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  return (
    <>
      {/* If we are previewing, show the VideoPreviewModal */}
      {previewUrl ? (
        <VideoPreviewModal
          videoUrl={previewUrl}
          onClose={handleClose}
          onPrimaryAction={handleSubmitVideo}
          onSecondaryAction={handleRecordAgain}
          primaryButtonText="Save Recording"
          secondaryButtonText="Record Again"
        />
      ) : (
        // If recording, show the camera view
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden relative w-full max-w-5xl p-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Camera video */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                autoPlay
                muted
              />

              {/* Red recording dot */}
              <div className="absolute top-4 left-4 bg-red-600 rounded-full w-4 h-4 animate-pulse" />

              {/* Stop Recording button - bottom center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={handleStopRecording}
                  className="bg-red-500 hover:bg-red-700 w-12 h-12 text-white font-semibold py-3 px-2 rounded-full focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                  disabled={isStopping} // disable button while stopping
                >
                  {isStopping ? (
                    <div className="h-6 w-6 animate-spin border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <VideoCameraIcon className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Optional message */}
            {isStopping && (
              <div className="text-center mt-4 text-gray-600 font-medium">
                Finalizing recording...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RecordingModal;
