import React, { useState } from "react";
import Filter from "@/src/components/FilterPanel/Filter";
import { CustomRangeSlider } from "@/src/components/CustomRangeSlider/CustomRangeSlider";
import filterImg from "@/src/assets/images/filter.png";
import Button from "../Button/Button";

const TutorFiltersSection = ({
  showPanel,
  setShowPanel,
  selectedFilters,
  handleChange,
  locationFilters,
  filterOptions,
  otherFilterOptions,
  setSelectedFilters,
}: any) => {
  const sortFilters = [
    {
      name: "sortOrder",
      title: "Sort By",
      filterName: "sortOrder",
      options: [
        { name: "Price ascending", value: "asc" },
        { name: "Price descending", value: "desc" },
        { name: "Highest rating", value: "rating" },
      ],
    },
  ];

  const [priceValue, setPriceValue] = useState<[number, number]>([0, 500]);
  const [distanceValue, setDistanceValue] = useState<[number, number]>([0, 25]);
  return (
    <div className="desktop_filters">
      {/* Mobile view */}
      <div className="filter_btn_container">
        <button className="filter-button" onClick={() => setShowPanel(true)}>
          Filter <img src={filterImg.src} alt="" />
        </button>
        <div className="lesson_filters">
          {sortFilters.map((filter) => (
            <Filter
              key={filter.name}
              title={filter.title}
              name={filter?.name}
              options={filter?.options?.map((option) => ({
                name: option?.name,
                value: option?.value,
                checked: selectedFilters[filter.name] === option?.value,
              }))}
              type="radio"
              onChange={handleChange} // Pass the handleChange function
              selectedFilters={selectedFilters}
              className={"sort_by_container"}
            />
          ))}
        </div>
      </div>
      {/* End mobile view */}

      <>
        <div className="lesson_filters lesson_filters_hide">
          <span>Filter by</span>
          {locationFilters.map((filter: any) => (
            <Filter
              key={filter.name}
              title={filter.title}
              name={filter?.name}
              options={filter?.options?.map((option: any) => ({
                name: option?.name,
                value: option?.value,
                checked: selectedFilters[filter.name] === option?.value,
              }))}
              type="radio"
              onChange={handleChange} // Pass the handleChange function
              selectedFilters={selectedFilters}
            >
              {(selectedFilters?.location == "teacherPlace" ||
                selectedFilters?.location == "studentPlace") && (
                <CustomRangeSlider
                  className={"filter_drop_slider"}
                  onChange={handleChange}
                  name={"distance"}
                  name2={"distance"}
                  symbol={"km"}
                  max={500}
                  min={0}
                  value={distanceValue}
                  setValue={setDistanceValue}
                  isFirstPointDisabled={true}
                />
              )}
            </Filter>
          ))}
          {filterOptions.map((filter: any) => (
            <Filter
              key={filter.name}
              title={filter.title}
              name={filter?.name}
              options={filter?.options?.map((option: any) => ({
                name: option?.name,
                value: option?.value,
                checked: selectedFilters[filter.name] === option?.value,
              }))}
              type="radio"
              onChange={handleChange} // Pass the handleChange function
              selectedFilters={selectedFilters}
            />
          ))}

          <Filter
            key={"Price Slider"}
            title={"Price"}
            name={"price"}
            type="custom"
            selectedFilters={selectedFilters}
            onChange={handleChange}
            className="price_filter_dropDown"
          >
            <CustomRangeSlider
              className={"filter_drop_slider"}
              onChange={handleChange}
              name={"minPrice"}
              name2={"maxPrice"}
              prefix="$"
              value={priceValue}
              setValue={setPriceValue}
            />
          </Filter>
          <Filter
            key={"More"}
            title={"More"}
            name={""}
            type="custom"
            selectedFilters={selectedFilters}
            onChange={handleChange}
            className="price_filter_dropDown more_filter_outer_container"
          >
            <div className="more_filters">
              {otherFilterOptions?.map((filter: any, i: number) => (
                <div className="more_filter_container" key={i}>
                  <div className="more_filter">
                    <h3>{filter?.title}</h3>
                    <div className="options">
                      {filter?.options?.map((option: any) => (
                        <div key={option?.value} className={`dropdown-item`}>
                          <label className="option-label">
                            <input
                              type="radio"
                              value={option?.value}
                              checked={
                                selectedFilters[filter?.filterName] ===
                                option?.value
                              }
                              onClick={() => {
                                handleChange(filter?.filterName, option?.value);
                              }}
                              readOnly
                              // test here
                            />
                            {option?.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Filter>
          <div className="filters_reset">
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
          </div>
        </div>
      </>
    </div>
  );
};
export default TutorFiltersSection;
