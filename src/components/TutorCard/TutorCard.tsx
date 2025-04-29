import { useRouter } from "next/navigation";
import { Tutor } from "@/src/types/types";
import isVerifiedIcon from "../../assets/svg/verified.svg";
import bookIcon from "../../assets/svg/book-black.svg";
import locationBlackIcon from "../../assets/svg/location-black.svg";
import goldStar from "../../assets/svg/gold-start.svg";
import "./tutorCard.styles.scss";
import Image from "next/image";
import { getCustomLocationArray } from "../TutorInfoCard/TutorInfoCard";
import { AiOutlineHeart } from "react-icons/ai";

const TutorCard = ({ tutor }: { tutor: Tutor }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/tutors/${tutor.id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl overflow-hidden max-w-xs sm:max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-200" onClick={handleClick}>
      <div className="w-full h-68 object-cover">
        <Image
          src={tutor?.user?.profileImage?.url!}
          alt=""
          width={100}
          height={100}
        />
             {/* Interactive Heart Icon */}
             <div className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer">
          <AiOutlineHeart className="text-gray-600 text-lg" />
        </div>
        
        <div className="free_trial">
          <span>1st lesson free</span>
        </div>
        <div className="personal_info_container">
          <div className="personal_info_row">
            <div className="name_container">
              <div className="name">
                <span>{tutor?.user?.name}</span>
              </div>
            </div>
            {tutor?.checkMark && (
              <div className="is_verified">
                <img src={isVerifiedIcon.src} alt="verified" />
              </div>
            )}
            <div className="hourly_rate">
              <span>$ {tutor?.hourlyRate / 100}/h</span>
            </div>
          </div>
          <div className="tutor_other_info">
            <div className="lesson_name">
              <img src={bookIcon.src} alt="lesson name" />
              <span>Math Tutor</span>
            </div>
            <div className="rating">
              <img src={goldStar.src} alt="" />
              <span>{tutor?.rating}</span>
            </div>
            <div className="nb_review">({tutor.reviews?.length} Reviews)</div>
          </div>
          <div className="lesson_location">
            <img src={locationBlackIcon.src} alt="location" />
            <span>{getCustomLocationArray(tutor.lessons).join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TutorCard;
