import React from "react";
import SuccessStory from "@/src/assets/images/SuccessStories.jpeg";


const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: "Marcus Thompson",
      title: "MBA Graduate",
      feedback:
        "Educify transformed my learning experience. The global network of teachers and self-paced courses helped me balance my MBA studies while maintaining a full-time job. Now I'm consulting for top firms.",
      imageSrc: SuccessStory // Replace with actual image path
    },
    {
      name: "Emily Chen",
      title: "Software Developer",
      feedback:
        "Through Educify's flexible learning program, I mastered coding while working full-time. The personalized approach and expert instructors made all the difference in launching my tech career.",
      imageSrc: SuccessStory, // Replace with actual image path
    },
    {
      name: "Aisha Patel",
      title: "Marketer",
      feedback:
        "Educify's courses gave me the confidence to switch careers. The combination of live sessions and on-demand content perfectly fit my learning style. Now I'm leading marketing campaigns for major brands.",
      imageSrc: SuccessStory, // Replace with actual image path
    },
    {
      name: "David Kumar",
      title: "Data Scientist",
      feedback:
        "After six months of intensive courses on Educify, I successfully transitioned from marketing to data science. The practical approach and industry-expert teachers made complex concepts accessible.",
      imageSrc: SuccessStory, // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Success Stories
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Real stories from learners who transformed their careers through Educify
        </p>
      </div>

      {/* Stories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg p-6 border border-gray-700 shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={story.imageSrc.src}
                alt={story.name}
                className="w-12 h-12 rounded-full border-2 border-gray-700 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <p className="text-sm text-gray-400">{story.title}</p>
              </div>
            </div>
            <p className="text-gray-300">{story.feedback}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          Read More Success Stories
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
