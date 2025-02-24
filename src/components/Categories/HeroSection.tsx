import React from 'react';
import computing from "@/src/assets/images/categories/computing.png"
import geography from "@/src/assets/images/categories/geography.png"
import science from "@/src/assets/images/categories/science.png"
import violin from "@/src/assets/images/categories/violin.png"
import Breadcrumb from '@/src/components/Pricing/Breadcrumb';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const categories = [
    {
      id:1,
      image: violin,
      alt: 'Music',
    },
    {
      id:2,
      image: geography,
      alt: 'Geography',
    },
    {
      id:3,
      image: computing,
      alt: 'Programming',
    },
    {
      id:4,
      image: science,
      alt: 'Science',
    },
  ];

  return (
    <div className="flex flex-row bg-blue-500 mt-20 space-x-10 text-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className=' ml-48'>
        <Breadcrumb
            links={[
              { name: 'Educify', url: '/' },
              { name: 'Categories', url: '/categories' },
            ]}
          />
        </div>
  
        <div className="mb-8 ">
          <h1 className="text-4xl w-2/3 font-bold mx-auto mt-2">Categories</h1>
          <p className="text-lg w-2/3 mx-auto mt-4">
            Select the lessons you wish to take, available both in-person and online. Choose from a variety of subjects tailored to meet your learning needs. Start your journey with Educify today and achieve your educational goals.
          </p>
        </div>

        <div className="flex items-center mx-auto w-2/3 space-x-4 bg-white py-3 px-4 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Search similar classes"
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
          />
          <select className="bg-transparent outline-none text-gray-800">
            <option value="">Class location</option>
          </select>
          <button className="bg-pink-500 text-white  px-6 py-2 rounded-full hover:bg-pink-600">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto pr-16 md:grid-cols-4 gap-4 mt-8">
          {categories.map((category, index) => (
            <div key={index} className="overflow-hidden mx-auto rounded-lg shadow-lg">
                  <Image
                    src={category.image} // No need for `image.src`
                    alt={category.alt}
                    width={200} // Set appropriate width
                    height={200} // Set appropriate height
                    className="w-full h-48 object-cover"
                  />
            </div>
          ))}
        </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-16 bg-black bg-opacity-75 grid grid-cols-12">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="border border-white border-opacity-25 h-full"
            ></div>
          ))}
      </div> */}
    </div>
  );
};

export default HeroSection;
