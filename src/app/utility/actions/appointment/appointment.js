import { createData } from "../../api/api";

export const createAppointment = async (data) => {
  return await createData("/api/appointment", data);
};
