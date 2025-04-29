import teacherHeader from "../../assets/svg/teacher-header.svg";
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";
import TrustPilotReviews from "../TrustPilotReviews/TrustPilotReviews";
const Welcome = () => {
  return (
    <div className="teacher_landing">
      <div className="teacher_landing_inner">
        <div className="landing_bg_container">
          <header className="teacher_landing_welcome">
            <div className="column">
              <h1 className="shared_h1">
                Achieve your goals with{" "}
                <span className="text_dark_blue">Personalized</span> learning!
              </h1>
              <p className="text_grey">
                Experience engaging and effective lessons and courses.
              </p>
              <div className="landing_images_sm">
                <img src={teacherHeader.src} alt="Teacher" />
              </div>
              <LandingSearchBar />
              <TrustPilotReviews />
            </div>
            <div className="landing_images">
              <img src={teacherHeader.src} alt="Teacher" />
              <p className="text_black ">Join 500,000+ students</p>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
