import DoctorDetailsClient from "./DoctorDetailsClient";
import { getDoctorById } from "@/app/utility/fetchData/doctor/doctor";
import { getSession } from "@/app/utility/server/session";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  const session = await getSession();
  return (
    <div>
      <DoctorDetailsClient
        doctor={doctor}
        session={session}
      ></DoctorDetailsClient>
    </div>
  );
};

export default DoctorDetailsPage;
