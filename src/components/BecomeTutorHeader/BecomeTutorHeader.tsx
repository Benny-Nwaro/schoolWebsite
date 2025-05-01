import teacherPersonImage from "../../assets/images/teacherperson.png";
import Button from "../Button/Button";
import "./becomeTutorHeader.styles.scss";
const BecomeTutorHeader = () => {
  return (
    <div className="career_page">
      <div className="career_page_inner">
        <div className="col">
          <h1>You can be a Tutor</h1>
          <div className="text">
            <p>
              Sign up with Educify and unlock your full potential as an
              educator. Our platform offers flexible scheduling, global reach,
              and unlimited earning opportunities. Don't miss out on this chance
              to make a lasting impact. Sign up now and start tutoring today!
            </p>
            <p>1. Schedule tutoring according to your week/month</p>
            <p>2. Offer private virtual or in person lessons</p>
            <p>3. Create a teacher student bond</p>
            <p>4. Set your own rates</p>
          </div>
          <div className="button_container">
            <Button variant="gold" size="md">
              Sign up as a Tutor
            </Button>
            <span>(Get Free Profile Advert)</span>
          </div>
        </div>
        <div className="col image_col">
          <div className="teacher_img">
            <img src={teacherPersonImage.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTutorHeader;
