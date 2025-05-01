import React, { useState } from 'react';

interface ProfileTitleFormProps {
  onSubmit: (profileTitle: string) => void;
}

const ProfileTitleForm: React.FC<ProfileTitleFormProps> = ({ onSubmit }) => {
  const [profileTitle, setProfileTitle] = useState('');
  const wordLimit = 300;
  const wordsLeft = wordLimit - profileTitle.split(/\s+/).filter(Boolean).length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfileTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(profileTitle);
  };

  // Check if button should be enabled (profileTitle has at least 12 words)
  const isButtonDisabled = profileTitle.split(/\s+/).filter(Boolean).length < 12;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <p className="text-left text-gray-600 mb-4 text-sm">
        Your title is the key to your teaching listing! It should be unique, attract attention, and contain at least 12 words.
      </p>

      <div className="mb-4">
        <label htmlFor="profileTitle" className="block text-blue-500 text-xs font-bold mb-2">
          Sample Profile Title
        </label>
        <textarea
          id="profileTitle"
          value={profileTitle}
          onChange={handleChange}
          placeholder="ex: write short sample"
          rows={4}
          className="shadow appearance-none border border-gray-500 rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
        />
      </div>

      <p className="text-gray-500 text-xs mb-6 text-left">
        {wordsLeft} words left
      </p>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={isButtonDisabled}
          className={`bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full sm:w-1/2 text-sm ${
            isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Proceed →
        </button>
      </div>
    </div>
  );
};

export default ProfileTitleForm;
