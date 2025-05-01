'use client'; // Add this directive because useMediaQuery is a hook

import React from "react";
// Removed MUI imports
import Image from 'next/image'; // Import Next.js Image component
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons
import tutor1 from '@/src/assets/images/image2.png';
import tutor2 from '@/src/assets/images/image3.png';
import tutor3 from '@/src/assets/images/image4.png';
import tutor4 from '@/src/assets/images/image5.png';
import tutor5 from '@/src/assets/images/image6.png';
import image1 from '@/src/assets/images/theme1.png';
import image2 from '@/src/assets/images/theme2.png';
import image3 from '@/src/assets/images/theme3.png';
import image4 from '@/src/assets/images/theme4.png';

const tutors = [
  tutor1,
  tutor2,
  tutor3,
  tutor4,
  tutor5,
];

// Define the type for the props
interface BodyPartProps {
  handleModalOpen: () => void; // Function that takes no arguments and returns nothing
}

// Refactored CustomFrame using Tailwind CSS based on the provided CSS rules
const CustomFrame = () => {
  return (
    // Container with fixed dimensions from CSS snippet
    // Note: The 'right: -551.56px' from the CSS snippet is unusual and suggests positioning
    // relative to a different parent or context. Here, we position elements relative
    // to this container based on the 'left' and 'top' values provided.
    // Consider adding responsive scaling wrapper if needed for smaller screens.
    <div className="relative w-[502px] h-[415px]">
      {/* Rectangle 652 */}
      <div
        className="absolute w-[166px] h-[419px] left-0 top-0 bg-educify-image-yellow rounded-tl-[16px] rounded-tr-[16px] rounded-br-[12px] rounded-bl-[16px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image1.src})` }} // Use style for dynamic import URL
      />
      {/* Rectangle 644 */}
      <div
        className="absolute w-[209px] h-[251px] left-[168px] top-0 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[12px] rounded-bl-[16px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image2.src})` }}
      />
      {/* Rectangle 642 */}
      <div
        className="absolute w-[123px] h-[251px] left-[379px] top-0 bg-educify-image-blue rounded-tl-[16px] rounded-tr-[16px] rounded-br-[12px] rounded-bl-[16px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image3.src})` }}
      />
      {/* Rectangle 646 */}
      <div
        className="absolute w-[334px] h-[166px] left-[168px] top-[253px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[12px] rounded-bl-[16px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image4.src})` }}
      />
    </div>
  );
};

const BodyPart: React.FC<BodyPartProps> = ({ handleModalOpen }) => {
  return (
    // Container equivalent using Tailwind max-width and centering
    // Removed max-w-7xl and mx-auto to allow full width. Kept padding (px-*) and margins (my-*, mt-*).
    <div className="px-4 sm:px-6 lg:px-8 my-4 mt-20">
      {/* Inner container styling */}
      <div className="bg-[#FFF8EB] rounded-2xl shadow-lg p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:py-12 w-full">

          {/* Left Side - Text & Controls (Frame 95591 equivalent) */}
          {/* Using flex-col and gap-6 (24px) */}
          <div className="w-full md:max-w-[662.44px] text-center md:text-left flex flex-col items-center md:items-start gap-6">
            {/* Heading 1 section (gap-4 / 16px) */}
            <div className="flex flex-col items-center md:items-start gap-4 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight md:leading-[1.2] tracking-[-1px] md:tracking-[-2px] text-educify-text-primary"> {/* Responsive text size and leading/tracking */}
                Help Your Child Succeed with One-on-One Learning!
              </h1>
              <p className="text-base font-normal leading-6 tracking-[-0.3px] text-educify-text-secondary">
                Every child learns differently. That’s why Educify offers personalized
                1-on-1 and group lessons designed to fit your child’s unique learning
                style. Whether they need extra support in academics, want to explore a
                new hobby, or improve existing skills, our expert tutors are here to
                guide them every step of the way.
              </p>
            </div>

            {/* Tutor Avatars + Text (Frame 95592) */}
            {/* Using w-[375px] h-[58px], bg-educify-bg, border-4, rounded-[60px], pr-6, gap-2.5 */}
            <div className="flex items-center justify-center md:justify-start w-auto max-w-full sm:max-w-[375px] h-[58px] bg-educify-bg border-4 border-educify-bg rounded-[60px] pl-2 pr-4 sm:pr-6 gap-2 sm:gap-2.5"> {/* Adjusted padding/gap for smaller screens, removed fixed width */}
              {/* Avatar container (Frame 95591 within Frame 95592) */}
              {/* Using flex, no padding, negative margin -mx-[15px] */}
              <div className="flex flex-shrink-0 items-center -space-x-4 sm:-space-x-[15px]"> {/* Adjusted negative spacing for smaller screens */}
                {tutors.map((tutor, index) => (
                  // Container for image with border (Ellipse)
                  // Using h-[58px] w-[58px], border-4 border-educify-bg
                  <div
                    key={index}
                    className="relative h-[58px] w-[58px] rounded-full border-4 border-educify-bg overflow-hidden flex-none" // Added flex-none
                  >
                    <Image
                      src={tutor} // Use the imported image object
                      alt={`Tutor ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full" // Ensure image itself is rounded if container clips
                    />
                  </div>
                ))}
              </div>
              <p className="flex-shrink min-w-[100px] sm:min-w-[111px] text-sm sm:text-base font-normal leading-6 tracking-[-0.3px] text-[#31373D] text-center"> {/* Adjusted text size and width constraints */}
                Join 1k+ Tutors
              </p>
            </div>

            {/* Buttons & Trustpilot Container */}
            {/* Using flex-col md:flex-row, gap-2 (8px), width constraint from CSS seems less applicable here, letting flex handle it */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 w-full sm:w-auto"> {/* Stack vertically on mobile, row on sm+, adjusted gap */}
              {/* Book Free Trial Button (Link) */}
              {/* Using w-[195px] h-[56px], px-8 py-4, border-[1.5px], shadow, rounded-[70px] */}
              <button
                className="flex-none w-full sm:w-[195px] h-[56px] bg-gradient-to-r from-[#F6515B] via-[#A040C1] to-[#2F89FD] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A040C1] text-[#FCFCFC] font-bold text-base leading-6 tracking-[-0.2px] px-8 py-4 rounded-[70px] border-[1.5px] border-white shadow-[-8px_-8px_24px_rgba(238,79,101,0.2),_8px_8px_24px_rgba(55,132,249,0.4)] transition duration-300 ease-in-out flex items-center justify-center" // Added focus styles, full width on mobile
                onClick={handleModalOpen}
              >
                Book a Free Trial
              </button>
              {/* Trust Pilot Micro Combo */}
              {/* Using w-[367.67px] h-[26px], gap-[13px] */}
              {/* Adjusted layout for wrapping, removed fixed width */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start flex-none w-auto h-auto sm:h-[26px] gap-x-3 gap-y-1 mt-4 sm:mt-0">
                <span className="flex-none text-xs font-normal leading-[26px] text-[#171717]">Excellent</span>
                {/* Stars - Using FaStar with specific green color */}
                <div className="flex flex-none text-[#219653]"> {/* Green 1 */}
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="w-[106.67px/5] h-5" /> // Approximate width distribution
                  ))}
                </div>
                <span className="flex-none text-xs font-extrabold leading-[26px] text-[#171717]">436 reviews on</span>
                {/* Trustpilot text part (Frame 515) */}
                <div className="flex flex-none items-center gap-1"> {/* gap-4px */}
                  {/* Icon Shape - Placeholder or use an actual Trustpilot icon if available */}
                  {/* <div className="w-[14px] h-[13.25px] bg-[#219653]"></div> */}
                  <span className="flex-none text-xs font-extrabold leading-[26px] text-[#171717]">Trustpilot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Custom Frame (Frame 1321317275) */}
          {/* Added container for centering and scaling */}
          <div className="w-full md:w-auto flex justify-center mt-8 md:mt-0">
            {/* Apply scaling for smaller screens - adjust scale values if needed */}
            <div className="transform scale-75 sm:scale-90 md:scale-100 origin-center">
              <CustomFrame />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPart;
