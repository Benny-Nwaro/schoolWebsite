import Welcome from "./Welcome";
import EducifyFor from "@/src/components/EducifyFor/EducifyFor";
import TeacherHowItWorks from "../TeacherHowItWorks/TeacherHowItWorks";
import HowToRegister from "../HowToRegister/HowToRegister";
import BecomeTutorHeader from "../BecomeTutorHeader/BecomeTutorHeader";
import TutorTextSection from "../TutorTextSection/TutorTextSection";
import HelpWith from "../HelpWith/HelpWith";
import WhatStudentsSay from "../WhatStudentsSay/WhatStudentsSay";
import TutorPreference from "../TutorPreference/TutorPreference";
import WhyEducify from "../WhyEducify/WhyEducify";
import NavLessons from "../NavLessons/NavLessons";
import TeacherFaqsWrapper from "./FaqsWrapper";
import MeetTutorsWrapper from "../MeetTutors/MeetTutorsWrapper";
import TutorPreferenceWrapper from "../TutorPreference/TutorPreferenceWrapper";
import "./teacherPage.scss";
const TeacherPage = () => {
  return (
    <div>
      <NavLessons />
      <Welcome />
      <MeetTutorsWrapper />
      <EducifyFor />
      <WhatStudentsSay />
      <TutorTextSection />
      <WhyEducify />
      <HowToRegister />
      <TeacherHowItWorks />
      <HelpWith />
      <BecomeTutorHeader />
      <TeacherFaqsWrapper userType="STUDENT" />
      <TutorPreferenceWrapper />
    </div>
  );
};

export default TeacherPage;
