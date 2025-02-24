import React from "react";
import javascript from "@/src/assets/images/categories/computing/javascript.png"
import HTML from "@/src/assets/images/categories/computing/HTML.png"
import mobile from "@/src/assets/images/categories/computing/mobile.png"
import python from "@/src/assets/images/categories/computing/python.png"


const ComputingSection: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Computing</h2>
      <p className="text-gray-600 mb-6 w-1/3">
      Learn coding basics and gear up for a tech career
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative group">
          <img
            src={javascript.src}
            alt="javascript"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Algebra</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={python.src}
            alt="python"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Trigonometry</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={HTML.src}
            alt="HTML"
            className="rounded-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Calculus</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={mobile.src}
            alt="mobile"
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
          Explore all lessons under mathematics &rarr;
        </a>
      </div>
    </div>
  );
};

export default ComputingSection;
