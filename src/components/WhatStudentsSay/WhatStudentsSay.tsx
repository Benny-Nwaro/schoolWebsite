"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StudentReviewCardIE } from "@/src/types/types";
import "./studentSay.styles.scss";
import tutImage from "../MeetTutors/tutor.png";
import StudentReviewCard from "../StudentReviewCard/StudentReviewCard";

const WhatStudentsSay = () => {
  const data: StudentReviewCardIE[] = [
    {
      name: "Robert Fox asdjkahsdkj hasdjkhaskjdh akjh sdkjash dkjasd hjkasdh",
      rating: 4,
      text: "No sdg jhasgdhjlicy break management boardroom. Regroup rehydrate in.",
      image: {
        url: tutImage.src,
      },
    },
    {
      name: "Robert Fox",
      rating: 4,
      text: "No rehydrate in.",
      image: {
        url: tutImage.src,
      },
    },
    {
      name: "Robert Fox",
      rating: 4,
      text: "No policy break management boardroom. Regroup rehydrate in.",
      image: {
        url: tutImage.src,
      },
    },
    {
      name: "Robert Fox",
      rating: 4,
      text: "No policy break management boardroom. Regroup rehydrate in.",
      image: {
        url: tutImage.src,
      },
    },
  ];
  return (
    <div className="what_students_say">
      <h1>What our students say</h1>
      <h3>Seamless Learning, Effortlessly Yours Today</h3>
      <div className="review_cards_container">
        {[...Array(3)].map((_, rowIndex) => {
          const initialX = rowIndex % 2 === 0 ? -1 : -1120;
          const { ref, inView } = useInView({
            threshold: 0.1,
          });

          return (
            <motion.div
              className="review_cards"
              key={rowIndex}
              ref={ref}
              initial={{ x: initialX }}
              animate={{
                x: inView ? (rowIndex % 2 === 0 ? "-100%" : "100%") : initialX,
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              }}
            >
              {[...data, ...data, ...data].map((el, i) => (
                <StudentReviewCard {...el} key={i + rowIndex * data.length} />
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatStudentsSay;
