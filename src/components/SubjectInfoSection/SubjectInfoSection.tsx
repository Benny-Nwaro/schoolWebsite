import image from "@/src/assets/images/Rectangle 615.png";
import Image from "next/image";
import "./SubjectInfoSection.styles.scss";
import Button from "../Button/Button";
const SubjectInfoSection = () => {
  return (
    <section className="subject_info_section">
      <div className="col">
        <h1>With our algebra classes, you'll</h1>
        <ul>
          <li>
            Learn essential algebraic principles and techniques, including
            simplifying expressions, solving equations, and graphing functions
          </li>
          <li>
            Learn essential algebraic principles and techniques, including
            simplifying expressions, solving equations, and graphing functions
          </li>
          <li>
            Learn essential algebraic principles and techniques, including
            simplifying expressions, solving equations, and graphing functions
          </li>
          <li>
            Learn essential algebraic principles and techniques, including
            simplifying expressions, solving equations, and graphing functions
          </li>
        </ul>
        <Button variant="ghost" size="lg">
          Get an Algebra Tutor
        </Button>
      </div>
      <div className="image_container">
        <img src={image.src} alt="" className="image" />
      </div>
    </section>
  );
};

export default SubjectInfoSection;
