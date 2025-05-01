import React from 'react';
import Image from 'next/image'; // Import the next/image component
import EducifyLogo from '@/src/assets/images/Educify-logo.svg'; // Adjusted path assuming '@' alias points to src/

const Logo: React.FC = () => { // Define component type
  return (
    <>
      {/* Use the next/image component */}
      <Image
        src={EducifyLogo} // The imported SVG object
        alt='Educify Logo'
        width={160} // Set the desired width (required for non-fill images)
        height={40} // Set a reasonable height (required for non-fill images) - adjust as needed
        style={{ height: 'auto' }} // Allow height to adjust based on width while maintaining aspect ratio
      />
    </>
  );
};

export default Logo;
