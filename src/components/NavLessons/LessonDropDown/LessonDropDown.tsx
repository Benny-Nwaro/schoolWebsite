import { useRouter } from "next/navigation";
import React from "react";

const LessonDropDown = ({
  isDropdownOpen,
  subjects,
  index,
}: {
  isDropdownOpen: boolean;
  subjects: string[];
  index: number;
}) => {
  const router = useRouter();
  const handleOnClick = (sub: string) => {
    router.push(`/tutors?search=${sub}`);
  };
  return (
    <div
      className={`lesson_dropdown_menu _custom ${
        isDropdownOpen ? "show" : ""
      } ${index === 0 ? "first_child" : ""}`}
    >
      {subjects.map((el, i) => (
        <span
          onClick={() => {
            handleOnClick(el);
          }}
          key={i}
        >
          {el}
        </span>
      ))}
      <span style={{ paddingBottom: "0" }} className="final">
        See All
      </span>
    </div>
  );
};

export default LessonDropDown;
