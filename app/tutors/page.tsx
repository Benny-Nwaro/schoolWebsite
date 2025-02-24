import React, { Suspense } from "react";
import AllTutorsPage from "./AllTutorsPage";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllTutorsPage />
    </Suspense>
  );
};

export default page;