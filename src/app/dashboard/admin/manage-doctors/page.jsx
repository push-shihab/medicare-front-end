import React from "react";
import ManageDoctorsClient from "./ManageDoctorsClient";
import { getAllDoctors } from "@/app/utility/fetchData/doctor/doctor";

const ManageDoctorsPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <div>
      <ManageDoctorsClient doctors={doctors}></ManageDoctorsClient>
    </div>
  );
};

export default ManageDoctorsPage;
