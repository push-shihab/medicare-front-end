import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center p-6 font-sans antialiased select-none">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full bg-sky-50 border border-sky-100/50 animate-ping opacity-75" />

        <ClipLoader
          color="#0EA5E9"
          size={45}
          speedMultiplier={0.8}
          aria-label="MediCare Loading Spinner"
        />
      </div>

      <p className="mt-4 text-[13px] sm:text-[14px] text-slate-400 font-semibold tracking-wide animate-pulse">
        Fetching the directory...
      </p>
    </div>
  );
}
