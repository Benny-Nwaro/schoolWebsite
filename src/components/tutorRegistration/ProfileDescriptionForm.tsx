import React, { useState } from 'react';

interface ProfileDescriptionFormProps {
  onSubmit: (profileDescription: string) => void;
}

const ProfileDescriptionForm: React.FC<ProfileDescriptionFormProps> = ({ onSubmit }) => {
  const [profileDescription, setProfileDescription] = useState('');
  const wordLimit = 40;
  const wordsLeft = wordLimit - profileDescription.split(/\s+/).filter(Boolean).length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfileDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(profileDescription);
  };

  return (
    <div className='flex flex-col space-y-12'>
        <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Profile Description</h2>
        <p className="text-gray-600 mb-4 text-sm">
            Explain your approach as a tutor and how you share your knowledge:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 text-sm">
            <li>Your teaching method and techniques</li>
            <li>A typical lesson plan</li>
            <li>What sets you apart as a tutor</li>
            <li>Who the lessons are for (degree, level, class, specificities, etc.)</li>
        </ul>

        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
            <label htmlFor="profileDescription" className="text-blue-500 text-xs font-bold">
                Sample Profile Description
            </label>
            <button
                type="button"
                className="border border-blue-700 text-blue-500 rounded-full px-2 py-1 text-xs flex items-center focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L15 8.414V15a1 1 0 11-2 0V8.414l-1.293 1.293a1 1 0 01-1.414-1.414l4-4zM6 10a1 1 0 011-1h3a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Write with AI
            </button>
            </div>
            <textarea
            id="profileDescription"
            value={profileDescription}
            onChange={handleChange}
            rows={4}
            placeholder="ex: write short sample"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            />
        </div>

        <p className="text-gray-500 text-xs mb-6 text-left">
            {wordsLeft} words left
        </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Accomplishments</h2>
        <p className="text-gray-600 mb-4 text-sm">
            Highlight your proudest achievements and most outstanding accomplishments. Feel free to showcase your top feats.        
            </p>
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
            <label htmlFor="profileDescription" className="text-blue-500 text-xs font-bold">
                Sample Profile Description
            </label>
            <button
                type="button"
                className="border border-blue-700 text-blue-500 rounded-full px-2 py-1 text-xs flex items-center focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L15 8.414V15a1 1 0 11-2 0V8.414l-1.293 1.293a1 1 0 01-1.414-1.414l4-4zM6 10a1 1 0 011-1h3a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Write with AI
            </button>
            </div>
            <textarea
            id="profileDescription"
            value={profileDescription}
            onChange={handleChange}
            rows={4}
            placeholder="ex: write short sample"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            />
        </div>
        <p className="text-gray-500 text-xs mb-6 text-left">
            {wordsLeft} words left
        </p>
        <div className="flex justify-center mt-6">
            <button
                onClick={handleSubmit}
                disabled={wordsLeft < 0}
                className={`bg-gray-800 hover:bg-gray-900 text-white w-1/2 font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline text-sm ${
                wordsLeft < 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                Proceed →
            </button>
            </div>
        </div>
    </div>
   
  );
};

export default ProfileDescriptionForm;