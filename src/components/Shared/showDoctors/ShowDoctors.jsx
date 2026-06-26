import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

const getSpecializationStyles = (specialization) => {
  const spec = specialization?.toLowerCase().trim() || "";

  if (spec.includes("cardiology")) {
    return "bg-rose-50 text-rose-500 border border-rose-100";
  }
  if (spec.includes("neurology")) {
    return "bg-violet-50 text-violet-500 border border-violet-100";
  }
  if (spec.includes("pediatrics") || spec.includes("padriatrics")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-100";
  }
  if (spec.includes("dermatology")) {
    return "bg-amber-50 text-amber-600 border border-amber-100";
  }

  return "bg-blue-50 text-blue-500 border border-blue-100";
};

const ShowDoctors = ({ doctor }) => {
  return (
    <Card
      key={doctor._id}
      className="border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
    >
      <Card.Content className="p-5 flex flex-col items-center text-center">
        <Avatar className="w-20 h-20 outline-2 outline-sky-100 overflow-hidden rounded-full text-lg font-bold bg-sky-100 text-sky-600 mb-3 relative">
          <Image
            src={doctor.profileImage}
            alt={doctor.doctorName}
            fill
            className="w-full h-full object-cover"
          />
        </Avatar>

        <div className="flex items-center gap-1 justify-center">
          <h3 className="text-[15px] font-bold text-slate-900 leading-tight line-clamp-1">
            {doctor.doctorName}
          </h3>
          {doctor.verificationStatus === "approved" && (
            <MdVerified className="text-sky-500 text-[14px] shrink-0" />
          )}
        </div>

        <span
          className={`mt-1.5 mb-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${getSpecializationStyles(doctor.specialization)}`}
        >
          {doctor.specialization}
        </span>

        <div className="w-full border-t border-slate-100 mb-3" />

        <div className="text-[12px] font-medium text-left w-full text-slate-400 flex flex-col gap-0.5 mb-3">
          <p className="text-slate-700 font-semibold line-clamp-1">
            {doctor.qualifications}
          </p>
          <p className="line-clamp-1">{doctor.hospitalName}</p>
        </div>

        <div className="w-full flex items-center justify-between text-[12px] text-slate-500 mb-2">
          <div className="flex items-center gap-1">
            <HiOutlineClock className="text-slate-400" />
            <span>{doctor.experience} yrs exp</span>
          </div>
          <div className="font-bold text-sky-600 text-[14px]">
            ${doctor.consultationFee}
            <span className="text-[11px] font-normal text-slate-400">
              {" "}
              /session
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4 w-full justify-start">
          <FaStar size={14} className="text-amber-400" />
          <span className="text-[12px] font-bold text-slate-700">
            {doctor.rating}
          </span>
        </div>

        <Link
          href={`/doctors/${doctor._id}`}
          className="w-full text-center font-bold text-[13px] py-2 rounded-xl transition-colors bg-[#0EA5E9] text-white hover:bg-sky-600 shadow-sm shadow-sky-500/10"
        >
          Book Appointment
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ShowDoctors;
