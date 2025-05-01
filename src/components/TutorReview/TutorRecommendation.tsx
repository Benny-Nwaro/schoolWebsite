import star from "@/src/assets/svg/gold-start.svg";
import tutorImage from "@/src/assets/images/tutor.png";
import { Recommendation, Review } from "@/src/types/types";
import Image from "next/image";
import moment from "moment";
const TutorRecommendation = ({
  recommendation,
}: {
  recommendation: Recommendation;
}) => {
  return (
    <div className="tutor_review">
      <span className="date">
        {moment(recommendation.updatedAt).format("MMM DD, YYYY")}
      </span>
      <div className="review_header">
        <div className="student_details">
          <div className="student_image">
            <Image
              src={recommendation?.profileImage?.url || tutorImage?.src}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="std_name">
            <span>
              {recommendation.name} {recommendation.lastName}
            </span>
            <span className="type">User</span>
          </div>
        </div>
        <div className="rating">
          {Array.from(Array(recommendation.rating)).map((_, i) => (
            <img src={star.src} alt="" key={i} />
          ))}
        </div>
      </div>
      <div className="review_text">
        <p>{recommendation.feedback}</p>
      </div>
    </div>
  );
};

export default TutorRecommendation;
