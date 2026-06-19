import OverviewStats from "@/components/Dashboard/patient/OverviewStats";
import UpcomingAppointmentsTable from "@/components/Dashboard/patient/UpcomingAppointmentsTable";
import React from "react";

const page = () => {
  return (
    <div>
      <OverviewStats></OverviewStats>
      <UpcomingAppointmentsTable></UpcomingAppointmentsTable>
    </div>
  );
};

export default page;
