import moment from "moment";
import { Education, EducationLevel } from "@/src/types/types";
import "./tutorEducation.styles.scss";

interface TutorEducation {
  educations: Education[];
}
const TutorEducation = ({ educations }: TutorEducation) => {
  return (
    <div className="about_tutor tutor_info_container tutor_education">
      <h1>Education</h1>
      {educations &&
        educations.map((edu, i) => <EducationRow {...edu} key={i} />)}
    </div>
  );
};
export default TutorEducation;

const EducationRow = (props: Education) => {
  return (
    <div className="tutor_education_row">
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
        <span>
          {moment(props.startDate).format("YYYY")} -{" "}
          {moment(props.endDate).format("YYYY")}
        </span>
      </div>
      <div className="university">
        <span>{props.school}</span>
      </div>
      <div className="certification">
        <span>
          {props.degree} - {props.field}
        </span>
      </div>
    </div>
  );
};
