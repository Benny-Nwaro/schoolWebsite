import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  pageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, pageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl overflow-hidden mb-8 max-w-xs flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 flex-1">{description}</p>
        <Link
          href={pageUrl}
          className="mt-4 w-full bg-slate-900 text-white text-center py-2 px-4 rounded-full hover:bg-slate-800 self-end"
        >
          Find a Tutor
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
