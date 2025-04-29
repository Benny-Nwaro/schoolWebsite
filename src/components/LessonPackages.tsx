"use client"
import React, { useState } from "react";

const LessonPackages: React.FC = () => {
  const [scheduleType, setScheduleType] = useState<"Weekly" | "Flexible">(
    "Weekly"
  );
  const [selectedPackage, setSelectedPackage] = useState({
    duration: 30,
    package: "Monthly",
  });

  const durations = [30, 45, 60];
  const packages = [
    { name: "Monthly", lessons: 4, price: [12, 12, 12] },
    { name: "Bi-Monthly", lessons: 8, price: [24, 24, 24], highlight: true },
    { name: "Quarterly", lessons: 13, price: [66, 66, 66] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Lesson packages</h1>
          <p className="text-gray-500 mt-2">
            Select a preferred lesson package
          </p>
        </div>

        {/* Schedule Toggle */}
        <div className="flex justify-between items-center mt-8">
          <div className="relative">
            <select
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none"
              defaultValue="Online"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setScheduleType("Weekly")}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                scheduleType === "Weekly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setScheduleType("Flexible")}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                scheduleType === "Flexible"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Flexible
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          The <b>{scheduleType.toLowerCase()}</b> schedule allows you to attend
          your classes on the same day every week. Switch to the{" "}
          <b>{scheduleType === "Weekly" ? "flexible" : "weekly"}</b> schedule if
          you wish to take your classes whenever you want.
        </p>

        {/* Packages */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {durations.map((duration, colIndex) => (
            <div key={duration} className="space-y-4">
              <h2 className="text-lg font-bold text-center text-gray-800">
                {duration} Minutes
              </h2>
              {packages.map((pkg, rowIndex) => (
                <div
                  key={pkg.name}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    selectedPackage.duration === duration &&
                    selectedPackage.package === pkg.name
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:shadow-md"
                  }`}
                  onClick={() =>
                    setSelectedPackage({ duration, package: pkg.name })
                  }
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      {pkg.name} ({pkg.lessons} Lessons)
                    </span>
                    {pkg.highlight && (
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-600">
                        Most desirable
                      </span>
                    )}
                  </div>
                  <p className="text-center text-xl font-semibold text-gray-800 mt-2">
                    ${pkg.price[colIndex]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-10">
          <p className="text-sm text-gray-400">
            Select a package to proceed.
          </p>
          <button
            className={`px-6 py-3 rounded-full text-white font-medium text-sm transition-all ${
              selectedPackage ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedPackage}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPackages;
