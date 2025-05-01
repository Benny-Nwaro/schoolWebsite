"use client";

import AcademicTutoring from "@/src/components/Categories/AcademicTutoring";
import CategoryMenu from "@/src/components/Categories/CategoryMenu";
import ComputingSection from "@/src/components/Categories/ComputingSection";
import HeroSection from "@/src/components/Categories/HeroSection";
import LanguagesSection from "@/src/components/Categories/LanguagesSection";
import Mathematics from "@/src/components/Categories/Mathematics";
import MusicSection from "@/src/components/Categories/MusicSection";
import SocialSciences from "@/src/components/Categories/SocialSciences";
import FAQSection from "@/src/components/FAQSection/FAQSection";






export default function Home() {
  
  return (
      <main>
        <HeroSection/>

        <div className="flex flex-row">
          <div className="mx-auto">
            <CategoryMenu/>
          </div>
          <div className="flex flex-col space-y-10">
            <MusicSection/>
            <LanguagesSection/>
            <ComputingSection/>
            <SocialSciences/>
            <AcademicTutoring/>
            <Mathematics/>
          </div>
        </div>
        <FAQSection/>
      </main>
   
  );
}
