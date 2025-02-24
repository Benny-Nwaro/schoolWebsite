"use client";

import AllTutorsPage from "@/app/tutors/AllTutorsPage";
import HeroSection from "@/src/components/Algebra/HeroSection";
import HeroSection2 from "@/src/components/Algebra/HeroSection2";
import TutorGrid from "@/src/components/Algebra/TutorGrid";
import FAQSection from "@/src/components/FAQSection/FAQSection";
import { Suspense } from "react";




export default function Home() {
  
  return (
      <main>
        <HeroSection/>
        <Suspense fallback={<div>Loading...</div>}>
        <AllTutorsPage/>
        </Suspense>
      
      </main>
   
  );
}
