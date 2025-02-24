import React from 'react';

interface TutorCardProps {
  name: string;
  rating: string;
  location: string;
  experience: string;
  image: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ name, rating, location, experience, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
      <img src={image} alt={name} className="h-16 w-16 rounded-full object-cover" />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{rating}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">{experience}</p>
      </div>
    </div>
  );
};

export default TutorCard;
