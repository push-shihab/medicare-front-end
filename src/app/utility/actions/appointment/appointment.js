import { createData, updateAppointmentData, updateData } from "../../api/api";

export const createAppointment = async (data) => {
  return await createData("/api/appointment", data);
};

export const cancelAppointment = async (data) => {
  return await updateAppointmentData("/api/appointment/cancel", data);
};

export const reScheduleAppointment = async (data) => {
  return await updateData("/api/appointment/reschedule", data);
};
