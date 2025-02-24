import React from "react";
import tutorImage from "@/src/assets/images/teacherperson.png";

const TutorSignUp: React.FC = () => {
  return (
    <section className="relative bg-blue-900 w-full text-white  flex flex-col md:flex-row items-center justify-between px-6 md:px-28 ">
      {/* Left Content */}
      <div className="text-left md:w-2/3 space-y-8 max-md:text-center max-md:pt-10 ">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Ready to take your tutoring career to new heights?
        </h1>
        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105">
          Sign up as a Tutor
        </button>
      </div>

      {/* Right Image */}
      <div className="relative w-full mt-10 md:mt-0 md:w-1/2 flex justify-center">
        {/* Circular Background */}
        <div className="absolute  md:w-[350px] md:h-[350px] rounded-full "></div>
        {/* Tutor Image */}
        <img
          src={tutorImage.src} // Replace this with the actual path to your tutor image
          alt="Tutor"
          className="relative  rounded-full object-cover max-md:pb-10"
        />
      </div>
    </section>
  );
};

export default TutorSignUp;
