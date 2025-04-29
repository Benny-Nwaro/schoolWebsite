import React from 'react';
import Breadcrumb from '@/src/components/Pricing/Breadcrumb';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <div className="relative bg-blue-500 text-white pb-52 lg:pl-12 py-16 max-md:w-full max-md:px-3">
      <div className='mt-2'>
      <Breadcrumb
            links={[
              { name: 'Educify', url: '/' },
              { name: 'Categories', url: '/categories' },
              { name: 'Maths', url: '/categories/maths' },
              { name: 'Algebra', url: '/categories/maths/algebra' },
              { name: 'Guy Hawkins', url: '/tutors/guy-hawkins' },
              { name: 'Pricing', url: '/pricing' },
            ]}
          />
      </div>
    
      <div className="">
        <h1 className="text-5xl text-nowrap font-bold mb-4 max-md:w-full max-md:text-lg">{title}</h1>
        <p className="text-2xl w-2/3 max-md:w-full max-md:text-base ">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
