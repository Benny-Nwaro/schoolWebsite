"use client";
import { useState } from "react";
import account from "@/src/assets/svg/account.svg";
import menu from "@/src/assets/svg/menu.svg";

const DropDownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="desktop_menu"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <img src={menu.src} alt="menu" />
      <img src={account.src} alt="account" />
      <div className={`dropdown_menu ${isDropdownOpen ? "show" : ""}`}>
        <span>Login</span>
        <span>Signup</span>
        <span>Settings</span>
        <div className="section_2">
          <span>Sign up as Tutor</span>
          <span>Help Center</span>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
