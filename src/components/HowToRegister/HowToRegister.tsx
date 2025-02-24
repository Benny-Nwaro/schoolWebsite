import "./howToRegister.styles.scss";
import howToRegisterImage from "../../assets/images/howToRegister.png";
import howToRegisterImageMobile from "../../assets/images/howtoregisterMobile.png";
import Button from "../Button/Button";
const HowToRegister = () => {
  return (
    <div className="teacher_how_to_register">
      <div className="info_container">
        <h1>How to Register</h1>
        <img src={howToRegisterImage.src} alt="" />
        <img src={howToRegisterImageMobile.src} alt="" className="mobile" />
        <div className="button_container">
          <Button variant="gold" size="lg">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowToRegister;
