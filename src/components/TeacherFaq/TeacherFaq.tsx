import { FaChevronDown } from "react-icons/fa";
import DOMPurify from "isomorphic-dompurify";
const TeacherFaq = ({
  isActive,
  question,
  answer,
  toggleFaq,
  id,
}: {
  isActive: boolean;
  question: string;
  answer: string;
  id: string;
  toggleFaq: (id: string) => void;
}) => {
  const sanitizedAnswer = DOMPurify.sanitize(answer);
  const cleanSpacesFromAnswer = (answer: string) => {
    // Remove empty <p> tags
    let cleanedAnswer = answer.replace(
      /<p class="ql-align-justify"><br><\/p>/g,
      ""
    );
    cleanedAnswer = cleanedAnswer.replace(/<p><br><\/p>/g, "");
    cleanedAnswer = cleanedAnswer.replace(/\s+/g, " ");
    return cleanedAnswer;
  };
  return (
    <div
      className={`faq-item ${isActive ? "active" : ""}`}
      onClick={() => toggleFaq(id)}
    >
      <div className="faq-question">
        <h2>
          {question}
          <FaChevronDown />
        </h2>
      </div>
      <div
        className="faq-answer"
        style={{ maxHeight: isActive ? "200px" : "0" }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: cleanSpacesFromAnswer(sanitizedAnswer),
          }}
        />
      </div>
    </div>
  );
};

export default TeacherFaq;
