"use client";

import React, { useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8; // Scroll 80% of the width
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-7xl mx-auto">
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10  text-black p-4 rounded-full  hover:bg-grey-800 "
        onClick={() => scroll('left')}
        aria-label="Scroll Left"
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10  text-black p-4 rounded-full  hover:bg-grey-800 "
        onClick={() => scroll('right')}
        aria-label="Scroll Right"
      >
        ▶
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto snap-x snap-mandatory w-full p-8 lg:p-12 scrollbar-hide"
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink-0  bg-gray-100 rounded-lg shadow-lg snap-center flex items-center justify-center"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination (Optional) */}
      <div className="mt-6 flex space-x-2">
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
