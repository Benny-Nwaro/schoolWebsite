"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Educify?",
    answer:
      "Educify is an online learning platform that connects students with expert tutors for personalized, flexible learning. We offer a wide range of subjects and courses, tailored to fit your learning goals.",
  },
  {
    question: "How does Educify work?",
    answer:
      "It's simple:\n1. Select your course – Choose from various subjects like STEM, Coding, Languages, and Math.\n2. Match with a tutor – We'll pair you with an expert who fits your needs.\n3. Start learning – Access lessons, track your progress, and get feedback.",
  },
  {
    question: "Is Educify suitable for all ages?",
    answer:
      "Yes, Educify offers courses for learners of all ages, from primary school to adult learners seeking personal development.",
  },
  {
    question: "How much does it cost to join Educify?",
    answer:
      "Educify has multiple pricing plans to fit your needs. Check our Pricing section for details on Basic, Premium, and Pro plans.",
  },
  {
    question: "Can I cancel or change my subscription?",
    answer:
      "Absolutely. You can cancel anytime, or switch between plans based on your needs. We want to make sure you're getting the best learning experience possible.",
  },
  {
    question: "Are the tutors qualified?",
    answer:
      "Yes. All Educify tutors are vetted professionals with expertise in their fields. We prioritize quality education, ensuring you learn from the best.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, there is a free trial on first teaching.",
  },
  {
    question: "What subjects are available on Educify?",
    answer:
      "We offer a variety of subjects including STEM, Coding, Languages, Math, and more. Browse our course catalog to see all options.",
  },
  {
    question: "Can I learn on Educify from anywhere?",
    answer:
      "Yes, Educify is accessible globally, allowing you to learn from anywhere with an internet connection.",
  },
  {
    question: "How do I get in touch with Educify support?",
    answer:
      "You can reach us via the Contact Us section in the footer, where our support team is available to assist with any questions.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-7xl max-md:text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Find answers to frequently asked questions here, or contact our friendly
        support team for assistance.
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center text-xl font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span>
                {openIndex === index ? (
                  <span className="text-gray-500">×</span>
                ) : (
                  <span className="text-gray-500">+</span>
                )}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
