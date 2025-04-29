import React from "react";
import { FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import HeroImage from "@/src/assets/images/HeroImage.png";
import DashBoardImage from "@/src/assets/images/dashboardImage.png";
import avar1 from "@/src/assets/images/avar1.jpeg";
import avar2 from "@/src/assets/images/avar2.jpeg";
import avar3 from "@/src/assets/images/avar3.jpeg";
import avar4 from "@/src/assets/images/avar4.jpeg";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white min-h-screen pt-32 mt-20 px-6 md:px-16 lg:px-20 max-md:mt-5">
      {/* Left Section */}
      <div className="flex flex-col lg:w-1/2 justify-between space-y-10 lg:space-y-0">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl w-xl max-md:w-full font-bold mb-6 leading-tight">
            Personalized Learning for Your Academic Success
          </h1>
          <p className="text-lg  text-gray-300 w-2/3 max-md:w-full mb-8">
            From Kindergarten to Ivy League aspirations, Educify supports every
            step of your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Book a Free Trial
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-blue-700 px-6 py-3 border-2 border-blue-700 rounded-lg font-medium">
              Explore Tutors
            </button>
          </div>
          {/* Reviews Section */}
          <div className="flex items-center mt-8 space-x-4">
            <div className="flex -space-x-3">
              {[avar1, avar2, avar3, avar4].map((url, i) => (
                <img
                  key={i}
                  src={url.src}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-green-700 ml-1" />
                ))}
                <strong className="text-white ml-2 text-lg">4.8</strong>
              </div>
              <p className="text-gray-300 text-sm">
                436 reviews on <span className="font-bold">Trustpilot</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full -mt-48 lg:w-2/3 max-md:mx-auto max-md:mt-16 max-md:mb-8">
          <img
            src={DashBoardImage.src}
            alt="Dashboard Preview"
            className="rounded-lg w-full object-cover"
          />
        </div> */}
      </div>

      {/* Right Section */}
      <div className="relative lg:w-1/2 flex items-center">
        {/* Main Image */}
        <img
          src={HeroImage.src}
          alt="Student smiling"
          className="w-full h-full object-cover mb-10 rounded-lg"
        />
        {/* Overlays */}
        <div className="absolute top-12 right-8 bg-gray-800 rounded-full px-4 py-2 flex items-center shadow-lg">
          <FiUser className="text-white mr-2" />
          <span className="text-white text-sm">Omotoso Rauf</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-gray-800 rounded-full px-4 py-2 flex items-center shadow-lg">
          <FiUser className="text-white mr-2" />
          <span className="text-white text-sm">Stella Abiodun</span>
        </div>
        <div className="absolute top-1/2 left-8 bg-gray-800 rounded-full px-4 py-2 flex items-center shadow-lg transform -translate-y-1/2">
          <FiUser className="text-white mr-2" />
          <span className="text-white text-sm">John Matthew</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
