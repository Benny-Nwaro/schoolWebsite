"use client";
import { useState } from "react";
import { Faq } from "@/src/types/types";
import "./teacherFaqs.styles.scss";
import TeacherFaq from "../TeacherFaq/TeacherFaq";
// import TeacherFaq from "../TeacherFaq/TeacherFaq";
const TutorFaqs = () => {
  const faqs: Faq[] = [
    {
      question: "How to use",
      answer: "hjereh asdh asjd asdasdha s",
      id: "1",
    },
    {
      question: "How to use",
      answer: "hjereh asdh asjdha s",
      id: "2",
    },
    {
      question: "How to use",
      answer: "hjereh asdh asjdha s",
      id: "3",
    },
    {
      question: "How to use",
      answer: "hjereh asdh asjdha s",
      id: "4",
    },
  ];
  const [activeFaq, setActiveFaq] = useState("");
  const toggleFaq = (id: string) => {
    if (id === activeFaq) setActiveFaq("");
    else setActiveFaq(id);
  };
  return (
    <div className="about_tutor tutor_info_container tutor_rates fq_section">
      <h1>FAQs</h1>
      <div className="teacher_faqs">
        {faqs.map((faq, index) => (
          <TeacherFaq
            {...faq}
            id={faq.id!}
            key={index}
            toggleFaq={toggleFaq}
            isActive={activeFaq === faq.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorFaqs;
