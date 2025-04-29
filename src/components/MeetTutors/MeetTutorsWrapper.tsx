import { fetchTutors } from "@/src/lib/tutors/tutors";
import MeetTutors from "./MeetTutors";

export default async function MeetTutorsWrapper() {
  const data = await fetchTutors({ limit: 100 });
  return <MeetTutors tutors={data?.lessons} />;}
