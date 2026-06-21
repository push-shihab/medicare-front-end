import React from "react";
import DoctorDetailsClient from "./DoctorDetailsClient";
import { getDoctorById } from "@/app/utility/fetchData/doctor/doctor";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  return (
    <div>
      <DoctorDetailsClient doctor={doctor}></DoctorDetailsClient>
    </div>
  );
};

export default DoctorDetailsPage;
