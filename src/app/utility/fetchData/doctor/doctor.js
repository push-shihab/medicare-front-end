import { getData } from "../../api/api";

export const getDoctorDataByEmail = async (email) => {
  return await getData(`/api/doctor?email=${email}`);
};

export const getAllDoctors = async () => {
  return await getData(`/api/all-doctors`);
};

export const getDoctorById = async (id) => {
  return await getData(`/api/doctor/${id}`);
};
