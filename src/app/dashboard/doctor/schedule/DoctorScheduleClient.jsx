"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { editDoctorProfile } from "@/app/utility/actions/doctor/doctor";

export default function DoctorScheduleClient({ session, doctorData }) {
  // Available week days tracking system
  const [selectedDays, setSelectedDays] = useState(doctorData.availableDays);

  // Active time slots configuration state management
  const [activeSlots, setActiveSlots] = useState(doctorData.availableSlots);

  // Seamless hourly schedule matrix covering 9:00 AM to 9:00 PM with no disabled configurations
  const allTimeSlots = [
    { time: "9:00 AM" },
    { time: "10:00 AM" },
    { time: "11:00 AM" },
    { time: "12:00 PM" },
    { time: "1:00 PM" },
    { time: "2:00 PM" },
    { time: "3:00 PM" },
    { time: "4:00 PM" },
    { time: "5:00 PM" },
    { time: "6:00 PM" },
    { time: "7:00 PM" },
    { time: "8:00 PM" },
    { time: "9:00 PM" },
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Toggle Day Selection Handlers
  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Toggle Time Selection Handlers
  const handleSlotToggle = (time) => {
    if (activeSlots.includes(time)) {
      setActiveSlots(activeSlots.filter((t) => t !== time));
    } else {
      setActiveSlots([...activeSlots, time]);
    }
  };

  // Consolidate complete dataset layout payload
  const handleSaveSchedule = async () => {
    const schedulePayload = {
      availableDays: selectedDays,
      availableSlots: activeSlots,
      email: session.email,
    };
    const res = await editDoctorProfile(schedulePayload);
    if (res.acknowledged) {
      toast.success("Weekly availability schema saved successfully!");
    }
  };

  return (
    <div className="m-5 w-full max-w-190 bg-white border border-slate-200 rounded-[20px] overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      {/* 1. Global Action Header Control Board */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          Weekly Availability
        </h3>
      </div>

      {/* 2. Primary Scheduling Body Control Interface */}
      <div className="p-6 flex flex-col gap-6">
        <p className="text-[14px] text-slate-400 font-medium">
          Select the days and time slots you are available for appointments.
        </p>

        {/* Section A: Day Filter Matrix Rows */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-bold text-slate-700 tracking-tight">
            Available Days
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {daysOfWeek.map((day) => {
              const isSelected = selectedDays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayToggle(day)}
                  className={`h-9 px-4 rounded-xl text-[13px] font-semibold transition-all duration-150 ${
                    isSelected
                      ? "bg-[#0EA5E9] text-white shadow-sm shadow-sky-500/15"
                      : "bg-[#F1F5F9]/60 text-slate-400 border border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section B: Dynamic Time Segment Blocks (9:00 AM - 9:00 PM) */}
        <div className="flex flex-col gap-3 mt-1">
          <span className="text-[14px] font-bold text-slate-700 tracking-tight">
            Available Time Slots
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {allTimeSlots.map((slot, index) => {
              const isActive = activeSlots.includes(slot.time);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSlotToggle(slot.time)}
                  className={`h-10 px-4 rounded-xl text-[13px] font-semibold border transition-all duration-150 ${
                    isActive
                      ? "border-[#0EA5E9] bg-sky-50/20 text-[#0EA5E9] font-bold"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section C: Process Mutation Action Controls */}
        <div className="flex items-center gap-3 mt-4 pt-2">
          <Button
            onClick={handleSaveSchedule}
            className="bg-[#0EA5E9] text-white font-bold text-[14px] h-10 px-5 rounded-xl shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
          >
            Save Schedule
          </Button>
        </div>
      </div>
    </div>
  );
}
