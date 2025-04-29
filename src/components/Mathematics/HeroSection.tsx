"use client";

import React from 'react';
import Breadcrumb from './Breadcrumb';
import { usePathname } from 'next/navigation';


interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  const path = usePathname()
  const pathname = path.split("/")[1]
  return (
    <div
      className="relative bg-cover bg-center text-white h-full pb-72 py-20 px-28 mt-20 max-md:px-8 max-md:w-full max-md:text-justify max-md:pb-10"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
    >
    <Breadcrumb
        links={[
          { name: 'Educify', url: '/' },
          { name: 'Categories', url: '/categories' },
          { name: pathname, url: `/categories/${pathname}` },
        ]}
      />
      <div className="max-w-5xl">
        <h1 className="text-7xl font-bold max-md:text-4xl text-white">{title}</h1>
        <p className="mt-4 text-xl max-md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
