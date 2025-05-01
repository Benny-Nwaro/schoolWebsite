'use client'; // Keep 'use client' if handleModalOpen relies on client-side state/logic in parent

import React from "react";
// Removed MUI imports
import Image from 'next/image'; // Import Next.js Image for the arrow
import { FaCalendarAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa'; // Import react-icons
import arrow from "@/src/assets/images/arrow.svg"; // Adjusted path assuming '@' alias points to src/

// Removed MUI theme creation

// Define props interface
interface HowItWorksProps {
  handleModalOpen: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ handleModalOpen }) => {
  const steps = [
    {
      icon: <FaCalendarAlt className="text-white text-2xl" />, // Use react-icons
      title: "Book Your Trial Class",
      description:
        "Start by filling out a simple form with details about your child’s interests and educational needs.",
    },
    {
      icon: <FaPhoneAlt className="text-white text-2xl" />, // Use react-icons
      title: "Get a Call From Us",
      description:
        "Once you book, our friendly education advisors will reach out to discuss your child’s learning needs.",
    },
    {
      icon: <FaCheckCircle className="text-white text-2xl" />, // Use react-icons
      title: "Finalize Your Schedule",
      description:
        "After understanding your preferences, we’ll finalize the most convenient schedule for your child’s trial class.",
    },
    {
      icon: <FaCalendarAlt className="text-white text-2xl" />, // Use react-icons
      title: "Take Your Trial Class",
      description:
        "Watch your child dive into a fun and interactive learning session designed just for them.",
    },
  ];

  // Note: The dashed arrow (Vector 3) from the CSS is complex for pure Tailwind.
  // It's omitted here. If needed, consider adding it as an absolutely positioned SVG background or element.

  return (
    // Main container (Frame 2147224463 equivalent)
    // Using px-[160px] py-[100px] gap-[44px] based on CSS
    // Added max-w-[1440px] mx-auto for centering
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-[160px] py-12 md:py-20 gap-8 md:gap-12 w-full max-w-[1440px] mx-auto bg-[#FFFFFF] my-4 rounded-2xl shadow-lg"> {/* Reduced py-* and gap-* */}

      {/* Inner Content Container (Frame 1000006704 equivalent) */}
      {/* Using gap-[80px] based on CSS */}
      <div className="flex flex-col items-center md:items-start gap-10 md:gap-16 w-full max-w-[1120px]"> {/* Reduced gap-* */}

          {/* Title */}
          <h2
            className="text-[40px] font-bold leading-[1.2] tracking-[-2px] text-educify-text-secondary text-center md:text-left"
          >
            How It Works
          </h2>

          {/* Steps */}
          {/* Steps Container (Frame 95599 equivalent) */}
          {/* Using flex-wrap, gap-x-4 (16px), gap-y-[88px] based on CSS */}
          <div
            className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch justify-center w-full gap-x-4 gap-y-10 md:gap-y-16" // Reduced md:gap-y-*
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Individual Step (Frame 1321317097 etc. equivalent) */}
                {/* Using p-3 gap-3 w-[268px] based on CSS */}
                <div
                  className="flex flex-col items-center md:items-start p-3 gap-3 w-full max-w-[268px] text-center md:text-left"
                >
                  {/* Icon */}
                  {/* Icon Container (Frame 1000007260 equivalent) */}
                  {/* Using p-6 w-16 h-16 rounded-[60px] based on CSS */}
                  <div
                    className="flex flex-col justify-center items-center p-6 w-16 h-16 bg-educify-text-secondary rounded-[60px] mx-auto md:mx-0"
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold leading-[30px] tracking-[-0.4px] text-educify-text-secondary self-stretch"
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base font-normal leading-6 tracking-[-0.4px] text-educify-text-secondary self-stretch"
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow Separator - Keep existing logic but use next/image */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center flex-grow px-2 lg:px-4 h-auto md:h-[262px]"> {/* Container to vertically center arrow, allow flex-grow */}
                  <Image
                    src={arrow} // Use imported image object directly
                    alt="arrow"
                    width={20} // Specify width
                    height={20} // Specify height (adjust if needed)
                    className="w-5 h-auto mx-1" // Tailwind classes for size/margin
                  />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Call-to-Action Button */}
          {/* Button Container (Frame 2147224461 equivalent) */}
          <div className="flex flex-col items-center w-full max-w-[1120px] pt-4"> {/* Added padding-top for spacing */}
          {/* Button (Link equivalent) */}
          {/* Using w-[329px] h-[51px], px-6 py-4 based on CSS */}
          <button
            className="flex justify-center items-center px-6 py-4 w-full max-w-[329px] h-[51px] bg-gradient-to-r from-[#F6515B] via-[#A040C1] to-[#2F89FD] hover:opacity-90 text-white text-base font-bold leading-[19px] tracking-[-0.2px] text-center border-[1.5px] border-white rounded-[70px] shadow-[-8px_-8px_24px_rgba(238,79,101,0.2),_8px_8px_24px_rgba(55,132,249,0.4)] transition duration-300 ease-in-out"
            onClick={handleModalOpen}
          >
            Book a Free Trial
          </button>
          </div>
      </div>
    </div>
  );
};

export default HowItWorks;
