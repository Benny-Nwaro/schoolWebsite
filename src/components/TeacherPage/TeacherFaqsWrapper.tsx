import { fetchFaqs } from "@/src/lib/faqs/faqs";
import TeacherFaqs from "../TeacherFaqs/TeacherFaqs";
export default async function StudentFaqsWrapper() {
  const { faqs } = await fetchFaqs({ type: "TEACHER", limit: 100 });
  return <TeacherFaqs faqs={faqs} />;
}
