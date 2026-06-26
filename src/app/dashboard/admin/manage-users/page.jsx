export const dynamic = "force-dynamic";
import ManageUsersClient from "./ManageUsersClient";
import { getAllUsers } from "@/app/utility/fetchData/admin/admin";

const ManageUsersPage = async () => {
  const users = await getAllUsers();
  return (
    <div>
      <ManageUsersClient users={users}></ManageUsersClient>
    </div>
  );
};

export default ManageUsersPage;
