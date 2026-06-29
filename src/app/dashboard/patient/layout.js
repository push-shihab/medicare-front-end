import { getSession } from "@/app/utility/server/session";
import { redirect } from "next/navigation";

const PatientLayout = async ({ children }) => {
  const user = await getSession();
  if (!user) {
    redirect("/unauthorized");
  }
  if (user.role !== "patient") {
    redirect("/forbidden");
  }
  return <div>{children}</div>;
};

export default PatientLayout;
