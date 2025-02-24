"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import earth from "@/src/assets/svg/earth.svg";
const CountryDropdownContainer = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="country_dropdown"
      onMouseEnter={(e) => setShow(true)}
      onMouseLeave={(e) => setShow(false)}
    >
      <img src={earth.src} alt="" />
      <span>{"EN"}/USD</span>
      <IoIosArrowDown />
      <CountryDropdown isDropdownOpen={show} />
    </div>
  );
};

export default CountryDropdownContainer;
