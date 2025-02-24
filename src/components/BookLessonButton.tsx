import React from 'react';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const BookLessonButton: React.FC<GradientButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BookLessonButton;
