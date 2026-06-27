import { getUserToken } from "../server/session";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const authHeader = async () => {
  const token = await getUserToken();
  const header = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};
  return header;
};

export const createData = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getData = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...(await authHeader()),
    },
  });
  return res.json();
};

export const updateAppointmentData = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}?appointmentId=${data}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
  });
  return res.json();
};

export const updateData = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
