"use client";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuShieldCheck } from "react-icons/lu";
import paypal from "@/src/assets/svg/paypal.svg";
import wallet from "@/src/assets/svg/wallet.svg";
import cc from "@/src/assets/svg/cc.svg";
import { useState } from "react";
import PaymentOption from "@/src/components/PaymentOption/PaymentOption";
const PaymentTypes = () => {
  const data = [
    {
      image: wallet.src,
      text: "Educify Wallet",
      balance: "Bal: $30.00"
    },
    {
      image: cc.src,
      text: "Debit/Credit card",
    },
    {
      image: paypal.src,
      text: "PayPal",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="payment_summary payment_type_section">
      <div className="summary_header">
        <span>Chose a Payment Method</span>
      </div>
      <div className="options">
        {data.map((el, i) => (
          <PaymentOption
            {...el}
            key={i}
            selected={selectedOption === el.text}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            balance = {el.balance?? "0"}
          />
        ))}
     
      </div>
      
      <div className="text">
        <IoIosInformationCircleOutline />
        <p>
          All purchases are in USD. Lessons must be scheduled within 6 months of
          purchase date.
        </p>
      </div>
      <div className="button_container">
      <button className="w-full mt-4 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
        PAY $30 USD
      </button>
            </div>
      <div className="text info_black">
        <LuShieldCheck />
        <span>
          Your card details are needed for identity verification only. There are
          no charges for this free trial Free trials are limited to 1 per
          person.
        </span>
      </div>
    </div>
  );
};
export default PaymentTypes;
