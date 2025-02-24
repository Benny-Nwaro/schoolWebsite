import tutor from "@/src/assets/images/tutor.png";
import verified from "@/src/assets/svg/verified-gold.svg";
const PaymentSummary = () => {
  return (
    <div className="payment_summary">
      <div className="summary_header">
        <span>Payment Summary</span>
      </div>
      <div className="summary">
        <div className="tutor">
          <div className="image">
            <img src={tutor.src} alt="" />
          </div>
          <span>Guy hawkins</span>
          <img src={verified.src} alt="" />
        </div>
        <div className="section">
          <div className="row">
            <span className="info">Plan</span>
            <span className="desc">Monthly</span>
          </div>
          <div className="row">
            <span className="info">Selected Lesson</span>
            <span className="desc">Algebra</span>
          </div>
          <div className="row">
            <span className="info">Plan</span>
            <span className="desc">Monthly</span>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <span className="info">Number of lessons</span>
            <span className="desc">4 Lessons</span>
          </div>
          <div className="row">
            <span className="info">Time</span>
            <span className="desc">12:30 PM</span>
          </div>
          <div className="row">
            <span className="info">Class Duration</span>
            <span className="desc">30 Minutes</span>
          </div>
          <div className="row">
            <span className="info">Start date</span>
            <span className="desc">Thur, 20th July, 2024</span>
          </div>
          <div className="row">
            <span className="info">End date</span>
            <span className="desc">Thur, 18th August, 2024</span>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <span className="info">Amount</span>
            <span className="desc">$30</span>
          </div>
        </div>
        <div className="total">
          <h1>
            <span>Total:</span>
            $30
            <span className="sign">USD</span>
          </h1>
        </div>
        <div className="terms">
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">
            By subscribing for this lesson you agree to our{" "}
            <span>Terms & Conditions</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
