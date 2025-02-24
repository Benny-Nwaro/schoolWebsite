"use client"
import React, { useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Slider from "react-slick";
import "./lessonPackages.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowForward,
  IoMdClose,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import LessonPackage from "../LessonPackage/LessonPackage";

const LessonPackages = ({
  setShowPackages,
  setSelectedPackage,
  selectedPackage,
  setShowBookingFlexible,
  setShowBookingWeekly,
}: {
  setShowPackages: (showPackages: boolean) => void;
  setSelectedPackage: (selectedPackage: string) => void;
  selectedPackage: string;
  setShowBookingFlexible: (showBooking: boolean) => void;
  setShowBookingWeekly: (showBooking: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked); 
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  const handleClick = ()=>{
    console.log(selectedPackage)
    if(isChecked){
      setShowBookingWeekly(false);
      setShowBookingFlexible(true);
      setShowPackages(false);
      // localStorage.setItem("packages", JSON.stringify(packages))

    }
    else{
      setShowBookingWeekly(true);
      setShowBookingFlexible(false);
      setShowPackages(false);
    }
  }
  
  const packageStructure ={
    weekly:{
      first:"Monthly (4 Lessons)",
      second:"Bi-Monthly (8 Lessons)",
      third:"Quarterly (13 Lessons)"

    },
    flexible:{
      first:"Lite (4 Lessons)",
      second:"Standard (8 Lessons)",
      third:"Premium (13 Lessons)"

    }
  }
  const packages={
    weeklyPackage:{
      packageName:{
        plan:"Weekly",
        monthlyPackage:{
          name:"monthly",
          numberOfLessons:4,
          packagePrices:["12", "11", "8"]

        },
        biMonthly:{
          name:"Bi-monthly",
          numberOfLessons:8,
          packagePrices:["24", "22", "15"]

        },
        quaterly:{
          name:"Quaterly",
          numberOfLessons:13,
          packagePrices:["48", "44", "35"]

        }
      },

    },
    flexiblePackage:{
      packageName:{
        plan:"Flexible",
        lite:{
          name:"Lite",
          numberOfLessons:4,
          packagePrices:["12", "11", "8"]

        },
        standard:{
          name:"Standard",
          numberOfLessons:8,
          packagePrices:["24", "22", "15"]

        },
        premium:{
          name:"Premium",
          numberOfLessons:13,
          packagePrices:["48", "44", "35"]

        }
      },

    }
  }
 
  return (
    <div className="packages_modal">
      <div className="lesson_packages_container">
        <div className="header">
          <IoMdClose className="close" onClick={() => setShowPackages(false)} />

          <div className="col">
            <h1>Lesson packages</h1>
            <p>Select a preferred lesson package</p>
            <div className="select">
              <select>
                <option>Online</option>
                <option>Student Place</option>
                <option>Teacher Place</option>
              </select>
            </div>
          </div>
          <div className="col">
            <ToggleSwitch name="toggle" label="" checked={isChecked} onChange={handleCheckboxChange} id="packages" />
          </div>
          <div className="col text">
            <p>
              The <b>weekly</b> schedule allows you to attend your classes on
              the same day every week. Switch to the <b>flexible</b>schedule if
              you wish to take your classes whenever you want
            </p>
          </div>
        </div>

        <div className="packages">
          <div className="package_col">
            <div className="package_row">
              <span>{isChecked?packageStructure.flexible.first:packageStructure.weekly.first}</span>
              <IoIosArrowForward style={{ color: "#9193A5" }} />
            </div>
            <div className="package_row">
              <span>{isChecked?packageStructure.flexible.second:packageStructure.weekly.second}</span>
              <IoIosArrowForward style={{ color: "#9193A5" }} />
            </div>
            <div className="package_row">
              <span>{isChecked?packageStructure.flexible.third:packageStructure.weekly.third}</span>
              <IoIosArrowForward style={{ color: "#9193A5" }} />
            </div>
          </div>
          <div className="packages_slider">
            <Slider {...settings}>
              <div className="prices_col">
                <LessonPackage
                  setSelectedPackage={setSelectedPackage}
                  packages={isChecked?packages.flexiblePackage.packageName.lite.packagePrices: packages.weeklyPackage.packageName.monthlyPackage.packagePrices}
                  selectedPackage={selectedPackage}
                  lessonTime="30 mins"
                />
              </div>
              <div className="prices_col">
                <LessonPackage
                  setSelectedPackage={setSelectedPackage}
                  packages={isChecked?packages.flexiblePackage.packageName.standard.packagePrices: packages.weeklyPackage.packageName.biMonthly.packagePrices}
                  selectedPackage={selectedPackage}
                  lessonTime="45 mins"
                />
              </div>
              <div className="prices_col">
                <LessonPackage
                  setSelectedPackage={setSelectedPackage}
                  packages={isChecked?packages.flexiblePackage.packageName.premium.packagePrices: packages.weeklyPackage.packageName.quaterly.packagePrices}
                  selectedPackage={selectedPackage}
                  lessonTime="60 mins"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="packages_button">
          <div className="btn_col">
            <IoMdInformationCircleOutline />
            <span className="w-2/3">Each lesson will last 30 minutes, and you have a total of 4 lessons that can be scheduled at any preferred date and time of your choosing.</span>
          </div>
          <Button
          className={`bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition hover:scale-105`}
            onClick={handleClick}
            size="md"
            disabled={!selectedPackage}
          >
            Next <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonPackages;
