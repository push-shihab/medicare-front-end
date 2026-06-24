import { getAppointmentsByPatientId } from "@/app/utility/fetchData/appointment/appointment";
import { getPaymentHistoryById } from "@/app/utility/fetchData/payment/payment";
import { getReviewsById } from "@/app/utility/fetchData/review/review";
import { getSession } from "@/app/utility/server/session";
import OverviewStats from "@/components/Dashboard/patient/OverviewStats";
import UpcomingAppointmentsTable from "@/components/Dashboard/patient/UpcomingAppointmentsTable";
import React from "react";

const PatientOverviewPage = async () => {
  const user = await getSession();
  const appointments = await getAppointmentsByPatientId(user.id);
  const payments = await getPaymentHistoryById(user.id);
  const reviews = await getReviewsById(user.id);
  console.log(reviews);
  return (
    <div>
      <OverviewStats
        reviews={reviews}
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
