import { getData } from "../../api/api";

export const getAllUsers = async () => {
  return await getData("/api/users");
};
