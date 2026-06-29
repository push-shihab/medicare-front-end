import { getAllUsers } from "@/app/utility/fetchData/admin/admin";
import { getAllAppointments } from "@/app/utility/fetchData/appointment/appointment";
import { getAllReviews } from "@/app/utility/fetchData/review/review";
import React from "react";
import { FaStar } from "react-icons/fa";

export default async function Statistics() {
  const users = await getAllUsers();
  const appointments = await getAllAppointments();
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center px-4"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-[40px] font-bold tracking-tight text-white md:text-[48px] leading-none">
                  {stat.value}
                </span>
                {stat.isRating && (
                  <FaStar className="text-[32px] md:text-[38px] text-white mb-1.5" />
                )}
              </div>
              <span className="mt-3 text-[14px] font-medium tracking-wide text-white/80">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
