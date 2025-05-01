import React from 'react';
import AddEducationForm,  { AddEducationFormData } from './AddEducationForm';

interface EducationItemProps {
  institution: string;
  degree: string;
  major: string;
  years: string;
  onEdit: () => void;
  onDelete: () => void;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  major,
  years,
  onEdit,
  onDelete,
}) => {
  const initials = institution
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-purple-100 text-purple-700 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
          {initials}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700">{institution}</h3>
          <p className="text-xs text-gray-500">{degree}, {major}</p>
          <p className="text-xs text-gray-500">{years}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={onEdit} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.586 10 13.757 11.828 11.929l2.828-2.828z" />
          </svg>
        </button>
        <button onClick={onDelete} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface EducationalBackgroundFormProps {
  onAddEducation: () => void;
  educationList: {
    institution: string;
    degree: string;
    major: string;
    years: string;
  }[];
  onEditEducation: (index: number) => void;
  onDeleteEducation: (index: number) => void;
  onSubmit: () => void;
}

const EducationalBackgroundForm: React.FC<EducationalBackgroundFormProps> = ({
  onAddEducation,
  educationList,
  onEditEducation,
  onDeleteEducation,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Educational Background<span className="text-red-500">*</span>
      </h2>
      <p className="text-gray-600 mb-4 text-sm text-left">
        Showcase your academic journey. Highlight your degrees, diplomas, and educational background to give students a clear picture of your expertise
      </p>

      <div className="space-y-4 mb-6 border border-blue-600 rounded-3xl">
        {educationList.map((education, index) => (
          <EducationItem
            key={index}
            institution={education.institution}
            degree={education.degree}
            major={education.major}
            years={education.years}
            onEdit={() => onEditEducation(index)}
            onDelete={() => onDeleteEducation(index)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
            onClick={onAddEducation}
            className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 text-sm flex items-center justify-center"
        >
            Add Education
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </button>
        </div>

    </div>
  );
};

const Education = () => {
    const [showAddForm, setShowAddForm] = React.useState(false);

  const [educationList, setEducationList] = React.useState([
    {
      institution: 'Abia State Polytechnic, Aba',
      degree: 'HND',
      major: 'Computer Engineering',
      years: '2020 - 2022',
    },
  ]);

 

  const handleEditEducation = (index: number) => {
    console.log('Edit Education clicked for index:', index);
  };

  const handleAddEducation = () => {
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
  };

  const handleDeleteEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };
  const handleSaveEducation = (formData: AddEducationFormData) => {
    const newEducation = {
      institution: formData.school, // Assuming the 'school' field maps to your 'institution'
      degree: formData.degree,
      major: formData.fieldOfStudy, // Assuming 'fieldOfStudy' maps to your 'major'
      years: `${formData.startYear} - ${formData.endYear}`, // Combine start and end year
    };

    setEducationList([...educationList, newEducation]);
    setShowAddForm(false);
    console.log('Form Data:', formData); // Optional: Log the entire form data for inspection
  };

  const handleSubmit = () => {
    console.log('Proceed clicked');
  };

  return (
    <div className="flex justify-center items-center">
      <EducationalBackgroundForm
        onAddEducation={handleAddEducation}
        educationList={educationList}
        onEditEducation={handleEditEducation}
        onDeleteEducation={handleDeleteEducation}
        onSubmit={handleSubmit}
      />
    {showAddForm && (
          <AddEducationForm onSave={handleSaveEducation} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Education;
