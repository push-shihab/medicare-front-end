import { getAppointmentsByPatientId } from "@/app/utility/fetchData/appointment/appointment";
import { getPaymentHistoryById } from "@/app/utility/fetchData/payment/payment";
import { getSession } from "@/app/utility/server/session";
import OverviewStats from "@/components/Dashboard/patient/OverviewStats";
import UpcomingAppointmentsTable from "@/components/Dashboard/patient/UpcomingAppointmentsTable";
import React from "react";

const PatientOverviewPage = async () => {
  const session = await getSession();
  const appointments = await getAppointmentsByPatientId(session.id);
  const payments = await getPaymentHistoryById(session.id);
  return (
    <div>
      <OverviewStats
        appointments={appointments}
        payments={payments}
      ></OverviewStats>
      <UpcomingAppointmentsTable
        appointments={appointments}
      ></UpcomingAppointmentsTable>
    </div>
  );
};

export default PatientOverviewPage;
