import emblem from "@/src/assets/svg/emblem.svg";
import Button from "../Button/Button";
import security from "@/src/assets/images/security.png"

const ApplyPromoCode = () => {
  return (
    <div className="student_promo">
      <div className="apply_promo_container">
        <span className="title">Promo Code</span>

        <div className="promo_input_container">
          <input type="text" placeholder="Enter your promo code" />
          <Button variant="ghost">Redeem</Button>
        </div>
      </div>
      <div className="guarantee">
        <div className="flex flex-row space-x-2">
          <img src={emblem.src} alt="" />
          <span>100% Satisfaction Guarantee</span>
        </div>
        <p>
          If you are unsatisfied with your trial lesson, you can contact
          Customer Support for a refund.
        </p>
      </div>
      <div className="guarantee">
        <div className="flex flex-row space-x-2">
          <img src={security.src} alt="" />
          <span>Security & Privacy</span>
        </div>
        <p>
        Safe payments - Secure personal details, your details are safe with us
        </p>
      </div>
    </div>
  );
};

export default ApplyPromoCode;
