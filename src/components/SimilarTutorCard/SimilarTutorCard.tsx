"use client";
import { useRouter } from "next/navigation";
import isVerifiedIcon from "../../assets/svg/verified.svg";
import bookIcon from "../../assets/svg/book-black.svg";
import locationBlackIcon from "../../assets/svg/location-black.svg";
import goldStar from "../../assets/svg/gold-start.svg";
import shareIco from "../../assets/svg/share.svg";
import TutorSearchCardPreview from "../TutorSearchCardPreview/TutorSearchCardPreview";
// import tutorImage from "@/src/assets/images/tutor.png";
import { AiOutlineHeart } from "react-icons/ai";

import "./similar_tutor_card.styles.scss";
import { Tutor } from "@/src/types/types";
import { useEffect, useRef, useState } from "react";
// import { getCustomLocationArray } from "../TutorInfoCard/TutorInfoCard";
interface SimilarTutorCardProps {
  className?: string;
  showPreview?: number;
  index: number;
  setShowPreview?: (prev: number) => void;
  tutor: Tutor;
  currentCategory?: string;
  currentLocation?: string;
}
const SimilarTutorCard = ({
  className,
  showPreview,
  index,
  setShowPreview,
  tutor,
  currentCategory,
  currentLocation,
}: SimilarTutorCardProps) => {
  const router = useRouter();
  const [shouldShowLeft, setShouldShowLeft] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleClick = (id: string) => {
    router.push(`/tutors/${id}`);
  };
  const formatClassLocation = (location: string) => {
    if (!location) return;
    if (location.toLowerCase() === "teacherplace") return "Teacher's Place";
    if (location.toLowerCase() === "studentplace") return "Student's Place";
    if (location.toLowerCase() === "online") return "Online";
    return location;
  };
  useEffect(() => {
    const checkPopupPosition = () => {
      const cardRect = cardRef.current?.getBoundingClientRect();
      const popupWidth = 300; // Assuming a fixed width for the popup
      const viewportWidth = window.innerWidth;

      // Check if the popup would overflow the viewport
      if (cardRect && cardRect.right + popupWidth > viewportWidth) {
        setShouldShowLeft(true);
      } else {
        setShouldShowLeft(false);
      }
    };

    // Check popup position initially
    checkPopupPosition();

    // Re-check position on window resize
    window.addEventListener("resize", checkPopupPosition);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", checkPopupPosition);
    };
  }, []);

  return (
    <>
      {showPreview === index && (
        <TutorSearchCardPreview
          video={tutor?.videos ? tutor?.videos[0]?.url : ""}
          availability={tutor?.availability}
          className={shouldShowLeft ? "show_left" : ""}
        />
      )}

      <div
        className={`similar_tutor_card bg-white shadow-2xl ${className}`}
        onMouseEnter={() => {
          showPreview !== index && setShowPreview?.(index);
        }}
        ref={cardRef}
      >
        <div
          className="tutor_card_image"
          onClick={() => handleClick(tutor?.id)}
        >
          <img src={tutor?.user?.profileImage?.url} alt="" />
            {/* Interactive Heart Icon */}
            <div className="absolute top-3 right-3 w-15 h-10 rounded-full flex items-center justify-center hover:cursor-pointer">
              <AiOutlineHeart className=" text-2xl  rounded-full border-2 border-white text-white" />
            </div>
          <div className="free_trial">
            <span>1st lesson free</span>
          </div>
          <div className="personal_info_container">
            <div className="personal_info_row">
              <div className="name_container">
                <div className="name">
                  <span>
                    {tutor?.user?.name} {tutor?.user?.lastName}
                  </span>
                </div>
              </div>
              {tutor?.checkMark && (
                <div className="is_verified">
                  <img src={isVerifiedIcon.src} alt="verified" />
                </div>
              )}
              <div className="hourly_rate">
                <span>$ {(Number(tutor?.hourlyRate) / 100).toFixed(0)}/h</span>
              </div>
            </div>
            <div className="tutor_experience">
              <span>33 years experience</span>
              <img src={shareIco.src} alt="" />
            </div>
            <div className="tutor_other_info_container">
              <div className="tutor_other_info">
                <div className="lesson_name">
                  <img src={bookIcon.src} alt="lesson name" />
                  <span>{currentCategory} Tutor</span>
                </div>
                <div className="tutor_col">
                  <div className="rating">
                    <img src={goldStar.src} alt="" />
                    <span>{tutor?.rating}</span>
                  </div>
                  <div className="nb_review">
                    ({tutor.reviews?.length} Reviews)
                  </div>
                </div>
              </div>

              {!!formatClassLocation(currentLocation ?? "") && (
                <div className="lesson_location">
                  <img src={locationBlackIcon.src} alt="location" />
                  <span>
                    {formatClassLocation(currentLocation ?? "")}
                    {`, ${tutor?.user?.address?.country}`}
                  </span>
                </div>
              )}
              <div className="similar_tutor_text">
                <p>{tutor?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarTutorCard;
