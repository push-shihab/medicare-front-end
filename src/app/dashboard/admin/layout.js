import { getSession } from "@/app/utility/server/session";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const user = await getSession();
  if (!user) {
    redirect("/unauthorized");
  }
  if (user.role !== "admin") {
    redirect("/forbidden");
  }
  return <div>{children}</div>;
};

export default AdminLayout;
