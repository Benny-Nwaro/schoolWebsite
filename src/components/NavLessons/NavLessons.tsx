"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./navLesson.styles.scss";
import math from "../../assets/svg/math.svg";
import gym from "../../assets/svg/gym.svg";
import languages from "../../assets/svg/languages.svg";
import examanation from "../../assets/svg/examanation.svg";
import culinary from "../../assets/svg/culinary.svg";
import life from "../../assets/svg/life.svg";
import driving from "../../assets/svg/driving.svg";
import computing from "../../assets/svg/computing.svg";
import health from "../../assets/svg/health.svg";
import art from "../../assets/svg/art.svg";
import music from "../../assets/svg/music.svg";
import academic from "../../assets/svg/academic.svg";

import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import {} from "react-icons/io";
import LessonDropDown from "./LessonDropDown/LessonDropDown";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Category, Subject } from "@/src/types/types";
import { fetchSubjectByCategoryName } from "@/src/lib/subject/subject";
import { fetchCategoriesWithSubjects } from "@/src/lib/category/category";

const NavLessons = () => {
  const icons = [
    { src: math.src, alt: "Math" },
    // { src: gym.src, alt: "Gym&Sports" },
    { src: languages.src, alt: "Language" },
    // { src: examanation.src, alt: "Examinations" },
    { src: culinary.src, alt: "Culinary" },
    // { src: life.src, alt: "Life&Skills" },
    // { src: driving.src, alt: "Driving" },
    { src: computing.src, alt: "Computing" },
    // { src: health.src, alt: "Health" },
    { src: art.src, alt: "Arts & Craft" },
    { src: music.src, alt: "Music" },
    { src: academic.src, alt: "Academic" },
  ];

  return (
    <div className="lesson_nav">
      <div className="container">
        <div className="carousel_container">
          <div className="carousel">
            {icons.map((icon, index) => (
              <CarouselItem icon={icon} index={index} key={index} />
            ))}
          </div>
        </div>
        <Button className="nav_btn">
          Explore All Categories
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};
const CarouselItem = ({
  index,
  icon,
}: {
  index: number;
  icon: { alt: string; src: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const router = useRouter();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["nav_categories_with_subjects"],
    queryFn: () => fetchCategoriesWithSubjects({ limit: 50 }),
  });

  useEffect(() => {
    const currentCategory = categories?.categories?.find((cat: Category) =>
      cat.name.toLowerCase().includes(icon.alt.toLowerCase())
    );
    if (currentCategory) {
      setSubjects(currentCategory?.subjects);
    }
  }, [categories]);

  return (
    <div
      key={index}
      className="carousel-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img
        onClick={() => router.push(`/tutors?search=${icon.alt}`)}
        src={icon.src}
        alt={icon.alt}
      />
      <p onClick={() => router.push(`/tutors?search=${icon.alt}`)}>
        {icon.alt}
      </p>
      {!!subjects?.length && (
        <LessonDropDown
          isDropdownOpen={isOpen}
          subjects={subjects?.slice(0, 4).map((sub: Subject) => sub.name)}
          index={index}
        />
      )}
    </div>
  );
};

export default NavLessons;
