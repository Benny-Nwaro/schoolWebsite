export const fetchTutors = async (queryParams = {}) => {
  // Remove empty query parameters and ensure the values are strings
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(([_, value]) => value !== "")
  ) as Record<string, string>;
  const query = new URLSearchParams(filteredParams);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teachers?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }
  return res.json();
};

export const fetchTutorById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teachers/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }
  return res.json();
};

export const fetchSimilarTutors = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teachers/similar/${id}?limit=10`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }
  return res.json();
};