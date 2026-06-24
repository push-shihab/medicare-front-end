import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

const ShowDoctors = async ({ doctor, chipClass }) => {
  return (
    <Card
      key={doctor._id}
      className="border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
    >
      <Card.Content className="p-5 flex flex-col items-center text-center">
        {/* Avatar */}
        <Avatar className="w-20 h-20 outline-2 outline-sky-100 overflow-hidden rounded-full text-lg font-bold bg-sky-100 text-sky-600 mb-3">
          <Image
            src={doctor.profileImage}
            alt={doctor.doctorName}
            fill
            className="w-full h-full object-cover"
          ></Image>
        </Avatar>

        {/* Name + verified */}
        <div className="flex items-center gap-1 justify-center">
          <h3 className="text-[15px] font-bold text-slate-900 leading-tight line-clamp-1">
            {doctor.doctorName}
          </h3>
          {doctor.verificationStatus === "approved" && (
            <MdVerified className="text-sky-500 text-[14px] shrink-0" />
          )}
        </div>

        {/* Specialization badge */}
        <span
          className={`mt-1.5 mb-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${chipClass}`}
        >
          {doctor.specialization}
        </span>

        {/* Divider */}
        <div className="w-full border-t border-slate-100 mb-3" />

        <div className="text-[10px] font-medium text-left w-full text-slate-400">
          <p>{doctor.qualifications}</p>
          <p>{doctor.hospitalName}</p>
        </div>

        {/* Stats row */}
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

        {/* Rating */}
        <div className="flex gap-1.5 mb-4 w-full">
          <FaStar size={18} color="gold"></FaStar>
          <span className="text-[12px] font-bold text-slate-700">
            {doctor.rating}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/doctors/${doctor._id}`}
          className={`w-full font-bold text-[13px] py-2 rounded-xl transition-colors shadow-smbg-sky-500 bg-sky-500 text-white hover:bg-sky-600 shadow-sky-200`}
        >
          Book Appointment
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ShowDoctors;
