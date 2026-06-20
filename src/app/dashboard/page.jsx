import { redirect } from "next/navigation";
import { getSession } from "../utility/server/session";

const DashboardPage = async () => {
  const session = await getSession();
  if (session.role === "doctor") {
    redirect("/dashboard/doctor/overview");
  } else {
    redirect("/dashboard/patient/overview");
  }
};

export default DashboardPage;
