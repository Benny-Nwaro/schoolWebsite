export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: "none", // Remove border
    boxShadow: "none", // Remove the blue outline (focus state)
    "&:hover": {
      border: "none", // Ensure no border on hover
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    cursor: "pointer",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    padding: "0px", // Adjust padding if needed
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none", // Remove the indicator separator line
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    border: "none", // Remove border from the dropdown menu
  }),
};
