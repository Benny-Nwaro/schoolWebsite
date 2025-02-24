"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { CustomRangeSlider } from "../CustomRangeSlider/CustomRangeSlider";
import "./filterPanel.styles.scss";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { IoCloseOutline } from "react-icons/io5";
import { SelectedFilters } from "@/app/tutors/AllTutorsPage";

interface FilterPanelProps {
  filterOptions: any; // Replace with actual type if available
  onChange: (name: keyof SelectedFilters, value: string | number) => void; // Update type here
  selectedFilters: SelectedFilters;
  setSelectedFilters: (filters: SelectedFilters) => void; // Ensure this type matches
  showPanel: boolean;
  setShowPanel: (show: boolean) => void;
}
const FilterPanel = ({
  filterOptions,
  onChange,
  selectedFilters,
  setSelectedFilters,
  showPanel,
  setShowPanel,
}: FilterPanelProps) => {
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [value, setValue] = useState<string | null | any>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isLocationRequired, setIsLocationRequired] = useState<boolean>(false);
  const days = [
    { name: "Mo", value: "MONDAY" },
    { name: "Tu", value: "TUESDAY" },
    { name: "We", value: "WEDNESDAY" },
    { name: "Th", value: "THURSDAY" },
    { name: "Fr", value: "FRIDAY" },
    { name: "Sa", value: "SATURDAY" },
    { name: "Su", value: "SUNDAY" },
  ];
  useEffect(() => {
    setSelectedOptions((prevOptions: any) => ({
      ...prevOptions,
      ...selectedFilters,
    }));
  }, [selectedFilters]);

  const handleOptionChange = (optionName: string, optionValue: any) => {
    setSelectedOptions((prevOptions: any) => {
      const newOptions = {
        ...prevOptions,
        [optionName]: optionValue,
      };
      return newOptions;
    });

    if (optionName === "category") {
      onChange(optionName, optionValue); // Ensure this does not reset other state
    }

    if (
      optionName === "location" &&
      (optionValue === "studentPlace" || optionValue === "teacherPlace")
    ) {
      setIsLocationRequired(true);
    } else {
      setLatitude(null);
      setLongitude(null);
      setIsLocationRequired(false);
    }
  };

  const handleRangeChange = (name: string, value: [number, number]) => {
    setSelectedOptions((prevOptions: any) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const onValueChange = (e: any) => {
    // Uncomment and adjust based on actual implementation
    setValue(e.label); // Store the label for UI display
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setLatitude(lat);
        setLongitude(lng);
        handleOptionChange("longitude", lng);
        handleOptionChange("latitude", lat);
        handleOptionChange("address", e.label);
      });
  };

  const customStyles = {
    // menu: (provided, state) => ({
    //   ...provided,
    //   zIndex: 1000,
    // }),
  };

  const applyFilters = () => {
    // Uncomment and adjust based on actual implementation
    if (isLocationRequired && (!latitude || !longitude)) {
      alert("Please complete the location details.");
      return;
    }
    Object.entries(selectedOptions).forEach(([key, value]: any) => {
      onChange(key, value); // Update all filters
    });
    if (latitude && longitude) {
      onChange("latitude", latitude.toString());
      onChange("longitude", longitude.toString());
    }
    setShowPanel(false); // Close the panel if all validations pass
    setLatitude(null);
    setLongitude(null);
    setValue(null);
  };

  const [priceValue, setPriceValue] = useState<[number, number]>([
    selectedFilters?.minPrice ?? 0,
    selectedFilters?.maxPrice ?? 500,
  ]);

  const [distanceValue, setDistanceValue] = useState<[number, number]>([
    selectedFilters?.minDistance ?? 0,
    selectedFilters?.maxDistance ?? 200,
  ]);
  return (
    <div className="filter_panel_container">
      <div className="filter_panel">
        <div className="filter_panel_header">
          <h2>Filters</h2>

          <IoCloseOutline
            onClick={() => setShowPanel(false)}
            style={{
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </div>

        <div className="filter_container">
          <div className="filter_row">
            <h3>Day of the week</h3>
            <div className="filter_days">
              {days.map((day) => (
                <div
                  className={`day ${
                    selectedOptions?.day === day.value ? "selected" : ""
                  }`}
                  key={day.value}
                  onClick={() => handleOptionChange("day", day.value)}
                >
                  {day.name}
                </div>
              ))}
            </div>
          </div>

          {(selectedOptions?.location === "studentPlace" ||
            selectedOptions?.location === "teacherPlace") && (
            <div className="filter_row">
              <div className="custom-search-component-container">
                <div className="select__country">
                  <span>Please type your address</span>
                  <GooglePlacesAutocomplete
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
                    selectProps={{
                      value,
                      onChange: onValueChange,
                      styles: customStyles,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="filter_row">
            <h3>Price</h3>
            <CustomRangeSlider
              className="filter_drop_slider"
              onChange={handleRangeChange}
              min={0}
              max={500}
              prefix="$"
              name="minPrice"
              name2="maxPrice"
              symbol=""
              value={priceValue}
              setValue={setPriceValue}
            />
          </div>

          {(selectedOptions?.location === "studentPlace" ||
            selectedOptions?.location === "teacherPlace") && (
            <div className="filter_row">
              <h3>Distance</h3>
              <CustomRangeSlider
                className="filter_drop_slider"
                onChange={handleRangeChange}
                min={0}
                max={200}
                prefix=""
                symbol="km"
                name="distance"
                name2="distance"
                value={distanceValue}
                setValue={setDistanceValue}
                isFirstPointDisabled={true}
              />
            </div>
          )}
          {filterOptions &&
            filterOptions
              .filter((el: any) => el.name !== "day")
              .map((filter: any) => (
                <div className="filter_row" key={filter.name}>
                  <h3>{filter?.title}</h3>
                  <div className="options">
                    <div className="option_container">
                      <span id={filter?.name}>
                        {filter?.options?.map((option: any) => (
                          <div
                            className="option"
                            key={option.value}
                            onClick={() =>
                              handleOptionChange(filter.name, option.value)
                            }
                          >
                            <input
                              type="radio"
                              name={filter.name}
                              value={option.value}
                              checked={
                                selectedOptions[filter.name] === option.value
                              }
                              readOnly
                            />
                            <span>{option?.name}</span>
                          </div>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="button_container">
          <Button
            onClick={() => {
              setSelectedFilters({});
              setDistanceValue([0, 200]);
              setPriceValue([0, 500]);
            }}
            style={{ backgroundColor: "#ff5e5e" }}
          >
            Reset
          </Button>
          <Button onClick={applyFilters}>Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
