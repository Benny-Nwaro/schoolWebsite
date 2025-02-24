import React from 'react';
import biology from "@/src/assets/images/categories/academicTutoring/biology.png"
import chemistry from "@/src/assets/images/categories/academicTutoring/chemistry.png"
import physics from "@/src/assets/images/categories/academicTutoring/physics.png"
import psychology from "@/src/assets/images/categories/academicTutoring/psychology.png"


const AcademicTutoring: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Academic Tutoring</h2>
      <p className="text-gray-600 w-1/3 mb-6">
        Achieve academic excellence and unlock your full potential in the classroom.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative group">
          <img
            src={biology.src}
            alt="Biology"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Biology</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={physics.src}
            alt="Physics"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Physics</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={chemistry.src}
            alt="Chemistry"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Chemistry</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={psychology.src}
            alt="Psychology"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Psychology</span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href="/academic-tutoring"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          Explore all lessons under academic tutoring &rarr;
        </a>
      </div>
    </div>
  );
};

export default AcademicTutoring;
