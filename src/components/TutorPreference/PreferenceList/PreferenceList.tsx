"use client";

import { useRouter } from "next/navigation";

export const PreferenceList = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => {
  const router = useRouter();

  const handleNavigate = (name: string) => {
    router.push(`/tutors?search=${name}`);
  };
  return (
    <div className="preference_container">
      <h1>{title}</h1>
      <div className="list">
        {list &&
          list.map((item, i) => (
            <div
              style={{ cursor: "pointer" }}
              className="item"
              key={i}
              onClick={() => handleNavigate(item)}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};
