"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiUsers, FiCalendar, FiAward } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";

export default function DoctorOverviewClient({
  doctorAppointments,
  doctorReviews,
}) {
  const totalAppointments = doctorAppointments.filter(
    (appointment) => appointment.appointmentStatus !== "cancelled",
  );
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const todaysDate = `${currentYear}-0${currentMonth}-${currentDay}`;
  const todaysAppointments = totalAppointments.filter(
    (appointment) => appointment.appointmentDate === todaysDate,
  );
  const averageRating =
    doctorReviews.reduce((acc, review) => acc + Number(review.rating), 0) /
    doctorReviews.length;
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
      value: doctorReviews.length,
      label: "FEEDBACKS",
      icon: RiFeedbackLine,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 p-1 m-5 select-none">
      {/* 1. Quad-Grid Summary Stats Counter Layer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {analyticsStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white border border-slate-200/80 rounded-[20px] p-5 flex items-center gap-4 shadow-sm shadow-slate-100/30"
            >
              {/* Soft Circular Medical Green Theme Icon Wrapper */}
              <div className="w-12 h-12 rounded-[14px] bg-sky-50 text-sky-400 flex items-center justify-center text-[20px] shrink-0">
                <IconComponent className="stroke-[2.2]" />
              </div>

              {/* Data Presentation Stack */}
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
        <div className="grid grid-cols-2 gap-4">
          {doctorReviews.map((review) => (
            <div
              key={review._id}
              className="max-w-[480px] w-full bg-white border border-slate-100 rounded-[16px] p-5 shadow-sm shadow-slate-50/50 hover:border-slate-200/80 transition-all duration-200"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <h4 className="text-[15px] font-bold text-slate-800">
                  {review.patientName}
                </h4>
                <div className="flex items-center gap-1">
                  {review.rating}
                  <FaStar className="text-[#EAB308] text-[13px]" />
                </div>
              </div>
              <p className="text-[13.5px] italic text-slate-500 font-medium leading-relaxed">
                &quot;{review.reviewText}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
