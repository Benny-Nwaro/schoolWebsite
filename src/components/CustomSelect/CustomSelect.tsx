import React from "react";
import Select, { OnChangeValue, Props as SelectProps } from "react-select";
import customStyles from "./customStyles";
import "./customSelect.styles.scss";
import { useRouter } from "next/navigation";
import { SelectValue } from "../LandingSearchBar/LandingSearchBar";
type OptionType = {
  value: string | number;
  label: string;
};

interface CustomSelectProps {
  options: OptionType[];
  value?: OptionType | null;
  placeholder?: string;
  onChange?: (value: SelectValue) => void;
  className?: string;
  icon?: string;
  customStylesProps?: any;
}
interface ISelectProps {
  data: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
  id?: number;
  customStylesProps?: any;
}
const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  placeholder,
  onChange,
  className,
  icon,
  customStylesProps,
}) => {
  let newStyles = customStylesProps
    ? {
        menu: (provided: any) => ({
          ...provided,
          borderRadius: "8px", // Customize border radius
          padding: 0, // Remove padding around the menu
          zIndex: 9999, // Ensures the menu appears above other content
          width: "150px",
        }),
        ...customStyles,
      }
    : customStyles;

  return (
    <div className="custom_select_container">
      {icon && (
        <div className="select_icon">
          <img src={icon} alt="" />
        </div>
      )}

      <Select
        instanceId={"wsad123wqwe"}
        styles={newStyles}
        options={options}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;
