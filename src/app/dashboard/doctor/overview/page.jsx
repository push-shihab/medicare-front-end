"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiUsers, FiCalendar, FiAward, FiDollarSign } from "react-icons/fi";

export default function DoctorOverview() {
  // Top Analytics Summary Metadata Array mapping doctorOverview.png
  const analyticsStats = [
    {
      id: 1,
      value: "1",
      label: "Distinct Patients",
      icon: FiUsers,
    },
    {
      id: 2,
      value: "0",
      label: "Pending Requests",
      icon: FiCalendar,
    },
    {
      id: 3,
      value: "5.0 / 5.0",
      label: "Clinician Score",
      icon: FiAward,
    },
    {
      id: 4,
      value: "$ 1",
      label: "FEEDBACKS",
      icon: FiDollarSign,
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
              <div className="w-12 h-12 rounded-[14px] bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center text-[20px] shrink-0">
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

      {/* 2. Testimonials Sub-Dashboard Layer Panel */}
      <div className="w-full bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm shadow-slate-100/40">
        <h3 className="text-[17px] font-bold text-[#0F172A] tracking-tight mb-5">
          Recent Patient Testimonials
        </h3>

        {/* Testimonial Individual Card Shell */}
        <div className="max-w-[480px] w-full bg-white border border-slate-100 rounded-[16px] p-5 shadow-sm shadow-slate-50/50 hover:border-slate-200/80 transition-all duration-200">
          {/* Header Sub-Row Structure: Profile Label vs Star System */}
          <div className="flex items-center justify-between w-full mb-3">
            <h4 className="text-[15px] font-bold text-slate-800">
              Sarah Jenkins
            </h4>

            {/* 5-Star Maximum Rating Layout */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="text-[#EAB308] text-[13px]" />
              ))}
            </div>
          </div>

          {/* Testimonial Text Body paragraph */}
          <p className="text-[13.5px] italic text-slate-500 font-medium leading-relaxed">
            &quot;Dr. Amanda Ross saved my father&apos;s life. Her precision,
            caring personality, and clear explanations made a stressful surgery
            very manageable. Highly recommended!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
