"use client";

import AllTutorsPage from "@/app/tutors/AllTutorsPage";
import HeroSection from "@/src/components/Algebra/HeroSection";
import HeroSection2 from "@/src/components/Algebra/HeroSection2";
import { Suspense } from "react";





export default function Home() {
  
  return (
      <main>
        {/* <HeroSection/> */}
        <Suspense fallback={<p>Loading tutors...</p>}>
        <AllTutorsPage/>
        </Suspense>
      </main>
   
  );
}
