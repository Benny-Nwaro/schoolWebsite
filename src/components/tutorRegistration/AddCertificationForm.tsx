import React, { useState } from 'react';

interface AddCertificationFormProps {
  onSave: (formData: AddCertificationFormData) => void;
  onCancel: () => void;
  onAddSkill: () => void;
}

export interface AddCertificationFormData {
  certificateName: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate: string;
  credentialId: string;
  credentialUrl: string;
  certificationFile: File | null;
}

const AddCertificationForm: React.FC<AddCertificationFormProps> = ({
  onSave,
  onCancel,
  onAddSkill,
}) => {
  const [formData, setFormData] = useState<AddCertificationFormData>({
    certificateName: '',
    issuingOrganization: '',
    issueDate: '',
    expirationDate: '',
    credentialId: '',
    credentialUrl: '',
    certificationFile: null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFormData((prevData) => ({
      ...prevData,
      certificationFile: files && files.length > 0 ? files[0] : null,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
        <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
        <button onClick={onCancel} className="absolute top-4 right-4 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Add Certification</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="certificateName"
              name="certificateName"
              placeholder='Certificate Name'
              value={formData.certificateName}
              onChange={handleChange}
              className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              id="issuingOrganization"
              name="issuingOrganization"
              placeholder='Issuing Organization'
              value={formData.issuingOrganization}
              onChange={handleChange}
              className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <select
                id="issueDate"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
              >
                <option value="">Issue Date</option>
                {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                  <option key={`issueYear-${year}`} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <select
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
              >
                <option value="">Expiration Date</option>
                {Array.from({ length: 25 }, (_, i) => 2030 + i).map((year) => (
                  <option key={`expiryYear-${year}`} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <input
              type="text"
              id="credentialId"
              name="credentialId"
              placeholder='Credential ID'
              value={formData.credentialId}
              onChange={handleChange}
              className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            />
          </div>

          <div>
            <input
              type="url"
              id="credentialUrl"
              name="credentialUrl"
              placeholder='Credential URL'
              value={formData.credentialUrl}
              onChange={handleChange}
              className="shadow border border-gray-500 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            />
          </div>

          <div>
            <div className="relative border rounded-md p-2 flex items-center justify-between bg-[#DBDCF0]">
            Upload Certification
              <span className="text-gray-500 text-sm truncate">
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

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills</h3>
            <p className="text-gray-500 text-xs mb-2">Associate at least 1 skill to this license or certification.</p>
            <button
              type="button"
              onClick={onAddSkill}
              className="bg-white border border-blue-500 hover:bg-blue-50 text-blue-500 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline text-sm"
            >
              Add skill +
            </button>
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
    </div>
  );
};

export default AddCertificationForm;
