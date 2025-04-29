"use client";
import { Faq } from "@/src/types/types";
import { useState } from "react";
import TeacherFaq from "../TeacherFaq/TeacherFaq";

import "./teacherFaqs.styles.scss";

const TeacherFaqs = ({
  className,
  title,
  faqs,
}: {
  className?: string;
  title?: string;
  faqs: Faq[];
}) => {
  const [activeFaq, setActiveFaq] = useState("");
  const toggleFaq = (id: string) => {
    if (id === activeFaq) setActiveFaq("");
    else setActiveFaq(id);
  };

  return (
    <div
      className={`teacher_signup_container_faq ${className ? className : ""}`}
    >
      <div className="faq-container">
        <h1>{title ? title : "FAQs"}</h1>
        <div className="faq">
          {faqs &&
            faqs.map((faq, index) => (
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
    </div>
  );
};

export default TeacherFaqs;
