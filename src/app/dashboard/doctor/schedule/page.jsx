import React from "react";
import DoctorScheduleClient from "./DoctorScheduleClient";
import { getSession } from "@/app/utility/server/session";
import { getDoctorDataByEmail } from "@/app/utility/fetchData/doctor/doctor";
export const metadata = {
  title: "Doctor | Schedule",
};

const DoctorSchedulePage = async () => {
  const session = await getSession();
  const doctorData = await getDoctorDataByEmail(session?.email);
  return (
    <div>
      <DoctorScheduleClient
        session={session}
        doctorData={doctorData}
      ></DoctorScheduleClient>
    </div>
  );
};

export default DoctorSchedulePage;
