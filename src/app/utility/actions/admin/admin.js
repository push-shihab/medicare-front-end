"use server";
import { authHeader, updateData } from "../../api/api";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const deleteUser = async (data) => {
  const res = await fetch(`${baseUrl}/api/user/delete`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const suspendUser = async (userId) => {
  return await updateData("/api/user/suspend", userId);
};
export const unsuspendUser = async (userId) => {
  return await updateData("/api/user/unsuspend", userId);
};
export const rejectDoctor = async (doctorId) => {
  return await updateData("/api/doctor/reject", doctorId);
};
export const cancelDoctor = async (doctorId) => {
  return await updateData("/api/doctor/cancel", doctorId);
};
export const approveDoctor = async (doctorId) => {
  return await updateData("/api/doctor/approve", doctorId);
};
