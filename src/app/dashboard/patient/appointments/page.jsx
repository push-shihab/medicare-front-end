import { getAppointmentsByPatientId } from "@/app/utility/fetchData/appointment/appointment";
import { getSession } from "@/app/utility/server/session";
import PatientAppointments from "@/components/Dashboard/patient/PatientAppointments";
import React from "react";

const AppointmentPage = async () => {
  const session = await getSession();
  const res = await getAppointmentsByPatientId(session.id);
  return (
    <div>
      <PatientAppointments appointments={res}></PatientAppointments>
    </div>
  );
};

export default AppointmentPage;
