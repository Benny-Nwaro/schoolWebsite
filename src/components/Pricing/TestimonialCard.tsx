import React from "react";
import JaneCooper from "@/src/assets/images/Pricing/JaneCooper.png";

const TestimonialCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-10 mt-10 bg-blue-900">
      <div className=" p-8 px-32 text-center text-wrap bg-blue-900   text-white">
        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-4">
          <button
            aria-label="Previous"
            className="flex items-center justify-center w-8 h-8 bg-blue-700 hover:bg-blue-600 rounded-full"
          >
            <span className="text-xl font-bold">&lt;</span>
          </button>
          <button
            aria-label="Next"
            className="flex items-center justify-center w-8 h-8 bg-blue-700 hover:bg-blue-600 rounded-full"
          >
            <span className="text-xl font-bold">&gt;</span>
          </button>
        </div>
        {/* Profile Image */}
        <img
          src={JaneCooper.src}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-600"
        />
        {/* Testimonial Text */}
        <p className="italic mb-4 w-2/3 mx-auto">
          “These teeth goalposts boys 2 first-order. Seems calculator could
          catching dunder later rundown manage. Put ask disband knowledge right
          kpis price me let's seat. Shower staircase problem low re-inventing.
          Feature policy”
        </p>
        {/* Name and Role */}
        <div>
          <h4 className="font-bold">Jane Cooper</h4>
          <p className="text-sm text-blue-300">Student</p>
        </div>
        {/* Stars */}
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(9)].map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 2 ? "bg-white" : "bg-blue-900"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
