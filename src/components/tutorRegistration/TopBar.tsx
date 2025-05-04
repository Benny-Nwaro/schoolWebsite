import React, { useState } from 'react';
import NavLogoContainer from '../NavLogoContainer/NavLogoContainer';

const TopBar: React.FC = () => {
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white border-b">
      {/* Logo */}
      <NavLogoContainer/>


      {/* Autosave Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Autosave progress</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={autoSave}
            onChange={() => setAutoSave(!autoSave)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
        </label>
      </div>
    </div>
  );
};

export default TopBar;
