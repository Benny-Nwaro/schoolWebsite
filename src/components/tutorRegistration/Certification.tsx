import React, { useState } from 'react';
import AddCertificationForm from './AddCertificationForm';

interface CertificationItemProps {
  certificateName: string;
  issuingOrganization: string;
  issueDate: string;
  onEdit: () => void;
  onDelete: () => void;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certificateName, issuingOrganization, issueDate, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-purple-100 text-purple-700 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
          {issuingOrganization?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700">{certificateName}</h3>
          <p className="text-xs text-gray-500">by {issuingOrganization}</p>
          <p className="text-xs text-gray-500">Issued {issueDate}</p>
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

interface CertificationFormProps {
  onAddCertification: () => void;
  certificationList: {
    certificateName: string;
    issuingOrganization: string;
    issueDate: string;
  }[];
  onEditCertification: (index: number) => void;
  onDeleteCertification: (index: number) => void;
  onProceed: () => void;
}

const CertificationForm: React.FC<CertificationFormProps> = ({
  onAddCertification,
  certificationList,
  onEditCertification,
  onDeleteCertification,
  onProceed,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-5xl lg:px-72">
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Certification</h2>
      <p className="text-gray-600 mb-4 text-sm text-left">
        Display your professional credentials. Highlight your certifications and specializations to demonstrate your qualifications and dedication to your field
      </p>

      <div className="space-y-4 mb-6 border border-blue-600 rounded-3xl">
        {certificationList.map((certification, index) => (
          <CertificationItem
            key={index}
            certificateName={certification.certificateName}
            issuingOrganization={certification.issuingOrganization}
            issueDate={certification.issueDate}
            onEdit={() => onEditCertification(index)}
            onDelete={() => onDeleteCertification(index)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={onAddCertification}
          className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-1/2 text-sm flex items-center justify-center"
        >
          Add Certification
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

        <button
          onClick={onProceed}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-1/2 text-sm"
        >
          Proceed →
        </button>
      </div>
    </div>
  );
};

interface CertificationProps {
  onProceed: () => void;
}

// Example Usage (assuming you manage the certificationList state in a parent component)
const Certification: React.FC<CertificationProps> = ({ onProceed }) => {
  const [certificationList, setCertificationList] = useState([
    { certificateName: 'Essentials of Music', issuingOrganization: 'Udemy', issueDate: 'Jan 2013' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false); // State to show/hide AddCertificationForm

  const handleAddCertification = () => {
    setShowAddForm(true); 
  };

  const handleEditCertification = (index: number) => {
    console.log('Edit Certification clicked for index:', index);
  };

  const handleDeleteCertification = (index: number) => {
    setCertificationList(certificationList.filter((_, i) => i !== index));
  };


  const handleSaveCertification = (formData: any) => {
    setCertificationList([...certificationList, formData]);
    setShowAddForm(false); // Hide the form after saving
  };

  const handleAddSkill = () => {
    console.log('Add Skill button clicked');
    // Add your logic here to handle skill addition
  };

  return (
    <div className="flex justify-center items-center">
      <CertificationForm
        onAddCertification={handleAddCertification}
        certificationList={certificationList}
        onEditCertification={handleEditCertification}
        onDeleteCertification={handleDeleteCertification}
        onProceed={onProceed} 
      />

      {showAddForm && (
        <AddCertificationForm onAddSkill={handleAddSkill} onSave={handleSaveCertification} onCancel={() => setShowAddForm(false)} />
      )}
    </div>
  );
};

export default Certification;
