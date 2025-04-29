import { StylesConfig } from "react-select";

// Define custom styles for react-select
const customStyles: StylesConfig<any, false> = {
  control: (provided) => ({
    ...provided,
    border: "none", // Remove the border
    boxShadow: "none", // Remove the box shadow
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Hide the dropdown indicator (down arrow)
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px", // Customize border radius
    padding: 0, // Remove padding around the menu
    zIndex: 9999, // Ensures the menu appears above other content
    minWidth: "220px",
  }),
  menuList: (provided) => ({
    ...provided,
    // borderRadius: "50px",
    padding: "15px 10px", // Remove padding inside the menu list
    // minWidth: "200px",
  }),
  option: (provided, state) => ({
    ...provided,
    // borderRadius: "8px", // Match border radius with the menu
    backgroundColor: state.isSelected || state.isFocused ? "#d3e9fd" : "white", // Background color
    color: state.isSelected || state.isFocused ? "#171717" : "#171717", // Text color
    padding: "16px", // Add padding to each option
    borderRadius: "50px",
    ":active": {
      backgroundColor: "#d3e9fd", // Color when option is selected
    },
    // minWidth: "200px",
  }),
};
export default customStyles;
