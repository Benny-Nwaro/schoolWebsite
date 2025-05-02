'use client'; // Mark as a Client Component because it uses hooks (useState)

import styles from './BookingComponent.module.scss'
import React, { useState, useEffect } from 'react' // Import React and useEffect
import Calendar from 'react-calendar'
import moment, { Moment } from 'moment' // Import Moment type
import 'react-calendar/dist/Calendar.css'
import axios from 'axios'; // Import axios
import { useRouter } from 'next/navigation'; // Import useRouter
import ConfirmationModal from './ConfirmationModal'
import LayerI from '@/src/assets/images/Layer1.png'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { TfiTimer } from 'react-icons/tfi'

// Define the structure of the data expected from sessionStorage
interface SignupData {
  userId: string;
  email: string;
  role: string;
  paymentMethod?: string; // Add paymentMethod as an optional field
  // Add all other fields that were stored in BookingFormContent
  [key: string]: any; // Allow other properties
}

const BookingComponent = () => {
  // Type the state variables
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<Moment | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [signupData, setSignupData] = useState<SignupData | null>(null);
  const router = useRouter(); // Initialize router

  // Generate time slots
  // Add types for parameters and return value
  const generateTimeSlots = (start: Moment, end: Moment, interval: number): Moment[] => {
    const slots: Moment[] = [];
    let currentTime = start.clone(); // Clone to avoid modifying the original start time

    while (currentTime.isBefore(end)) {
      slots.push(currentTime.clone());
      currentTime.add(interval, 'minutes');
    }
    return slots;
  };

  // Ensure start and end times are correctly initialized for the day
  const startTime = moment().startOf('day'); // Start at 00:00
  const endTime = moment().endOf('day'); // End at 23:59:59.999
  const timeSlots: Moment[] = generateTimeSlots(startTime, endTime, 60); // Hourly slots

  // Retrieve data from sessionStorage on component mount
  useEffect(() => {
    const storedData = sessionStorage.getItem('pendingSignupData');
    if (storedData) {
      try {
        setSignupData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing signup data:", error);
        sessionStorage.removeItem('pendingSignupData');
        router.push('/'); // Or some error page
      }
    } else {
      // Handle case where data is missing (e.g., redirect back or show error)
      console.error("Signup data not found in session storage.");
      router.push('/');
    }
  }, [router]); // Added router dependency
  // Type the date parameter for handleDateChange
  // Define the type for the value from react-calendar's onChange
  type CalendarValue = Date | null | [Date | null, Date | null];

  const handleDateChange = (value: CalendarValue) => {
    // react-calendar returns Date | null | [Date | null, Date | null]
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      // If it's a range, use the start date (assuming no range selection is intended)
      setSelectedDate(value[0]);
    }
    setSelectedTime(null); // Reset time selection when date changes
  };

  const handleConfirmBooking = async () => {
    if (!selectedTime || !signupData) {
      alert("Please select a time slot and ensure signup data is available.");
      return;
    }

    // Combine date and time for scheduleTime
    const scheduleDateTime = moment(selectedDate)
      .set({
        hour: selectedTime.hour(),
        minute: selectedTime.minute(),
        second: 0,
        millisecond: 0,
      });

    const finalPayload = {
      paymentMethod: signupData.paymentMethod || 'WALLET', // Ensure paymentMethod is included
      user: {
        ...signupData, // Spread all the user details from storage
        scheduleTime: scheduleDateTime.toISOString(), // Add the selected schedule time in ISO format
        // Ensure fields expected by backend are present, remove duplicates if necessary
        // e.g., remove paymentMethod from here if it's top-level
      },
    };
    // Remove top-level keys from user object if they exist at the root
    delete finalPayload.user.paymentMethod;

    console.log("Final Signup Payload:", finalPayload);

    try {
      const response = await axios.post(
        "https://testbackend.educify.org/api/api/v1/students/signup",
        finalPayload
      );

      console.log("Signup Response:", response.data);

      if (response.status >= 200 && response.status < 300) { // Check for success
        setShowConfirmationModal(true); // Show confirmation modal on success
        sessionStorage.removeItem('pendingSignupData'); // Clear stored data
      } else {
        alert(response.data?.message || "Signup failed during final step. Please try again.");
      }
    } catch (error) {
      console.error("Error during final signup:", (error as any).response?.data || (error as any).message);
      const errorMessage = (error as any)?.response?.data?.message || "Signup failed during final step. Please try again.";
      alert(errorMessage);
    }
  };

  const handleLoginClick = () => {
    router.push('/login'); // Redirect to login page
  };

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Schedule Your FREE Class</h3>
        <p className={styles.subtitle}>Book a free session and take the first step towards mastering your subject</p>

        <div className={styles.layout}>
          {/* Date Picker Section */}
          <div className={styles.boxContainer}>
            <div className={styles.calendarContainer}>
              <p className={styles.titleContainer}>
                <IoCalendarNumberOutline />
                Select a date
              </p>
              <div className={styles.calendarContainer}>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={new Date()} // Prevent selecting past dates
                />
              </div>
            </div>
          </div>

          {/* Time Selection Section */}
          <div className={styles.boxContainer}>
            <p className={styles.titleContainer}>
              <TfiTimer /> Select a time
            </p>

            {/* Time Slots */}
            <div className={styles.timeGrid}>
              {timeSlots.map((time, index) => (
                <button // Use button for better accessibility and semantics
                  key={index}
                  onClick={() => setSelectedTime(time)} // Simplified handler
                  className={`${styles.timeButton} ${selectedTime?.isSame(time, 'minute') ? styles.timeButtonSelected : ''}`}
                >
                  {time.format('hh:mm A')}
                </button>

              ))}
            </div>
          </div>
        </div>

        {/* Confirm Booking Button */}
        {selectedTime && (
          <div className={styles.buttonContainer}>
            <button className={styles.confirmButton} onClick={handleConfirmBooking}>
              Confirm Schedule
            </button>
          </div>
        )}
      </div>

      <ConfirmationModal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)} // Allow closing the modal
        title='Your class has been successfully booked!'
        imageSrc={LayerI.src}
        details={{
          Date: moment(selectedDate).format('LL'),
          Time: selectedTime ? selectedTime.format('hh:mm A') : 'N/A',
        }}
        actionLinkText='Login'
        onActionLinkClick={handleLoginClick}
        message='to your account to see the details of your upcoming meeting/class'
      />
    </>
  );
}; // Added semicolon for consistency
export default BookingComponent;