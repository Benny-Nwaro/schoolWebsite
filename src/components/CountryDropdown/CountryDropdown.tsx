"use client";
import { useQuery } from "@tanstack/react-query";
import "./countryDropdown.styles.scss";
import { fetchExchangeRates } from "@/src/lib/currencies/currencies";
import countriesList from "./countiresJSON";
import GoogleTranslateElement from "../GoogleTranslateElement/GoogleTranslateElement";
import { useEffect, useState } from "react";
const CountryDropdown = ({ isDropdownOpen }: { isDropdownOpen: boolean }) => {
  //   const { data: currencies, isLoading } = useQuery({
  //     queryKey: ["currencies"],
  //     queryFn: () => fetchExchangeRates(),
  //   });
  //   console.log("currencies", currencies);
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }

    addGoogleTranslateScript();
  }, []);
  useEffect(() => {
    if (
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement
    ) {
      if (
        !document.getElementById("google_translate_element")!.hasChildNodes()
      ) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    }
  }, []);
  //   const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const translateElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;

      //   console.log("translateElement", translateElement?.value);
      if (translateElement) {
        // console.log("lang", translateElement?.value);
      }
    }, 500); // 500ms timeout

    // Cleanup timeout on unmount or when dependencies change
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`lesson_dropdown_menu _custom ${
        isDropdownOpen ? "show" : ""
      } country_dropdown_menu`}
    >
      <div className="drop_item">
        <span>Country</span>
        <select>
          {countriesList.map((el) => (
            <option key={el.code} value={el.code}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      <div className="drop_item">
        <span>Language</span>
        {/* <select>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
        </select> */}
        <div className="google_translate_element_wrapper">
          <div id="google_translate_element"></div>
        </div>
      </div>
      <div className="drop_item">
        <span>Currency</span>
        <select>
          <option value="nigeria">USD (US Dollar)</option>
          <option value="nigeria">USD (US Dollar)</option>
        </select>
      </div>
    </div>
  );
};
export default CountryDropdown;
