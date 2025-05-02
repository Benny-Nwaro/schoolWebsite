"use client";
import React, { useState } from "react"; // Import useState
import { motion } from "framer-motion";

import "./meetTutors.styles.scss";
import TutorCard from "../TutorCard/TutorCard";
import Button from "../Button/Button";
import { Tutor } from "@/src/types/types";
// import Link from "next/link"; // No longer needed for this button
import TutorSelectionModal from "../bookFreeTrial/TutorSelectionModal"; // Import the modal

interface MeetTutorsProps {
  tutors: { teacher: Tutor }[];
}

const MeetTutors = ({ tutors }: MeetTutorsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
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
      {/* <Link href="/freetrial" passHref> */}
        <Button
          variant="dark"
          className="btn-lg"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        >
          Book a free trial
        </Button>
        {/* </Link> */}
      </div>
      <TutorSelectionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MeetTutors;
