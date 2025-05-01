'use client'; // Mark as Client Component due to useState

import React, { useState, ReactNode } from 'react'; // Import React and types
import { SingleValue } from 'react-select'; // Import SingleValue type from react-select
import ReusableModal from './ReusableModal'
import { Typography, Button, styled, Box } from '@mui/material'
// Assuming types might not be available or complete, using 'any' for now. Install @types/react-google-places-autocomplete if available.
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { IconContext } from 'react-icons'
import {
  // Ensure all used icons are imported
  FaRegFileAlt,
  FaOpencart,
  FaChalkboardTeacher,
  FaCode,
  FaDraftingCompass,
  FaLaptop,
  FaHome,
} from 'react-icons/fa'
import { TbMoodKid, TbSquareRoot2 } from 'react-icons/tb'
import {
  IoLanguageOutline,
  IoCarOutline,
  IoHomeOutline,
  IoGridOutline,
} from 'react-icons/io5'
import { CgBoy, CgGym } from 'react-icons/cg'
import { PiCookingPot } from 'react-icons/pi'
import { CiBasketball, CiMusicNote1 } from 'react-icons/ci'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { LuSquare } from 'react-icons/lu'
import BookingFormContent from './BookingFormContent'

// --- Type Definitions ---

interface TutorSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onSelectData?: (data: CollectedData) => void; // Make onSelectData optional or required based on usage
}

// Define the structure for collected data
interface CollectedData {
  subject?: string;
  schoolLevel?: string;
  goal?: string;
  location?: string;
  address?: string;
  latitude?: number | null;
  longitude?: number | null;
  [key: string]: any; // Allow other potential properties
}

// Define structure for options in viewContent
interface ViewOption {
  icon: ReactNode;
  label: string;
}

// Define structure for view content
interface ViewContent {
  title: string;
  subtitle: string;
  options: ViewOption[] | ReactNode; // Can be an array of options or a single component
}

const TutorSelectionModal: React.FC<TutorSelectionModalProps> = ({ open, onClose, onSelectData }) => {
  // --- State Variables with Types ---
  const [view, setView] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [addressValue, setAddressValue] = useState<any | null>(null); // Type from GooglePlacesAutocomplete if available
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [value, setValue] = useState<any | null>(null); // Type from GooglePlacesAutocomplete if available

  // State to hold all collected data
  const [collectedData, setCollectedData] = useState<CollectedData>({});

  const handleNextView = (): void => {
    if (!selectedOption) return

    if (["Student's home", "Teacher's place"].includes(selectedOption) && !addressValue) {
      alert("Please enter your address before proceeding.")
      return
    }

    // Store data from each view
    const newData = { ...collectedData }
    // Type assertion needed if selectedOption could be something other than string
    if (view === 1) newData.subject = selectedOption
    if (view === 2) newData.schoolLevel = selectedOption
    if (view === 3) newData.goal = selectedOption
    if (view === 4) {
      newData.location = selectedOption
      if (["Student's home", "Teacher's place"].includes(selectedOption)) {
        newData.address = addressValue?.label || ''
        newData.latitude = latitude
        newData.longitude = longitude
      }
    }

    setCollectedData(newData)

    if (view === 4) {
      // If onSelectData is provided, call it before moving to the final view
      if (onSelectData) {
        onSelectData(newData); // Pass the final collected data
      }
      // Proceed to the BookingFormContent view
      setView(prev => prev + 1)
      setSelectedOption(null)
      return;
    }

    setView(prev => prev + 1);
    setSelectedOption(null); // Reset selection for the next view
  }

  const handlePrevView = (): void => {
    setView(prev => prev - 1);
    setSelectedOption(null); // Reset selection when going back
  }

  const handleSelectOption = (label: string): void => {
    setSelectedOption(label);
  }
  interface AddressValue {
    label: string;
    value: string;
  }

  interface LatLng {
    lat: number;
    lng: number;
  }

  const onValueChange = (newValue: SingleValue<AddressValue>): void => {
    if (!newValue) return; // Handle null case
    setValue(newValue); // Update the address input value
    setAddressValue(newValue); // Update the address value for validation
  
    geocodeByAddress(newValue.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }: LatLng) => {
        setLatitude(lat);
        setLongitude(lng);
        console.log("Latitude:", lat, "Longitude:", lng); // For debugging
      })
      .catch((error: Error) => console.error("Error fetching geocode:", error));
  };

  // Content and actions for each view
  const viewContent: { [key: number]: ViewContent } = { // Add type annotation
    1: {
      title: 'What area does your child need assistance with?',
      subtitle: "Let's set up a free trial session with the perfect tutor!",
      options: [
        { icon: <TbSquareRoot2 />, label: 'Maths' },
        { icon: <CgGym />, label: 'Gym/Sports' },
        { icon: <IoLanguageOutline />, label: 'Languages' },
        { icon: <FaRegFileAlt />, label: 'Examinations' },
        { icon: <PiCookingPot />, label: 'Culinary' },
        { icon: <CiBasketball />, label: 'Life/Skills' },
        { icon: <IoCarOutline />, label: 'Driving' },
        { icon: <HiOutlineComputerDesktop />, label: 'Computing' },
        { icon: <CiMusicNote1 />, label: 'Music' },
        { icon: <FaOpencart />, label: 'Arts/Craft' },
      ],
    },
    2: {
      title: 'Which school level is your child currently in?',
      subtitle: "Let's help you find the perfect tutor for your child",
      options: [
        { icon: <TbMoodKid />, label: 'Pre-K to Grade 3' },
        { icon: <CgBoy />, label: 'Grades 4 — 8' },
        { icon: <FaChalkboardTeacher />, label: 'Grades 9 — 12' },
        {
          icon: <FaCode />,
          label: 'Specialized Subjects (Music, Coding, Language)',
        },
      ],
    },

    3: {
      title: 'What is the main goal for getting a tutor?',
      subtitle: 'We want to ensure we find the right tutor for your child',
      options: [
        { icon: <LuSquare />, label: 'Improve grades' },
        { icon: <FaDraftingCompass />, label: 'Prepare for exams' },
        { icon: <IoHomeOutline />, label: 'Assist with homework' },
        { icon: <IoGridOutline />, label: 'Other reasons' },
      ],
    },

    4: {
      title: 'Location Preference',
      subtitle: 'We want to ensure we find the right tutor for your child',
      options: [
        { icon: <FaLaptop />, label: 'Virtual' },
        { icon: <FaHome />, label: "Student's home" },
        { icon: <FaChalkboardTeacher />, label: "Teacher's place" },
      ],
    },

    5: {
      title: ' Book a free class with us',
      subtitle: 'limited spot Available',
      options: <BookingFormContent collectedData={collectedData} />,
    },
  }

  // Get content based on the current view
  const currentViewContent = viewContent[view];


  return (
    <ReusableModal
      open={open}
      onClose={onClose}
      title={
        currentViewContent
          ? `${currentViewContent.subtitle}\n${currentViewContent.title}`
          : undefined // Convert to string or undefined
      }
      actions={
        view === 5 ? (
          <StyledButton variant='contained' onClick={handlePrevView}>Back</StyledButton>
        ) : (
          <StyledButton
            variant='contained'
            onClick={handleNextView}
            disabled={!selectedOption ||
              (view === 4 && // Only disable based on address for view 4
                ["Student's home", "Teacher's place"].includes(selectedOption) && !value
              )}
          >
            Continue
          </StyledButton>
        )
      }
    >
      {currentViewContent && Array.isArray(currentViewContent.options) ? ( // Check if options is an array
        <Box
          display='grid'
          gridTemplateColumns={view === 1 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}
          gap={2}
          mt={2}
        >
          {currentViewContent.options.map((option, index) => (
            <StyledOption
              key={index}
              onClick={() => handleSelectOption(option.label)}
              selected={selectedOption === option.label}
            >
              <IconContext.Provider value={{ size: '1.5em', style: { marginRight: '8px' } }}>
                {option.icon}
              </IconContext.Provider>
              {option.label}
            </StyledOption>
          ))}
        </Box>
      ) : (
        // Render the component directly if `options` is not an array (e.g., BookingFormContent)
        <Box mt={2}>
          {Array.isArray(currentViewContent?.options)
            ? currentViewContent.options.map((option, index) => (
                <React.Fragment key={index}>{option.icon} {option.label}</React.Fragment>
              ))
            : currentViewContent?.options}
        </Box>
      )}

      {view === 4 && ["Student's home", "Teacher's place"].includes(selectedOption ?? '') && ( // Check view and nullish coalesce selectedOption
        <Box mt={1}>
          <Typography variant="body1" mb={1}>
            Please type your address:
          </Typography>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLEPLACE || ''} // Use Next.js env var access
            selectProps={{
              value,
              onChange: onValueChange,
              placeholder: "Enter your address...",
              styles: {
                control: (provided) => ({
                  ...provided,
                  marginBottom: "10px",
                  position: "relative",
                  zIndex: 2, // Keep the input on top
                }),
                menu: (provided) => ({
                  ...provided,
                  position: "absolute",
                  top: "-100px", // Adjust this value to control how high above the input the dropdown appears
                  left: "50%",
                  zIndex: 9999,
                  width: "250px", // Adjust the width to your desired size
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "200px", // Control the dropdown height
                }),
              },
            }}
          />
        </Box>
      )}
    </ReusableModal>
  )
}

// Styled component for each option
// Add type for the 'selected' prop
interface StyledOptionProps {
  selected: boolean;
}
const StyledOption = styled(Button)<StyledOptionProps>(({ selected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '12px 16px',
  border: selected ? '2px solid #3b82f6' : '1px solid #DBDCF0',
  borderRadius: '8px',
  backgroundColor: selected ? '#e7f3fe' : 'white',
  color: selected ? 'black' : '#333',
  marginTop: '0px',
  marginBottom: '16px',
  fontWeight: '500',
  fontSize: '16px',
  textAlign: 'left',
  '&:hover': {
    backgroundColor: '#DBDCF0',
  },
}))

const StyledButton = styled(Button)(() => ({ // Use function form
  backgroundColor: '#3d8bff', // Set the blue color
  color: '#fff', // White text color
  borderRadius: '24px', // Rounded corners to match the image
  padding: '10px 24px', // Adjust padding for size
  textTransform: 'none', // Remove uppercase transformation
  fontSize: '16px', // Set font size for readability
  fontWeight: '500', // Font weight for better readability
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // Subtle shadow for depth

  '&:hover': {
    backgroundColor: '#3b7ce7', // Slightly darker shade on hover
  },
}));

export default TutorSelectionModal
