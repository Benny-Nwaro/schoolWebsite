import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  oldPrice,
  features,
  buttonText,
  isRecommended = false,
}) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-lg p-6 text-center ${
        isRecommended ? 'border-4 border-yellow-400' : ''
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-b-lg px-4 py-2">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-3xl font-bold mb-2">{price}</div>
      {oldPrice && <div className="text-gray-400 line-through">{oldPrice}</div>}
      <ul className="text-left space-y-2 my-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
