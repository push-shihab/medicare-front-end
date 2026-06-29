"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FiLock, FiArrowLeft, FiHome } from "react-icons/fi";

export default function ForbiddenPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50/50 flex items-center justify-center p-6 font-sans antialiased select-none">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-[24px] p-8 md:p-10 text-center shadow-sm shadow-slate-100/40 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 text-[28px] mb-6 shrink-0 shadow-sm shadow-amber-100/50">
          <FiLock />
        </div>
        <h1 className="text-[24px] sm:text-[26px] font-black text-slate-800 tracking-tight mb-2">
          Forbidden Directory
        </h1>

        <span className="text-[12px] font-bold text-amber-600 bg-amber-50/60 border border-amber-100 px-2.5 py-0.5 rounded-md mb-4 font-mono">
          Error 403: Forbidden
        </span>
        <p className="text-[13.5px] sm:text-[14px] text-slate-500 font-medium leading-relaxed mb-8 max-w-[320px]">
          Your account credentials are verified, but you do not possess the
          required clearance level to access this confidential database.
        </p>
        <div className="w-full flex flex-col gap-3">
          <Link
            href="/"
            className="w-full h-11 rounded-xl bg-[#0EA5E9] hover:bg-sky-600 text-white font-bold text-[14px] shadow-sm shadow-sky-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FiHome className="text-[16px]" />
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full h-11 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[14px] shadow-sm shadow-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FiArrowLeft className="text-[16px]" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
