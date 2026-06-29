"use client";

import React from "react";
import { Button } from "@heroui/react";
import ModifyPrescriptionModal from "./ModifyPrescriptionModal";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function PrescriptionClient({ prescriptions }) {
  const hasPrescriptions = prescriptions && prescriptions.length > 0;

  return (
    <main className="md:m-5 space-y-5">
      {hasPrescriptions ? (
        prescriptions.map((prescription) => (
          <div
            key={prescription._id}
            className="w-full bg-white border border-slate-200/70 rounded-[20px] p-7 shadow-sm flex flex-col gap-5 select-none transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between w-full gap-4">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[20px] font-bold text-slate-800 tracking-tight">
                  {prescription.patientName}
                </h2>
                <span className="text-[12px] text-slate-400 font-medium tracking-tight">
                  Date of Issue:{" "}
                  {prescription.createdAt?.split("T")[0] ?? "N/A"}
                </span>
              </div>
              <ModifyPrescriptionModal prescription={prescription} />
            </div>

            <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-slate-600 font-medium">
              {/* Diagnosis Row */}
              <p>
                <strong className="text-slate-800 font-bold text-[15px]">
                  Diagnosis:
                </strong>{" "}
                {prescription.diagnosis}
              </p>

              <p className="whitespace-pre-line">
                <strong className="text-slate-800 font-bold text-[15px]">
                  Medications:
                </strong>{" "}
                {prescription.medications}
              </p>

              <p>
                <strong className="text-slate-800 font-bold text-[15px]">
                  Notes:
                </strong>{" "}
                {prescription.instructions}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full max-w-[540px] mx-auto bg-white border border-slate-200/60 rounded-[24px] p-10 flex flex-col items-center justify-center text-center select-none shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9] text-2xl mb-4">
            <IoDocumentTextOutline />
          </div>
          <h3 className="text-[16px] font-bold text-slate-800 tracking-tight">
            No Prescriptions Found
          </h3>
          <p className="text-[13px] text-slate-400 font-medium mt-1 max-w-[320px] leading-normal">
            There are current no clinical records or therapy histories
            registered inside this profile space.
          </p>
        </div>
      )}
    </main>
  );
}
