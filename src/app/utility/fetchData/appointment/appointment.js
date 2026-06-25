import { getData } from "../../api/api";

export const getAppointmentsByPatientId = async (id) => {
  return await getData(`/api/appointment/self?patientId=${id}`);
};

export const getAllAppointments = async () => {
  return await getData(`/api/appointments`);
};
