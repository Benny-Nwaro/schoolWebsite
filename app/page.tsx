import BlogSection from "@/src/components/BlogSection/BlogSection";
import FAQSection from "@/src/components/FAQSection/FAQSection";
import HeroSection2 from "@/src/components/HeroSection2/HeroSection2";
import HowEducifyWorks from "@/src/components/HowEducifyWorks/HowEducifyWorks";
import KeyMetrics from "@/src/components/KeyMetrics/KeyMetrics";
import PopularSubjects from "@/src/components/PopularSubjects/PopularSubjects";
import SuccessStories from "@/src/components/SuccessStory/SuccessStories";
import TutorSignUp from "@/src/components/TutorSignUp/TutorSignUp";
import HeroSection from "@/src/components/WhatStudentsSay/Hero/HeroSection";
import WhyChooseEducify from "@/src/components/WhyChooseEducify/WhyChooseEducify";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <WhyChooseEducify/>
      <KeyMetrics/>
      <HowEducifyWorks/>
      <PopularSubjects/>
      <SuccessStories/>
      <TutorSignUp/>
      <BlogSection/>
      <HeroSection2/>
      <FAQSection/>
    </main>
   
  );
}
