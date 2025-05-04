import React from 'react';
import { CloudArrowUpIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

interface VideoPreviewModalProps {
    videoUrl: string;
    onClose: () => void;
    onPrimaryAction: () => void;
    onSecondaryAction: () => void;
    primaryButtonText?: string;
    secondaryButtonText?: string;
}

const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
    videoUrl,
    onClose,
    onPrimaryAction,
    onSecondaryAction,
    primaryButtonText = "Submit Video",
    secondaryButtonText = "Upload Another",
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" // Reduced top and right
                >
                    <span className="text-xl font-semibold">&times;</span>
                </button>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-4 text-center">Preview</h2> {/* Reduced mb and added mt */}
                <div className="relative rounded-md overflow-hidden aspect-video mb-4"> {/* Reduced mb */}
                    <video
                        src={videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        playsInline
                    />
                </div>
                <div className="flex lg:justify-center max-md:flex-col gap-3 pb-4"> {/* Reduced gap and added padding bottom */}
                    <button
                        onClick={onSecondaryAction}
                        className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none flex items-center gap-2 text-sm" //Reduced padding and text size
                    >
                        <CloudArrowUpIcon className="h-4 w-4" /> {/* Reduced icon size */}
                        {secondaryButtonText}
                    </button>
                    <button
                        onClick={onPrimaryAction}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none flex items-center gap-2 text-sm" //Reduced padding and text size
                    >
                        <CheckCircleIcon className="h-4 w-4" /> {/* Reduced icon size */}
                        {primaryButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPreviewModal;
