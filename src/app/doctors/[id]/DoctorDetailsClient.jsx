"use client";

import React, { useState } from "react";
// Fixed imports: Using proper flat HeroUI layout definitions to avoid undefined errors
import { Card, Button } from "@heroui/react";
// Using exclusively react-icons
import { IoCheckmarkCircle, IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { createAppointment } from "@/app/utility/actions/appointment/appointment";
import toast from "react-hot-toast";

export default function DoctorDetailsClient({ doctor: doctorData, session }) {
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const handleBooking = async () => {
    if (!selectedTime || !bookingDate) {
      toast.error("Please select date and time to proceed");
      return;
    }
    const data = {
      patientId: session.id,
      patientName: session.name,
      doctorId: doctorData._id,
      doctorName: doctorData.doctorName,
      appointmentStatus: "pending",
      appointmentDate: bookingDate,
      appointmentTime: selectedTime,
      symptoms,
      paymentStatus: "pending",
      specialization: doctorData.specialization,
      consultationFee: doctorData.consultationFee,
      doctorTime: doctorData.availableSlots,
    };
    const res = await createAppointment(data);
    if (res.acknowledged) {
      toast.success("Booked the appointment successfully");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 select-none min-h-screen flex flex-col gap-6">
      {/* 1. Main Doctor Information Header Card */}
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full">
          <Card className="border border-slate-200/80  h-full bg-white rounded-[20px] shadow-sm shadow-slate-100/50">
            <Card.Content className="p-6 flex justify-center items-center gap-6">
              {/* Large Square Profile Avatar Box */}
              <div className="w-50 h-50 rounded-2xl bg-sky-50/60 overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  className="w-full h-full object-cover"
                  alt={doctorData.doctorName}
                  src={doctorData.profileImage}
                  width={200}
                  height={200}
                />
              </div>

              {/* Identity Info Content Details */}
              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left pt-1">
                <h1 className="text-[26px] font-bold text-slate-900 tracking-tight">
                  {doctorData.doctorName}
                </h1>

                <span className="mt-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold tracking-wide bg-sky-50 text-[#0EA5E9]">
                  {doctorData.specialization}
                </span>

                {/* Micro rating stars line row */}
                <div className="flex items-center gap-1 mt-3">
                  <FaStar className="text-[13px] text-amber-400"></FaStar>
                  <span className="text-[12px] font-bold text-slate-700 ml-1">
                    {doctorData.rating ? doctorData.rating.toFixed(1) : 0}
                  </span>
                </div>

                {/* List Metadata Meta Details */}
                <div className="flex flex-col gap-2 mt-4 text-[14px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 text-base">🏅</span>
                    <span>Qualifications: {doctorData.qualifications}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 text-base">📍</span>
                    <span>Practicing Hospital: {doctorData.hospitalName}</span>
                  </div>
                </div>

                {/* Rate Price Row Frame */}
                <div className="text-[22px] font-bold text-[#0EA5E9] mt-5">
                  ${doctorData.consultationFee}
                  <span className="text-[13px] text-slate-400 font-normal">
                    / session
                  </span>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className=" w-full ">
          <Card className="border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50">
            <Card.Content className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-[13px] font-bold text-slate-700">
                  Symptoms / Reason for Visit
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Describe your symptoms or reason for appointment..."
                  rows={4}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[14px] text-slate-700 font-medium focus:outline-none focus:border-[#0EA5E9] transition-all bg-white resize-none"
                />
              </div>
              {/* Date Picker Input Row */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700">
                  Configure Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full h-11 border border-slate-200 rounded-xl px-4 text-[14px] text-slate-700 font-medium focus:outline-none focus:border-[#0EA5E9] transition-all bg-white"
                />
              </div>

              {/* Time Slots Selection Grid */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-bold text-slate-700">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {doctorData.availableSlots.map((slot, index) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2.5 rounded-xl text-[13px] font-bold border transition-all duration-150 ${
                          isSelected
                            ? "bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-sm shadow-sky-500/10"
                            : "bg-white border-[#0EA5E9] text-[#0EA5E9] hover:bg-sky-50/40"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
              {doctorData.doctorEmail === session.email ? (
                <h2 className="text-center font-semibold text-[#0EA5E9]">
                  Everyone can book here except you, {doctorData.doctorName}!
                </h2>
              ) : (
                <Button
                  onClick={handleBooking}
                  className="w-full bg-[#0EA5E9] text-white font-bold text-[14px] h-11 mt-2 rounded-xl hover:bg-sky-600 transition-all shadow-sm shadow-sky-500/10"
                >
                  Book Now
                </Button>
              )}
            </Card.Content>
          </Card>
        </div>
      </div>

      {/* 2. Secondary Information Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Interactive Documentation Content Block */}
        <Card className="w-full lg:flex-1 border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50 overflow-hidden">
          <Card.Content className="p-6 flex flex-col gap-6">
            {/* Description About block snippet */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3">
                About Doctor
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-line font-medium">
                {doctorData.bio}
              </p>
            </div>

            {/* Checked Badge Qualifications Matrix Layout */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3">
                Qualifications
              </h3>
              <div className="flex flex-col gap-2.5">
                {doctorData.qualifications.split(",").map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-slate-50/60 rounded-xl p-3 border border-slate-100 flex items-center gap-3"
                  >
                    <IoCheckmarkCircle className="text-emerald-500 text-lg flex-shrink-0" />
                    <span className="text-[13px] font-semibold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Right Metric Grid Summary Information Panel Card */}
        <Card className="w-full lg:w-[320px] border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50">
          <Card.Content className="p-5 flex flex-col gap-4">
            <h4 className="text-[14px] font-bold text-slate-900 mb-1">
              Quick Info
            </h4>

            <div className="divide-y divide-slate-100 text-[13px] font-medium">
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400">Specialization</span>
                <span className="text-slate-800 font-bold">
                  {doctorData.specialization}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400">Experience</span>
                <span className="text-slate-800 font-bold">
                  {doctorData.experience}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400">Hospital</span>
                <span className="text-slate-800 font-bold">
                  {doctorData.hospitalName}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400">Co-Pay</span>
                <span className="text-slate-800 font-bold">
                  ${doctorData.consultationFee}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400">Reviews</span>
                <span className="text-slate-800 font-bold">
                  {doctorData.reviewsCount ? doctorData.reviewsCount : 0}
                </span>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      <Card className="border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50">
        <Card.Content className="p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <h2 className="text-[32px] font-extrabold text-slate-900 tracking-tight">
                0.0
              </h2>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  <FaStar className="text-[13px] text-amber-400" />
                </div>
                <span className="text-[12px] text-slate-400 font-medium mt-0.5">
                  Based on 0 reviews
                </span>
              </div>
            </div>
          </div>

          {/* Empty Placeholder Feedback Slate Content Area */}
          <div className="w-full border border-dashed border-slate-200 rounded-[16px] bg-slate-50/40 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100/80 text-slate-400 flex items-center justify-center text-xl mb-3">
              <IoDocumentTextOutline />
            </div>
            <p className="text-[13px] text-slate-400/90 font-medium max-w-[480px] leading-relaxed">
              No customer feedback verified for this clinician yet. Make a
              clinic appointment to post reviews feedback.
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
