import React from "react";

const HowSubscriptionWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Web mifflin proceduralize move if",
      description:
        "What’s eat later lean were managing. Manager office go deck watches fastworks request turn. Drawing-board anyway win later have attached stakeholders gmail identify skulls. See.",
    },
    {
      number: "2",
      title: "Price pain if define point reality hours seat. Alarming.",
      description:
        "Minimize open incentivization shoot best talk our cadence hit. View shelf-ware both back sop hour up ourselves.",
    },
    {
      number: "3",
      title: "Performance long were event inclusion club win. Optimal.",
      description:
        "Boardroom shoulder view invite stop product. Watches synergize usability strategies ideal opportunity could happenings. Enable done well need.",
    },
    {
      number: "4",
      title: "Revision monday giant barn yet focus roll. If chime didn’t.",
      description:
        "Crystallize if can’t muted red-flag including strategic whatever buy-in. Fastworks to community an exploratory slipstream. Sorry it’s ladder high event line last.",
    },
  ];

  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-10">How Subscription Works</h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="w-12 h-12  flex items-center justify-center bg-white  text-blue-800 font-bold rounded-full text-xl mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold text-left mb-4">{step.title}</h3>

              {/* Step Description */}
              <p className="text-sm leading-relaxed text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowSubscriptionWorks;
