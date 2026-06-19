"use client";

import React from "react";
import {
  FiCalendar,
  FiCheckSquare,
  FiCreditCard,
  FiStar,
  FiArrowUp,
} from "react-icons/fi";

export default function OverviewStats() {
  // Ordered layout array to precisely map your design specs
  const statCards = [
    {
      title: "Upcoming",
      value: "3",
      trend: "1 new this week",
      hasTrendUpArrow: true,
      icon: FiCalendar,
      iconColors: "bg-[#E0F2FE] text-[#0EA5E9]", // Sky blue theme
    },
    {
      title: "Completed",
      value: "12",
      trend: "2 this month",
      hasTrendUpArrow: true,
      icon: FiCheckSquare,
      iconColors: "bg-[#DCFCE7] text-[#22C55E]", // Emerald green theme
    },
    {
      title: "Total Paid",
      value: "৳9,600",
      trend: "৳800 this month",
      hasTrendUpArrow: true,
      icon: FiCreditCard,
      iconColors: "bg-[#FEF9C3] text-[#EAB308]", // Amber yellow theme
    },
    {
      title: "Reviews Given",
      value: "8",
      trend: "Avg 4.8 rating",
      hasTrendUpArrow: false, // Standard dynamic label layout match
      icon: FiStar,
      iconColors: "bg-[#F3E8FF] text-[#A855F7]", // Purple theme
    },
  ];

  return (
    <main className="flex justify-center m-5 w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 select-none">
        {statCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="bg-white border border-[#F1F5F9] rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40"
            >
              {/* Upper Content Frame */}
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-[14px] font-medium text-[#94A3B8]">
                  {card.title}
                </span>
                <div
                  className={`w-10 h-10 rounded-[12px] ${card.iconColors} flex items-center justify-center text-[18px]`}
                >
                  <IconComponent />
                </div>
              </div>

              {/* Lower Statistics Content Metrics Frame */}
              <div className="flex flex-col gap-2">
                <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">
                  {card.value}
                </span>

                {/* Dynamic Footer Info Metric Layout */}
                <div
                  className={`text-[12px] font-medium flex items-center gap-1 ${
                    card.hasTrendUpArrow ? "text-[#10B981]" : "text-[#94A3B8]"
                  }`}
                >
                  {card.hasTrendUpArrow && (
                    <FiArrowUp className="text-[13px] shrink-0 stroke-[2.5]" />
                  )}
                  <span>{card.trend}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
