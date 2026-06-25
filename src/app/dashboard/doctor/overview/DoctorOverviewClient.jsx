"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiUsers, FiCalendar, FiAward } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";

export default function DoctorOverviewClient({
  doctorAppointments,
  doctorReviews,
  doctor,
}) {
  const totalAppointments = doctorAppointments.filter(
    (appointment) => appointment.appointmentStatus !== "cancelled",
  );

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const todaysDate = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay < 10 ? `0${currentDay}` : currentDay}`;

  const todaysAppointments = totalAppointments.filter(
    (appointment) => appointment.appointmentDate === todaysDate,
  );

  const hasReviews = doctorReviews.result && doctorReviews.result.length > 0;

  const averageRating = hasReviews ? doctor.rating : "0.0";

  const analyticsStats = [
    {
      id: 1,
      value: totalAppointments.length,
      label: "Total Patients",
      icon: FiUsers,
    },
    {
      id: 2,
      value: todaysAppointments.length,
      label: "Today's Appointments",
      icon: FiCalendar,
    },
    {
      id: 3,
      value: `${averageRating} / 5.0`,
      label: "Average Rating",
      icon: FiAward,
    },
    {
      id: 4,
      value: doctorReviews?.result.length || 0,
      label: "FEEDBACKS",
      icon: RiFeedbackLine,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 p-1 m-5 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {analyticsStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white border border-slate-200/80 rounded-[20px] p-5 flex items-center gap-4 shadow-sm shadow-slate-100/30"
            >
              <div className="w-12 h-12 rounded-[14px] bg-sky-50 text-[#0EA5E9] flex items-center justify-center text-[20px] shrink-0">
                <IconComponent className="stroke-[2.2]" />
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[24px] font-bold text-[#0F172A] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[13px] font-medium text-slate-400 tracking-normal">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm shadow-slate-100/40">
        <h3 className="text-[17px] font-bold text-[#0F172A] tracking-tight mb-5">
          Recent Patient Testimonials
        </h3>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctorReviews.result.map((review) => (
              <div
                key={review._id}
                className="w-full bg-white border border-slate-100 rounded-[16px] p-5 shadow-sm shadow-slate-50/50 hover:border-slate-200/80 transition-all duration-200"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <h4 className="text-[15px] font-bold text-slate-800">
                    {review.patientName}
                  </h4>
                  <div className="flex items-center gap-1 text-[13px] font-bold text-slate-700">
                    {Number(review.rating).toFixed(1)}
                    <FaStar className="text-[#EAB308] text-[13px]" />
                  </div>
                </div>
                <p className="text-[13.5px] italic text-slate-500 font-medium leading-relaxed">
                  &quot;{review.reviewText}&quot;
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full p-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9] text-xl mb-4">
              <RiFeedbackLine />
            </div>
            <h4 className="text-[15px] font-bold text-slate-800 tracking-tight">
              No Testimonials Found
            </h4>
            <p className="text-[13px] text-slate-400 font-medium mt-1 max-w-[340px] leading-normal">
              There are currently no patient feedback records or testimonials
              registered for this profile log.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
