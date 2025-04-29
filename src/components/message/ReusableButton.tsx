// components/ReusableButton.tsx
import React from "react";

interface ReusableButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ text, onClick, icon, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-100"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default ReusableButton;