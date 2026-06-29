import { getAllUsers } from "@/app/utility/fetchData/admin/admin";
import { getAllAppointments } from "@/app/utility/fetchData/appointment/appointment";
import { getAllReviews } from "@/app/utility/fetchData/review/review";
import AnimatedStats from "./AnimatedStats";

export default async function Statistics() {
  const appointments = await getAllAppointments();
  const users = await getAllUsers();
  const reviews = await getAllReviews();
  const avgRating =
    reviews.reduce((acc, review) => acc + Number(review.rating), 0) /
    reviews.length;
  const doctors = users.filter((user) => user.role === "doctor");
  const patients = users.filter((user) => user.role === "patient");

  const stats = [
    { value: `${doctors.length}+`, label: "Verified Doctors", isRating: false },
    { value: `${patients.length}+`, label: "Happy Patients", isRating: false },
    {
      value: `${appointments.length}+`,
      label: "Appointments",
      isRating: false,
    },
    { value: avgRating.toFixed(2), label: "Average Rating", isRating: true },
  ];

  return (
    <section className="w-full bg-[#0EA5E9] py-16 md:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedStats stats={stats} />
      </div>
    </section>
  );
}
