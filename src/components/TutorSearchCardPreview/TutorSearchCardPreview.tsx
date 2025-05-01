import Button from "../Button/Button";
import "./TutorSearchCardPreview.styles.scss";
import moment from "moment";

const TutorSearchCardPreview = ({
  currentId,
  availability,
  parentId,
  video,
  className,
}: any) => {
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };
  return (
    <>
      {currentId === parentId && (
        <div className={`tutor__preview__modal ${className ? className : ""}`}>
          {video && (
            <div className="video_container">
              {isYouTubeUrl(video) ? (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                    new URL(video).search
                  ).get("v")}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              )}
            </div>
          )}

          <div className="schedule">
            <div className="schedule_header">
              <span>Schedules</span>
              <Button>See all</Button>
            </div>
            {availability?.length > 0 &&
              availability.slice(0, 2).map((el: any) => (
                <div className="schedule__row" key={el?.day}>
                  <div className="day_name">
                    <span>{el.day.toLowerCase()}</span>
                  </div>

                  <div className="times">
                    {el.times
                      .slice(0, 4)
                      .map((time: { startTime: string }, i: number) => (
                        <div className="schedule__time" key={i}>
                          <span>
                            {moment(time?.startTime).format("h:mm a")}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TutorSearchCardPreview;
