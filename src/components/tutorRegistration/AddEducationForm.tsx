import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface AddEducationFormProps {
  onSave: (formData: AddEducationFormData) => void;
  onCancel: () => void;
}

export interface AddEducationFormData {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  grade: string;
  certificationFile: File | null;
}

const AddEducationFormModal: React.FC<AddEducationFormProps> = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState<AddEducationFormData>({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
    grade: '',
    certificationFile: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        certificationFile: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        certificationFile: null,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
        <div className="absolute top-4 right-4">
          <button onClick={onCancel} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Add Education</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              placeholder='School'
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                id="degree"
                name="degree"
                placeholder='Degree'
                value={formData.degree}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                placeholder='Field of study'
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <select
                id="startYear"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              >
                <option value="">Start year</option>
                {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <select
                id="endYear"
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              >
                <option value=""> End year</option>
                {Array.from({ length: 25 }, (_, i) => 2025 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="">Select grade</option>
              <option value="Distinction">Distinction</option>
              <option value="Upper Credit">Upper Credit</option>
              <option value="Lower Credit">Lower Credit</option>
              <option value="Pass">Pass</option>
              {/* Add more grade options as needed */}
            </select>
          </div>
          <div>
            
            <div className="relative border rounded-md p-2 flex items-center justify-between bg-[#DBDCF0]">
            <span className='text-sm text-gray-700'> Upload Certification</span>
              <span className="text-gray-500 flex justify-between text-sm truncate">
                {formData.certificationFile ? formData.certificationFile.name : 'pdf, png, jpg'}
              </span>
              <label htmlFor="certificationFile" className="bg-gray-200 hover:bg-gray-300 text-gray-600 text-xs font-semibold py-1 px-2 rounded-md cursor-pointer focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </label>
              <input
                type="file"
                id="certificationFile"
                name="certificationFile"
                className="hidden"
                onChange={handleFileChange}
                accept="application/pdf,image/png,image/jpeg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-1/2 text-sm mt-6"
          >
            Save
          </button>
        </div>
        </form>
      </div>
    </div>,
    document.body // Or a specific modal root element if you have one
  );
};

export default AddEducationFormModal;