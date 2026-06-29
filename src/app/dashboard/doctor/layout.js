import { getSession } from "@/app/utility/server/session";
import { redirect } from "next/navigation";

const DoctorLayout = async ({ children }) => {
  const user = await getSession();
  if (!user) {
    redirect("/unauthorized");
  }
  if (user.role !== "doctor") {
    redirect("/forbidden");
  }
  return <div>{children}</div>;
};

export default DoctorLayout;
