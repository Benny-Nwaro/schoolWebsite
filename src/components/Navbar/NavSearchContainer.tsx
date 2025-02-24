"use client";
import React, { useEffect, useState } from "react";
import LandingSearchBar from "../LandingSearchBar/LandingSearchBar";
import "./navbar.styles.scss";
import { usePathname } from "next/navigation";

// import "./NavSearchContainer.css"; // Ensure this is included if you have styles
const NavSearchContainer = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observedClassName = "landing_reviews";
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observedElement = document.querySelector(
      `.${observedClassName.trim()}`
    );

    if (!observedElement) {
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(observedElement);

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [observedClassName, pathname]);

  useEffect(() => {
    if (hasScrolled && isIntersecting) {
      setShowSearchBar(true);
    } else {
      //   setShowSearchBar(false);
    }
  }, [hasScrolled, isIntersecting, pathname]);

  return (
    <div className="nav_search">
      <LandingSearchBar
        className={`nav_search_inner ${showSearchBar ? "show" : ""}`}
        selectClassName1="nav_select"
        selectClassName2="nav_select"
        placeHolder1="Class"
        placeHolder2="Location"
        buttonIcon
        customStylesProps={true}
      />
    </div>
  );
};

export default NavSearchContainer;
