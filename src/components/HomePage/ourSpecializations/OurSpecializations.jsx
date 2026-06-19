"use client";

import React from "react";
import {
  FaHeart,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone,
  FaBaby,
  FaStethoscope,
  FaXRay,
} from "react-icons/fa";

export default function OurSpecializations() {
  const specializations = [
    {
      name: "Cardiology",
      icon: FaHeart,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      name: "Neurology",
      icon: FaBrain,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      name: "Dentistry",
      icon: FaTooth,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      name: "Ophthalmology",
      icon: FaEye,
      color: "text-[#0EA5E9]",
      bg: "bg-sky-50",
    },
    {
      name: "Orthopedics",
      icon: FaBone,
      color: "text-slate-400",
      bg: "bg-slate-50",
    },
    {
      name: "Pediatrics",
      icon: FaBaby,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      name: "Dermatology",
      icon: FaStethoscope,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      name: "Gynecology",
      icon: FaXRay,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[36px] font-bold tracking-tight text-[#0F172A]">
            Our Specialization
          </h2>
        </div>

        {/* Dynamic Cards Container */}
        <div className="flex w-full gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-4 sm:overflow-x-visible md:grid-cols-6 lg:grid-cols-8">
          {specializations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <span
                key={index}
                className="group flex h-[140px] w-[120px] shrink-0 flex-col items-center justify-center gap-4 rounded-[16px] border border-[#E2E8F0] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#0EA5E9] hover:shadow-md sm:w-auto"
              >
                {/* Icon Wrapper */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bg} transition-colors duration-200 group-hover:bg-[#E0F2FE]`}
                >
                  <IconComponent
                    className={`text-[24px] ${item.color} transition-colors duration-200 group-hover:text-[#0EA5E9]`}
                  />
                </div>

                {/* Name */}
                <span className="text-[14px] font-semibold tracking-tight text-[#0F172A] text-center transition-colors duration-200 group-hover:text-[#0EA5E9]">
                  {item.name}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
