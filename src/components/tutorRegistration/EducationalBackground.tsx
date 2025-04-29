import React from 'react';
import Certification from './Certification';
import Education from './Education';

interface EducationalBackgroundProps {
  onProceed: () => void;
}

// Parent Component
const EducationalBackground: React.FC<EducationalBackgroundProps> = ({ onProceed }) => {


  return (
    <div className="flex flex-col space-y-8 mb-8 mt-8 justify-center items-center  bg-white">
      <Education/>
      <Certification onProceed={onProceed} />
    </div>
  );
};

export default EducationalBackground;
