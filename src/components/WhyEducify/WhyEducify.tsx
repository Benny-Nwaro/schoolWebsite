import whyImg from "../../assets/images/why.png";
import "./whyEducify.styles.scss";
const WhyEducify = () => {
  return (
    <section className="why_educify">
      <h1>
        Why Choose <span>Educify?</span>
      </h1>
      <div className="info_container">
        <div className="col">
          <div className="text_row">
            <h4>Quality tutors across various subjects</h4>
            <p>
              We provide access to highly qualified tutors who are experts in
              their fields, ensuring that you receive top-notch education and
              support.
            </p>
          </div>
          <div className="text_row">
            <h4>Quality tutors across various subjects</h4>
            <p>
              We provide access to highly qualified tutors who are experts in
              their fields, ensuring that you receive top-notch education and
              support.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={whyImg.src} alt="" />
        </div>
        <div className="col">
          <div className="text_row">
            <h4>Quality tutors across various subjects</h4>
            <p>
              We provide access to highly qualified tutors who are experts in
              their fields, ensuring that you receive top-notch education and
              support.
            </p>
          </div>
          <div className="text_row">
            <h4>Quality tutors across various subjects</h4>
            <p>
              We provide access to highly qualified tutors who are experts in
              their fields, ensuring that you receive top-notch education and
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEducify;
