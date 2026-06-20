import React from "react";
import DoctorProfileClient from "./DoctorProfileClient";
import { getSession } from "@/app/utility/server/session";
import { getDoctorDataByEmail } from "@/app/utility/fetchData/doctor/doctor";

const DoctorProfilePage = async () => {
  const session = await getSession();
  const doctor = await getDoctorDataByEmail(session?.email);
  return (
    <div>
      <DoctorProfileClient
        doctor={doctor}
        session={session}
      ></DoctorProfileClient>
    </div>
  );
};

export default DoctorProfilePage;
