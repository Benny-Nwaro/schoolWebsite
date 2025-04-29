import image from "@/src/assets/images/tutor.png";
import "./tutorMap.styles.scss";
import { Image as ImageType } from "@/src/types/types";
import Image from "next/image";
const TutorMarker = ({ text, image }: { text: string; image: ImageType }) => {
  return (
    <div
      className={`tutor_marker ${text.toLowerCase() === "you" ? "you" : ""}`}
    >
      <Image src={image.url} alt="tutor" width={32} height={32} />
      <span>{text}</span>
    </div>
  );
};

export default TutorMarker;
