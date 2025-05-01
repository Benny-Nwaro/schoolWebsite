import Button from "../Button/Button";

import logo from "@/src/assets/svg/logo.svg";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import howitworks from "@/src/assets/svg/howitworks.svg";
import blog from "@/src/assets/svg/blog.svg";
import favorites from "@/src/assets/svg/favorites.svg";
import categories from "@/src/assets/svg/categories.svg";
import aboutus from "@/src/assets/svg/aboutus.svg";

import "./mobile_navbar.styles.scss";
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";

const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (prev: boolean) => void;
}) => {
  const data = [
    {
      text: "How it works",
      image: howitworks,
    },
    {
      text: "About Us",
      image: aboutus,
    },
    {
      text: "Blog",
      image: blog,
    },
    {
      text: "Favorites",
      image: favorites,
    },
    {
      text: "Categories",
      image: categories,
    },
  ];

  return (
    <div className={`mobile_navbar ${isOpen ? "active" : ""}`}>
      <div className="header">
        <img src={logo.src} alt="" />
        <IoCloseOutline onClick={() => setIsOpen(false)} />
      </div>
      {/* <div className="search_container">
        <div className="search">
          <CiSearch className="search_ico" />
          <input type="text" placeholder="Search for a class or tutor" />
        </div>
      </div> */}
      <div className="nav_search_mobile">
        <LandingSearchBar
          className="nav_search_inner"
          selectClassName1="nav_select2"
          selectClassName2="nav_select2"
          placeHolder1="Class"
          placeHolder2="Location"
          buttonIcon
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="links">
        {data.map((el, i) => (
          <div className="link" key={i}>
            <img src={el.image.src} alt="" />
            <span>{el.text}</span>
          </div>
        ))}
      </div>
      <div className="contact_links">
        <div className="contact">
          <FaPhoneAlt
            style={{
              color: "#50565c",
            }}
          />
          <span>+1 888-252-9485</span>
        </div>
        <div className="contact">
          <BsGlobe2 />
          <span>EN/NGN</span>
        </div>
      </div>
      <div className="buttons">
        <Button variant="secondary" size="lg">
          Sign Up
        </Button>
        <Button size="lg">Sign in</Button>
      </div>
      <div className="single_btn">
        <Button variant="dark" size="lg">
          Become a Tutor
        </Button>
      </div>
      <div className="credits">
        <p>© 2024 Educify. All rights reserved.</p>
      </div>
    </div>
  );
};
export default MobileNavbar;
