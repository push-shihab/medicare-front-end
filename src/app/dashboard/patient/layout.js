import { getSession } from "@/app/utility/server/session";
import AccountSuspendedPage from "@/components/Shared/AccountSuspendedPage";
import { redirect } from "next/navigation";

const PatientLayout = async ({ children }) => {
  const user = await getSession();
  if (!user) {
    redirect("/unauthorized");
  }
  if (user.role !== "patient") {
    redirect("/forbidden");
  }
  if (user.status !== "active") {
    return <AccountSuspendedPage></AccountSuspendedPage>;
  }
  return <div>{children}</div>;
};

export default PatientLayout;
