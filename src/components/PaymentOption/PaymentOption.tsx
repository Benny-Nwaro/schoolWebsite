const PaymentOption = ({
  image,
  text,
  balance,
  selected = false,
  setSelectedOption,
  selectedOption,
}: {
  image: string;
  text: string;
  balance:string;
  selected: boolean;
  setSelectedOption: (selectedOption: string) => void;
  selectedOption: string;
}) => {
  return (
    <div
      className={`payment_option_container ${selected ? "selected" : ""}`}
      onClick={() => setSelectedOption(text)}
    >
      <div className="payment_option">
        <input
          type="radio"
          id="radio"
          name="radio"
          checked={text === selectedOption}
          readOnly
        />
        <img src={image} alt="" />
          <span className="title">{text}</span>
          <p className=" ml-40 text-red-600 font-bold">{balance || ""}</p>
      
      </div>
      {text.toLowerCase() === "debit/credit card" && (
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Enter Name on card" />
          </div>
          <div className="input">
            <input type="text" placeholder="Card number" />
          </div>
          <div className="multiple">
            <div className="input">
              <input type="text" placeholder="Expiration" />
            </div>
            <div className="input">
              <input type="text" placeholder="CVV" />
            </div>
          </div>
        </div>
      )}
      {text.toLowerCase() === "paypal" && (
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Paypal Email" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOption;
