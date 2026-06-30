export const dynamic = "force-dynamic";
import ManageDoctorsClient from "./ManageDoctorsClient";
import { getAllDoctorsForAdmin } from "@/app/utility/fetchData/doctor/doctor";
export const metadata = {
  title: "Admin | Manage Doctors",
};

const ManageDoctorsPage = async () => {
  const doctors = await getAllDoctorsForAdmin();
  return (
    <div>
      <ManageDoctorsClient doctors={doctors}></ManageDoctorsClient>
    </div>
  );
};

export default ManageDoctorsPage;
