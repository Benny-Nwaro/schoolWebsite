import React, { useEffect, useRef, useState } from 'react';
import { XMarkIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

interface RecordingModalProps {
  onStopRecording: (videoBlob: Blob) => void;
  onClose: () => void;
}

const RecordingModal: React.FC<RecordingModalProps> = ({ onStopRecording, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showTitlePrompt, setShowTitlePrompt] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const chunksRef = useRef<Blob[]>([]);
  const [isStopping, setIsStopping] = useState(false); // Declare isStopping state

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
      setMediaStream(stream);
      setIsRecording(true);

      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        chunksRef.current = [];
        setVideoBlob(blob);
        setShowTitlePrompt(true); // Show title prompt *here*
        setIsStopping(false); // Reset isStopping here
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
    } catch (err) {
      alert('Camera or microphone access denied. Please check your browser permissions.');
      console.error('Camera error:', err);
      onClose();
    }
  };

  const stopCamera = () => {
    mediaRecorderRef.current?.stop();
    mediaStream?.getTracks().forEach((track) => track.stop());
    setMediaStream(null);
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current?.state === 'recording') {
      setIsStopping(true);
      mediaRecorderRef.current.stop();
      setIsRecording(false); //  Set isRecording to false when stop recording.
    }
  };

  const saveToLocalStorage = (title: string, blob: Blob) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      const existing = JSON.parse(localStorage.getItem('recordedVideos') || '[]');
      const newEntry = { title, video: base64Data, createdAt: new Date().toISOString() };
      localStorage.setItem('recordedVideos', JSON.stringify([...existing, newEntry]));
    };
    reader.readAsDataURL(blob);
  };

  const handleTitleSubmit = () => {
    if (!videoBlob || !videoTitle.trim()) return;
    saveToLocalStorage(videoTitle.trim(), videoBlob);
    onStopRecording(videoBlob);
    setShowTitlePrompt(false);
    stopCamera(); // Stop camera after submit
    onClose();
  };

  const handleClose = () => {
    if (showTitlePrompt) return; // Prevent close if title prompt is showing
    stopCamera();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg relative w-full max-w-3xl px-6 py-12 max-md:mx-3">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6 font-bold text-black" />
        </button>

        {!showTitlePrompt && (
          <>
            {/* Camera view */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              />
              {isRecording && (
                <div className="absolute top-4 left-4 bg-red-600 rounded-full w-4 h-4 animate-pulse" />
              )}
            </div>

            {/* Stop Recording Button */}
            <div className=" mt-3 text-center">
              <button
                onClick={handleStopRecording}
                className="bg-red-500 hover:bg-red-700 w-12 h-12  text-white rounded-full disabled:bg-gray-400"
                disabled={!isRecording} // Disable when not recording
              >
                {isRecording ? (
                  isStopping ? (
                    <div className="h-6 w-6 animate-spin border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <VideoCameraIcon className="h-6 w-6 " />
                  )
                ) : (
                  <VideoCameraIcon className="h-6 w-6 " />
                )}
              </button>
            </div>
            {isStopping && <p className="text-center mt-4 text-gray-500">Finalizing recording...</p>}
          </>
        )}

        {/* Title Prompt */}
        {showTitlePrompt && videoBlob && (
          <div className="mt-6 p-2  max-w-3xl rounded-xl border border-gray-300">
            <p className="mb-2 font-medium">Enter a title for your recording:</p>
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
              className="w-full p-1 border rounded mb-4"
              placeholder="e.g. My Test Recording"
            />

            <video
              controls
              src={URL.createObjectURL(videoBlob)}
              className="w-full rounded border border-gray-600 mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowTitlePrompt(false);
                  setVideoBlob(null); // Clear the video blob
                }}
                className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleTitleSubmit}
                disabled={!videoTitle.trim()}
                className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordingModal;

