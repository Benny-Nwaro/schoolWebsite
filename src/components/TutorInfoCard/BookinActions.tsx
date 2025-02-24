"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import cart from "@/src/assets/svg/cart.svg";
import LessonPackages from "../LessonPackages/LessonPackages";
import BookingScheduleFlexible from "../TutorSchedule/BookingScheduleFlexible";
import BookingScheduleWeekly from "../TutorSchedule/BookingScheduleWeekly";

const BookingActions = () => {
  const [showPackages, setShowPackages] = useState(false);
  const [showBookingFlexible, setShowBookingFlexible] = useState(false);
  const [showBookingWeekly, setShowBookingWeekly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  return (
    <>
      {showPackages && (
        <LessonPackages
          setShowPackages={setShowPackages}
          setSelectedPackage={setSelectedPackage}
          selectedPackage={selectedPackage}
          setShowBookingFlexible={setShowBookingFlexible}
          setShowBookingWeekly={setShowBookingWeekly}

        />
      )}
      {showBookingFlexible && <BookingScheduleFlexible setShowBookingFlexible={setShowBookingFlexible} />}
      {showBookingWeekly && <BookingScheduleWeekly setShowBookingWeekly={setShowBookingWeekly} />}


      <div className="start_booking_buttons">
        <button onClick={() => setShowPackages(true)} className={`bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition hover:scale-105`}>
        Book a class <FaArrowRightLong />
      </button>
        {/* <Button onClick={() => setShowPackages(true)}>
          Start learning <FaArrowRightLong />
        </Button> */}
        <Button variant="secondary">
          Add lesson to cart <img src={cart.src} alt="" />
        </Button>
      </div>
    </>
  );
};

export default BookingActions;
