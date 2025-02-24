"use client";

import FAQSection from "@/src/components/FAQSection/FAQSection";
import Hero from "@/src/components/Pricing/Hero";
import HowSubscriptionWorks from "@/src/components/Pricing/HowSubscriptionWorks";
import PricingSection from "@/src/components/Pricing/PricingSection";
import TestimonialCard from "@/src/components/Pricing/TestimonialCard";




export default function Home() {
  
  return (
      <main>
        <Hero/>
        <PricingSection/>
        <HowSubscriptionWorks/>
        <FAQSection/>
        <TestimonialCard/>
      
      </main>
   
  );
}
