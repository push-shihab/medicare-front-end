"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FiSlash, FiMail, FiHome } from "react-icons/fi";
import Link from "next/link";

export default function AccountSuspendedPage() {
  return (
    <div className="w-full flex items-center justify-center p-6 font-sans antialiased select-none">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-[24px] p-8 md:p-10 text-center shadow-sm shadow-slate-100/40 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 text-[28px] mb-6 shrink-0 shadow-sm shadow-amber-100/50">
          <FiSlash className="stroke-[2.5]" />
        </div>

        <h1 className="text-[24px] sm:text-[26px] font-black text-slate-800 tracking-tight mb-2">
          Account Suspended
        </h1>

        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-0.5 rounded-full mb-5 uppercase tracking-wider">
          Access Restricted by Admin
        </span>

        <p className="text-[13.5px] sm:text-[14px] text-slate-500 font-medium leading-relaxed mb-8 max-w-[340px]">
          Your portal access has been temporarily suspended due to a breach of
          our community guidelines or pending verification protocols. You cannot
          manage appointments or view clinical data at this time.
        </p>

        <div className="w-full flex flex-col gap-3">
          <Link
            href={"/contact-us"}
            className="w-full h-11 rounded-xl bg-[#0EA5E9] hover:bg-sky-600 text-white font-bold text-[14px] shadow-sm shadow-sky-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FiMail className="text-[16px]" />
            Contact Us
          </Link>

          <Link
            href="/"
            className="w-full h-11 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[14px] shadow-sm shadow-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FiHome className="text-[16px]" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
