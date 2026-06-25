import { getData } from "../../api/api";

export const getPaymentHistoryById = async (id) => {
  return await getData(`/api/payments?patientId=${id}`);
};

export const getAllPaymentRecords = async () => {
  return await getData("/api/all-payments");
};
