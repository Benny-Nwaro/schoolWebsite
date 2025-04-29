import React from 'react';
 import { CameraIcon } from '@heroicons/react/24/outline';
 

 interface SampleLessonVideoProps {
  onRecordVideo: () => void;
 }
 

 const SampleLesson: React.FC<SampleLessonVideoProps> = ({ onRecordVideo }) => {
  return (
  <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-48">
  {/* Video Placeholder */}
  <div className="flex justify-center w-32 h-32 rounded-3xl mx-auto items-center bg-gray-200 overflow-hidden mb-8">
  {/* Replace with an actual thumbnail if available */}
  <img
  src="https://via.placeholder.com/128"
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
  onClick={onRecordVideo}
  className="bg-gray-800 hover:bg-gray-900 w-full mt-8 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2"
  >
  <CameraIcon className="h-5 w-5" />
  Record a Video
  </button>
  </div>
  </div>
  );
 };
 

 export default SampleLesson;