import { revalidatePath } from "next/cache";
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
  const fetchedData = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  const res = await fetchedData.json();
  if (res.message === "unauthorized") {
    revalidatePath("/unauthorized");
    return;
  } else if (res.message === "forbidden") {
    revalidatePath("/forbidden");
    return;
  }
  return res;
};

export const getData = async (path) => {
  const fetchedData = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...(await authHeader()),
    },
  });
  const res = await fetchedData.json();
  if (res.message === "unauthorized") {
    revalidatePath("/unauthorized");
    return;
  } else if (res.message === "forbidden") {
    revalidatePath("/forbidden");
    return;
  }
  return res;
};

export const updateAppointmentData = async (path, data) => {
  const fetchedData = await fetch(`${baseUrl}${path}?appointmentId=${data}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
  });
  const res = await fetchedData.json();
  if (res.message === "unauthorized") {
    revalidatePath("/unauthorized");
    return;
  } else if (res.message === "forbidden") {
    revalidatePath("/forbidden");
    return;
  }
  return res;
};

export const updateData = async (path, data) => {
  const fetchedData = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  const res = await fetchedData.json();
  if (res.message === "unauthorized") {
    revalidatePath("/unauthorized");
    return;
  } else if (res.message === "forbidden") {
    revalidatePath("/forbidden");
    return;
  }
  return res;
};
