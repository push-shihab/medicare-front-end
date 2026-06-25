import { getData } from "../../api/api";

export const getReviewsById = async (id) => {
  return await getData(`/api/review?id=${id}`);
};

export const getAllReviews = async () => {
  return await getData("/api/all-reviews");
};
