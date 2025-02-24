import { FaArrowLeftLong } from "react-icons/fa6";
import "./checkout.styles.scss";
import PaymentSummary from "@/src/components/PaymentSummary/PaymentSummary";
import ApplyPromoCode from "@/src/components/ApplyPromoCode/ApplyPromoCode";
import PaymentTypes from "@/src/components/PaymentTypes/PaymentTypes";
import SecurityLogos from "./SecurityLogos";

const Checkout = () => {
  return (
    <div className="checkout_page">
      <div className="inner_max">
        <div className="header_container">
          <div className="header">
            <FaArrowLeftLong />
            <span>Review and Subscribe</span>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <PaymentSummary />
            <ApplyPromoCode />
          </div>
          <div className="flex flex-col space-y-10">
          <PaymentTypes />
          <SecurityLogos/>
          </div>
     

        </div>

      </div>
    </div>
  );
};

export default Checkout;
