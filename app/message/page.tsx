"use client"
import React, { useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { fetchTutorById } from "@/src/lib/tutors/tutors";
import SignUpForm from "@/src/components/auth/SignUpForm";
import { url } from "inspector";




const page: React.FC = () => {
  const [tutor, setTutor] = useState()
  const [isModalVisible, setModalVisible] = useState(true);

  
  useEffect(()=>{
    const fetchTutor = async()=>{
   
      try {
        const id = window.location.href.split("?")[1]
        const user = await fetchTutorById(id) 
        user && setTutor(user)
      } catch (error) {
        console.log(error)
      }

    }
    fetchTutor()

  },[])

  const handleSubmit = ()=>{
    
  }

 
  return (
   <div className="mt-20">
      <button style={{backgroundColor:"#ECECEF", marginLeft:"40px", marginTop:"40px"}} className="flex items-center space-x-2 px-2 py-2  bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm hover:bg-gray-100">
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
        <span>Go back</span>
      </button>
     <div className="min-h-screen flex flex-col space-y-10 items-center py-10 px-4">
      <div className="max-w-3xl flex flex-col space-y-10 w-full ">
        <ProfileSection name="Aroh" lastname="Ben" imageUrl="/images/image.png"/>
        <MessageSection name="Ben"/>
        <AttachmentBox/>
        <MeetingScheduler/>
        {/* <FullPageModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        tutor={tutor}
      /> */}
     
      </div>
      <button onClick={handleSubmit} className=" mx-auto px-16  py-3 text-white font-medium rounded-full border-2 border-white bg-gradient-to-r from-red-500 via-purple-700 to-blue-500 shadow-lg"
                 
    >
      Send message
    </button>
    </div>
   </div>
  );
};

interface ProfileSectionProps {
  name: string;
  lastname:string;
  imageUrl: string;

}


const ProfileSection: React.FC<ProfileSectionProps> = ({ name, lastname, imageUrl }) => {
  return (
    <div className="py-6 flex items-center gap-4 max-md:flex-col">
      <div
        style={{ width: "300px", height: "300px" }}
        className="flex flex-col pb-10 shadow-xl justify-center  bg-white rounded-3xl"
      >
        <img
          src={imageUrl}
          alt="Profile"
          className=" w-full h-full rounded-3xl   border-4 border-yellow"
        />
        <div className="mx-auto text-yellow-500 text-sm font-medium">
          ★ 4.3k Reviews
        </div>
      </div>

      <div className="p-2 rounded-md w-full max-w-md text-gray-800">
        {/* Header */}
        <h1 className="text-lg font-medium text-gray-500">
          Send a message to{" "}
          <span className="block lg:text-5xl font-bold text-gray-800 max-md:text-xl">{name} {lastname}</span>
        </h1>

        {/* Divider */}
        <hr className="my-2 border-gray-300" />

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
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

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  tutor: {
    user: {
      name: string;
      lastName: string;
      profileImage: { url: string };
    };
  };
}
const FullPageModal: React.FC<ModalProps> = ({ isVisible, onClose, tutor }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="relative rounded-lg ">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Modal Content */}
        <div className="p-6">
          <SignUpForm
            name={tutor?.user?.name}
            lastname={tutor?.user?.lastName}
            imageUrl={tutor?.user?.profileImage?.url}
          />
        </div>
      </div>
    </div>
  );
};

interface MessageSectionProps {
  name: string;

}
const MessageSection: React.FC<MessageSectionProps> = ({name}) => {
  const [message, setMessage] = useState<string>("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent || ""
    setMessage(text)
  };

  return (
    <div>
        <p className="text-md px-2 font-bold text-gray-600">Your message</p>
        <div style={{backgroundColor:"#ECECEF"}} className=" flex flex-col bg-gray-600 rounded-3xl p-6 border-2 border-gray-300 shadow-lg max-w-3xl mx-auto">
        <div >
          <h2 className="text-lg font-semibold mb-2">Hello, {name}</h2>
          <p className="text-gray-500 text-sm mb-4">
           {message ||  "ex. I want to learn how to play the guitar in one month"}  
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-20">
          <button onClick={handleSendMessage} className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            I need help with...
          </button>
          <button onClick={handleSendMessage} className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button onClick={handleSendMessage} className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button onClick={handleSendMessage} className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
          <button onClick={handleSendMessage} className="px-2 py-2 border-2 border-blue-500 text-gray-500 rounded-full hover:bg-blue-100">
            Lorem ipsum set dolor amet...
          </button>
        </div>
      </div>
      <CharacterLimitMessage/>
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
        <div style={{backgroundColor:"#ECECEF"}}  className="border-2 border-dashed border-gray-300 shadow-lg rounded-xl py-3 px-3  flex items-center">
          {/* Upload Icon */}
          <div className="flex items-center justify-center  bg-gray-200 rounded-full mr-4">
            <IoMdCloudUpload  className="text-4xl"/>
          </div>

        {/* Text Content */}
        <div className="text-gray-600 text-sm">
          <span>To add an attachment, please </span>
          <a href="" className="text-blue-500 font-medium hover:underline">
            create an account
          </a>
          <span> or </span>
          <a href="/auth/signIn" className="text-blue-500 font-medium hover:underline">
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
    <div className=" w-full mx-auto py-4  rounded-md ">
      <label className="block px-2 mb-2 text-md font-bold text-gray-600">
        When would you like to meet?
      </label>
      <div className="space-y-4">
        {/* Time Zone Selector */}
        <div className="w-full ">
          <select
          style={{backgroundColor:"#ECECEF"}}
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="w-full pr-5 py-3 border rounded-md text-gray-700 bg-gray-500 border-gray-300 shadow-lg  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
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
          style={{backgroundColor:"#ECECEF"}}
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
          style={{backgroundColor:"#ECECEF"}}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className=" w-full px-3 py-4 border rounded-md text-gray-700 bg-gray-500 border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select time</option>
            <option>08:00 AM</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>01:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
          </select>
        </div>
        </div>

    
      </div>
    </div>
  );
};

export default page;
