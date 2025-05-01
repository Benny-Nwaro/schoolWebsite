'use client'; // Mark as Client Component due to useState

import React, { useState } from 'react'; // Import React
import TutorSelectionModal from './TutorSelectionModal';
import BookingComponent from './BookingComponent';
import ConfirmationModal from './ConfirmationModal';
import LayerI from '@/src/components/assets/Layer1.png'; // Import the image asset - adjust path if needed

// Define an interface for the data collected throughout the flow
// Add more specific properties based on what data is actually collected
interface BookingFlowData {
  tutor?: any; // Replace 'any' with a specific Tutor type if available
  date?: Date | string; // Can be Date object or formatted string
  time?: string; // Or Moment object if using moment consistently
  [key: string]: any; // Allow other properties if structure is dynamic
}

const BookingFlow = () => {
  const [selectedData, setSelectedData] = useState<BookingFlowData>({});
  const [step, setStep] = useState<number>(1);
  const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false);

  // Handle data selection from each step
  const handleSelectData = (data: Partial<BookingFlowData>) => { // Type the incoming data
    setSelectedData(prev => ({ ...prev, ...data }));
    handleNextStep(); // Automatically proceed to the next step when data is received
  };

  // Move to the next step
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Open confirmation modal
  const handleOpenConfirmation = (bookingDetails: BookingFlowData) => { // Type the booking details
    setSelectedData(bookingDetails); // Update selectedData with full details
    setConfirmationOpen(true);
  };

  // Close confirmation modal
  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  // Handle Booking Details (Date & Time)
  const handleSelectBookingDetails = (data: Partial<BookingFlowData>) => { // Type the incoming data
    setSelectedData(prev => ({ ...prev, ...data }));
  };

  return (
    <div>
      {step === 1 && (
        <TutorSelectionModal
          open={true}
          onClose={() => console.log("Tutor selection modal closed/cancelled")} // Changed: onClose usually just closes, doesn't go back
          onSelectData={handleSelectData}
        />
      )}

      {step === 2 && (
        <BookingComponent
          selectedData={selectedData} // Pass selectedData
          onOpenConfirmation={handleOpenConfirmation} 
          // Removed onSelectBookingDetails - BookingComponent likely handles its own state until confirmation
        />
      )}

      {confirmationOpen && (
        <ConfirmationModal
          open={confirmationOpen}
          onClose={handleCloseConfirmation}
          title='Your class has been successfully booked!'
          imageSrc={LayerI.src} // Use the image URL from the StaticImageData object
          details={selectedData}
          actionLinkText='Login'
          onActionLinkClick={() => alert('Navigating to login...')}
          message='to your account to see the details of your upcoming meeting/class'
        />
      )}
    </div>
  );
};

export default BookingFlow;
