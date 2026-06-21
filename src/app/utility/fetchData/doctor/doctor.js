const baseLink = process.env.NEXT_PUBLIC_SERVER_URL;
export const getDoctorDataByEmail = async (email) => {
  const res = await fetch(`${baseLink}/api/doctor?email=${email}`);
  return res.json();
};

export const getAllDoctors = async () => {
  const res = await fetch(`${baseLink}/api/all-doctors`);
  return res.json();
};

export const getDoctorById = async (id) => {
  const res = await fetch(`${baseLink}/api/doctor/${id}`);
  return res.json();
};
