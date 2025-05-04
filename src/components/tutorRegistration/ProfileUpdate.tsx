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
import SampleLesson from './SampleLesson';
import FinishPage from './FinishPage';
import TopBar from './TopBar';

const TOTAL_STEPS = 12;

const ProfileUpdate: React.FC = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileDescription, setShowProfileDescription] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showLanguage, setShowLanguaage] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showPhotosCard, setShowPhotosCard] = useState(false);
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [showSampleLesson, setShowSampleLesson] = useState(false);
  const [showFinish, setShowFinish] = useState(false);

  const [pageTitle, setPageTitle] = useState("Personal Information");
  const [progress, setProgress] = useState(0);

  const [atYourLocationSelected, setAtYourLocationSelected] = useState(false);
  const [studentLocationSelected, setStudentLocationSelected] = useState(false);
  const [onlineSelected, setOnlineSelected] = useState(false);

  const incrementProgress = (step: number = 1) => {
    setProgress(prev => Math.min(prev + (step * 100 / TOTAL_STEPS), 100));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handlePersonalInformation = () => {
    setShowPersonalInfo(false);
    setShowSubjectSelection(true);
    setPageTitle("Select Subjects");
    incrementProgress();
  };

  const handleSubjectSelection = () => {
    setShowSubjectSelection(false);
    setShowProfile(true);
    setPageTitle("Profile Title");
    incrementProgress();
  };

  const handleProfileDescription = () => {
    setShowProfile(false);
    setShowProfileDescription(true);
    setPageTitle("About You");
    incrementProgress();
  };

  const handleProfile = () => {
    setShowProfileDescription(false);
    setShowEducation(true);
    setPageTitle("Educational Background");
    incrementProgress();
  };

  const handleEducation = () => {
    setShowEducation(false);
    setShowLocation(true);
    setPageTitle("Lesson Location");
    incrementProgress();
  };

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
    setShowLocation(false);
    setShowLanguaage(true);
    setPageTitle("Languages");
    incrementProgress();
  };

  const handleProfilePhoto = () => {
    setShowLanguaage(false);
    setShowPhoto(true);
    setPageTitle("Profile Picture");
    incrementProgress();
  };

  const handleLanguage = () => {
    setShowPhoto(false);
    setShowPhotosCard(true);
    setPageTitle("Studio/Lesson Photos");
    incrementProgress();
  };

  const handleVideoUpload = () => {
    setShowPhotosCard(false);
    setShowVideoUpload(true);
    setPageTitle("Video  Intro");
    incrementProgress();
  };

  const handleSampleLesson = () => {
    setShowVideoUpload(false);
    setShowSampleLesson(true);
    setPageTitle("Teach Us Something");
    incrementProgress();
  };

  const handleFinish = () => {
    setShowSampleLesson(false);
    setShowFinish(true);
    setPageTitle("Finish");
    incrementProgress();
  };

  const handleSkip = () => {
    console.log('User chose to skip language selection');
  };

  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;
  const progressPercentage = `${Math.round(progress)}%`;

  return (
    <div className='lg:mx-16 max-md:mx-3 bg-white'>
      <TopBar />
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center cursor-pointer" onClick={handleGoBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="mr-2">
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
          <span className="text-gray-800 text-sm">Go back</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{pageTitle}</h2>
        <div className="relative w-16 h-16">
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="15" stroke="#e0f2f7" strokeWidth="4" fill="none" />
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
            <text x="20" y="24" textAnchor="middle" fontSize="10" fill="#333" fontWeight="bold">
              {progressPercentage}
            </text>
          </svg>
        </div>
      </div>

      <div className='flex w-full justify-center bg-white mt-12'>
        {showPersonalInfo && <PersonalInformationForm onSubmit={handlePersonalInformation} />}
        {showSubjectSelection && <SubjectSelectionForm onProceed={handleSubjectSelection} />}
        {showProfile && <ProfileTitleForm onSubmit={handleProfileDescription} />}
        {showProfileDescription && <ProfileDescriptionForm onSubmit={handleProfile} />}
        {showEducation && <EducationalBackground onProceed={handleEducation} />}
        {showLocation && (
          <TeachingPreference
            onProceed={handleLocation}
            onLocationPreferenceChange={handleLocationPreferenceChange}
            atYourLocationSelected={atYourLocationSelected}
            studentLocationSelected={studentLocationSelected}
            onlineSelected={onlineSelected}
          />
        )}
        {showLanguage && <LanguageSelection onSkip={handleSkip} onProceed={handleProfilePhoto} />}
        {showPhoto && <TutorProfilePhoto onProceed={handleLanguage} />}
        {showPhotosCard && <ListingPhotos onProceed={handleVideoUpload} />}
        {showVideoUpload && <VideoUploadPage onProceed={handleSampleLesson} />}
        {showSampleLesson && <SampleLesson onFinish={handleFinish} onRecordVideo={handleFinish} />}
        {showFinish && <FinishPage onGoToDashboard={handleEducation} />}
      </div>
    </div>
  );
};

export default ProfileUpdate;
