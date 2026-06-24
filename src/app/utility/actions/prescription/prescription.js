import { createData, updateData } from "../../api/api";

export const createPrescription = async (data) => {
  return await createData("/api/prescription/new", data);
};

export const modifyPrescription = async (data) => {
  return await updateData("/api/prescription/modify", data);
};
