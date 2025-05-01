"use client"

import React, { useState } from 'react';
import { Listbox, ListboxOption } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface LanguageSelectionProps {
  onProceed: (languages: string[]) => void;
  onSkip: () => void;
  initialLanguages?: string[];
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onProceed, onSkip, initialLanguages = [] }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(initialLanguages);
  const [availableLanguages, setAvailableLanguages] = useState([
    'English',
    'French',
    'Spanish',
    'Hausa',
    'Igbo',
    'Yoruba',
    'Arabic',
    'Chinese',
    'German',
    'Italian',
    // Add more languages as needed
  ]);
  const [selectedLanguageToAdd, setSelectedLanguageToAdd] = useState<string | null>(null);

  const handleAddLanguage = () => {
    if (selectedLanguageToAdd && !selectedLanguages.includes(selectedLanguageToAdd)) {
      setSelectedLanguages([...selectedLanguages, selectedLanguageToAdd]);
    }
    setSelectedLanguageToAdd(null); // Reset selection after adding
  };

  const handleRemoveLanguage = (languageToRemove: string) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang !== languageToRemove));
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <p className="text-sm text-gray-700 mb-4">
        Kindly choose the languages you speak. This may encourage students to want to sign up with you as they might be looking for
        someone like you. You can choose multiple languages.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedLanguages.map((lang) => (
          <div key={lang} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm flex items-center">
            {lang}
            <button
              onClick={() => handleRemoveLanguage(lang)}
              className="ml-1 focus:outline-none text-blue-500 hover:text-blue-700"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <Listbox value={selectedLanguageToAdd} onChange={setSelectedLanguageToAdd}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
            {selectedLanguageToAdd ? (
              <span className="block truncate">{selectedLanguageToAdd}</span>
            ) : (
              <span className="block truncate text-gray-500">Select Language</span>
            )}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {availableLanguages
              .filter((lang) => !selectedLanguages.includes(lang))
              .map((language) => (
                <Listbox.Option
                  key={language}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                    }`
                  }
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {language}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </div>
      </Listbox>

      <button
        onClick={handleAddLanguage}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full sm:w-auto"
        disabled={!selectedLanguageToAdd}
      >
        Add Language
      </button>

      <div className="mt-6 flex max-md:flex-col w-full justify-between gap-4">
        <button onClick={onSkip} className="bg-white border border-gray-300  hover:bg-gray-100 text-gray-700 font-semibold py-3 lg:px-12 max-md:px-6 rounded-full focus:outline-none focus:shadow-outline">
          Skip <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m-15 0 15 15" />
          </svg>
        </button>
        <button
          onClick={() => onProceed(selectedLanguages)}
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 lg:px-12 max-md:px-6 rounded-full focus:outline-none focus:shadow-outline"
          disabled={selectedLanguages.length === 0}
        >
          Proceed →
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;