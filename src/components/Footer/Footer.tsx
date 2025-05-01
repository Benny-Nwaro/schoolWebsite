"use client";

import React, { useEffect, useState } from "react";
import NewLetter from "./NewLetter";
import "./footer.styles.scss";
import logoWhite from "../../assets/svg/logo-white.svg";
import mail from "../../assets/svg/mail.svg";
import phone from "../../assets/svg/phone.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import { usePathname } from "next/navigation";


const Footer = () => {
  const [showFooter, setShowFooter] = useState(false)
  const path = usePathname()
  const pathname = path.split("/")[2]
  
  useEffect(()=>{
    if(pathname ==="signIn" || pathname === "register" || path.split("/")[1] ==="message" ){
      setShowFooter(true)
    }
    else{
      setShowFooter(false)
    }  })

  return (
    <div hidden={showFooter} className="footer_container">
      <div className="">
        <NewLetter />
        <footer className="inner_max">
          <div className="col">
            <img className="logo" src={logoWhite.src} alt="" />
            <p>
              Educify inc is a global Educational Technology company focused on
              making education accessible to everyone in every subject possible
              and in all manner of ways; be it online, in-person, or as a course
              that is accessible anywhere in the world. At Educify, we pride
              ourselves in being able to connect teachers with students in all
              possible ways safely and affordably.
            </p>
          </div>
          <div className="footer_links_container">
            <div className="footer_links">
              <h1 className="text-white">Company</h1>
              <span>About Us</span>
              <span>Terms of Service</span>
              <span>Teachers</span>
              <span>Students</span>
              <a href="/categories">Categories</a>

            </div>
            <div className="footer_links">
              <h1 className="text-white" >Support</h1>
              <span>Help & Support</span>
              <span>Contact Us</span>
              <span>FAQs</span>
              <span className="with_img">
                <img src={phone.src} alt="" />
                +1 888-2529-485
              </span>
              <span className="with_img">
                <img src={mail.src} alt="" />
                Support@educify.org
              </span>
            </div>
          </div>
        </footer>
      </div>
      <FooterSocialMedia />
    </div>
  );
};

const FooterSocialMedia = () => {
  return (
    <div  className="footer_socials">
      <div className="col">
        <span className="text-white font-medium">© {new Date().getFullYear()} Educify. All rights reserved.</span>
      </div>
      <div className="col_2">
        <div className="footer_social_links">
          <div className="terms">
            <a href="#" className="text-white font-medium text-md">Terms & Conditions</a>
            <a href="#" className="text-white font-medium text-md">Privacy Policy</a>
          </div>
        </div>
        <div className="links">
          <FaYoutube />
          <FaVimeoV />
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaPinterest />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
