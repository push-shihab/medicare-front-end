import { updateData } from "../../api/api";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const deleteUser = async (data) => {
  const res = await fetch(`${baseUrl}/api/user/delete`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
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
