import { updateData } from "../../api/api";

export const updateUserProfile = async (data) => {
  return await updateData("/api/user/profile", data);
};
