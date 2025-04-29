import star from "@/src/assets/svg/gold-start.svg";
import tutorImage from "@/src/assets/images/tutor.png";
import { Review } from "@/src/types/types";
import Image from "next/image";
const TutorReview = ({ review }: { review: Review }) => {
  return (
    <div className="tutor_review">
      <span className="date">Jan 20, 2024</span>
      <div className="review_header">
        <div className="student_details">
          <div className="student_image">
            <Image
              src={review?.student?.user?.profileImage?.url || tutorImage?.src}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="std_name">
            <span>{review.student?.user.name} here</span>
            <span className="type">Student</span>
          </div>
        </div>
        <div className="rating">
          {Array.from(Array(review.rating)).map((_, i) => (
            <img src={star.src} alt="" key={i} />
          ))}
        </div>
      </div>
      <div className="review_text">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default TutorReview;
