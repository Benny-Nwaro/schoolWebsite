export const fetchCategories = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

export const fetchCategoriesWithSubjects = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/categories/withSubjects?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

export const fetchCategoriesWithSubjectsAll = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams);
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/categories/withSubjectsAll?${query.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};