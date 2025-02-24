import star from "@/src/assets/svg/gold-start.svg";
import "./tutorReviews.styles.scss";
import TutorReview from "../TutorReview/TutorReview";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Review } from "@/src/types/types";
const TutorReviews = ({
  title,
  reviews,
}: {
  title: string;
  reviews: Review[];
}) => {
  return (
    <div className="tutor_reviews">
      <div className="header">
        <h1>{title}</h1>
        <div className="review_amount">
          <img src={star.src} alt="" />
          <span>
            {5} ({reviews?.length} Reviews)
          </span>
        </div>
      </div>
      <div className="reviews">
        {reviews &&
          reviews.map((el) => <TutorReview review={el} key={el.id} />)}

        <div className="">
          <Button variant="dark" size="md">
            View all <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorReviews;
