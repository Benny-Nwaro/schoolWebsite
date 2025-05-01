export const fetchFaqs = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/faqs?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }
  return res.json();
};
