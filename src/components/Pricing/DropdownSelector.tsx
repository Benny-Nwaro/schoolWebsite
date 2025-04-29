import React from 'react';

interface DropdownSelectorProps {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({ label, options, selected, onChange }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-lg font-semibold">{label}</h2>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 bg-white text-black"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;
