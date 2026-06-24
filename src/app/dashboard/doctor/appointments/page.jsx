import React from "react";
import AppointmentRequestsClient from "./AppointmentRequestsClient";
import { getSession } from "@/app/utility/server/session";
import { getAppointmentByDoctorEmail } from "@/app/utility/fetchData/doctor/doctor";

const AppointmentRequestsPage = async () => {
  const user = await getSession();
  const doctorAppointments = await getAppointmentByDoctorEmail(user.email);
  return (
    <div>
      <AppointmentRequestsClient
        doctorAppointments={doctorAppointments}
      ></AppointmentRequestsClient>
    </div>
  );
};

export default AppointmentRequestsPage;
