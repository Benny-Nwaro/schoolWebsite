"use client";
import React, { useState, useEffect } from "react";
import "./googleElement.styles.scss";

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "zh-TW", name: "Chinese (Traditional)" },
    { code: "zh-CN", name: "Chinese (Simplified)" },
  ];

  useEffect(() => {
    const updateTranslateDropdown = () => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (select) {
        select.value = selectedLanguage;
        select.dispatchEvent(new Event("change"));
      }
    };

    updateTranslateDropdown();
  }, [selectedLanguage]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="language-select">
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
