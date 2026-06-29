"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FiArrowLeft, FiHome, FiShield } from "react-icons/fi";

export default function UnauthorizedPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50/50 flex items-center justify-center p-6 font-sans antialiased select-none">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-[24px] p-8 md:p-10 text-center shadow-sm shadow-slate-100/40 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 text-[32px] mb-6 shrink-0 shadow-sm shadow-rose-100/50">
          <FiShield />
        </div>

        <h1 className="text-[24px] sm:text-[26px] font-black text-slate-800 tracking-tight mb-2">
          Access Denied
        </h1>

        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-md mb-4 font-mono">
          Error 401: Unauthorized
        </span>

        <p className="text-[13.5px] sm:text-[14px] text-slate-500 font-medium leading-relaxed mb-8 max-w-[320px]">
          You do not have permission to view this clinical dashboard space.
          Please make sure you are logged into an authorized account or contact
          system administrators.
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
