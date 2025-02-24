import languageIco from "@/src/assets/svg/languageIco.svg";
import calendar from "@/src/assets/svg/calendar.svg";
import experience from "@/src/assets/svg/experience.svg";
import { Experience, Language } from "@/src/types/types";
import moment from "moment";
interface TutorAbout {
  name: string;
  description: string;
  languages: Language[];
  date: string;
  tutorExperience?: Experience;
}
const TutorAbout = ({
  name,
  description,
  languages,
  date,
  tutorExperience,
}: TutorAbout) => {
  return (
    <div className="about_tutor tutor_info_container">
      <h1>About {name}</h1>
      <p>{description}</p>
      <div className="experience">
        {!!tutorExperience?.experienceYears && (
          <div className="exp_item">
            <img src={experience.src} alt="" />
            <span>{tutorExperience?.experienceYears} years experience</span>
          </div>
        )}
        <div className="exp_item">
          <img src={calendar.src} alt="" />
          <span>Tutor since {moment(date).format("DD/MM/YYYY")}</span>
        </div>
        <div className="exp_item">
          <img src={languageIco.src} alt="" />
          <span>{languages && languages.map((el) => el.name).join(", ")}</span>
        </div>
      </div>
    </div>
  );
};
export default TutorAbout;
