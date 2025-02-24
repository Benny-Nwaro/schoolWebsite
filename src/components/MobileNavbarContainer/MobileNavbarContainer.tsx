"use client";
import { useState } from "react";
import menuMobile from "@/src/assets/svg/burger-black.svg";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const MobileNavbarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="mobile_menu">
        <img src={menuMobile.src} alt="menu" onClick={() => setIsOpen(true)} />
      </div>
    </>
  );
};

export default MobileNavbarContainer;
