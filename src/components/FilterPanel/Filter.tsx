"use client";
import React, { useState, useRef, useEffect } from "react";
import "./filterPanel.styles.scss";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import Button from "../Button/Button";

const Filter = ({
  title,
  name,
  options,
  type,
  onChange,
  selectedFilters,
  children,
  className,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState<any>(null);
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const ref = useRef<any>(null);
  useEffect(() => {
    if (selectedFilters[name] !== undefined) {
      setSelectedOption(selectedFilters[name]);
    } else {
      // Reset selectedOption if selectedFilters[name] is undefined
      setSelectedOption("");
    }
  }, [selectedFilters, name]);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  useEffect(() => {
    if (selectedFilters[name] === selectedOption) {
      setSelectedOption(selectedFilters[name]);
    }
  }, [selectedFilters, name]);

  const handleOptionChange = (event: any, optionValue: any) => {
    event.stopPropagation();
    const newOption = selectedOption === optionValue ? "" : optionValue;
    setSelectedOption(newOption);

    if (newOption !== "teacherPlace" && newOption !== "studentPlace") {
      setLatitude("");
      setLongitude("");
      setValue("");
      onChange("longitude", "");
      onChange("latitude", "");
      onChange(name, newOption);
      setIsOpen(false);
    }
  };

  const handleConfirm = () => {
    if (
      // latitude &&
      // longitude &&
      selectedOption === "teacherPlace" ||
      selectedOption === "studentPlace"
    ) {
      onChange(name, selectedOption);
      // onChange("longitude", longitude);
      // onChange("latitude", latitude);
      onChange("longitude", "56.1304");
      onChange("latitude", "106.3468");
      // setIsOpen(false);
    }
  };

  const onValueChange = (e: any) => {
    setValue(e);
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }: any) => {
        setLatitude(lat);
        setLongitude(lng);
      });
  };

  return (
    <div className={`filter-container ${className ?? ""}`} ref={ref}>
      <button
        className={`filter-button  ${selectedOption ? "selected" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        {title && <div className="dropdown-title">{title}</div>}
        <div className="dropdown-items">
          {options &&
            options?.map((option: any) => (
              <div
                key={option?.value}
                className={`dropdown-item ${
                  selectedOption === option?.value ? "selected" : ""
                }`}
              >
                <label className="option-label">
                  <input
                    type="radio"
                    value={option?.value}
                    checked={selectedOption === option?.value}
                    onClick={(event) =>
                      handleOptionChange(event, option?.value)
                    }
                    readOnly
                  />
                  {option?.name}
                </label>
              </div>
            ))}
        </div>
        {(selectedOption === "teacherPlace" ||
          selectedOption === "studentPlace") && (
          <div className="custom-search-component-container">
            <div className="select__country">
              <span>Please type your address</span>
              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                selectProps={{
                  value,
                  onChange: onValueChange,
                  className: "rc_z",
                }}
              />
            </div>
          </div>
        )}
        {(type === "custom" || children) && children}
        {(selectedOption === "teacherPlace" ||
          selectedOption === "studentPlace") && (
          <div className="custom_location_filter_btn_container">
            <Button
              onClick={handleConfirm}
              className="custom_location_filter_btn btn__primary"
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
