import React from 'react';
import Tutor1 from "@/src/assets/images/mathematics/Algebra/T1.png";
import Tutor2 from "@/src/assets/images/mathematics/Algebra/T2.png";
import Tutor3 from "@/src/assets/images/mathematics/Algebra/T3.png";
import Tutor4 from "@/src/assets/images/mathematics/Algebra/T4.png";
import Tutor5 from "@/src/assets/images/mathematics/Algebra/T5.png";
import Tutor6 from "@/src/assets/images/mathematics/Algebra/T6.png";
import Tutor7 from "@/src/assets/images/mathematics/Algebra/T7.png";
import Tutor8 from "@/src/assets/images/mathematics/Algebra/T8.png";
import TutorCard from './TutorCard';



const TutorGrid: React.FC = () => {
  const tutors = [
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor1,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor2,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor3,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor4,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor5,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor6,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor7,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
    {
      name: 'Guy Hawkins',
      price: '$14/h',
      experience: '4 years experience',
      role: 'Math Tutor',
      location: 'Online, Nigeria',
      reviews: '4 (4.3k Reviews)',
      image: Tutor8,
      description: "Shark speed respectively banner plan after latest last unit optimal. Hurting player-coach back your land nor strategic build innovation."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 md:px-12 ">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
        Our selection of the best Algebra teachers
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 sm:gap-4 md:gap-6">
        {['Location', 'Class Location', 'Price Range', 'Gender', 'Experience', 'Rating', 'Availability'].map(
          (filter) => (
            <button
              key={filter}
              className="bg-blue-200 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full hover:bg-blue-400 transition"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} {...tutor} image={tutor.image.src} />
        ))}
      </div>

      {/* View All Tutors Button */}
      <div className="text-center mt-8">
        <button className="px-6 sm:px-8 md:px-12 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow-lg hover:bg-gradient-to-r transition duration-200">
          View all tutors
        </button>
      </div>
    </div>
  );
};

export default TutorGrid;
