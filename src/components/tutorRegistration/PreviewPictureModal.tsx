"use client";

import React, { useRef, useState } from "react";
import { X, RotateCcwIcon, RotateCwIcon, RefreshCwIcon } from "lucide-react";

interface PreviewPictureModalProps {
  photoDataUrl: string;
  onRetake: () => void;
  onSubmit: (editedPhoto: string) => void;
  onClose: () => void;
}

const PreviewPictureModal: React.FC<PreviewPictureModalProps> = ({ photoDataUrl, onRetake, onSubmit, onClose }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleSubmit = () => {
    // Create a new canvas to apply transformations
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx && imgRef.current) {
      ctx.clearRect(0, 0, size, size);

      ctx.translate(size / 2, size / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(zoom, zoom);

      ctx.drawImage(imgRef.current, -imgRef.current.width / 2, -imgRef.current.height / 2);

      const editedPhoto = canvas.toDataURL("image/png");
      onSubmit(editedPhoto);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl mx-4 shadow-2xl relative p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Preview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Image Preview */}
        <div className="relative w-full flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden relative bg-gray-100">
            <img
              ref={imgRef}
              src={photoDataUrl}
              alt="Captured"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transformOrigin: "center center",
              }}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

         <div className="flex justify-between max-md:flex-col">
            {/* Zoom Control */}
            <div className="flex items-center justify-center mt-6 space-x-4">
            <button onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))} className="text-4xl">-</button>
            <input
                type="range"
                min={0.5}
                max={2}
                step={0.01}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-72"
            />
            <button onClick={() => setZoom(Math.min(zoom + 0.1, 2))} className="text-4xl">+</button>
            </div>

            {/* Rotate Buttons */}
            <div className="flex items-center justify-center mt-4 space-x-6">
                <button
                onClick={() => setRotation((prev) => prev - 90)}
                className="p-2 border border-blue-400 hover:bg-gray-300 rounded-full"
                >
                    <RotateCcwIcon className="h-6 w-6 text-gray-700" />
                </button>
                <button
                onClick={() => setRotation((prev) => prev + 90)}
                className="p-2 border border-blue-400 hover:bg-gray-300 rounded-full"
            >
                <RotateCwIcon className="h-6 w-6 text-gray-700" />
            </button>
            </div>
         </div>

        {/* Footer Buttons */}
        <div className="flex lg:justify-between gap-4  max-md:flex-col max-md:space-y-4 items-center mt-8">
          <button
            onClick={onRetake}
            className="flex items-center border border-gray-400 w-1/2 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-100"
          >
            Retake
            <RefreshCwIcon className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center bg-black text-white w-1/2 justify-center rounded-full px-6 py-2 hover:bg-gray-800"
          >
            Submit →
          </button>
        </div>

      </div>
    </div>
  );
};

export default PreviewPictureModal;
