import { fetchTutorById } from "@/src/lib/tutors/tutors";
import TutorPage from "./TutorPage";

export default async function TutorPageWrapper({
  params,
}: {
  params: { id: string };
}) {
  const tutor = await fetchTutorById(params.id);
  return <TutorPage tutor={tutor} />;
}