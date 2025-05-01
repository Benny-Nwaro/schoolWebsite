'use client'; // Mark as a Client Component because it uses hooks (useState)

import styles from './BookingComponent.module.scss'
import React, { useState } from 'react' // Import React
import Calendar from 'react-calendar'
import moment, { Moment } from 'moment' // Import Moment type
import 'react-calendar/dist/Calendar.css'
import ConfirmationModal from './ConfirmationModal'
import LayerI from '@/src/assets/images/Layer1.png'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { TfiTimer } from 'react-icons/tfi'

// Define the props interface
interface BookingComponentProps {
  // Define types for any props your component might receive
  // Example: If these props were actually used:
  // selectedData?: any; // Replace 'any' with a more specific type if known
  // onOpenConfirmation?: () => void;
}

const BookingComponent: React.FC<BookingComponentProps> = ({ /* Destructure props here if needed */ }) => {
  // Type the state variables
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<Moment | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  // Generate time slots
  // Add types for parameters and return value
  const generateTimeSlots = (start: Moment, end: Moment, interval: number): Moment[] => {
    const slots: Moment[] = [];
    let currentTime = start.clone(); // Clone to avoid modifying the original start time

    while (currentTime.isBefore(end)) {
      slots.push(currentTime.clone())
      currentTime.add(interval, 'minutes')
    }
    return slots
  }

  // Ensure start and end times are correctly initialized for the day
  const startTime = moment().startOf('day'); // Start at 00:00
  const endTime = moment().endOf('day'); // End at 23:59:59.999
  const timeSlots: Moment[] = generateTimeSlots(startTime, endTime, 60); // Hourly slots

  // Type the date parameter for handleDateChange
  const handleDateChange = (value: Date | Date[] | null) => {
    // react-calendar returns Date | [Date, Date] | null
    // Handle single date selection for this component
    if (value instanceof Date) {
      setSelectedDate(value);
    }
    setSelectedTime(null)
  }

  const handleConfirmBooking = () => {
    setOpen(true)
  }

  const handleLoginClick = () => {
    setOpen(false)
  }

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
        open={open}
        onClose={() => setOpen(false)}
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
  )
}
; // Added semicolon for consistency
export default BookingComponent;
