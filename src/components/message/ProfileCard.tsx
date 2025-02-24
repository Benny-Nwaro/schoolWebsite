import React from "react";

interface ProfileCardProps {
  imageSrc: string;
  reviews: string;
  name: string;
  details: { label: string; value: string }[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, reviews, name, details }) => {
  return (
    <div className="py-6 flex items-center gap-4 max-md:flex-col">
      <div className="flex flex-col shadow-xl justify-center py-20 bg-white rounded-3xl" style={{ width: "300px", height: "300px" }}>
        <img src={imageSrc} alt="Profile" className="w-52 h-52 mx-auto rounded-3xl border-4 border-yellow" />
        <div className="mx-auto text-yellow-500 text-sm font-medium">★ {reviews}</div>
      </div>
      <div className="p-2 rounded-md w-full max-w-md text-gray-800">
        <h1 className="text-lg font-medium text-gray-500">
          Send a message to <span className="block text-5xl font-bold text-gray-800">{name}</span>
        </h1>
        <hr className="my-2 border-gray-300" />
        <div className="space-y-4">
          {details.map((detail, index) => (
            <div className="flex justify-between" key={index}>
              <span className="text-md text-gray-500">{detail.label}</span>
              <span className="text-md font-semibold text-gray-800">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;