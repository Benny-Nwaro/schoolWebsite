import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import teacherImage from "@/src/assets/images/tutor.png";
import starIco from "@/src/assets/svg/gold-start.svg";
import Image from "next/image";
import Button from "@/src/components/Button/Button";
import mailSend from "@/src/assets/svg/mailsend.svg";
import share from "@/src/assets/svg/share.svg";
import favTutor from "@/src/assets/svg/favTutor.svg";
import question from "@/src/assets/svg/question.svg";
import BookingActions from "./BookinActions";
import "./tutorInfoCard.styles.scss";
import { Image as ImageType, Lesson, Review } from "@/src/types/types";
import Link from "next/link";


interface TutorInfoCardProps {
  image: ImageType;
  isAvailable: boolean;
  rating: number;
  description: string;
  hourlyRate: number;
  lessons: Lesson[];
  reviews?: Review[];
  tutorId:string
}
const TutorInfoCard = ({
  image,
  isAvailable,
  rating,
  description,
  hourlyRate,
  lessons,
  reviews,
  tutorId
}: TutorInfoCardProps) => {
  // console.log(tutorId)
 
  return (
    <>
      <div className="tutor_info_card shadow-2xl sticky top-0 z-50">
        <div className="image">
          <Image src={image.url} width={296} height={296} alt="tutor" />
          {isAvailable && (
            <div className="is_available">
              <span>Available</span>
              <FaCircleCheck />
            </div>
          )}
        </div>
        <div className="rating">
          <div className="stars_container flex flex-row">
            <div className="stars flex flex-row">
              {Array.from(Array(rating)).map((el, i) => (
                <img src={starIco.src} alt="" key={i} />
              ))}
            </div>
            <span >{rating}</span>
          </div>
          <span >({reviews?.length} Reviews)</span>
        </div>

        <div className="action_row">
          <Link href={ `/message?${tutorId}`}>  
            Send a message
            <img src={mailSend.src} alt="" />
          </Link>
          <img src={favTutor.src} alt="" />
          <img src={share.src} alt="" />
        </div>
        <div className="text_mobile">
          <p className="header_text">{description}</p>
        </div>
        <div className="tutor_lesson_location_picker">
          <h1>Lesson Summary</h1>
          <div className="row">
            <span>Selected lesson</span>
            <select>
              {lessons.map((lesson) => (
                <option key={lesson.id}>{lesson.title}</option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="rate_row">
              <span>Rate</span>
              <span className="starting">
                Starting at $ {(hourlyRate / 100).toFixed(1)}/hr
              </span>
            </div>
            <select style={{backgroundColor:"#F1F1F9"}}>
              <option>${(hourlyRate / 100).toFixed(1)}/hr</option>
              <option>${(hourlyRate / 100).toFixed(1)}/hr</option>
              <option>${(hourlyRate / 100).toFixed(1)}/hr</option>
              <option>${(hourlyRate / 100).toFixed(1)}/hr</option>
            </select>
          </div>
          <div className="row">
            <span>Trial session (30 minutes)</span>
            <span className="answer">Free</span>
          </div>
        </div>
        <div className="tutor_lesson_location_picker">
          <h1>Lesson Location</h1>
          <div className="row">
            <span> Location</span>
            <select>
              {getCustomLocationArray(lessons).map((el, i) => (
                <option key={i}>{String(el)}</option>
              ))}
            </select>
          </div>
        </div>
        <BookingActions />
        <div className="question">
          <img src={question.src} alt="" />
          <span>What is a free trial?</span>
        </div>
      </div>
    </>
  );
};
export default TutorInfoCard;

export const getCustomLocationArray = (lessons: Lesson[]): string[] => {
  // Initialize flags for specific locations
  let hasTeacherPlace = false;
  let hasStudentPlace = false;
  let hasOnline = false;

  // Initialize a Set to store unique locations
  const locationsSet = new Set<string>();

  // Iterate over each lesson in the array
  lessons.forEach((lesson) => {
    // Check if location is defined and is an array
    if (Array.isArray(lesson.location)) {
      lesson.location.forEach((loc) => {
        // Ensure loc is a string and add to the Set
        if (typeof loc === "string") {
          locationsSet.add(loc);

          // Check for specific locations
          if (loc === "teacherPlace") {
            hasTeacherPlace = true;
          }
          if (loc === "studentPlace") {
            hasStudentPlace = true;
          }
          if (loc === "online") {
            hasOnline = true;
          }
        }
      });
    }
  });

  // Determine the custom location labels to return
  const result: string[] = [];
  if (hasTeacherPlace) {
    result.push("teacher's place");
  }
  if (hasStudentPlace) {
    result.push("your place");
  }
  if (hasOnline) {
    result.push("online");
  }
  if (!hasTeacherPlace && !hasStudentPlace && !hasOnline) {
    // Convert the Set to an array if none of the specific places are found
    result.push(...Array.from(locationsSet));
  }

  return result;
};
