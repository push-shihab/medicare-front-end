"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "@heroui/react";
import {
  IoCloseOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoMedicalOutline,
  IoClipboardOutline,
  IoCreateOutline,
} from "react-icons/io5";
import { createPrescription } from "@/app/utility/actions/prescription/prescription";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PrescriptionWritingModal({ appointment }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientName: appointment.patientName,
      appointmentTime: `${appointment.appointmentDate} - ${appointment.appointmentTime}`,
    },
  });
  const router = useRouter();

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      patientId: appointment.patientId,
      doctorName: appointment.doctorName,
      doctorId: appointment.doctorId,
      appointmentId: appointment._id,
    };
    const res = await createPrescription(payload);
    if (res.insertedId) {
      toast.success("Prescription saved successfully");
      router.refresh();
    }
  };

  return (
    <div>
      <Modal>
        <Button
          size="sm"
          variant="bordered"
          className="h-8 px-3 rounded-lg bg-[#0EA5E9] text-white font-bold text-[12px] hover:bg-[#0EA5E9] transition-colors"
        >
          Prescribe
        </Button>

        <Modal.Backdrop className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-200">
          <Modal.Container className="w-full max-w-[800px] min-w-[200px] flex items-center justify-center">
            <Modal.Dialog className="w-full max-w-[800px] bg-white rounded-[24px] border border-slate-200/80 shadow-xl overflow-hidden select-none animate-in fade-in zoom-in-95 duration-150 relative">
              <Modal.CloseTrigger className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10">
                <IoCloseOutline className="text-lg" />
              </Modal.CloseTrigger>

              <Modal.Header className="p-6 bg-slate-50/60 border-b border-slate-100 flex items-center gap-3">
                <Modal.Icon className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0EA5E9] text-lg flex-shrink-0 border border-sky-100">
                  <IoDocumentTextOutline />
                </Modal.Icon>
                <div className="flex flex-col gap-0.5">
                  <Modal.Heading className="text-[16px] font-bold text-slate-900 tracking-tight">
                    Create Prescription
                  </Modal.Heading>
                  <span className="text-[12px] text-slate-400 font-medium">
                    Authorize clinical diagnosis and treatment formulas
                  </span>
                </div>
              </Modal.Header>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body className="p-6 flex flex-col gap-4 max-h-[65vh] overflow-y-auto standard-scroll">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-sky-50/40 border border-sky-100/70">
                    <div className="w-10 h-10 rounded-full bg-sky-100/60 flex items-center justify-center text-[#0EA5E9] text-base flex-shrink-0">
                      <IoPersonOutline />
                    </div>
                    <div className="flex text-center flex-col gap-0.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Patient Appointment Information
                      </span>
                      <h4 className="text-[15px] font-bold text-slate-800">
                        Patient: {appointment.patientName}
                      </h4>
                      <span className="text-[12px] text-slate-500 font-medium tracking-tight mt-0.5">
                        Appointment: {appointment.appointmentTime} |{" "}
                        {appointment.appointmentDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IoMedicalOutline /> Diagnosis
                    </label>
                    <textarea
                      {...register("diagnosis", {
                        required: "Diagnosis definition is required",
                      })}
                      placeholder="Input diagnosed pathology parameters..."
                      rows={2}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors resize-none leading-relaxed placeholder:text-slate-400"
                    />
                    {errors.diagnosis && (
                      <span className="text-[11px] text-rose-500 font-semibold pl-0.5">
                        {errors.diagnosis.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IoClipboardOutline /> Medications
                    </label>
                    <textarea
                      {...register("medications", {
                        required: "Medication allocations are required",
                      })}
                      placeholder="List drugs..."
                      rows={4}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors resize-none leading-relaxed placeholder:text-slate-400"
                    />
                    {errors.medications && (
                      <span className="text-[11px] text-rose-500 font-semibold pl-0.5">
                        {errors.medications.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IoCreateOutline /> Notes / Instructions
                    </label>
                    <textarea
                      {...register("instructions")}
                      placeholder="Add supplementary instructions..."
                      rows={2}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors resize-none leading-relaxed placeholder:text-slate-400"
                    />
                  </div>
                </Modal.Body>

                <Modal.Footer className="p-6 bg-slate-50/40 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    type="button"
                    slot="close"
                    className="w-full sm:w-1/4 order-2 sm:order-1 border border-slate-200 bg-white text-slate-500 font-bold text-[13px] h-11 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="w-full sm:w-3/4 order-1 sm:order-2 bg-[#0EA5E9] text-white font-bold text-[13px] h-11 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10"
                  >
                    Save Prescription
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
