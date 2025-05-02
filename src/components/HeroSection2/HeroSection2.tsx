'use client'; // Add this because we're using useState

import React, { useState } from "react"; // Import useState
import HeroImage1 from "@/src/assets/images/Hero2Image.jpeg";
import HeroImage2 from "@/src/assets/images/Hero2image2.png";
// import Link from "next/link"; // No longer needed for this button
import TutorSelectionModal from "../bookFreeTrial/TutorSelectionModal"; // Import the modal

const HeroSection2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  return (
    <section className="relative bg-blue-900 text-white py-16 px-6 max-md:py-5">
      <div className="max-w-5xl mx-auto text-center py-16 max-md:py-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight">
          Transform your learning journey
          <br />
          <span className="relative">
            with Educify’s
            <img
              src={HeroImage1.src} // Replace with your image URL
              alt="Icon"
              className="absolute top-[-10px] left-[100%] w-10 h-10 ml-2"
            />
          </span>
          personalized
          <br />
          tutoring and
          <span className="relative">
            expert resources.
            <img
              src={HeroImage2.src}// Replace with your image URL
              alt="Icon"
              className="absolute top-[-10px] left-[100%] w-10 h-10 ml-2"
            />
          </span>
        </h1>
        <div className="mt-8">
        {/* <Link href="/freetrial" passHref> */}
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book a free trial
          </button>
          {/* </Link> */}
        </div>
      </div>
      {/* Render the modal conditionally */}
      <TutorSelectionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection2;
