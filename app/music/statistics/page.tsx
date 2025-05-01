"use client";

import HeroSection from "@/src/components/Algebra/HeroSection";
import HeroSection2 from "@/src/components/Algebra/HeroSection2";
import TutorGrid from "@/src/components/Algebra/TutorGrid";
import FAQSection from "@/src/components/FAQSection/FAQSection";




export default function Home() {
  
  return (
      <main>
        <HeroSection/>
        <TutorGrid/>
        <HeroSection2/>
        <FAQSection/>
      
      </main>
   
  );
}
