import React from "react";
import DoctorOverviewClient from "./DoctorOverviewClient";
import { getSession } from "@/app/utility/server/session";
import {
  getAppointmentByDoctorEmail,
  getDoctorDataByEmail,
  getReviewByDoctorEmail,
} from "@/app/utility/fetchData/doctor/doctor";
export const metadata = {
  title: "Doctor | Overview",
};

const DoctorOverviewPage = async () => {
  const user = await getSession();
  const doctorAppointments = await getAppointmentByDoctorEmail(user?.email);
  const doctorReviews = await getReviewByDoctorEmail(user?.email);
  const doctor = await getDoctorDataByEmail(user?.email);
  return (
    <div>
      <DoctorOverviewClient
        doctor={doctor}
        doctorAppointments={doctorAppointments}
        doctorReviews={doctorReviews}
      ></DoctorOverviewClient>
    </div>
  );
};

export default DoctorOverviewPage;
