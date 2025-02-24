"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  Event as CalendarEvent,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CustomToolbar from "./CustomToolbar";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Availability } from "@/src/types/types";

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const TestBookingSchedule = ({
  availability,
}: {
  availability: Availability[];
}) => {
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // Generate events for the entire year based on the weekly availability
  useEffect(() => {
    const generateYearlyEvents = () => {
      const startOfYear = moment().startOf("year");
      const endOfYear = moment().endOf("year");
      const generatedEvents: Event[] = [];

      // Iterate through each week of the year
      for (
        let week = startOfYear;
        week.isBefore(endOfYear);
        week.add(1, "week")
      ) {
        availability.forEach(({ day, times }) => {
          if (day && times) {
            // Check that day and times are defined
            // Convert the day of the week to a moment.js day index (0=Sunday, 6=Saturday)
            const dayIndex = moment().day(day).day();

            times.forEach(({ startTime, endTime }) => {
              const startDateTime = moment(week)
                .day(dayIndex)
                .set({
                  hour: moment(startTime).hour(),
                  minute: moment(startTime).minute(),
                })
                .toDate();

              const endDateTime = moment(week)
                .day(dayIndex)
                .set({
                  hour: moment(endTime).hour(),
                  minute: moment(endTime).minute(),
                })
                .toDate();

              generatedEvents.push({
                title: "Available Slot",
                start: startDateTime,
                end: endDateTime,
              });
            });
          }
        });
      }

      setEvents(generatedEvents);
    };

    generateYearlyEvents();
  }, [availability]);

  const handleSelectEvent = (event: CalendarEvent) => {
    const typedEvent = event as Event;

    // Check if the event is already selected
    const isAlreadySelected = selectedEvents.some(
      (e) =>
        e.start.toISOString() === typedEvent.start.toISOString() &&
        e.end.toISOString() === typedEvent.end.toISOString()
    );

    if (isAlreadySelected) {
      // If already selected, remove it (deselect)
      setSelectedEvents(
        selectedEvents.filter(
          (e) =>
            e.start.toISOString() !== typedEvent.start.toISOString() ||
            e.end.toISOString() !== typedEvent.end.toISOString()
        )
      );
    } else {
      // Check for any overlap, excluding adjacent events
      const isOverlapping = selectedEvents.some(
        (e) => typedEvent.start < e.end && typedEvent.end > e.start // Overlaps if start < existing end AND end > existing start
      );

      if (isOverlapping) {
        alert("This time slot overlaps with an already selected slot.");
        return;
      }

      // Add the event to the selected events
      setSelectedEvents([...selectedEvents, typedEvent]);
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

  return (
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
      {!!selectedEvents.length && (
        <div className="selected_date_container">
          <span>Selected Day and Time</span>
          {selectedEvents.map((el, i) => (
            <span className="date" key={i}>
              {moment(el.start).format("dddd, h:mm A")}
            </span>
          ))}
        </div>
      )}

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
          components={{
            toolbar: CustomToolbar,
          }}
          eventPropGetter={eventPropGetter}
        />
      </div>
      <div className="buttons">
        <Button variant="secondary">Cancel</Button>
        <Button size="md" onClick={handleNavigate}>
          Proceed to payment <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default TestBookingSchedule;
