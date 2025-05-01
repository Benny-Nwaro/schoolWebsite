import { StudentReviewCardIE } from "@/src/types/types";
import blueStar from "../../assets/svg/blue-star.svg";
import "./studentReviewCard.styles.scss";
const StudentReviewCard = ({
  name,
  image,
  rating,
  text,
}: StudentReviewCardIE) => {
  return (
    <div className="student_review">
      <div className="col">
        <div className="image">
          <img src={image.url} alt="" />
        </div>
      </div>
      <div className="col">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="rating">
          <img src={blueStar.src} alt="" />
          <span>{rating}</span>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentReviewCard;
