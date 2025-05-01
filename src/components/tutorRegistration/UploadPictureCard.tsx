import React, { useRef } from "react";
import { CloudArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface UploadPictureModalProps {
  onFileSelected: (file: File) => void;
  onClose: () => void;
}

const UploadPictureCard: React.FC<UploadPictureModalProps> = ({ onFileSelected, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("File dropped!");
    console.log("Data Transfer Files:", event.dataTransfer.files);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      console.log("Selected File:", file);
      onFileSelected(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload a picture</h2>
        <p className="text-gray-500 text-sm mb-6">Upload a picture to your account</p>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={openFileDialog}
          className="border-2 border-dashed border-gray-300 rounded-2xl p-6 mx-8 flex flex-col items-center justify-center cursor-pointer mb-6"
        >
          <CloudArrowUpIcon className="w-16 h-16 text-gray-400 mb-4" />
          <p className="font-semibold text-gray-700">Select picture to upload</p>
          <p className="text-gray-400 text-sm">Or drag and drop a file</p>
          <p className="text-gray-400 text-xs mt-12">Accepted formats: png, jpeg</p>
          <p className="text-gray-400 text-xs">Not more than 300MB</p>

          <button
            onClick={openFileDialog}
            className="bg-black text-white font-semibold py-3 px-6 rounded-full w-3/4 mt-12 hover:bg-gray-800 transition"
          >
            Select file
          </button>

          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadPictureCard;