import moment from "moment";
import { BulletRows } from "../TutorCertification/TutorCertification";
import { TeacherExperience } from "@/src/types/types";
interface TutorWorkExperienceProps {
  experience: TeacherExperience[];
}
const TutorWorkExperience = ({ experience }: TutorWorkExperienceProps) => {
  return (
    <div className="about_tutor tutor_info_container tutor_education work_experience">
      <h1>Work Experience</h1>
      {experience.map((exp) => (
        <BulletRows
          key={exp.id}
          row1={`${moment(exp.startDate).format("YYYY")} - ${moment(
            exp.endDate
          ).format("YYYY")}`}
          row2={`${exp.JobTitle} - ${exp.employmentType}`}
          row3={`${exp.institution} - ${exp.location}`}
        />
      ))}
    </div>
  );
};

export default TutorWorkExperience;
