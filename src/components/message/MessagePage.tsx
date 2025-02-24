"use client";
import React from "react";
import ProfileCard from "@/src/components/message/ProfileCard";
import ReusableButton from "@/src/components/message/ReusableButton";
import MessageInput from "@/src/components/message/MessageInput";

const MessagePage: React.FC = () => {
  const profileDetails = [
    { label: "Subject", value: "Algebra" },
    { label: "Rate", value: "$12/hr" },
    { label: "Trial session (30 minutes)", value: "Free" },
    { label: "Location", value: "Online" },
  ];

  return (
    <div className="message-overlay">
      <div className="overlay-content">
        <ReusableButton
          text="Go Back"
          style={{ backgroundColor: "#ECECEF", marginLeft: "40px", marginTop: "40px" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          }
        />
        <div className="min-h-screen flex flex-col space-y-10 items-center py-10 px-4">
          <ProfileCard
            imageSrc="/path-to-image"
            reviews="4.3k Reviews"
            name="Guy Hawkins"
            details={profileDetails}
          />
          <MessageInput />
          <ReusableButton
            text="Send Message"
            style={{
              backgroundColor: "linear-gradient(to right, red, purple, blue)",
              padding: "1rem 4rem",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
