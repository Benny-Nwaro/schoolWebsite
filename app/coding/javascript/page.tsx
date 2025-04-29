"use client";

import AllTutorsPage from "@/app/tutors/AllTutorsPage";
import HeroSection from "@/src/components/Algebra/HeroSection";
import { Suspense } from "react";




export default function Home() {
  
  return (
      <main>
        <HeroSection/>
        <Suspense fallback={<div>Loading...</div>}>
        <AllTutorsPage/>
        </Suspense>
        {/* <TutorGrid/>
        <HeroSection2/>
        <FAQSection/> */}
      
      </main>
   
  );
}
