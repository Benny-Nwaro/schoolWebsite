"use client";
import React, { useEffect } from "react";
import "./googleElement.styles.scss";
import LanguageSelect from "./LanguageSelect";

// Extend the Window interface to include googleTranslateElementInit
declare global {
  export interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: unknown;
          },
          element: string | HTMLElement
        ) => void;
      };
    };
  }

  // Declare the TranslateElement's InlineLayout separately
  export namespace google {
    namespace translate {
      let TranslateElement: {
        InlineLayout: {
          SIMPLE: unknown;
        };
      };
    }
  }
}

const GoogleTranslateElement = () => {
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,zh-TW,zh-CN",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    // Check if the script already exists to prevent duplication
    const scriptSrc =
      "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      // Create and append the script if it doesn't exist
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);

      // Ensure the global function is set
      (window as any).initializeGoogleTranslate = initializeGoogleTranslate;
    } else {
      // If the script already exists, manually initialize the translate element
      initializeGoogleTranslate();
    }

    // Cleanup function to prevent multiple script instances
    return () => {
      const existingElement = document.querySelector(
        "#google_translate_element"
      );
      if (existingElement) {
        existingElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="google_translate_select_container">
      <div id="google_translate_element" />
      {/* <LanguageSelect /> */}
    </div>
  );
};

export default GoogleTranslateElement;
