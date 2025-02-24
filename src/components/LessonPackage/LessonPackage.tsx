import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const LessonPackage = ({
  setSelectedPackage,
  packages,
  selectedPackage,
  lessonTime,
}: {
  setSelectedPackage: (selectedPackage: string) => void;
  packages: string[];
  selectedPackage: string;
  lessonTime:string;
}) => {
  return (
    <div className="lesson_package_container">
      <div className="times">
        <h1>{lessonTime}</h1>
      </div>
      <div className="lesson_package">
        <div className="arrow mx-auto">
          <IoIosArrowDown className="mx-auto" style={{ color: "#9193A5" }} />
        </div>
        <div className="prices">
          {packages.map((el, i) => (
            <div
              className={`price ${selectedPackage === el ? "selected" : ""}`}
              key={i}
              onClick={() => setSelectedPackage(el)}
            >
              <span>${el}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonPackage;
