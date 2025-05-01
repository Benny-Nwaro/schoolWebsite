import greenStar from "../../assets/images/greenstar.png";
import starGroup from "../../assets/images/star group.png";
const TrustPilotReviews = () => {
  return (
    <div className="landing_reviews">
      <div className="review_col">
        Excellent
        <img src={starGroup.src} alt="Stars" />
      </div>
      <div className="review_col">
        <span className="bold">436</span>
        reviews on
        <img src={greenStar.src} alt="Trustpilot" width={17} />
        <span className="bold">Trustpilot</span>
      </div>
    </div>
  );
};
export default TrustPilotReviews;
