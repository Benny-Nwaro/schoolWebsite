import React, { FC } from "react";

interface ScheduleProps {
  isOpen: boolean;
  onClose: () => void;
}

const Schedule: FC<ScheduleProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Schedule</h2>
          </div>

          {/* Plan Information */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: "Plan", value: "Monthly plan" },
              { title: "Timeframe", value: "4 weeks" },
              { title: "No. of lessons", value: "4 lessons" },
              { title: "Duration", value: "30 Minutes" },
              { title: "Location", value: "Online" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 rounded-lg p-4 w-36"
              >
                <p className="text-sm font-semibold text-gray-600">
                  {item.title}
                </p>
                <p className="text-lg font-bold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Selected Date and Time */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Selected Day and Time
            </h3>
            <p className="text-gray-600">Nil</p>
          </div>

          {/* Calendar */}
          <div>
            <h3 className="text-md font-medium text-gray-600">
              This week, May 12-18 2024
            </h3>
            <p className="text-sm text-gray-500">
              Times are shown in your local time zone UTC +01:00{" "}
              <span className="text-blue-500 cursor-pointer">Change</span>
            </p>
            <div className="grid grid-cols-7 gap-2 mt-4 border border-gray-300 rounded-lg overflow-hidden">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 text-center font-semibold p-2"
                  >
                    {day}
                  </div>
                )
              )}
              {Array.from({ length: 24 }).map((_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {Array.from({ length: 7 }).map((_, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`h-10 ${
                        Math.random() > 0.7
                          ? "bg-green-200 hover:bg-green-300"
                          : ""
                      }`}
                    ></div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-right">
            <button
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              onClick={() => alert("Proceeding to next step")}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
