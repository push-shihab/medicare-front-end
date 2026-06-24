import React from "react";
import DoctorOverviewClient from "./DoctorOverviewClient";
import { getSession } from "@/app/utility/server/session";
import {
  getAppointmentByDoctorEmail,
  getReviewByDoctorEmail,
} from "@/app/utility/fetchData/doctor/doctor";

const DoctorOverviewPage = async () => {
  const user = await getSession();
  const doctorAppointments = await getAppointmentByDoctorEmail(user?.email);
  const doctorReviews = await getReviewByDoctorEmail(user?.email);
  return (
    <div>
      <DoctorOverviewClient
        doctorAppointments={doctorAppointments}
        doctorReviews={doctorReviews}
      ></DoctorOverviewClient>
    </div>
  );
};

export default DoctorOverviewPage;
