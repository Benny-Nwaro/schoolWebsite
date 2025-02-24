import React from "react";
import hero2 from "@/src/assets/images/mathematics/Algebra/hero2.png"


const HeroSection2: React.FC = () => {
  return (
      <div className="bg-blue-900 text-white py-10 px-6 mt-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="flex-1 mx-auto pl-32 pr-10 max-md:w-full text-justify max-md:pl-5">
          <h2 className="text-4xl font-bold mb-4">With our algebra classes, you'll</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 bg-white rounded-full mt-2"></span>
              <span>Learn essential algebraic principles and techniques, including simplifying expressions, solving equations, and graphing functions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 bg-white rounded-full mt-2"></span>
              <span>Develop critical thinking and problem-solving skills through hands-on exercises and interactive activities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 bg-white rounded-full mt-2"></span>
              <span>Explore real-world applications of algebra in various fields, from science and engineering to finance and computer science.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 bg-white rounded-full mt-2"></span>
              <span>Receive personalized feedback and support from our experienced instructors, ensuring that you understand each concept thoroughly and can apply it confidently.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-2 w-2 bg-white rounded-full mt-2"></span>
              <span>Collaborate with fellow learners in a supportive online environment, sharing ideas, asking questions, and helping each other succeed.</span>
            </li>
          </ul>
             {/* Call to Action Button */}
            <div className="flex justify-center mt-6">
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow-lg text-lg">
                Get an Algebra Tutor
                </button>
            </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 h-full">
          <img 
            src={hero2.src}
            alt="Teacher and student at chalkboard" 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
   
  );
};

export default HeroSection2;
