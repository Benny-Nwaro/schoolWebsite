import React from "react";
import STEM from "@/src/assets/images/STEMimage.png";
import Coding from "@/src/assets/images/Codingimage.png";
import Language from "@/src/assets/images/Languageimage.png";
import Math from "@/src/assets/images/Mathimage.png";


const PopularSubjects: React.FC = () => {
  const subjects = [
    {
      title: "STEM",
      description:
        "Master foundational skills in Science, Technology, Engineering, and Math.",
      imageSrc: STEM, // Replace with actual image path
    },
    {
      title: "Coding",
      description:
        "From beginner to advanced programming, learn to code like a pro.",
      imageSrc: Coding, // Replace with actual image path
    },
    {
      title: "Language",
      description:
        "Improve fluency in Spanish, French, German, and more.",
      imageSrc: Language, // Replace with actual image path
    },
    {
      title: "Math",
      description:
        "Build strong math skills with courses from basic arithmetic to advanced calculus.",
      imageSrc: Math, // Replace with actual image path
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-black max-md:text-2xl">
          Most Popular Subjects on Educify
        </h2>
        <p className="text-gray-600 w-2/5 mx-auto mt-4 text-lg max-md:w-full">
          Explore a wide range of subjects taught by Educify's global network of
          expert instructors.
        </p>
      </div>

      {/* Subjects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <img
              src={subject.imageSrc.src}
              alt={subject.title}
              className="w-full object-cover"
            />
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">{subject.title}</h3>
              <p className="text-gray-600 mt-2">{subject.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
          Explore All Subjects
        </button>
      </div>
    </div>
  );
};

export default PopularSubjects;
