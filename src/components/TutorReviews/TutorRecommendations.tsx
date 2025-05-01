import TutorReview from "../TutorReview/TutorReview";
import Button from "../Button/Button";
import star from "@/src/assets/svg/gold-start.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Recommendation, Review } from "@/src/types/types";
import TutorRecommendation from "../TutorReview/TutorRecommendation";
const TutorRecommendations = ({
  title,
  recommendations,
}: {
  title: string;
  recommendations: Recommendation[];
}) => {
  return (
    <div className="tutor_reviews">
      <div className="header">
        <h1>{title}</h1>
        <div className="review_amount">
          <img src={star.src} alt="" />
          <span>
            {5} ({recommendations?.length} Recommendations)
          </span>
        </div>
      </div>
      <div className="reviews">
        {recommendations &&
          recommendations.map((el) => (
            <TutorRecommendation recommendation={el} key={el.id} />
          ))}

        <div className="">
          <Button variant="dark" size="md">
            View all <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorRecommendations;
