import React from 'react';
import algebra from "@/src/assets/images/categories/mathematics/algebra.png"
import calculus from "@/src/assets/images/categories/mathematics/calculus.png"
import geometry from "@/src/assets/images/categories/mathematics/geometry.png"
import trig from "@/src/assets/images/categories/mathematics/trig.png"


const Mathematics: React.FC = () => {
  return (
    <section id='Mathematics'  className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-4">Mathematics</h2>
      <p className="text-gray-600 mb-6 w-1/3">
        Dive into the captivating world of numbers, equations, and problem-solving.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative group">
        <img
            src={algebra.src}
            alt="Algebra"
            className="rounded-lg object-cover w-full h-full hover:cursor-pointer"
          />
          <a href='/mathematics/algebra' className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Algebra</span>
          </a>
        </div>
        <div className="relative group">
          <img
            src={trig.src}
            alt="Trigonometry"
            className="rounded-lg object-cover w-full h-full hover:cursor-pointer"
          />
          <a href='/trig' className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Trigonometry</span>
          </a>
        </div>
        <div className="relative group">
          <img
            src={calculus.src}
            alt="Calculus"
            className="rounded-lg object-cover w-full h-full hover:cursor-pointer"
          />
          <a href='/calculus' className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Calculus</span>
          </a>
        </div>
        <div className="relative group">
          <img
            src={geometry.src}
            alt="Geometry"
            className="rounded-lg object-cover w-full h-full hover:cursor-pointer"
          />
          <a href='/geometry' className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-semibold">Geometry</span>
          </a>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href="/mathematics"
          className="text-blue-500 hover:underline text-lg font-medium hover:cursor-pointer"
        >
          Explore all lessons under mathematics &rarr;
        </a>
      </div>
    </section>
  );
};

export default Mathematics;
