import { Lesson } from "@/src/types/types";

const TutorOtherClasses = ({ lessons }: { lessons: Lesson[] }) => {
  return (
    <div className="about_tutor tutor_info_container">
      <h1>Other classes by the same Tutor</h1>
      <div className="other_lessons">
        {lessons &&
          lessons
            .sort((a, b) => a.title.length - b.title.length)
            .map((el) => (
              <div className="exp_item" key={el.id}>
                {el.title}
              </div>
            ))}
      </div>
    </div>
  );
};

export default TutorOtherClasses;
