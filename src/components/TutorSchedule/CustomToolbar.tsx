import React from "react";
import { ToolbarProps } from "react-big-calendar";
import btnPrev from "@/src/assets/svg/calendar-prev.svg";
import btnNext from "@/src/assets/svg/calendar-next.svg";


interface Event {
  title: string;
  start: Date;
  end: Date;
}

const CustomToolbar: React.FC<ToolbarProps<Event, object>> = (props) => {
  const goToBack = () => {
    const { onNavigate } = props;
    onNavigate("PREV");
  };

  const goToNext = () => {
    const { onNavigate } = props;
    onNavigate("NEXT");
  };

  const goToCurrent = () => {
    const { onNavigate } = props;
    onNavigate("TODAY");
  };

  const label = () => {
    const { date, localizer } = props as any;
    return `${localizer.format(date, "dddd, MMMM D, YYYY")}`; // Customize the date format and add text
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <img
          src={btnPrev.src}
          alt="Previous"
          onClick={goToBack}
          role="button"
          style={{ cursor: "pointer" }} // Add any additional styles you need
        />
      </span>
      <span className="rbc-toolbar-label">{label()}</span>
      <span className="rbc-btn-group">
        <img
          src={btnNext.src}
          alt="Next"
          onClick={goToNext}
          role="button"
          style={{ cursor: "pointer" }} // Add any additional styles you need
        />
      </span>
    </div>
  );
};

export default CustomToolbar;
