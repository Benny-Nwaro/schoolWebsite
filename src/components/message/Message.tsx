// App.tsx
"use client";
import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import guy from "@/src/assets/images/avar4.jpeg";
import { usePathname } from "next/navigation";

interface MessageProps {
  showMessagePage: boolean;
}

const Message: React.FC<MessageProps> = ({ showMessagePage }) =>  {
  // const params = usePathname();
  // console.log(params);

  return (
    <div hidden={showMessagePage} className="  bg-white overflow-y-auto flex flex-col items-center">
      <button
        style={{ backgroundColor: "#ECECEF", marginLeft: "40px", marginTop: "40px" }}
        className="flex items-center space-x-2 px-2 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-100"
      >
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        {/* Button Text */}
        <span>Go back</span>
      </button>
      <div className="min-h-screen flex flex-col space-y-10 items-center py-10 px-4">
        <div className="max-w-3xl flex flex-col space-y-10 w-full">
          <ProfileSection />
          <MessageSection />
          <AttachmentBox />
          <MeetingScheduler />
        </div>
        <button
          className="mx-auto px-16 py-3 text-white font-medium rounded-full border-2 border-white bg-gradient-to-r from-red-500 via-purple-700 to-blue-500 shadow-lg
                 before:absolute before:inset-0 before:rounded-full before:blur-lg before:bg-gradient-to-r before:from-pink-500 before:via-red-500 before:to-blue-500 before:opacity-50"
        >
          Send message
        </button>
      </div>
    </div>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <div className="py-6 flex items-center gap-4 max-md:flex-col">
      <div style={{ width: "300px", height: "300px" }} className=" flex flex-col shadow-xl justify-center py-20 bg-white rounded-3xl">
        <img
          src={guy.src}
          alt="Profile"
          className=" w-52 h-52  mx-auto rounded-3xl border-4 border-yellow"
        />
        <div className="mx-auto text-yellow-500 text-sm font-medium">
          ★ 4.3k Reviews
        </div>
      </div>

      <div className="p-2 rounded-md w-full max-w-md text-gray-800">
        {/* Header */}
        <h1 className="text-lg font-medium text-gray-500">
          Send a message to <span className="block text-5xl font-bold text-gray-800">Guy Hawkins</span>
        </h1>

        {/* Divider */}
        <hr className="my-2 border-gray-300" />

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between ">
            <span className="text-md text-gray-500">Subject</span>
            <span className="text-md font-semibold text-gray-800">Algebra</span>
          </div>
          <div className="flex justify-between">
            <span className="text-md text-gray-500">Rate</span>
            <span className="text-md font-semibold text-gray-800">$12/hr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-md text-gray-500">Trial session (30 minutes)</span>
            <span className="text-md font-semibold text-gray-800">Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-md text-gray-500">Location</span>
            <span className="text-md font-semibold text-gray-800">Online</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Footer */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M12 8c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
            />
          </svg>
          <span>Typically replies within 30 minutes</span>
        </div>
      </div>
    </div>
  );
};

const MessageSection: React.FC = () => {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSendMessage = () => {
    alert(`Message Sent: ${message}`);
  };

  return (
    <div>
      <p className="text-md px-2 font-bold text-gray-600">Your message</p>
      <div style={{ backgroundColor: "#ECECEF" }} className=" flex flex-col bg-gray-600 rounded-3xl p-6 border-2 border-gray-300 shadow-lg max-w-3xl mx-auto">
        <div>
          <h2 className="text-lg font-semibold mb-2">Hello, Guy</h2>
          <p className="text-gray-500 text-sm mb-4">
            ex. I want to learn how to play the guitar in one month
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-20">
          <button className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            I need help with...
          </button>
          <button className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
        </div>
      </div>
      <CharacterLimitMessage />
    </div>
  );
};

const CharacterLimitMessage = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-between items-center text-sm text-gray-500 p-4">
      {/* Instruction Text */}
      <span>Please enter a message between 10 and 4,000 characters.</span>

      {/* Character Counter */}
      <span className={message.length > 4000 || message.length < 10 ? "text-red-500" : ""}>
        {message.length}/4,000
      </span>

      {/* Text Area (Hidden in Design but Functional if Needed) */}
      <textarea
        className="hidden"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={4000}
      />
    </div>
  );
};

const AttachmentBox = () => {
  return (
    <div>
      <p className="text-md px-2 font-bold text-gray-600">Add attachment</p>
      <div style={{ backgroundColor: "#ECECEF" }} className="border-2 border-dashed border-gray-300 shadow-lg rounded-xl py-3 px-3 flex items-center">
        {/* Upload Icon */}
        <div className="flex items-center justify-center bg-gray-200 rounded-full mr-4">
          <IoMdCloudUpload className="text-4xl" />
        </div>

        {/* Text Content */}
        <div className="text-gray-600 text-sm">
          <span>To add an attachment, please </span>
          <a href="/create-account" className="text-blue-500 font-medium hover:underline">
            create an account
          </a>
          <span> or </span>
          <a href="/login" className="text-blue-500 font-medium hover:underline">
            login
          </a>
          .
        </div>
      </div>
    </div>
  );
};

const MeetingScheduler = () => {
  const [timeZone, setTimeZone] = useState("(UTC +01:00 West Central Africa)");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className=" w-full mx-auto py-4 rounded-md ">
      <label className="block px-2 mb-2 text-md font-bold text-gray-600">
        When would you like to meet?
      </label>
      <div className="space-y-4">
        {/* Time Zone Selector */}
        <div className="relative">
          <select
            style={{ backgroundColor: "#ECECEF" }}
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className=" px-3 py-3 border rounded-md text-gray-700 bg-gray-500 border-gray-300 shadow-lg  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>(UTC +01:00 West Central Africa)</option>
            <option>(UTC +00:00 Coordinated Universal Time)</option>
            <option>(UTC -05:00 Eastern Time)</option>
            <option>(UTC +02:00 Central European Time)</option>
          </select>
        </div>

        <div className="flex flex-row space-x-5 ">
          {/* Date Picker */}
          <div className="w-full">
            <input
              style={{ backgroundColor: "#ECECEF" }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-3 border rounded-md text-gray-700 bg-gray-500 border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="DD/MM/YYYY"
            />
          </div>

          {/* Time Selector */}
          <div className="w-full">
            <select
              style={{ backgroundColor: "#ECECEF" }}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className=" w-full px-3 py-4 border rounded-md text-gray-700 bg-gray-500 border-gray-300 shadow-lg  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Select a time</option>
              <option>10:00 AM</option>
              <option>02:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
