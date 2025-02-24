import React, { useState } from "react";

const PricingPlans: React.FC = () => {
  const [duration, setDuration] = useState("30 Minutes");

  const plans = [
    {
      title: "Trial",
      description:
        "Curious about what Educify has to offer? With this plan, you’ll get the chance to test the waters with one lesson—no strings attached.",
      price: "$0",
      oldPrice: "$0",
      features: ["1 Lesson", "Pay as you go", "Test the lesson", "No commitment"],
      buttonText: "Sign Up ($0)",
    },
    {
      title: "Monthly",
      description:
        "Ready to take your learning to the next level? This plan offers 5 lessons with flexibility and affordability.",
      price: "$81",
      oldPrice: "$81",
      features: ["5 Lessons", "30mins Duration", "Flexible Schedule", "Choice of Tutor"],
      buttonText: "Sign Up ($81)",
    },
    {
      title: "Bi-Monthly",
      description:
        "The bi-monthly plan lets you pay for two months to meet your needs with 10 lessons included.",
      price: "$162",
      oldPrice: "$162",
      features: ["10 Lessons", "30mins Duration", "Flexible Schedule", "Choice of Tutor"],
      buttonText: "Sign Up ($162)",
      recommended: true,
    },
    {
      title: "Quarterly",
      description:
        "Ready to immerse yourself in a world of learning opportunities? This plan offers 15 lessons included.",
      price: "$182",
      oldPrice: "$182",
      features: ["15 Lessons", "30mins Duration", "Flexible Schedule", "Choice of Tutor"],
      buttonText: "Sign Up ($182)",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Dropdown */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <label htmlFor="duration" className="block text-xl font-semibold text-gray-800 mb-4">
          Select Class Duration
        </label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="30 Minutes">30 Minutes</option>
          <option value="60 Minutes">60 Minutes</option>
        </select>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg shadow-lg p-6 ${
              plan.recommended ? "border-yellow-400 border-2" : "border border-gray-200"
            }`}
          >
            {/* Recommended Tag */}
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 rounded-full shadow-md font-medium">
                Recommended
              </div>
            )}
            {/* Plan Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{plan.description}</p>
            {/* Pricing */}
            <div className="text-4xl font-extrabold text-gray-900 mb-2">{plan.price}</div>
            <div className="text-gray-400 text-sm line-through mb-4">{plan.oldPrice}</div>
            {/* Features */}
            <ul className="text-gray-700 text-sm text-left mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
