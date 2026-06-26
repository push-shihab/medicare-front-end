import { getData } from "../../api/api";

export const getDoctorDataByEmail = async (email) => {
  return await getData(`/api/doctor?email=${email}`);
};

export const getAllDoctors = async (queryString) => {
  return await getData(`/api/all-doctors?${queryString}`);
};
export const getAllDoctorsForAdmin = async () => {
  return await getData(`/api/all-doctors/admin`);
};

export const getDoctorById = async (id) => {
  return await getData(`/api/doctor/${id}`);
};

export const getAppointmentByDoctorEmail = async (email) => {
  return await getData(`/api/appointment?email=${email}`);
};
export const getReviewByDoctorEmail = async (email) => {
  return await getData(`/api/review/doctor?email=${email}`);
};
