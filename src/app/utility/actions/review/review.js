"use server";
import { authHeader, createData, updateData } from "../../api/api";

export const createReview = async (data) => {
  return await createData("/api/review/new", data);
};

export const editReview = async (data) => {
  return await updateData("/api/review/edit", data);
};

export const deleteReview = async (data) => {
  const fetchedData = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/review/delete`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(data),
    },
  );
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
