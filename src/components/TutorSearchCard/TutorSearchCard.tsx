"use client";
import "./TutorSearchCard.styles.scss";
import tutor from "@/src/assets/images/tutor.png";
import verified from "@/src/assets/svg/verified.svg";
import star from "@/src/assets/svg/gold-start.svg";
import Image from "next/image";
import Button from "../Button/Button";

import location from "@/src/assets/svg/location.svg";
import bag from "@/src/assets/svg/bag.svg";
import pet from "@/src/assets/svg/pet.svg";
import studentgroup from "@/src/assets/svg/studentgroup.svg";
import TutorSearchCardPreview from "../TutorSearchCardPreview/TutorSearchCardPreview";
import { useState } from "react";

const TutorSearchCard = ({ showPreview, index, setShowPreview }: any) => {
  return (
    <>
      {showPreview === index && <TutorSearchCardPreview />}

      <div
        className="tutor_search_card"
        onMouseEnter={() => {
          showPreview !== index && setShowPreview(index);
        }}
      >
        <div className="row">
          <div className="column_container">
            <div className="image">
              <img src={tutor.src} alt="" />
            </div>
            <div className="column pers_info">
              <div className="name">
                <span>Guy Hawkins</span>
                <img src={verified.src} alt="" />
              </div>
              <div className="rating">
                <div className="stars">
                  {[1, 2, 3, 4].map((_, i) => (
                    <img src={star.src} alt="" key={i} />
                  ))}
                  <span>4</span>
                  <span className="reviews">(3.3k Reviews)</span>
                </div>
              </div>
              <div className="tutor_info">
                <span>
                  <img src={location.src} alt="" /> Location
                </span>
                <span>
                  <img src={bag.src} alt="" />
                  Teaches Online, In-Person
                </span>
                <span>
                  <img src={studentgroup.src} alt="" />
                  234 Students
                </span>
                <span>
                  <img src={pet.src} alt="" />
                  No pets
                </span>
              </div>
            </div>
            <div className="column_action">
              <div className="price">
                <span className="old_price">$23/hr</span>
                <span className="new_price">$23/hr</span>
              </div>
              <div className="button">
                <Button variant="primary_inverted">Ask a Question</Button>
                <Button variant="primary">Book a Free Trial</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="description">
            Customer zoom line / savvy. Growth now lift other I stakeholder.
            After leverage catching no-brainer moments functional skulls
            opportunity hands what's. Product going open race reinvent
            illustration. Field impact.
          </p>
        </div>
      </div>
    </>
  );
};

export default TutorSearchCard;
