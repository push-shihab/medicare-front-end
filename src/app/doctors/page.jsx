import React from "react";
import AllDoctorsClient from "./AllDoctorsClient";
import { getAllDoctors } from "../utility/fetchData/doctor/doctor";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const querySearch = new URLSearchParams(params);
  if (!querySearch.get("page")) {
    querySearch.set("page", "1");
  }

  const queryString = querySearch.toString();
  const allDoctors = await getAllDoctors(queryString);
  return (
    <div>
      <AllDoctorsClient params={params} allDoctors={allDoctors} />
    </div>
  );
};

export default page;
