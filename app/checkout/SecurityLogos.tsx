import React from 'react';
import paypal from "@/src/assets/images/paypal.png"
import mccafe from "@/src/assets/images/mccafe.png"
import norton from "@/src/assets/images/norton.png"

const SecurityLogos: React.FC = () => {
  return (
    <div className="flex items-center mx-auto space-x-4">
      {/* Norton Secured */}
      <div className="flex flex-col items-center ">
        <img
          src={norton.src}
          alt="Norton Secured"
          className="h-12"
        />
        <span className="text-xs text-gray-600">powered by VeriSign</span>
      </div>
      
      {/* McAfee Secure */}
      <div className="flex items-center space-x-2">
        <img
          src={mccafe.src}
          alt="McAfee Secure"
          className="h-12"
        />
      </div>

      {/* PayPal */}
      <div>
        <img
          src={paypal.src}
          alt="PayPal"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default SecurityLogos;
