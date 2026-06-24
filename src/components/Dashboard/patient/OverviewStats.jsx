"use client";

import React from "react";
import {
  FiCalendar,
  FiCheckSquare,
  FiCreditCard,
  FiStar,
} from "react-icons/fi";

export default function OverviewStats({ appointments, payments, reviews }) {
  return (
    <main className="flex justify-center m-5 w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 select-none">
        <div className="bg-white border border-[#F1F5F9] rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-[14px] font-medium text-[#94A3B8]">
              Upcoming
            </span>
            <div className="w-10 h-10 rounded-[12px] bg-[#E0F2FE] text-[#0EA5E9] flex items-center justify-center text-[18px]">
              <FiCalendar />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.appointmentStatus === "confirmed",
                ).length
              }
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#F1F5F9] rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-[14px] font-medium text-[#94A3B8]">
              Completed
            </span>
            <div className="w-10 h-10 rounded-[12px] bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center text-[18px]">
              <FiCheckSquare />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">
              {
                appointments.filter(
                  (appointment) =>
                    appointment.appointmentStatus === "completed",
                ).length
              }
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#F1F5F9] rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-[14px] font-medium text-[#94A3B8]">
              Total Paid
            </span>
            <div className="w-10 h-10 rounded-[12px] bg-[#FEF9C3] text-[#EAB308] flex items-center justify-center text-[18px]">
              <FiCreditCard />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">
              $
              {payments.reduce(
                (acc, payment) => acc + Number(payment.amountPaid),
                0,
              )}
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#F1F5F9] rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40">
          <div className="flex items-center justify-between w-full mb-3">
            <span className="text-[14px] font-medium text-[#94A3B8]">
              Reviews Given
            </span>
            <div className="w-10 h-10 rounded-[12px] bg-[#F3E8FF] text-[#A855F7] flex items-center justify-center text-[18px]">
              <FiStar />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">
              {reviews.length}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
