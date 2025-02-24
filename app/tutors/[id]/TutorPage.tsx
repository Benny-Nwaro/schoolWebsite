import TutorInfoCard, {
  getCustomLocationArray,
} from "@/src/components/TutorInfoCard/TutorInfoCard";
import TutorHeader from "@/src/components/TutorHeader/TutorHeader";
import TutorAbout from "@/src/components/TutorAbout/TutorAbout";
import TutorTeacherLocation from "@/src/components/TutorTeacherLocation/TutorTeacherLocation";
import TutorEducation from "@/src/components/TutorEducation/TutorEducation";
import TutorCertification from "@/src/components/TutorCertification/TutorCertification";
import TutorWorkExperience from "@/src/components/TutorWorkExperience/TutorWorkExperience";
import TutorOtherClasses from "@/src/components/TutorOtherClasses/TutorOtherClasses";
import TutorRates from "@/src/components/TutorRates/TutorRates";
import TutorReviews from "@/src/components/TutorReviews/TutorReviews";
import TutorMedia from "@/src/components/TutorMedia/TutorMedia";
import SimilarTutors from "@/src/components/SimilarTutors/SimilarTutors";
import TeacherFaqsWrapper from "@/src/components/TeacherPage/FaqsWrapper";
import VideoPlayer from "@/src/components/YouTubeEmbed/YouTubeEmbed";
import TestTutorSchedule from "@/src/components/TutorSchedule/TestBookingSchedule";
import TutorRecommendations from "@/src/components/TutorReviews/TutorRecommendations";
import { Tutor } from "@/src/types/types";
// import "@/src/components/Navbar/navbar.styles.scss";
import "./tutorById.styles.scss";
import TutorSchedule from "@/src/components/TutorSchedule/TutorSchedule";


const TutorPage = ({ tutor }: { tutor: Tutor }) => {

  return (
    <>
      <div className="tutor_page">
        <TutorHeader
          description={tutor?.description}
          name={`${tutor?.user?.name} ${tutor.user.lastName}`}
          isVerified={tutor?.checkMark}
        />
        <div className="tutor_lesson_info">
          <div className="inner_max">
            <div className="tutor_lesson_info_items">
              <div className="col">
                <h1 className="section_title">Tutor and Course Information</h1>
                <div className="tutor_lesson_video">
                  {!!tutor?.videos?.length && tutor?.videos[0]?.url && (
                    <VideoPlayer url={tutor?.videos[0]?.url} />
                  )}
                  <TutorAbout
                    description={tutor?.description}
                    name={`${tutor?.user?.name} ${tutor.user.lastName}`}
                    languages={tutor?.languages || []}
                    date={tutor?.createdAt}
                    tutorExperience={tutor?.experience}
                  />
                  {!!tutor?.education.length && (
                    <TutorEducation educations={tutor?.education} />
                  )}
                  <TutorSchedule availability={tutor?.availability || []} />
                  {/* <TestTutorSchedule availability={tutor?.availability || []} /> */}
                  {!!tutor?.certificates?.length && (
                    <TutorCertification certificates={tutor?.certificates} />
                  )}
                  {!!tutor.teacherExperience?.length && (
                    <TutorWorkExperience experience={tutor.teacherExperience} />
                  )}
                  {tutor?.user?.address?.country &&
                    tutor?.user?.address?.city && (
                      <TutorTeacherLocation
                        country={tutor?.user?.address?.country}
                        city={tutor?.user?.address?.city}
                        locations={getCustomLocationArray(tutor?.lessons)}
                      />
                    )}
                  <TutorRates hourlyRate={tutor?.hourlyRate} />
                  {!!(tutor.images?.length || tutor.videos?.length) && (
                    <TutorMedia
                      tutorImages={tutor?.images || []}
                      tutorVideos={tutor.videos || []}
                    />
                  )}
                  {!!tutor.reviews?.length && (
                    <TutorReviews title="Reviews" reviews={tutor?.reviews} />
                  )}
                  {!!tutor.recommendations?.length && (
                    <TutorRecommendations
                      title="Recommendations"
                      recommendations={tutor.recommendations || []}
                    />
                  )}
                  <TeacherFaqsWrapper
                    className="single_tutor_page_faqs"
                    userType={"STUDENT"}
                    title="FAQs"
                  />
                  <TutorOtherClasses lessons={tutor.lessons} />
                </div>
              </div>
              <TutorInfoCard
                description={tutor.description}
                image={tutor?.user?.profileImage}
                isAvailable={tutor.available}
                rating={tutor.rating || 0}
                hourlyRate={tutor.hourlyRate}
                lessons={tutor.lessons}
                reviews={tutor?.reviews || []}
                tutorId={tutor.id}
              />
            </div>
            <SimilarTutors />
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorPage;
