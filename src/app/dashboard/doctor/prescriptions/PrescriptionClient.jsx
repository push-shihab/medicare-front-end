"use client";

import React from "react";
import { Button } from "@heroui/react";
import ModifyPrescriptionModal from "./ModifyPrescriptionModal";

export default function PrescriptionClient({ prescriptions }) {
  return (
    <main className="m-5 space-y-5">
      {prescriptions.map((prescription) => (
        <div
          key={prescription._id}
          className="w-full bg-white border border-slate-200/70 rounded-[20px] p-7 shadow-sm flex flex-col gap-5 select-none transition-shadow hover:shadow-md"
        >
          {/* Top Identity Panel Section */}
          <div className="flex items-start justify-between w-full gap-4">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[20px] font-bold text-slate-800 tracking-tight">
                {prescription.patientName}
              </h2>
              <span className="text-[12px] text-slate-400 font-medium tracking-tight">
                Date of Issue: {prescription.createdAt.split("T")[0]}
              </span>
            </div>

            {/* Action Button styled using your website's exact light sky-blue theme */}
            <ModifyPrescriptionModal
              prescription={prescription}
            ></ModifyPrescriptionModal>
          </div>

          {/* Prescription Core Content Blocks */}
          <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-slate-600 font-medium">
            {/* Diagnosis Row */}
            <p>
              <strong className="text-slate-800 font-bold text-[15px]">
                Diagnosis:
              </strong>{" "}
              {prescription.diagnosis}
            </p>

            {/* Medications Row */}
            <p className="whitespace-pre-line">
              <strong className="text-slate-800 font-bold text-[15px]">
                Medications:
              </strong>{" "}
              {prescription.medications}
            </p>

            {/* Notes / Instructions Row */}
            <p>
              <strong className="text-slate-800 font-bold text-[15px]">
                Notes:
              </strong>{" "}
              {prescription.instructions}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
