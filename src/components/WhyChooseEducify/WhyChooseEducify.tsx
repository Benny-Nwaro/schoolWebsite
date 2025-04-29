import React from "react";
import calendarImg from "@/src/assets/images/Calendarimg.png";
import expertTutors from "@/src/assets/images/ExpertTutors.png";
import onlineOffline from "@/src/assets/images/onlineandinpersonimage.png";
import afforedablePricing from "@/src/assets/images/AffordablePricingImage.png";



const WhyChooseEducify: React.FC = () => {
  const features = [
    {
      id: 1,
      image: calendarImg, 
      title: "Custom Learning Plans",
      description: "Tailored to fit each student’s goals and learning style.",
    },
    {
      id: 2,
      image: expertTutors, 
      title: "Expert Tutors",
      description: "Qualified educators from top institutions.",
    },
    {
      id: 3,
      image: onlineOffline, 
      title: "Online and In-person Classes",
      description: "Learn on your schedule with live or recorded sessions.",
    },
    {
      id: 4,
      image: afforedablePricing, 
      title: "Affordable Pricing",
      description: "Quality education for every budget, with flexible payment plans.",
    },
  ];

  return (
    <div className=" py-16 px-8 max-md:w-full ">
      {/* Header Section */}
      <div className="text-center max-md:w-full mb-12">
        <h2 className="text-3xl lg:text-4xl max-md:w-full max-md:text-2xl font-bold text-gray-800">
          Why Choose Educify?
        </h2>
        <p className="text-gray-600 mx-auto w-2/4  max-md:w-full mt-4 text-lg">
          Learn from global experts your way through online, in-person, and self-paced courses at guaranteed affordable prices.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white  shadow-lg rounded-lg p-6  text-left  border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={feature.image.src}
              alt={feature.title}
              className="w-full h-52 mx-auto"
            />
            {/* Text Section */}
            <h3 className="text-lg mt-4 font-bold text-blue-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseEducify;
