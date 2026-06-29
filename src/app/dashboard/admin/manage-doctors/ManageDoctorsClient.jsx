"use client";

import React from "react";
import Image from "next/image";
import {
  approveDoctor,
  cancelDoctor,
  rejectDoctor,
} from "@/app/utility/actions/admin/admin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

export default function ManageDoctorsClient({ doctors }) {
  const router = useRouter();
  const handleRejectButton = async (doctorId) => {
    const res = await rejectDoctor({ doctorId });
    if (res.modifiedCount) {
      toast.success("Rejected the licence successfully");
      router.refresh();
    }
  };
  const handleCancelButton = async (doctorId) => {
    const res = await cancelDoctor({ doctorId });
    if (res.modifiedCount) {
      toast.success("Verification cancelled successfully");
      router.refresh();
    }
  };
  const handleApproveButton = async (doctorId) => {
    const res = await approveDoctor({ doctorId });
    if (res.modifiedCount) {
      toast.success("Doctor verified successfully");
      router.refresh();
    }
  };
  return (
    <div className="md:m-5 mb-5 min-h-screen space-y-5 select-none">
      {doctors.map((doctor) => (
        <div
          key={doctor._id}
          className="w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 sm:p-6 border-b border-slate-100">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                <Image
                  src={doctor.profileImage}
                  alt={doctor.doctorName}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base flex flex-col sm:text-lg font-bold text-slate-800 tracking-tight truncate">
                  {doctor.doctorName}{" "}
                  <span className="text-[14px] flex items-center gap-1 text-yellow-600">
                    <FaStar></FaStar> <span>{doctor.rating}</span>
                  </span>
                </h3>
                <p className="text-[13px] text-slate-400 font-medium mt-0.5 truncate">
                  {doctor.hospitalName}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center h-5 px-2 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-600 border border-sky-100">
                    {doctor.specialization}
                  </span>
                  <span className="inline-flex items-center h-5 px-2 rounded-md text-[11px] font-extrabold bg-slate-100 text-slate-500 tracking-wide uppercase">
                    {doctor.verificationStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 shrink-0 sm:self-start">
              {doctor.verificationStatus === "approved" ? (
                <>
                  <button
                    onClick={() => handleCancelButton(doctor._id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center h-9 px-4 rounded-xl border border-red-200 bg-white hover:bg-red-50 text-red-600 font-semibold text-[13px] transition-colors cursor-pointer"
                  >
                    Cancel Verify
                  </button>
                  <button
                    onClick={() => handleRejectButton(doctor._id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center h-9 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-semibold text-[13px] transition-colors cursor-pointer"
                  >
                    Reject License
                  </button>
                </>
              ) : doctor.verificationStatus === "rejected" ? (
                <button
                  className="flex-1 sm:flex-none inline-flex items-center justify-center h-9 px-4 rounded-xl border border-red-200 bg-red-300 text-white font-semibold text-[13px] transition-colors"
                  disabled={true}
                >
                  Rejected
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleApproveButton(doctor._id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center h-9 px-4 rounded-xl border border-sky-200 bg-sky-600 text-white font-semibold text-[13px] transition-colors cursor-pointer"
                  >
                    Approve
                  </button>{" "}
                  <button
                    onClick={() => handleRejectButton(doctor._id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center h-9 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-semibold text-[13px] transition-colors cursor-pointer"
                  >
                    Reject License
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="flex flex-col gap-0.5 px-5 py-4 sm:px-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Qualifications
              </span>
              <span className="text-[13.5px] text-slate-700 font-medium leading-snug">
                {doctor.qualifications}
              </span>
            </div>

            <div className="flex flex-col gap-0.5 px-5 py-4 sm:px-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Experience
              </span>
              <span className="text-[13.5px] text-slate-700 font-medium">
                {doctor.experience} Years
              </span>
            </div>

            <div className="flex flex-col gap-0.5 px-5 py-4 sm:px-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Consultation Charge
              </span>
              <span className="text-[18px] font-bold text-slate-800">
                ${doctor.consultationFee}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
