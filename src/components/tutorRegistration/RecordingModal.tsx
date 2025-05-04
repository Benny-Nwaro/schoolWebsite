import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [isStopping, setIsStopping] = useState(false);
  const [isTitleFocused, setIsTitleFocused] = useState(false); // New state for title input focus

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
        setShowTitlePrompt(true);
        setIsStopping(false);
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
      setIsRecording(false);
    }
  };

  const saveToLocalStorage = (title: string, blob: Blob) => {
    const reader = new FileReader();
  
    reader.onloadend = () => {
      try {
        const base64Data = reader.result as string;
  
        // Retrieve existing data safely
        const existingRaw = localStorage.getItem("recordedVideos");
        let existing: any[] = [];
  
        if (existingRaw) {
          try {
            existing = JSON.parse(existingRaw);
            if (!Array.isArray(existing)) existing = [];
          } catch {
            existing = [];
          }
        }
  
        // Remove any existing video with the same title
        const filtered = existing.filter((entry) => entry.title !== title);
  
        // Create new video entry
        const newEntry = {
          title,
          video: base64Data,
          createdAt: new Date().toISOString(),
        };
  
        // Add the new entry
        const updated = [...filtered, newEntry];
  
        localStorage.setItem("recordedVideos", JSON.stringify(updated));
      } catch (error) {
        console.error("Error saving video to localStorage:", error);
      }
    };
  
    reader.onerror = () => {
      console.error("FileReader error:", reader.error);
    };
  
    reader.readAsDataURL(blob);
  };
  
  

  const handleTitleSubmit = () => {
    if (!videoBlob || !videoTitle.trim()) return;
    saveToLocalStorage(videoTitle.trim(), videoBlob);
    onStopRecording(videoBlob);
    setShowTitlePrompt(false);
    stopCamera();
    onClose();
  };

  const handleClose = () => {
    if (showTitlePrompt) return;
    stopCamera();
    onClose();
  };

  const memoizedVideoURL = useMemo(() => {
    return videoBlob ? URL.createObjectURL(videoBlob) : null;
  }, [videoBlob]);
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg relative w-full max-w-3xl pt-8 px-4 pb-4 max-md:mx-3"> {/* Reduced padding */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" // Reduced top and right
        >
          <XMarkIcon className="h-6 w-6 font-bold text-black" />
        </button>

      {/* Video Container */}
    

      {!showTitlePrompt && (
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          />
  
          {isRecording && (
            <div className={`absolute top-2 left-2 bg-red-600 rounded-full w-3 h-3 ${!isTitleFocused ? 'animate-pulse' : ''}`} />
          )}
  
          {/* Bottom Center Video Icon */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={handleStopRecording}
              className="bg-red-500 hover:bg-red-700 w-12 h-12 text-white rounded-full disabled:bg-gray-400 flex items-center justify-center"
              disabled={!isRecording}
            >
              {isRecording ? (
                isStopping ? (
                  <div className="h-6 w-6 animate-spin border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <VideoCameraIcon className="h-6 w-6" />
                )
              ) : (
                <VideoCameraIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      )}

        {/* Title Prompt */}
        {showTitlePrompt && videoBlob && (
          <div className="mt-4 p-2 max-w-3xl rounded-xl border border-gray-300">
            <p className="mb-1 font-medium">Enter a title for your recording:</p>
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              onFocus={() => setIsTitleFocused(true)}
              onBlur={() => setIsTitleFocused(false)}
              onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
              className="w-full p-1 border rounded mb-2"
              placeholder="e.g. My Test Recording"
            />

            {/* Don't regenerate this URL on every keystroke */}
            <video
              controls
              src={memoizedVideoURL || ""}
              className="w-full rounded border border-gray-600 mb-2"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowTitlePrompt(false);
                  setVideoBlob(null);
                }}
                className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleTitleSubmit}
                disabled={!videoTitle.trim()}
                className="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded disabled:opacity-50"
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
