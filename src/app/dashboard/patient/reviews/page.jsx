"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FaPlus, FaStar } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ReviewsPage() {
  // Existing reviews structural mock array matching patientReviews.png
  const reviewsList = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      rating: 5,
      comment: `"Excellent doctor, very thorough and professional. She explained everything clearly and made me feel comfortable throughout the consultation."`,
      date: "Nov 15, 2026",
    },
    {
      id: 2,
      doctorName: "Dr. James Williams",
      rating: 5,
      comment: `"Very knowledgeable neurologist. The consultation was detailed and he took time to answer all my questions. Highly recommended."`,
      date: "Oct 22, 2026",
    },
    {
      id: 3,
      doctorName: "Dr. Rina Ahmed",
      rating: 4, // 4 filled stars, 1 empty star representation
      comment: `"Good experience overall. The treatment was effective and the doctor was friendly. Would visit again if needed."`,
      date: "Sep 10, 2026",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 m-5 p-1 select-none">
      {/* Page Layout Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight">
            Your Reviews
          </h2>
          <p className="text-[14px] text-slate-400 font-medium">
            Share your experience with doctors you&apos;ve visited
          </p>
        </div>
        <Button
          size="sm"
          className="bg-[#0EA5E9] text-white font-semibold text-[13px] h-9 px-4 rounded-xl flex items-center gap-1.5 self-start sm:self-auto shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
        >
          <FaPlus className="text-[10px]" /> Add Review
        </Button>
      </div>

      {/* Grid Matrix Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        {reviewsList.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-slate-200 rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40 relative min-h-[190px]"
          >
            {/* Upper Section Frame: Heading info & Action Buttons */}
            <div>
              <div className="flex items-center justify-between w-full mb-2">
                <h4 className="text-[15px] font-bold text-slate-800">
                  {review.doctorName}
                </h4>
                {/* Micro Action Buttons */}
                <div className="flex items-center gap-1.5">
                  <Button
                    isIconOnly
                    size="sm"
                    className="w-7 h-7 rounded-md bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors min-w-0"
                  >
                    <FiEdit2 className="text-[12px]" />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    className="w-7 h-7 rounded-md bg-red-50 text-red-400 hover:bg-red-100 transition-colors min-w-0"
                  >
                    <FiTrash2 className="text-[12px]" />
                  </Button>
                </div>
              </div>

              {/* Star Rating Render Core */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-[12px] ${
                      i < review.rating ? "text-[#EAB308]" : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Patient Review Content Body Text */}
              <p className="text-[13.5px] italic text-slate-500 font-medium leading-relaxed pr-4">
                {review.comment}
              </p>
            </div>

            {/* Footer Date Metric Timestamp */}
            <div className="mt-5 text-[12px] font-medium text-slate-400">
              {review.date}
            </div>
          </div>
        ))}

        {/* 4th Element Slot: Interactive Dotted Placeholder Skeleton Core */}
        <div className="border-2 border-dashed border-slate-200 rounded-[16px] bg-slate-50/20 hover:bg-slate-50/60 flex flex-col items-center justify-center p-6 min-h-[190px] cursor-pointer group transition-all duration-200">
          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center group-hover:text-sky-500 group-hover:border-sky-200 transition-colors shadow-sm">
              <FaPlus className="text-[11px]" />
            </div>
            <span className="text-[14px] font-semibold text-slate-400 group-hover:text-slate-500 transition-colors mt-1">
              Write a new review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
