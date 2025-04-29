import { fetchFaqs } from "@/src/lib/faqs/faqs";
import TeacherFaqs from "../TeacherFaqs/TeacherFaqs";
export default async function TeacherFaqsWrapper({
  className = "",
  userType = "STUDENT",
  title,
}: {
  className?: string;
  userType: "STUDENT" | "TEACHER";
  title?: string;
}) {
  const { faqs } = await fetchFaqs({ type: userType, limit: 100 });
  return <TeacherFaqs faqs={faqs} className={className} title={title} />;
}
