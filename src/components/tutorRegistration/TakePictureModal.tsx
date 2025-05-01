"use client";

import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon, CameraIcon } from "@heroicons/react/24/solid";

interface TakePictureModalProps {
  onClose: () => void;
  onCapture: (photoDataUrl: string) => void; // now returns captured photo
}

const TakePictureModal: React.FC<TakePictureModalProps> = ({ onClose, onCapture }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // Ask for the camera when modal opens
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    // Cleanup: Stop the camera when modal unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const dataUrl = canvasRef.current.toDataURL("image/png");
        onCapture(dataUrl); // Return captured photo
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-lg mx-4 shadow-lg relative">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">Take a Picture</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Live Camera Feed */}
        <div className="relative w-full aspect-[4/5] p-4 bg-white">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover rounded-b-2xl"
          />
          {/* Hidden canvas for capturing */}
          <canvas
            ref={canvasRef}
            width={400}
            height={500}
            className="hidden"
          />
        </div>

        {/* Capture Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleCapture}
            className="bg-white p-4 rounded-full shadow-md border border-gray-300 hover:bg-opacity-10 focus:outline-none"
          >
            <CameraIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TakePictureModal;
