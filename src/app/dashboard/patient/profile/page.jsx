import React from "react";
import PatientProfileClient from "./PatientProfileClient";
import { getSession } from "@/app/utility/server/session";

const PatientProfilePage = async () => {
  const session = await getSession();
  return (
    <div>
      <PatientProfileClient user={session}></PatientProfileClient>
    </div>
  );
};

export default PatientProfilePage;
