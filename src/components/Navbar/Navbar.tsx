"use client";

import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaGlobe,
  FaHeart,
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import NavLogoContainer from "../NavLogoContainer/NavLogoContainer";
import codingIcon from "@/src/assets/images/codingIcon.png";
import musicIcon from "@/src/assets/images/musicIcon.png";
import mathIcon from "@/src/assets/images/mathIcon.png";
import languageIcon from "@/src/assets/images/languageIcon.png";
import STEMIcon from "@/src/assets/images/STEMIcon.png";
import PreKIcon from "@/src/assets/images/PreKIcon.png";
import GradeIcon from "@/src/assets/images/GradeIcon.png";
import PlayIcon from "@/src/assets/images/playIcon.png";
import Link from "next/link";
import { usePathname } from "next/navigation";




const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)
  const path = usePathname()
  const pathname = path.split("/")[2]


  useEffect(()=>{
    // console.log(path.split("/")[1])
    
    if(pathname ==="signIn" || pathname === "register" || path.split("/")[1] ==="message" ){
      setShowNavbar(true)
    }
    else{
      setShowNavbar(false)
    }
  })
  const skills = [
    {
      icon: codingIcon, // Replace with your actual path to the icon
      title: "Coding",
      description: "Build essential tech skills for the future.",
      color: "text-red-500",
      url: "/coding"
    },
    {
      icon: musicIcon, // Replace with your actual path to the icon
      title: "Music",
      description: "Explore creativity through rhythm and melody.",
      color: "text-purple-500",
      url: "/music"

    },
    {
      icon: mathIcon, // Replace with your actual path to the icon
      title: "Math",
      description: "Strengthen problem-solving and analytical abilities.",
      color: "text-yellow-500",
      url: "/mathematics"
    },
    {
      icon: languageIcon, // Replace with your actual path to the icon
      title: "Language",
      description: "Enhance communication with global language skills.",
      color: "text-indigo-500",
      url: "/language"
    },
    {
      icon: STEMIcon, // Replace with your actual path to the icon
      title: "STEM",
      description:
        "Sciences, Technologies, Engineering and Mathematics.",
      color: "text-blue-500",
      url: "/STEM"
    },
  ];

  const grades = [
    {
      icon: PreKIcon, // Replace with the correct icon path
      title: "Pre K to Grade 3",
    },
    {
      icon: GradeIcon, // Replace with the correct icon path
      title: "Grade 4 to 8",
    },
    {
      icon: PlayIcon, // Replace with the correct icon path
      title: "Grade 9 to 12",
    },
  ];

  return (
    <nav hidden={showNavbar} className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 lg:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <NavLogoContainer />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-white shadow-lg lg:shadow-none lg:static lg:w-auto lg:flex lg:items-center lg:space-x-8 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
              {/* Subjects Menu */}
              <li className="group relative cursor-pointer px-6 py-3 lg:py-0 lg:px-0 text-base">
            <div
              className="flex items-center hover:text-blue-500"
              onClick={() => setSubjectsOpen(!subjectsOpen)}
            >
              <span>Subjects</span>
              {subjectsOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </div>
            {subjectsOpen && (
              <div className="absolute bg-white shadow-lg py-2 mt-2 rounded z-50 max-md:mr-5">
                <div className="flex flex-col space-y-12 max-w-xl p-4 bg-white shadow-2xl rounded-lg">
                  {skills.map((skill, index) => (
                    <a
                      key={index}
                      href={skill.url}
                      className="flex items-start space-x-8 max-md:space-x-2 hover:scale-105 transition-transform"
                    >
                      <div
                        className={`w-10 h-10 max-md:w-8 flex items-center justify-center ${skill.color}`}
                      >
                        <img
                          src={skill.icon.src}
                          alt={`${skill.title} Icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 max-md:text-sm">
                          
                          {skill.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-nowrap max-md:text-xs max-md:text-wrap">{skill.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
            {/* Grades Menu */}
            <li className="group relative cursor-pointer px-6 py-3 lg:py-0 lg:px-0 text-base">
            <div
              className="flex items-center hover:text-blue-500"
              onClick={() => setGradesOpen(!gradesOpen)}
            >
              <span>Grades</span>
              {gradesOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </div>
            {gradesOpen && (
              <div className="absolute bg-white shadow-lg py-2 mt-2 rounded">
                <div className="flex flex-col space-y-10 max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
                  {grades.map((grade, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 hover:scale-105 transition-transform"
                    >
                      <div className="w-10 h-10 max-md:w-5 flex-shrink-0 text-blue-500">
                        <img
                          src={grade.icon.src}
                          alt={`${grade.title} Icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 text-nowrap max-md:text-lg max-md:font-medium">
                        {grade.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
         
          <li className="px-6 py-3 lg:py-0 lg:px-0">
            <a href="/pricing" className="hover:text-blue-500">
              Pricing
            </a>
          </li>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex flex-col items-center space-y-4 py-4 border-t">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-4/5">
              Become a Tutor
            </button>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-4/5">
              Book a free trial
            </button>
          </div>
        </ul>

        {/* Right-side Actions */}
        <div className="hidden lg:flex items-center space-x-6 text-base">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Become a Tutor
          </button>
          <div className="flex items-center text-gray-600 space-x-2">
            <FaPhoneAlt />
            <span>+1 888-252-9485</span>
          </div>
          <div className="flex items-center">
            <FaGlobe className="text-gray-600 mr-2" />
            <select className="bg-transparent text-gray-800 border-none focus:outline-none">
              <option value="en">EN/USD</option>
              <option value="es">ES/EUR</option>
            </select>
          </div>
          <button className="text-gray-600 p-2 hover:text-blue-500">
            <FaHeart />
          </button>
          <button className="text-gray-600 p-2 hover:text-blue-500">
            <FaQuestionCircle />
          </button>
          <Link href="/auth/signIn" className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Sign in
          </Link>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Book a free trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
