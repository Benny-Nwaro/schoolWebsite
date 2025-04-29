import React from 'react';
import ClassesImage from "@/src/assets/images/mathematics/classesImage.png"
const MathClassesSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-6  lg:p-12 bg-blue-900 text-white">
      {/* Text Content */}
      <div className="lg:w-1/2 px-20 max-md:px-8 max-md:w-full max-md:text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          With our Mathematics classes, you'll
        </h2>
        <ul className="space-y-4 text-lg">
          <li>
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Master essential mathematical concepts and techniques, including
            arithmetic operations, algebraic manipulation, and geometric
            principles
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Develop critical thinking and problem-solving skills through
            engaging and challenging exercises and activities
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Explore real-world applications of mathematics in various fields,
            from science and engineering to economics and data analysis
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Learn to communicate mathematical ideas and solutions effectively,
            enhancing your ability to collaborate and present your findings to
            others
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Receive personalized feedback and support from our experienced
            instructors, ensuring that you stay on track and achieve your
            learning goals
          </li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300">
          Select a mathematics category
        </button>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
        <img
          src={ClassesImage.src}
          alt="Person writing math equations on a whiteboard"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MathClassesSection;
