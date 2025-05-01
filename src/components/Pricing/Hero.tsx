import React from 'react';
import HeroSection from '@/src/components/Pricing/HeroSection';
import LessonSummaryCard from '@/src/components/Pricing/LessonSummaryCard';
import Breadcrumb from '@/src/components/Pricing/Breadcrumb';

const Hero: React.FC = () => {
  return (
    <div className="h-full lg;mt-20 lg:pt-10 bg-gray-100">

      <div className="lg:relative flex flex-row max-md:flex-col max-md:space-y-10">
        <HeroSection
          title="Choose a Payment Package"
          description="We believe that managing payments should be as easy as ABC. That's why we've developed a seamless payment solution tailored specifically for our education community. With Educify's payment platform, you can focus on what matters most—providing/receiving quality education—while we take care of the rest."
        />
        <div className="lg:absolute lg:top-20 right-8">
          <LessonSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
