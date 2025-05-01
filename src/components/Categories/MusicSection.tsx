import React from "react";
import guitar from "@/src/assets/images/categories/music/guitar.png"
import violin from "@/src/assets/images/categories/music/violin.png"
import trumpet from "@/src/assets/images/categories/music/trumpet.png"
import piano from "@/src/assets/images/categories/music/piano.png"



const MusicSection: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Music</h2>
    <p className="text-gray-600 mb-6 w-1/3">
    Become a performing artist, music producer, composer, or music educator.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="relative group">
        <img
          src={trumpet.src}
          alt="Algebra"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Algebra</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={guitar.src}
          alt="Trigonometry"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Trigonometry</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={piano.src}
          alt="Calculus"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Calculus</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={violin.src}
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
    Explore all lessons under music &rarr;
    </a>
    </div>
  </div>
   
  );
};

export default MusicSection;
