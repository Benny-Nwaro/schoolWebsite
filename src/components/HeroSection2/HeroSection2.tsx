import React from "react";
import HeroImage1 from "@/src/assets/images/Hero2Image.jpeg";
import HeroImage2 from "@/src/assets/images/Hero2image2.png";


const HeroSection2: React.FC = () => {
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
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Book a free trial
          </button>
        </div>
      </div>
      {/* Decorative lines */}
      {/* <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-b from-transparent to-blue-900" /> */}
    </section>
  );
};

export default HeroSection2;
