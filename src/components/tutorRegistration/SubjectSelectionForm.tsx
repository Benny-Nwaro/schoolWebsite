import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';  // Add dropdown icon

interface SubjectSelectionFormProps {
  onProceed: (selectedSubjects: string[]) => void;
}

const SubjectSelectionForm: React.FC<SubjectSelectionFormProps> = ({ onProceed }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [subjectCategory, setSubjectCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectCategories, setSubjectCategories] = useState([
    'Mathematics',
    'Science',
    'Languages',
    // Add more categories as needed
  ]);
  const [subjects, setSubjects] = useState<string[]>([]); // Subjects based on selected category

  const handleSelectCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSubjectCategory(category);
    setSubject(''); // Reset selected subject when category changes
    // Simulate fetching subjects based on category
    switch (category) {
      case 'Mathematics':
        setSubjects(['Algebra', 'Calculus', 'Geometry', 'Statistics']);
        break;
      case 'Science':
        setSubjects(['Physics', 'Chemistry', 'Biology']);
        break;
      case 'Languages':
        setSubjects(['English', 'Spanish', 'French']);
        break;
      default:
        setSubjects([]);
    }
  };

  const handleSelectSubject = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(event.target.value);
  };

  const handleAddSubject = () => {
    if (subject && selectedSubjects.length < 6 && !selectedSubjects.includes(subject)) {
      setSelectedSubjects([...selectedSubjects, subject]);
      setSubject(''); // Clear selected subject after adding
    }
  };

  const handleRemoveSubject = (subjectToRemove: string) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub !== subjectToRemove));
  };

  const handleProceed = () => {
    onProceed(selectedSubjects);
  };

  // Determine if button should be active based on field validation
  const isButtonDisabled = !(subjectCategory && subject);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-72">
      <p className="text-center text-gray-600 mb-4 text-sm">
        On Educify, you can teach over 1000 subjects! You can select six (6) subjects at the moment.
      </p>

      <div className="flex flex-wrap gap-2 mb-4 justify-start">
        {selectedSubjects.map((sub) => (
          <div
            key={sub}
            className="bg-blue-400 text-white rounded-full px-3 py-1 text-sm flex items-center"
          >
            {sub}
            <button
              type="button"
              onClick={() => handleRemoveSubject(sub)}
              className="ml-1 text-white hover:text-blue-700 focus:outline-none"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        <div>
          <label htmlFor="subjectCategory" className="block text-gray-700 text-xs font-bold mb-1">
            Subject category
          </label>
          <div className="relative">
            <select
              id="subjectCategory"
              value={subjectCategory}
              onChange={handleSelectCategory}
              className="shadow appearance-none border border-gray-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="">Select category</option>
              {subjectCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 text-xs font-bold mb-1">
            Subject
          </label>
          <div className="flex items-center relative">
            <select
              id="subject"
              value={subject}
              onChange={handleSelectSubject}
              className="shadow appearance-none border border-gray-500 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              disabled={!subjectCategory || selectedSubjects.length >= 6}
            >
              <option value="">Select subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleAddSubject}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-2 rounded focus:outline-none focus:shadow-outline text-sm"
          disabled={!subject || selectedSubjects.length >= 6 || selectedSubjects.includes(subject)}
        >
          Add
        </button>
      </div>

      <p className="text-gray-500 text-xs mb-4">
        Select a subject category and a subject and the list will auto-populate
      </p>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleProceed}
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

export default SubjectSelectionForm;
