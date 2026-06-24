import React from "react";
import PrescriptionClient from "./PrescriptionClient";
import { getPrescriptionsByDoctorId } from "@/app/utility/fetchData/prescription/prescription";
import { getSession } from "@/app/utility/server/session";

const page = async () => {
  const user = await getSession();
  const prescriptions = await getPrescriptionsByDoctorId(user.email);
  return (
    <div>
      <PrescriptionClient prescriptions={prescriptions}></PrescriptionClient>
    </div>
  );
};

export default page;
