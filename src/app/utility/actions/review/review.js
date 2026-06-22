import { createData, updateData } from "../../api/api";

export const createReview = async (data) => {
  return await createData("/api/review/new", data);
};

export const editReview = async (data) => {
  return await updateData("/api/review/edit", data);
};

export const deleteReview = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/review/delete`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  return res.json();
};
