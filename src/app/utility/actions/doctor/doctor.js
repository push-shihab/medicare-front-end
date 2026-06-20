export const doctorDataAfterRegister = async (newData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  return res.json();
};

export const editDoctorProfile = async (updatedData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor/profile/edit`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    },
  );
  return res.json();
};
