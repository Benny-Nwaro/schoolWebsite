import Button from "../Button/Button";
import "./footer.styles.scss";
const NewLetter = () => {
  return (
    <div className="newsletter ">
      <div className="col">
        <h1 className="text-white">
          Sign Up for Our Newsletter, Offers, promotions and educational
          contents
        </h1>
        <span>Join our professional community to stay ahead</span>
      </div>
      <div className="newsletter_form">
        <div className="input">
          <input type="text" placeholder="Enter your email address" />
        </div>
        <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 border-2 border-white">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewLetter;
