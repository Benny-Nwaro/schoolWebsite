"use client";
import React, { useMemo, useState } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  Event as CalendarEvent,
  EventProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import CustomToolbar from "./CustomToolbar";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Event {
  title: string;
  start: Date;
  end: Date;
}
interface BookingScheduleProps {
  setShowBookingFlexible: (setShowBookingFlexible: boolean) => void;
}
const BookingScheduleFlexible: React.FC<BookingScheduleProps> = ({
  setShowBookingFlexible,
}) => {
  const today = new Date();
  today.setSeconds(0, 0); // Normalize to the start of the minute
  const defaultEvents: Event[] = [
    // Monday Events
    {
      title: "Monday Morning",
      start: new Date(today.setHours(9, 0)), // 9:00 AM
      end: new Date(today.setHours(9, 30)), // 9:30 AM
    },
    {
      title: "Monday Afternoon",
      start: new Date(today.setHours(14, 0)), // 2:00 PM
      end: new Date(today.setHours(14, 30)), // 2:30 PM
    },
    {
      title: "Monday Evening",
      start: new Date(today.setHours(17, 0)), // 5:00 PM
      end: new Date(today.setHours(17, 30)), // 5:30 PM
    },
  
    // Tuesday Events
    {
      title: "Tuesday Morning",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(10, 0)), // 10:00 AM
      end: new Date(today.setHours(10, 30)), // 10:30 AM
    },
    {
      title: "Tuesday Afternoon",
      start: new Date(today.setHours(13, 0)), // 1:00 PM
      end: new Date(today.setHours(13, 30)), // 1:30 PM
    },
  
    // Wednesday Events
    {
      title: "Wednesday Morning",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(9, 0)), // 9:00 AM
      end: new Date(today.setHours(9, 30)), // 9:30 AM
    },
    {
      title: "Wednesday Evening",
      start: new Date(today.setHours(18, 0)), // 6:00 PM
      end: new Date(today.setHours(18, 30)), // 6:30 PM
    },
  
    // Thursday Events
    {
      title: "Thursday Midday",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(12, 0)), // 12:00 PM
      end: new Date(today.setHours(12, 30)), // 12:30 PM
    },
  
    // Friday Events
    {
      title: "Friday Morning",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(10, 0)), // 10:00 AM
      end: new Date(today.setHours(10, 30)), // 10:30 AM
    },
    {
      title: "Friday Evening",
      start: new Date(today.setHours(17, 0)), // 5:00 PM
      end: new Date(today.setHours(17, 30)), // 5:30 PM
    },
  
    // Saturday Events
    {
      title: "Saturday Morning",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(9, 0)), // 9:00 AM
      end: new Date(today.setHours(9, 30)), // 9:30 AM
    },
    {
      title: "Saturday Afternoon",
      start: new Date(today.setHours(14, 0)), // 2:00 PM
      end: new Date(today.setHours(14, 30)), // 2:30 PM
    },
  
    // Sunday Events
    {
      title: "Sunday Evening",
      start: new Date(today.setDate(today.getDate() + 1) && today.setHours(18, 0)), // 6:00 PM
      end: new Date(today.setHours(18, 30)), // 6:30 PM
    },
  ];

  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);


  const localizer = useMemo(() => momentLocalizer(moment), []);

  const handleSelectEvent = (event: CalendarEvent) => {
    const typedEvent = event as Event; // Type casting for compatibility

    const isAlreadySelected = selectedEvents.some(
      (e) =>
        e.start.toISOString() === typedEvent.start.toISOString() &&
        e.end.toISOString() === typedEvent.end.toISOString()
    );

  // Format the date
  const formattedDate = moment(typedEvent.start).format("dddd, h:mm A");

  // Check if the date is already in the selectedDates array
  const isSelected = selectedDates.includes(formattedDate);

  if (isSelected) {
    // Remove the date from the selectedDates array
    setSelectedDates(selectedDates.filter((date) => date !== formattedDate));
  } else {
    // Add the date to the selectedDates array
    setSelectedDates([...selectedDates, formattedDate]);
  }

    if (isAlreadySelected) {
      // setSelectedDates(selectedDates.filter((date) => date !== formattedDate));
      setSelectedEvents(
        selectedEvents.filter(
          (e) =>
            e.start.toISOString() !== typedEvent.start.toISOString() ||
            e.end.toISOString() !== typedEvent.end.toISOString()
        )
      );
    } else {
      setSelectedEvents([...selectedEvents, typedEvent]);
      // setSelectedDates([...selectedDates, formattedDate]);

    }
  };

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
    {
      title: "Plan",
      desc: "Monthly plan",
    },
 
    {
      title: "Timeframe",
      desc: "4 weeks",
    },

    {
      title: "No. of lessons",
      desc: "4 lessons",
    },
    {
      title: "Location",
      desc: "Online",
    },
  ];

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/checkout");
  };
  const handleRemoveDate = (date: string) => {
    setSelectedDates(selectedDates.filter((d) => d !== date));
  };
  return (
    <div className="booking_schedule_overlay">
      <div className="tutor_calendar_container">
        <div className="schedule_type">
          <div className="column">
            <span className="title">Schedule</span>
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
          {selectedEvents.length === 0
      ? <span className="date">Nil </span>

      : selectedDates.map((date, index) => (
          <span key={index} className="date flex flex-row space-x-3">
            {date} <IoCloseOutline className="text-lg font-bold ml-3 hover:cursor-pointer" onClick={() => handleRemoveDate(date)} />
          </span>
        ))}        
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
            components={{ toolbar: CustomToolbar }} 
            eventPropGetter={eventPropGetter}
          />
        </div>
        <div className="buttons">
          <Button variant="secondary" onClick={() => setShowBookingFlexible(false)}>
            Cancel
          </Button>
          <Button className={`bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition hover:scale-105`} size="md" onClick={handleNavigate}>
            Proceed to payment <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingScheduleFlexible;
