import { getData } from "../../api/api";

export const getReviewsById = async (id) => {
  return await getData(`/api/review/${id}`);
};
