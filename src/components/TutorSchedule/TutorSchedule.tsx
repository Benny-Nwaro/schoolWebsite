"use client";
import React, { useMemo, useState, useRef } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  SlotInfo,
  Event as CalendarEvent,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import "../ToggleSwitch/toggleSwitch.styles.scss";

import CustomToolbar from "./CustomToolbar";
import { Availability } from "@/src/types/types";
import BookingCard from "@/src/components/BookingCard"; // Import the booking card component
import { useRouter } from "next/router";


interface Event {
  title: string;
  start: Date;
  end: Date;
}
interface TutorScheduleProps {
  availability: Availability[];
}
const TutorSchedule: React.FC<TutorScheduleProps> = ({ availability }) => {
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [isFlexible, setIsFlexible] = useState(false); // Toggle state for schedule type
  const isDragging = useRef(false); // Track drag state


  const localizer = useMemo(() => momentLocalizer(moment), []);

  const normalizeDate = (date: Date) => {
    const newDate = new Date(date);
    newDate.setSeconds(0, 0); // Normalize to the start of the minute
    return newDate;
  };

  const isSlotOccupied = (start: Date, end: Date): boolean => {
    return events.some(
      (event) => event.start < end && event.end > start // Overlap condition
    );
  };

  const isWeekOccupied = (start: Date): boolean => {
    const startOfWeek = moment(start).startOf("isoWeek").toDate();
    const endOfWeek = moment(start).endOf("isoWeek").toDate();

    return events.some(
      (event) => event.start >= startOfWeek && event.start <= endOfWeek
    );
  };

  const deduplicateEvents = (events: Event[]): Event[] => {
    const uniqueEvents = new Map<string, Event>();

    events.forEach((event) => {
      const key = `${event.start.toISOString()}-${event.end.toISOString()}`;
      if (!uniqueEvents.has(key)) {
        uniqueEvents.set(key, event);
      }
    });

    return Array.from(uniqueEvents.values());
  };

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    if (!isDragging.current) {
      isDragging.current = true; // Set drag state to true

      const selectedSlots = [];
      let currentSlot = normalizeDate(new Date(start));
      const normalizedEnd = normalizeDate(new Date(end));

      // Check weekly selection restriction
      if (!isFlexible && isWeekOccupied(currentSlot)) {
        alert("Only one selection is allowed per week in weekly mode.");
        isDragging.current = false;
        return;
      }

      // Loop to create slots while respecting the 30-minute rule
      while (currentSlot < normalizedEnd) {
        const nextSlot = new Date(currentSlot);
        nextSlot.setMinutes(nextSlot.getMinutes() + 30);

        if (nextSlot <= normalizedEnd) {
          selectedSlots.push({
            start: new Date(currentSlot),
            end: new Date(nextSlot),
          });
        } else {
          // Handle the case where the nextSlot exceeds normalizedEnd
          selectedSlots.push({
            start: new Date(currentSlot),
            end: new Date(normalizedEnd),
          });
          break; // Exit the loop as we've reached the final slot
        }

        currentSlot = nextSlot;
      }

      // Filter out slots that are already occupied
      const newEvents = selectedSlots
        .filter(({ start, end }) => !isSlotOccupied(start, end))
        .map(({ start, end }) => ({
          title: "New Event",
          start,
          end,
        }));

      if (newEvents.length > 0) {
        // Deduplicate events before updating state
        const updatedEvents = deduplicateEvents([...events, ...newEvents]);
        setEvents(updatedEvents);
      }

      // Reset drag state after processing
      isDragging.current = false;
    }
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    if (!isDragging.current) {
      const updatedEvents = events.filter(
        (e) =>
          e.start.toISOString() !== event?.start?.toISOString() ||
          e.end.toISOString() !== event?.end?.toISOString()
      );

      setEvents(updatedEvents);
    }
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFlexible(e.target.checked); // Update toggle state
    setEvents([]); // Clear calendar selections on toggle
  };


  return (
    <div className="tutor_calendar_container">
      <div className="schedule_type">
        <div className="column">
          <span className="title">Schedule</span>
          {/* Toggle switch */}
          <div className="toggleSwitchContainer">
            <input
              type="checkbox"
              id="schedule"
              className="toggleCheckbox"
              checked={isFlexible}
              onChange={handleToggleChange} // Refresh events on toggle
            />
            <label htmlFor="schedule" className="toggleContainer">
              <div>Weekly</div>
              <div>Flexible</div>
            </label>
          </div>
        </div>
        <div className="available_color">
          <span>Available</span>
          <div className="available_div"></div>
        </div>
      </div>
      <div className="header_text">
        <p>
          The <b> weekly</b> schedule allows you to attend your classes on the
          same day every week. Switch to the <b> flexible </b> schedule if you
          wish to take your classes whenever you want
        </p>
      </div>
      {events.map((event, index) => (
          <div key={index} className="booking_card_container">
            <BookingCard
              date={event.start.toDateString()}
              time={`${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`}
              duration={`${(event.end.getTime() - event.start.getTime()) / 60000} Min`}
              onChangeDuration={() => console.log("Change duration clicked!")}
            />
          </div>
        ))}
      <div className="tutor_outer_calendar_container">
        <Calendar
          localizer={localizer}
          events={events}
          views={[Views.WEEK]}
          defaultView={Views.WEEK}
          view={view}
          date={date}
          onView={(view: any) => setView(view)}
          onNavigate={(date) => {
            setDate(new Date(date));
          }}
          selectable
          step={30}
          longPressThreshold={20}
          timeslots={2}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          allDayAccessor={() => false}
          className="adnan_calendar"
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default TutorSchedule;
