import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaStar, FaShareAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

interface TutorCardProps {
  name: string;
  price: string;
  experience: string;
  role: string;
  location: string;
  reviews: string;
  description: string;
  image: string;
}

const TutorCard: React.FC<TutorCardProps> = ({
  name,
  price,
  experience,
  role,
  location,
  reviews,
  description,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl overflow-hidden max-w-xs sm:max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-200">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-68 object-cover"
        />
        {/* Interactive Heart Icon */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer">
          <AiOutlineHeart className="text-gray-600 text-lg" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Name + Badge + Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-xl font-bold mb-3 text-gray-800">
            {name} <FaCheckCircle className="text-blue-500 text-sm" />
          </div>
          <div className="text-lg font-bold text-gray-900">{price}</div>
        </div>
        {/* Experience */}
        <div className="flex flex-row space-x-10" ><p className="text-sm font-bold text-gray-600 px-2 py-2 border-solid border border-gray-500 rounded-full">{experience}</p>
            <span className="border-solid border px-2 py-2  border-gray-500 rounded-full">        
                <FaShareAlt className="text-gray-600 text-lg cursor-pointer  hover:text-gray-900 transition duration-200" />
            </span>        
        </div>
        {/* Ratings Section */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
        <p className="text-sm font-bold">{role}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {reviews}
          </div>
        </div>
        {/* Location Section */}
        <div className="flex items-center gap-1 font-bold text-sm text-gray-600">
          <FaMapMarkerAlt className="text-gray-500" />
          {location}
        </div>
        {/* Description */}
        <p className="text-sm text-gray-600 leading-snug line-clamp-3 mb-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TutorCard;
