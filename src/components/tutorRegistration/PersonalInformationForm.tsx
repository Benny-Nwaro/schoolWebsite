import React from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Import dropdown arrow icon

interface PersonalInformationFormProps {
  onSubmit: (formData: PersonalInformationFormData) => void;
}

interface PersonalInformationFormData {
  firstName: string;
  lastName: string;
  nationality: string;
  city: string;
  gender: string;
  isOver18: string;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<PersonalInformationFormData>({
    firstName: '',
    lastName: '',
    nationality: '',
    city: '',
    gender: '',
    isOver18: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  // Function to check if the form is valid
  const isFormValid = Object.values(formData).every((value) => value !== '');

  // Function to get city options based on nationality
  const getCityOptions = () => {
    if (formData.nationality === 'Nigerian') {
      return ['Abuja', 'Lagos', 'Kano', 'Port Harcourt'];
    }
    if (formData.nationality === 'Ghanaian') {
      return ['Accra', 'Kumasi', 'Takoradi'];
    }
    return ['Other'];
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <p className="text-center text-gray-600 mb-6 text-sm">
        Please fill in your personal information to get started as a tutor.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <div className="relative">
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              >
                <option value="">Select Nationality</option>
                <option value="Nigerian">Nigerian</option>
                <option value="Ghanaian">Ghanaian</option>
                <option value="Other">Other</option>
              </select>
              <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                disabled={!formData.nationality}  // Disable city dropdown until nationality is selected
              >
                <option value="">Select City</option>
                {getCityOptions().map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
          </div>
        </div>
        <div>
          <div className="relative">
            <select
              id="isOver18"
              name="isOver18"
              value={formData.isOver18}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="">Are you over 18?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <FaCaretDown className="absolute right-3 top-3 text-gray-600" />
          </div>
        </div>

        {/* Centered Proceed Button */}
        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 text-sm"
            disabled={!isFormValid}  // Disable button if form is invalid
          >
            Proceed →
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
