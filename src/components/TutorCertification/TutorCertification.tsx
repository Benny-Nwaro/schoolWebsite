import { Certificate } from "@/src/types/types";
import moment from "moment";
import React from "react";

const TutorCertification = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  return (
    <div className="about_tutor tutor_info_container tutor_education">
      <h1>Certification</h1>
      {certificates.map((cert, i) => (
        <BulletRows
          key={i}
          row1={cert.name}
          row2={cert.organization}
          row3={`Issued ${moment(cert.endDate).format("MMM YYYY")}`}
        />
      ))}
    </div>
  );
};

export default TutorCertification;

export const BulletRows = ({
  row1 = "",
  row2 = "",
  row3 = "",
  extraRow = "",
}) => {
  return (
    <div className="tutor_education_row">
      {row1 && (
        <div className="duration">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#3198F5" />
          </svg>
          <span>{row1}</span>
        </div>
      )}
      <div className="university">
        <span>{row2}</span>
      </div>
      <div className="certification">{row3}</div>
    </div>
  );
};
