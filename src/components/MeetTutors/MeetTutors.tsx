"use client";
import React from "react";
import { motion } from "framer-motion";

import "./meetTutors.styles.scss";
import TutorCard from "../TutorCard/TutorCard";
import Button from "../Button/Button";
import { Tutor } from "@/src/types/types";
interface MeetTutorsProps {
  tutors: { teacher: Tutor }[];
}

const MeetTutors = ({ tutors }: MeetTutorsProps) => {
  return (
    <div className="meet_tutors">
      <h1>Meet 2k+ Tutors</h1>
      <div className="meet_tutors_container">
        <motion.div
          className="meet_tutors_cards"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust duration as needed
          }}
        >
          {tutors &&
            tutors?.map((card, i) => (
              <TutorCard key={i} tutor={card.teacher} />
            ))}
        </motion.div>
      </div>
      <div className="meet_tutor_button_container">
        <Button variant="dark" className="btn-lg">
          Book a free trial
        </Button>
      </div>
    </div>
  );
};

export default MeetTutors;
