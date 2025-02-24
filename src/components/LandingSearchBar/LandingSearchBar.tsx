"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
// import CustomSelect from "../CustomSelect/CustomSelect";
import searchIcon from "../../assets/svg/search-normal.svg";
import locationIcon from "../../assets/svg/location.svg";
import { GrSearch } from "react-icons/gr";
import { useRouter } from "next/navigation";
import {
  fetchCategories,
  fetchCategoriesWithSubjects,
} from "@/src/lib/category/category";
import { Category } from "@/src/types/types";

import "./landingSearchBar.styles.scss";
import Popup from "../Popup/Popup";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
const CustomSelect = dynamic(() => import("@/src/components/CustomSelect/CustomSelect"), { ssr: false });

export interface SelectValue {
  label: string;
  value: string;
}
const LandingSearchBar = ({
  className,
  selectClassName1,
  selectClassName2,
  placeHolder1,
  placeHolder2,
  buttonIcon,
  customStylesProps,
  setIsOpen,
}: {
  className?: string;
  selectClassName1?: string;
  selectClassName2?: string;
  placeHolder1?: string;
  placeHolder2?: string;
  buttonIcon?: boolean;
  customStylesProps?: any;
  setIsOpen?: any;
}) => {
  const options = [
    { value: "online", label: "Online" },
    { value: "studentPlace", label: "Student Place" },
    { value: "teacherPlace", label: "Teacher Place" },
  ];
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const { data: fetchedCategories } = useQuery({
    queryKey: ["categoriesWithSubjects"],
    queryFn: () => fetchCategoriesWithSubjects({ limit: 100 }),
  });
  const [selectedLocation, setSelectedLocation] = useState<SelectValue>();
  const [selectedCategory, setSelectedCategory] = useState<SelectValue>();
  const [showModal, setShowModal] = useState(false);
  const handleNavigate = () => {
    if (
      selectedLocation?.value === "studentPlace" ||
      selectedLocation?.value === "teacherPlace"
    ) {
      setShowModal(true);
      return;
    }
    if (selectedCategory?.value && !selectedLocation?.value) {
      router.push(`/tutors?category=${selectedCategory.value}`);
    } else if (!selectedCategory?.value && selectedLocation?.value) {
      router.push(`/tutors?location=${selectedLocation.value}`);
    } else if (selectedCategory?.value && selectedLocation?.value) {
      router.push(
        `/tutors?category=${selectedCategory.value}&location=${selectedLocation.value}`
      );
    }
  };
  useEffect(() => {
    if (fetchedCategories) {
      const mappedCategories = fetchedCategories.categories.map(
        (cat: { name: string }) => ({
          label: cat.name,
          value: cat.name,
        })
      );
      setCategories(mappedCategories);
    }
  }, [fetchedCategories]);

  return (
    <>
      {showModal && (
        <Popup
          setShowModal={setShowModal}
          category={selectedCategory?.value!}
          location={selectedLocation?.value!}
          setIsOpen={setIsOpen}
        />
      )}
      <div className={`search_bar_container ${className ? className : ""}`}>
        <CustomSelect
          options={categories}
          placeholder={placeHolder1 ? placeHolder1 : "Search for a class..."}
          className={`search_bar_container_select ${
            selectClassName1 ? selectClassName1 : ""
          }`}
          icon={searchIcon.src}
          customStylesProps={customStylesProps}
          onChange={(val) => setSelectedCategory(val)}
        />
        <CustomSelect
          options={options}
          placeholder={placeHolder2 ? placeHolder2 : "Class location..."}
          className={`search_bar_container_select ${
            selectClassName2 ? selectClassName2 : ""
          }`}
          icon={locationIcon.src}
          customStylesProps={customStylesProps}
          onChange={(val) => {
            setSelectedLocation(val);
            if (val.value === "studentPlace" || val.value === "teacherPlace")
              setShowModal(true);
          }}
        />
        <Button variant="primary" onClick={handleNavigate}>
          {buttonIcon ? <GrSearch style={{ color: "white" }} /> : "Search"}
        </Button>
      </div>
    </>
  );
};

export default LandingSearchBar;
