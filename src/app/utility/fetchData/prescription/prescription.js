import { getData } from "../../api/api";

export const getPrescriptionsByDoctorId = async (email) => {
  return await getData(`/api/prescription?email=${email}`);
};
