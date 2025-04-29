import { fetchCategories } from "@/src/lib/category/category";
import TutorPreference from "./TutorPreference";
import { fetchSubjects } from "@/src/lib/subject/subject";

export default async function TutorPreferenceWrapper() {
  const { categories } = await fetchCategories({ limit: 20 });
  const { subjects } = await fetchSubjects({ limit: 30 });
  return <TutorPreference categories={categories} subjects={subjects} />;
}
