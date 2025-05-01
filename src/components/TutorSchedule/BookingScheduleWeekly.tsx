"use client";
import React, { useMemo, useState } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  Event as CalendarEvent,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";

import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

interface Event {
  title: string;
  start: Date;
  end: Date;
}
interface BookingScheduleProps {
  setShowBookingWeekly: (showBooking: boolean) => void;

}
const BookingScheduleWeekly: React.FC<BookingScheduleProps> = ({
  setShowBookingWeekly,

}) => {
  const today = new Date();
  today.setSeconds(0, 0); // Normalize to the start of the minute
  const defaultEvents: Event[] = [
    { title: "Monday Morning", start: new Date(today.setHours(9, 0)), end: new Date(today.setHours(9, 30)) },
    { title: "Monday Afternoon", start: new Date(today.setHours(14, 0)), end: new Date(today.setHours(14, 30)) },
    { title: "Monday Evening", start: new Date(today.setHours(17, 0)), end: new Date(today.setHours(17, 30)) },
    { title: "Tuesday Morning", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(10, 0)), end: new Date(today.setHours(10, 30)) },
    { title: "Tuesday Afternoon", start: new Date(today.setHours(13, 0)), end: new Date(today.setHours(13, 30)) },
    { title: "Wednesday Morning", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(9, 0)), end: new Date(today.setHours(9, 30)) },
    { title: "Wednesday Evening", start: new Date(today.setHours(18, 0)), end: new Date(today.setHours(18, 30)) },
    { title: "Thursday Midday", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(12, 0)), end: new Date(today.setHours(12, 30)) },
    { title: "Friday Morning", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(10, 0)), end: new Date(today.setHours(10, 30)) },
    { title: "Friday Evening", start: new Date(today.setHours(17, 0)), end: new Date(today.setHours(17, 30)) },
    { title: "Saturday Morning", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(9, 0)), end: new Date(today.setHours(9, 30)) },
    { title: "Saturday Afternoon", start: new Date(today.setHours(14, 0)), end: new Date(today.setHours(14, 30)) },
    { title: "Sunday Evening", start: new Date(today.setDate(today.getDate() + 1) && today.setHours(18, 0)), end: new Date(today.setHours(18, 30)) },
  ];

  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const[isChecked, setIsChecked] = useState(false)

  const localizer = useMemo(() => momentLocalizer(moment), []);

  const handleSelectEvent = (event: CalendarEvent) => {
    const typedEvent = event as Event; // Type casting for compatibility

    // Format the selected date for display
    const formattedDate = moment(typedEvent.start).format("dddd, h:mm A");

    // Check if the clicked event is already selected
    const isAlreadySelected =
      selectedEvents.length > 0 &&
      selectedEvents[0].start.toISOString() === typedEvent.start.toISOString() &&
      selectedEvents[0].end.toISOString() === typedEvent.end.toISOString();

    if (isAlreadySelected) {
      // Deselect the event if it's already selected
      setSelectedEvents([]);
      setSelectedDates([]);
    } else {
      // Clear any existing selection and select the new event
      setSelectedEvents([typedEvent]);
      setSelectedDates([formattedDate]);
    }
  };

  const handleClick = ()=>{
    setShowBookingWeekly(false)

  }

  const eventPropGetter = (
    event: CalendarEvent,
    start: Date | undefined,
    end: Date | undefined,
    isSelected: boolean
  ) => {
    const typedEvent = event as Event; // Type casting for compatibility

    const isSelectedEvent = selectedEvents.some(
      (e) =>
        e.start.toISOString() === typedEvent.start.toISOString() &&
        e.end.toISOString() === typedEvent.end.toISOString()
    );

    return {
      style: {
        backgroundColor: isSelectedEvent ? "#23B730" : "#ADE1AF", // Selected and default colors
      },
    };
  };

  const plans = [
    { title: "Plan", desc: "Monthly plan" },
    { title: "Timeframe", desc: "4 weeks" },
    { title: "No. of lessons", desc: "4 lessons" },
    { title: "Location", desc: "Online" },
  ];

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/checkout");
  };

  const handleRemoveDate = (date: string) => {
    setSelectedDates([]);
    setSelectedEvents([]);
  };
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked); 
  };

  return (
    <div className="booking_schedule_overlay">
      <div className="tutor_calendar_container">
        <div className="schedule_type">
          <div className="column">
            <span className="title">Schedule</span>
            <ToggleSwitch name="toggle" label="" checked={isChecked} onChange={handleCheckboxChange} id="packages" />
          </div>
        </div>
        <div className="plans">
          {plans.map((el, i) => (
            <div className="plan" key={i}>
              <span className="title">{el.title}</span>
              <span className="desc">{el.desc}</span>
            </div>
          ))}
        </div>
        <div className="selected_date_container">
          <span>Selected Day and Time</span>
          {selectedDates.length === 0 ? (
            <span className="date">Nil</span>
          ) : (
            selectedDates.map((date, index) => (
              <span key={index} className="date flex flex-row space-x-3">
                {date}{" "}
                <IoCloseOutline
                  className="text-lg font-bold ml-3 hover:cursor-pointer"
                  onClick={() => handleRemoveDate(date)}
                />
              </span>
            ))
          )}
        </div>

        <div className="tutor_outer_calendar_container">
          <Calendar
            localizer={localizer}
            events={events}
            views={[Views.WEEK]}
            defaultView={Views.WEEK}
            view={view}
            date={date}
            onView={(view: any) => setView(view)}
            onNavigate={(date) => setDate(new Date(date))}
            onSelectEvent={handleSelectEvent}
            allDayAccessor={() => false}
            className="adnan_calendar adnan_calendar_2"
            eventPropGetter={eventPropGetter}
          />
        </div>
        <div className="buttons">
          <Button variant="secondary" onClick={handleClick}>
            Cancel
          </Button>
          <Button
            className={`bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition hover:scale-105`}
            size="md"
            onClick={handleNavigate}
          >
            Proceed to payment <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingScheduleWeekly;
