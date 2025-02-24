import React, { useState } from "react";
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface CustomRangeSliderProps {
  className?: string;
  onChange: (name: string, value: [number, number]) => void;
  name?: string;
  name2?: string;
  min?: number;
  max?: number;
  prefix?: string;
  symbol?: string;
  value?: [number, number];
  setValue?: (value: [number, number]) => void;
  isFirstPointDisabled?: boolean;
}

export const CustomRangeSlider = ({
  className,
  onChange,
  name,
  name2,
  min = 0,
  max = 500,
  prefix = "",
  symbol = "",
  value = [min, max], // Default to [min, max]
  setValue,
  isFirstPointDisabled,
}: CustomRangeSliderProps) => {
  // Handle when value might be undefined
  const handleThumbDragEnd = () => {
    if (name && value) {
      onChange(name, value);
    }
    if (name2 && value) {
      onChange(name2, value);
    }
  };

  return (
    <div className={`custom_filter_range_slider ${className ?? ""}`}>
      <div className="custom_slider_number">
        {!isFirstPointDisabled && (
          <span>
            {prefix}
            {value[0]}
            {symbol}
          </span>
        )}
        <RangeSlider
          min={min}
          max={max}
          value={value}
          onInput={setValue}
          onThumbDragEnd={handleThumbDragEnd}
          className={`custom_range_slider ${
            isFirstPointDisabled && "single-thumb"
          }`}
          thumbsDisabled={[isFirstPointDisabled, false]}
          rangeSlideDisabled={isFirstPointDisabled}
        />
        <span>
          {prefix}
          {value[1]}
          {symbol}
        </span>
      </div>
    </div>
  );
};
