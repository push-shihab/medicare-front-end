"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa";

export default function DoctorSchedule() {
  // Available week days tracking system (Active vs Inactive arrays matches layout)
  const [selectedDays, setSelectedDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Fri",
  ]);

  // Available time slots configuration mapping (active state management for Monday)
  const [activeSlots, setActiveSlots] = useState([
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "5:00 PM",
  ]);

  // Comprehensive static slots matrix (including structural disabled grey versions)
  const allTimeSlots = [
    { time: "9:00 AM", disabled: false },
    { time: "10:00 AM", disabled: false },
    { time: "11:00 AM", disabled: false },
    { time: "12:00 PM", disabled: true }, // Disabled/Unavailable in mockup
    { time: "2:00 PM", disabled: false },
    { time: "3:00 PM", disabled: false },
    { time: "4:00 PM", disabled: true }, // Disabled/Unavailable in mockup
    { time: "5:00 PM", disabled: false },
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

  return (
    <div className="m-5 w-full bg-white border border-slate-200 rounded-[20px] overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      {/* 1. Global Action Header Control Board */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          Weekly Availability
        </h3>
        <Button
          size="sm"
          className="bg-[#0EA5E9] text-white font-semibold text-[13px] h-9 px-4 rounded-xl flex items-center gap-1.5 shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
        >
          <FaPlus className="text-[10px]" /> Add New Slot
        </Button>
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

        {/* Section B: Dynamic Specific Time Segment Rails */}
        <div className="flex flex-col gap-3 mt-1">
          <span className="text-[14px] font-bold text-slate-700 tracking-tight">
            Time Slots for Monday
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {allTimeSlots.map((slot, index) => {
              if (slot.disabled) {
                return (
                  <div
                    key={index}
                    className="h-10 px-4 rounded-xl text-[13px] font-medium bg-[#F1F5F9] text-slate-400/80 flex items-center justify-center border border-transparent select-none cursor-not-allowed"
                  >
                    {slot.time}
                  </div>
                );
              }

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
          <Button className="bg-[#0EA5E9] text-white font-bold text-[14px] h-10 px-5 rounded-xl shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors">
            Save Schedule
          </Button>
          <Button
            variant="flat"
            className="bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/80 font-bold text-[14px] h-10 px-5 rounded-xl transition-colors"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
