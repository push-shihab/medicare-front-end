import DoctorDetailsClient from "./DoctorDetailsClient";
import {
  getDoctorById,
  getReviewByDoctorEmail,
} from "@/app/utility/fetchData/doctor/doctor";
import { getSession } from "@/app/utility/server/session";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  const session = await getSession();
  const reviews = await getReviewByDoctorEmail(doctor.doctorEmail);
  return (
    <div>
      <DoctorDetailsClient
        doctor={doctor}
        session={session}
        reviews={reviews.result}
      ></DoctorDetailsClient>
    </div>
  );
};

export default DoctorDetailsPage;
