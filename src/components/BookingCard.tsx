// import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";



interface BookingCardProps {
  date: string; // Format: "Mon, 13 May, 2024"
  time: string; // Format: "2:30 AM - 3:00 AM"
  duration: string; // Format: "30 Min"
  onChangeDuration: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  date,
  time,
  duration,
  onChangeDuration,
}) => {
  // const router = useRouter()
  // const handleNavigate = () => {
  //   router.push("/checkout");
  // };

  return (
    <div className="mx-auto w-2/6 bg-white rounded-3xl shadow-lg p-5 text-center absolute left-1/2 top-80 b -translate-x-1/2  mb-2 text-sm text-white z-50 ">
      <div className="text-gray-700 mb-2">
        <div className="flex flex-row space-x-5">
            <span className="block font-semibold text-lg ">Date:</span>
            <span>{date}</span>
        </div>     
      </div>
      <div className="text-gray-700  mb-2">
        <div className="flex flex-row space-x-5">
            <span className="block font-semibold text-lg ">Time:</span>
            <span>{time}</span>
        </div>
      </div>

      <div className="text-gray-700 font-medium mb-5">
       <div className="flex flex-row space-x-5">
       <span className="block font-semibold text-lg">Duration:</span>
        <span className="ml-5 text-blue-500 underline cursor-pointer" onClick={onChangeDuration}>
          {duration} Change
        </span>
       </div>
      </div>
      <div className="text-gray-700 font-medium w-full">
       <div className=" w-full">
       <Link
          href={"/checkout"}
          className=" bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
          >
          Book Lesson
          </Link>
       </div>
      </div>
    </div>

  );
};

export default BookingCard;
