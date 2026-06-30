export const dynamic = "force-dynamic";
import ManageAppointmentClient from "./ManageAppointmentClient";
import { getAllAppointments } from "@/app/utility/fetchData/appointment/appointment";
export const metadata = {
  title: "Admin | Manage Appointments",
};

const ManageAppointmentPage = async () => {
  const appointments = await getAllAppointments();
  return (
    <div>
      <ManageAppointmentClient
        appointments={appointments}
      ></ManageAppointmentClient>
    </div>
  );
};

export default ManageAppointmentPage;
