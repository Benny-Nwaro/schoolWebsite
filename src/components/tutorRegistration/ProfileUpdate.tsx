"use client"

import React, { useState } from 'react';
import PersonalInformationForm from './PersonalInformationForm';
import SubjectSelectionForm from './SubjectSelectionForm';
import ProfileTitleForm from './ProfileTitleForm';
import ProfileDescriptionForm from './ProfileDescriptionForm';
import EducationalBackground from './EducationalBackground';
import TeachingPreference from './TeachingPreference';
import LanguageSelection from './LanguageSelection';
import TutorProfilePhoto from './TutorProfilePhoto';
import ListingPhotos from './ListingPhotos';
import VideoUploadPage from './VideoUploadPage';


interface HeaderProps {
  progress?: number; // Optional progress value (0-100)
}

const ProfileUpdate: React.FC<HeaderProps> = ({ progress }) => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(true)
    const [showSubjectSelection, setShowSubjectSelection] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showProfileDescription, setShowProfileDescription] = useState(false)
    const [showEducation, setShowEducation] = useState(false)
    const [showLocation, setShowLocation] = useState(false)
    const [showLanguage, setShowLanguaage] = useState(false)
    const [showPhoto, setShowPhoto] = useState(false)
    const [showPhotosCard, setShowPhotosCard] = useState(false)
    const [showVideoUpload, setShowVideoUpload] = useState(false)




    const [pageTitle, setPageTitle] = useState("Personal Information ")

    const [atYourLocationSelected, setAtYourLocationSelected] = useState(false);
    const [studentLocationSelected, setStudentLocationSelected] = useState(false);
    const [onlineSelected, setOnlineSelected] = useState(false);

  const progressPercentage = progress !== undefined ? `${progress}%` : '0%';
  const strokeDasharray = progress !== undefined ? `${(progress / 100) * 2 * Math.PI * 15} ${2 * Math.PI * 15}` : `0 ${2 * Math.PI * 15}`;

  const handleGoBack = () => {
    window.history.back(); // Native method to go back in history
  };

  const handlePersonalInformation = ()=>{
    setShowPersonalInfo(false)
    setShowSubjectSelection(true)
  }

  const handleSubjectSelection = ()=>{
    setPageTitle("Select Subjects")
    setShowSubjectSelection(false)
    setShowProfile(true)

  }

  const handleProfile = ()=>{
    setShowProfileDescription(false)
    setShowEducation(true)
  }

  const handleProfileDescription = ()=>{
    setShowProfile(false)
    setShowProfileDescription(true)
  }

  const handleEducation = ()=>{
    setShowEducation(false)
    setShowLocation(true)
    
  }
  const handleLocationPreferenceChange = (
    preference: 'atYourLocation' | 'studentLocation' | 'online' | null,
    checked: boolean
  ) => {
    if (preference === 'atYourLocation') {
      setAtYourLocationSelected(checked);
    } else if (preference === 'studentLocation') {
      setStudentLocationSelected(checked);
    } else if (preference === 'online') {
      setOnlineSelected(checked);
    }
  };

  const handleLocation = () => {
    setShowLocation(false)
    setShowLanguaage(true)
  };

  const handleProfilePhoto = () => {
    setShowLanguaage(false)
    setShowPhoto(true)
  };

  const handleLanguage = () => {
    setShowPhoto(false)
    setShowPhotosCard(true)
  };

  const handleVideoUpload = () => {
    setShowPhotosCard(false)
    setShowVideoUpload(true)
  };

  const handleSkip = () => {
    console.log('User chose to skip language selection');
    // You can skip the step or show a message
  };

  return (
    <div className='lg:mx-16 max-md:mx-3 bg-white'>
     <div className="flex justify-between items-center p-4 border-b mt-32 border-gray-200">
      {/* Go Back Button */}
      <div
        className="flex items-center cursor-pointer"
        onClick={handleGoBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
        <span className="text-gray-800 text-sm">Go back</span>
      </div>
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{pageTitle}</h2>
      
      {/* Progress Circle */}
      <div className="relative w-16 h-16">
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="#e0f2f7"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="#2196f3"
            strokeWidth="4"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            transform="rotate(-90 20 20)"
          />
          <text
            x="20"
            y="24"
            textAnchor="middle"
            className="text-sm font-semibold text-gray-800"
          >
            {progressPercentage}
          </text>
        </svg>
      </div>
    </div>
    <div className='flex w-full justify-center mb-12  bg-white'>     
        {showPersonalInfo && <PersonalInformationForm onSubmit={handlePersonalInformation} />}
        {showSubjectSelection && <SubjectSelectionForm onProceed={handleSubjectSelection} />}
        {showProfile && <ProfileTitleForm onSubmit={handleProfileDescription} />}
        {showProfileDescription && <ProfileDescriptionForm onSubmit={handleProfile} />}
        {showEducation && <EducationalBackground onProceed={handleEducation} />}
        {showLocation && 
            <TeachingPreference
            onProceed={handleLocation}
            onLocationPreferenceChange={handleLocationPreferenceChange}
            atYourLocationSelected={atYourLocationSelected}
            studentLocationSelected={studentLocationSelected}
            onlineSelected={onlineSelected}
          />
          }
        {showLanguage && <LanguageSelection onSkip={handleSkip} onProceed={handleProfilePhoto} />}
        {showPhoto && <TutorProfilePhoto  onProceed={handleLanguage} />}
        {showPhotosCard && <ListingPhotos onProceed={handleVideoUpload}  />}
        {showVideoUpload && <VideoUploadPage />}



    </div>
    </div>
   
  );
};

export default ProfileUpdate;
