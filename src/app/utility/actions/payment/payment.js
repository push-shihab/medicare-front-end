import { createData } from "../../api/api";

export const createPayment = async (data) => {
  return await createData("/api/payment", data);
};
