import React from "react";
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";
import headerImg from "@/src/assets/images/search_header.png";

import "./searchPageHeader.styles.scss";

const SearchPageHeader = () => {
  return (
    <div className="teacher_search_header mt-20 pt-20">
      <div className="inner_max">
      {/* <div className="absolute inset-0 h-2/3 bg-black bg-opacity-50"></div> */}
        <div className="row">
          <div className="col">
            <h1>Master Algebraic Concepts with Educify's Expert Classes!</h1>
            <p>
              Our algebra classes cover a wide range of topics, from basic
              operations and linear equations to quadratic functions,
              inequalities, and beyond. Whether you're a beginner looking to
              build a solid foundation in algebra or an advanced learner seeking
              to master advanced topics, our expert instructors will guide you
              every step of the way.
            </p>
            {/* <LandingSearchBar className="tutor_search_input" /> */}
            <LandingSearchBar
              className="nav_search_inner tutors_search_input"
              selectClassName1="nav_select"
              selectClassName2="nav_select"
              placeHolder1="class"
              placeHolder2="Tutor's location"
              // buttonIcon
              customStylesProps={true}
            />
            <div className="image_mobile">
              <img src={headerImg.src} alt="" />
            </div>
          </div>
          <div className="image">
            <img src={headerImg.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageHeader;
