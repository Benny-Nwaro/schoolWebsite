import React from "react";
import location from "@/src/assets/svg/location.svg";

const TutorTeacherLocation = ({
  country,
  city,
  locations,
}: {
  country: string;
  city: string;
  locations: string[];
}) => {
  return (
    <div className="about_tutor tutor_info_container location_container">
      <h1>Locations</h1>

      <div className="locations">
        <div className="location_item">
          <span className="title">My location</span>
          <div className="exp_item">
            <img src={location.src} alt="" />
            <span>
              {city}, {country}
            </span>
          </div>
        </div>
        <div className="location_item">
          <span className="title">Classes Location</span>
          <div className="multiple">
            {locations.map((el) => (
              <div className="exp_item" key={el}>
                <span>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorTeacherLocation;
