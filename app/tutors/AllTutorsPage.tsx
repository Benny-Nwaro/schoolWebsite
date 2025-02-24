"use client";
import "./tutors.styles.scss";
import { useEffect, useState } from "react";
import FilterPanel from "@/src/components/FilterPanel/FilterPanel";

import SimilarTutorCard from "@/src/components/SimilarTutorCard/SimilarTutorCard";
import TutorMap from "@/src/components/TutorMap/TutorMap";
import TeacherFaqs from "@/src/components/TeacherFaqs/TeacherFaqs";
import SearchPageHeader from "@/src/components/SearchPageHeader/SearchPageHeader";
import SubjectInfoSection from "@/src/components/SubjectInfoSection/SubjectInfoSection";
import TutorFiltersSection from "@/src/components/TutorFiltersSection/TutorFiltersSection";
import { useQuery } from "@tanstack/react-query";
import { fetchTutors } from "@/src/lib/tutors/tutors";
import { fetchFaqs } from "@/src/lib/faqs/faqs";
import { Category, Subject, Tutor } from "@/src/types/types";
import { fetchCategoriesWithSubjects } from "@/src/lib/category/category";
import { useSearchParams } from "next/navigation";
export interface SelectedFilters {
  category?: string;
  subject?: string;
  day?: string;
  minPrice?: number;
  maxPrice?: number;
  bgCheck?: string;
  gender?: string;
  location?: string;
  minDistance?: number;
  maxDistance?: number;
  longitude?: number | string;
  latitude?: number | string;
  distance?: [number, number];
  sortOrder?: string;
  sortField?: string;
}
const AllTutorsPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const longitude = searchParams.get("longitude") || "";
  const location = searchParams.get("location") || "";
  const latitude = searchParams.get("latitude") || "";
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category,
    longitude,
    latitude,
    location,
  });
  const search = searchParams.toString();
  const { data: tutors, isLoading } = useQuery({
    queryKey: ["tutors", selectedFilters],
    queryFn: () => fetchTutors({ ...selectedFilters, limit: 40 }),
  });
  const { data: categories } = useQuery({
    queryKey: ["categoriesWithSubjects"],
    queryFn: () => fetchCategoriesWithSubjects({ limit: 100 }),
  });
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const limit = 100;
  const userType = "STUDENT";
  const { data: faqs } = useQuery({
    queryKey: ["student-faqs", { limit, userType }],
    queryFn: () => fetchFaqs({ userType, limit }),
  });
  const [showPreview, setShowPreview] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const handleChange = (
    name: keyof SelectedFilters,
    value: string | number | [number, number]
  ) => {
    setSelectedFilters((prevFilters: SelectedFilters) => {
      const updatedFilters = { ...prevFilters };

      if (typeof value === "string" || typeof value === "number") {
        if (
          name === "category" ||
          name === "subject" ||
          name === "day" ||
          name === "bgCheck" ||
          name === "gender" ||
          name === "location" ||
          name === "longitude" ||
          name === "latitude" ||
          name === "sortOrder" ||
          name === "sortField"
        ) {
          if (value === "") {
            delete updatedFilters[name];
          } else {
            updatedFilters[name] = value as string;
          }

          // Set sortField to "price" if sortOrder is set to "asc" or "desc"
          if (name === "sortOrder" && (value === "asc" || value === "desc")) {
            updatedFilters.sortField = "price";
          }
        } else if (name === "minPrice" || name === "maxPrice") {
          if (value === "") {
            delete updatedFilters[name];
          } else {
            updatedFilters[name] = value as number;
          }
        }
      } else if (Array.isArray(value)) {
        if (value.length === 2) {
          const [min, max] = value;

          if (name === "minPrice") {
            updatedFilters.minPrice = min;
          }
          if (name === "maxPrice") {
            updatedFilters.maxPrice = max;
          }

          if (name === "distance") {
            updatedFilters.minDistance = min;
            updatedFilters.maxDistance = max;
          }
        }
      }

      if (name === "category") {
        updatedFilters.subject && delete updatedFilters.subject;
      }

      return updatedFilters;
    });
  };

  const locationFilters = [
    {
      name: "location",
      title: "Location",
      filterName: "Lesson Location",
      options: [
        { name: "online", value: "online" },
        { name: "student place", value: "studentPlace" },
        { name: "teacher place", value: "teacherPlace" },
      ],
    },
  ];
  const filterOptions = [
    // {
    //   name: "location",
    //   title: "Location",
    //   filterName: "Lesson Location",
    //   options: [
    //     { name: "online", value: "online" },
    //     { name: "student place", value: "studentPlace" },
    //     { name: "teacher place", value: "teacherPlace" },
    //   ],
    // },
    {
      name: "category",
      title: "Category",
      filterName: "Category",
      options: categories
        ? categories?.categories.map((cat: Category) => ({
            name: cat.name,
            value: cat.name,
          }))
        : [],
    },
    {
      name: "subject",
      title: "Subject",
      filterName: "subject",
      options: subjects
        ? subjects?.map((cat: Subject) => ({
            name: cat.name,
            value: cat.name,
          }))
        : [],
    },

    {
      name: "day",
      title: "Availability",
      filterName: "day",
      options: [
        { name: "Monday", value: "MONDAY" },
        { name: "Tuesday", value: "TUESDAY" },
        { name: "Wednesday", value: "WEDNESDAY" },
        { name: "Thursday", value: "THURSDAY" },
        { name: "Friday", value: "FRIDAY" },
        { name: "Saturday", value: "SATURDAY" },
        { name: "Sunday", value: "SUNDAY" },
      ],
    },
  ];
  const otherFilterOptions = [
    {
      name: "bgCheck",
      title: "Background Checked",
      filterName: "bgCheck",
      options: [
        { name: "Yes", value: "ACCEPTED" },
        { name: "No", value: "UNCHECKED" },
      ],
    },
    {
      name: "gender",
      title: "Teacher's Gender",
      filterName: "gender",
      options: [
        { name: "Male", value: "MALE" },
        { name: "Female", value: "FEMALE" },
      ],
    },
  ];
  useEffect(() => {
    if (categories && categories?.categories?.length > 0) {
      setSubjects(categories?.categories[0]?.subjects || []);
    }
  }, [categories]);

  useEffect(() => {
    const selectedCategory = categories?.categories?.find(
      (cat: Category) => cat?.name === selectedFilters?.category
    );

    if (selectedCategory) {
      setSubjects(selectedCategory.subjects);
    }
  }, [selectedFilters?.category, selectedFilters]);

  useEffect(() => {
    let updatedCategory = category;

    // Check if the search string contains the encoded category
    if (search.includes("Arts+&+Crafts")) {
      updatedCategory = "Arts & Crafts";
    }
    if (search.includes("Fitness+&+Sports")) {
      updatedCategory = "Fitness & Sports";
    }

    // Create a copy of selectedFilters to update
    const updatedFilters = {
      ...selectedFilters,
      category: updatedCategory,
    };

    // If location is online, remove longitude and latitude
    if (location === "online") {
      delete updatedFilters.longitude;
      delete updatedFilters.latitude;
    }

    setSelectedFilters(updatedFilters);
  }, [category, location, search]);

  return (
    <div className="search_tutors">
      <SearchPageHeader />
      <div className="inner_max">
        {selectedFilters.longitude && selectedFilters.latitude && (
          <div className="map_section">
            <h1>Our selection of the best {category} teachers</h1>
            {(selectedFilters.location === "studentPlace" ||
              selectedFilters.location === "teacherPlace" ||
              location === "studentPlace" ||
              location === "teacherPlace") && (
              <TutorMap
                longitude={Number(selectedFilters?.longitude)}
                latitude={Number(selectedFilters?.latitude)}
                geoLocations={tutors?.geoLocations}
              />
            )}
          </div>
        )}
        <TutorFiltersSection
          showPanel={showPanel}
          setShowPanel={setShowPanel}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          locationFilters={locationFilters}
          filterOptions={filterOptions}
          otherFilterOptions={otherFilterOptions}
          handleChange={handleChange}
        />
        <div className="search_tutors_container">
          {showPanel && (
            <FilterPanel
              filterOptions={[
                ...locationFilters,
                ...filterOptions,
                ...otherFilterOptions,
              ]}
              onChange={handleChange}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              showPanel={showPanel}
              setShowPanel={setShowPanel}
            />
          )}

          {isLoading ? (
            <p>Loading... </p>
          ) : (
            <div className="similar_tutor_search_card_container">
              {tutors &&
                tutors?.lessons?.map(
                  (el: { id: string; teacher: Tutor }, i: number) => (
                    <div className="tutor_search_card_container" key={i}>
                      <SimilarTutorCard
                        key={el?.teacher?.id}
                        className="similar_card_with_hover"
                        showPreview={showPreview}
                        setShowPreview={setShowPreview}
                        index={i + 1}
                        tutor={el?.teacher}
                        currentCategory={category}
                        currentLocation={location}
                      />
                    </div>
                  )
                )}
            </div>
          )}
        </div>
        <SubjectInfoSection />
        <TeacherFaqs
          className={"search_faqs"}
          title={"Frequently Asked Questions"}
          faqs={faqs?.faqs}
        />
      </div>
    </div>
  );
};

export default AllTutorsPage;