import React from 'react';
import geography from "@/src/assets/images/categories/socialSciences/geography.png"
import history from "@/src/assets/images/categories/socialSciences/history.png"
import polScience from "@/src/assets/images/categories/socialSciences/polScience.png"
import sociology from "@/src/assets/images/categories/socialSciences/sociology.png"


const SocialSciences: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Social Sciences</h2>
    <p className="text-gray-600 mb-6 w-1/3">
    Get fascinated by human behavior, societies, and cultures.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="relative group">
        <img
          src={history.src}
          alt="Algebra"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Algebra</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={geography.src}
          alt="Trigonometry"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Trigonometry</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={sociology.src}
          alt="Calculus"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Calculus</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={polScience.src}
          alt="Geometry"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Geometry</span>
        </div>
      </div>
    </div>
    <div className="mt-6 text-center">
      <a
        href="/mathematics"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
         Explore all lessons under social sciences &rarr;
      </a>
    </div>
  </div>
  );
};

export default SocialSciences;
