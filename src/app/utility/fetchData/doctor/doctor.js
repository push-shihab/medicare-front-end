export const getDoctorDataByEmail = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor?email=${email}`,
  );
  return res.json();
};
