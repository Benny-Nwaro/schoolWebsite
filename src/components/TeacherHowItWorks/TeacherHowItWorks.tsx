import React from "react";
import hiw1 from "../../assets/images/hiw1.png";
import hiw2 from "../../assets/images/hiw2.png";
import hiw3 from "../../assets/images/hiw3.png";

import "./teacherHowItWorks.styles.scss";

const TeacherHowItWorks = () => {
  const rows = [
    {
      image: hiw1.src,
      title: "Get matched with tutors",
      text: "You will be connected with tutors based on your needs and their expertise. You'll be able to message them once the match is made",
    },
    {
      image: hiw2.src,
      title: "Connect with tutors before the lesson",
      text: "With our messaging system you can ask tutors about their expertise and tell them how they can uniquely be of help",
    },
    {
      image: hiw3.src,
      title: "Log on and start learning",
      text: "At the time of the lesson, you can log into your 1-on-1 virtual classroom via Jitsi",
    },
  ];
  return (
    <div className="teacher_how_it_works">
      <h1>How it Works</h1>
      <div className="image_rows">
        {rows.map((el, i) => (
          <ImageRow key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

const ImageRow = ({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) => {
  return (
    <div className="image_row">
      <div className="image_row_text">
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default TeacherHowItWorks;
