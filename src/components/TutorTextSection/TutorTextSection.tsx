import React from "react";
import Button from "../Button/Button";
import "./textSection.styles.scss";
const TutorTextSection = () => {
  return (
    <div className="tutor_test_section">
      <h1>
        By using Educify web learning platform to redefine your educational
        journey for <span>success</span>, we can help you with personalized
        tutoring for test preparation, streamline your learning processes,
        ensure precise management of tutors and
        <span> educational resources </span>. Say goodbye to uncertainty and
        hello to academic success with us.
      </h1>
      <Button variant="primary" size="lg">
        Sign Up
      </Button>
    </div>
  );
};

export default TutorTextSection;
