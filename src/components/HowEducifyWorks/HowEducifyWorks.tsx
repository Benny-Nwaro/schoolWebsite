import React from "react";
import Learning from "@/src/assets/images/Learning.png";


const HowEducifyWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: "📘", // Replace with your own icon or SVG
      title: "Select Your Course",
      description: "Browse through available subjects and levels to find the perfect match.",
    },
    {
      id: 2,
      icon: "🎓",
      title: "Match with a Tutor",
      description: "Connect with a tutor based on your goals and preferences.",
    },
    {
      id: 3,
      icon: "📊",
      title: "Start Learning and Track Progress",
      description: "Access lessons, complete assignments, and track your progress through your personalized dashboard.",
    },
  ];

  return (
    <div className="bg-blue-900 py-16 px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          How Educify Works
        </h2>
        <p className="text-blue-200 mt-4 w-2/4 mx-auto text-lg">
          Educify connects you with expert teachers worldwide through flexible
          learning formats and affordable pricing to fit your needs.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Steps Section */}
        <div className="flex flex-col gap-20 lg:w-1/3 mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4">
              {/* Icon */}
              <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-md text-xl text-blue-900">
                {step.icon}
              </div>
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-blue-200 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={Learning.src} // Replace with the actual path of the image
            alt="Child learning"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
          Book a free trial
        </button>
      </div>
    </div>
  );
};

export default HowEducifyWorks;
