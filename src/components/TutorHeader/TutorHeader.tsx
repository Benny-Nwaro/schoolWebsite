import verifiedMark from "@/src/assets/svg/verified-white.svg";
import CustomBreadCrumb from "../CustomBreadCrumb/CustomBreadCrumb";
import "./tutorHeader.styles.scss";
interface TutorHeaderProps {
  description: string;
  isVerified: boolean;
  name: string;
}
const TutorHeader = ({ description, isVerified, name }: TutorHeaderProps) => {
  return (
    <header className="tutor_header">
      <div className="inner_max">
        <CustomBreadCrumb
          items={[
            { name: "Educify", url: "/" },
            { name: "Tutors", url: "/tutors" },
            { name, url: "" },
          ]}
        />
        <h1>
          {name}
          {isVerified && (
            <span className="verified">
              verified
              <img src={verifiedMark.src} alt="" />
            </span>
          )}
        </h1>
        <div className="selected_lesson">
          <span>Selected lesson: Algebra</span>
        </div>
        <div className="header_text_container">
          <p className="header_text">{description}</p>
        </div>
      </div>
    </header>
  );
};
export default TutorHeader;
