import { useState } from "react";
import "./toggleSwitch.styles.scss";


type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean, name: string) => void; // Callback to handle state change
  className?: string; // Optional className for customization
};

const ToggleSwitch : React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
}) => {

  // const [isChecked, setIsChecked] = useState(false); // State to track checkbox
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(event.target.checked); // Update state based on checkbox value
  // };

  return (
    <div className="toggleSwitchContainer">
      <input type="checkbox" 
       checked={checked} // Bind to state
       onChange={(e) => onChange(e.target.checked, name)} // Pass state and name to parent
       id={id} className="toggleCheckbox" />
      <label htmlFor={id} className="toggleContainer">
        <div>Weekly</div>
        <div>Flexible</div>
      </label>
    </div>
  );
};
export default ToggleSwitch;
