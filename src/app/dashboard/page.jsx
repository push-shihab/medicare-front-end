import { redirect } from "next/navigation";
import { getSession } from "../utility/server/session";

const DashboardPage = async () => {
  const user = await getSession();
  if (user.role === "doctor") {
    redirect("/dashboard/doctor/overview");
  }
  if (user.role === "patient") {
    redirect("/dashboard/patient/overview");
  }
  if (user.role === "admin") {
    redirect("/dashboard/admin/analytics");
  }
};

export default DashboardPage;
