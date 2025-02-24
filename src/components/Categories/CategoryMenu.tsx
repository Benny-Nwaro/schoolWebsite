import Link from "next/link";
import React, { useState } from "react";


const CategoryMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const categories = [
    "languages",
    "computing",
    "music",
    "socialSciences",
    "mathematics",
    "academicTutoring",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    <Link href={`#${category}`}/>
    alert(`Selected category: #${category}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white sticky">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-64">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
                activeCategory === category
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
