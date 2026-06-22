import OverviewStats from "@/components/Dashboard/patient/OverviewStats";
import UpcomingAppointmentsTable from "@/components/Dashboard/patient/UpcomingAppointmentsTable";
import React from "react";

const PatientOverviewPage = async () => {
  return (
    <div>
      <OverviewStats></OverviewStats>
      <UpcomingAppointmentsTable></UpcomingAppointmentsTable>
    </div>
  );
};

export default PatientOverviewPage;
