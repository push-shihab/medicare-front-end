import React from "react";
import PatientProfileClient from "./PatientProfileClient";
import { getSession } from "@/app/utility/server/session";
export const metadata = {
  title: "Patient | Profile",
};

const PatientProfilePage = async () => {
  const session = await getSession();
  return (
    <div>
      <PatientProfileClient user={session}></PatientProfileClient>
    </div>
  );
};

export default PatientProfilePage;
