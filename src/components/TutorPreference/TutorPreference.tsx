import { Category, Subject } from "@/src/types/types";
import "./tutorPreference.styles.scss";
import { PreferenceList } from "./PreferenceList/PreferenceList";

const TutorPreference = ({
  categories,
  subjects,
}: {
  categories: Category[];
  subjects: Subject[];
}) => {
  const mappedCategories =
    categories && categories?.map((cat: Category) => cat.name);
  const mappedSubjects =
    subjects && subjects?.map((subj: Subject) => subj.name);
  return (
    <div className="tutor_preference">
      <div className="browse">
        <h1>Browse our tutors by preference</h1>
      </div>
      <div className="browse_subjects">
        <PreferenceList title="Tutors by Category" list={mappedCategories} />
        <PreferenceList title="Tutors by Subject" list={mappedSubjects} />
      </div>
    </div>
  );
};

export default TutorPreference;
