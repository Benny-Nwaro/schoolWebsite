import "./tutorMedia.styles.scss";
import { Image as ImageType, Video } from "@/src/types/types";
import Image from "next/image";

interface TutorMedia {
  TutorMedia: any;
}
const isYouTubeUrl = (url: string) => {
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return youtubeRegex.test(url);
};
interface TutorMediaProps {
  tutorImages: ImageType[];
  tutorVideos: Video[];
}
const TutorMedia = ({ tutorImages, tutorVideos }: TutorMediaProps) => {
  return (
    <div className="about_tutor tutor_info_container">
      <h1>Photos and Videos</h1>
      <div className="media-gallery">
        {tutorImages
          ?.filter((item) => item.url !== "")
          ?.map((item: ImageType, index: number) => (
            <div key={item.url} className="media-item">
              <Image
                src={item.url}
                alt={`Media ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        {tutorVideos
          ?.filter((item) => item.url !== "")
          ?.map((item: Video, index: number) => (
            <div key={item.url} className="media-item">
              {isYouTubeUrl(item.url) ? (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${
                    item.url.split("v=")[1]
                  }`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video ${index + 1}`}
                ></iframe>
              ) : (
                <video controls>
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TutorMedia;
