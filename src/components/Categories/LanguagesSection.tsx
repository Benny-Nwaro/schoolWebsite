import React from 'react';
import Yoruba from "@/src/assets/images/categories/Languages/yoruba.png"
import Japanese from "@/src/assets/images/categories/Languages/japanese.png"
import English from "@/src/assets/images/categories/Languages/english.png"
import Spanish from "@/src/assets/images/categories/Languages/spanish.png"



const LanguagesSection: React.FC = () => {


  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Languages</h2>
    <p className="text-gray-600 w-1/3 mb-6">
    Brush up on your conversational skills, prepare for an international exam, and dive into a new language from scratch.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="relative group">
        <img
          src={Yoruba.src}
          alt="Yoruba"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Yoruba</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={Japanese.src}
          alt="Japanese"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Japanese</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={English.src}
          alt="English"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">English</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src={Spanish.src}
          alt="Spanish"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">Spanish</span>
        </div>
      </div>
    </div>
    <div className="mt-6 text-center">
      <a
        href="/academic-tutoring"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Explore all lessons under academic tutoring &rarr;
      </a>
    </div>
  </div>
  );
};

export default LanguagesSection;
