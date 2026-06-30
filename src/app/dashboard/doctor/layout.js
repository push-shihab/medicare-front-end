import { getSession } from "@/app/utility/server/session";
import AccountSuspendedPage from "@/components/Shared/AccountSuspendedPage";
import { redirect } from "next/navigation";

const DoctorLayout = async ({ children }) => {
  const user = await getSession();
  if (!user) {
    redirect("/unauthorized");
  }
  if (user.role !== "doctor") {
    redirect("/forbidden");
  }
  if (user.status !== "active") {
    return <AccountSuspendedPage></AccountSuspendedPage>;
  }
  return <div>{children}</div>;
};

export default DoctorLayout;
