const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const createData = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getData = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};

export const updateAppointmentData = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}?appointmentId=${data}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
  });
  return res.json();
};

export const updateData = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
