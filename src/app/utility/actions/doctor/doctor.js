"use server";
import { createData } from "../../api/api";

export const doctorDataAfterRegister = async (newData) => {
  return await createData("/api/doctors", newData);
};

export const editDoctorProfile = async (updatedData) => {
  return await createData("/api/doctor/profile/edit", updatedData, "PATCH");
};
