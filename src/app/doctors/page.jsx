import React from "react";
import AllDoctorsClient from "./AllDoctorsClient";
import { getAllDoctors } from "../utility/fetchData/doctor/doctor";

const page = async () => {
  const allDoctors = await getAllDoctors();
  return (
    <div>
      <AllDoctorsClient allDoctors={allDoctors}></AllDoctorsClient>
    </div>
  );
};

export default page;
