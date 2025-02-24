export const fetchSubjects = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch subjects");
  }
  return res.json();
};
export const fetchSubjectByCategoryName = async (name: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/category/${name}}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch subjects");
  }
  return res.json();
};
