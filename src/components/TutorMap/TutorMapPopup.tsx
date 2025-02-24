import Button from "../Button/Button";
import star from "@/src/assets/svg/gold-start.svg";
// import tutor from "@/src/assets/images/tutor.png";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Tutor } from "@/src/types/types";
import Image from "next/image";
const TutorMapPopup = ({
  onClick,
  teacher,
}: {
  onClick: React.MouseEventHandler<SVGPathElement>;
  teacher: Tutor;
}) => {
  const router = useRouter();
  return (
    <div className="tutor_map_popup">
      <IoCloseOutline onClick={onClick} className="close" />

      <div className="row">
        <Image
          className="image"
          src={teacher?.user?.profileImage?.url}
          alt=""
          height={70}
          width={70}
        />
        <div className="info">
          <span>{`${teacher.user.name} ${teacher?.user?.lastName}`}</span>
          <div className="multiple">
            <span>${(teacher?.hourlyRate / 100).toFixed(1)}/h</span>
            <div className="rating">
              <img src={star.src} alt="" />
              <span>{teacher?.rating}</span>
            </div>
          </div>
          <span>Tutor</span>
        </div>
      </div>
      <div className="button_container">
        <Button
          onClick={() => {
            router.push(`/tutors/${teacher.id}`);
          }}
        >
          View Tutor
        </Button>
      </div>
    </div>
  );
};

export default TutorMapPopup;
