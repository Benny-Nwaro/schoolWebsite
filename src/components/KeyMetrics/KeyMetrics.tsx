import React from "react";

interface Metric {
  value: string;
  label: string;
}

const metricsData: Metric[] = [
  { value: "150k+", label: "Years of Excellence" },
  { value: "5k+", label: "Expert Tutors" },
  { value: "60k+", label: "Countries Reached" },
  { value: "50k+", label: "Lessons Available" },
];

const KeyMetrics: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Educify Key Metrics</h2>
        <p className="text-gray-400 mb-12">
          Educify has empowered learners worldwide with our innovative education technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {metricsData.map((metric, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold text-blue-400">{metric.value}</h3>
              <p className="text-gray-300 mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
