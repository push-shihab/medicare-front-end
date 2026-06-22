"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "@heroui/react";
import { BiRocket } from "react-icons/bi";
import {
  IoStarOutline,
  IoPersonOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function ReviewModal(appointments) {
  const [isOpen, setIsOpen] = useState(false);
  const filterAppointments = appointments.appointments.filter(
    (appointment) => appointment.appointmentStatus === "pending",
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      doctorName: "",
      rating: "5",
      reviewText: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("Feedback Review Submission Initialized:", formData);
    setIsOpen(true);
  };

  return (
    <div>
      <Button
        onPress={() => setIsOpen(true)}
        className="bg-sky-500 text-white font-bold text-[13px] h-10 px-5 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10"
      >
        <FaPlus className="text-[10px]" />
        Write a Review
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-200">
          <Modal.Container className="w-full max-w-lg flex items-center justify-center">
            <Modal.Dialog className="w-full bg-white rounded-[24px] border border-slate-200/80 shadow-xl overflow-hidden select-none animate-in fade-in zoom-in-95 duration-150 relative">
              <Modal.CloseTrigger className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10">
                <IoCloseOutline className="text-lg" />
              </Modal.CloseTrigger>

              <Modal.Header className="p-6 bg-slate-50/60 border-b border-slate-100 flex items-center gap-3">
                <Modal.Icon className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 text-lg flex-shrink-0 border border-sky-100">
                  <BiRocket className="size-5" />
                </Modal.Icon>
                <div className="flex flex-col gap-0.5">
                  <Modal.Heading className="text-[16px] font-bold text-slate-900 tracking-tight">
                    Patient Feedback
                  </Modal.Heading>
                  <span className="text-[12px] text-slate-400 font-medium">
                    Share your treatment experience
                  </span>
                </div>
              </Modal.Header>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body className="p-6 flex flex-col gap-4">
                  {/* Doctor Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IoPersonOutline className="text-[12px]" /> Select Doctor
                    </label>
                    <select
                      {...register("doctorName", {
                        required: "Please select a professional provider",
                      })}
                      className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="" disabled hidden>
                        Choose Doctor...
                      </option>
                      {filterAppointments.map((doc) => (
                        <option key={doc._id} value={doc.doctorName}>
                          {doc.doctorName}
                        </option>
                      ))}
                    </select>
                    {errors.doctorName && (
                      <span className="text-[11px] text-rose-500 font-semibold pl-0.5">
                        {errors.doctorName.message}
                      </span>
                    )}
                  </div>

                  {/* Rating Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <IoStarOutline className="text-[12px]" /> Score Rating
                    </label>
                    <select
                      {...register("rating")}
                      className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                    >
                      <option value="5">5 ★ Exceptional Support</option>
                      <option value="4">4 ★ Good & Attentive</option>
                      <option value="3">3 ★ Satisfactory Session</option>
                      <option value="2">2 ★ Needs Urgent Improvement</option>
                      <option value="1">1 ★ Unsatisfactory Quality</option>
                    </select>
                  </div>

                  {/* Review Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      Review Details
                    </label>
                    <textarea
                      {...register("reviewText", {
                        required: "Review statement cannot be submitted empty",
                        minLength: {
                          value: 10,
                          message:
                            "Please offer a descriptive account (Min 10 characters)",
                        },
                      })}
                      placeholder="Write structural observations or gratitude regarding consultation diagnosis here..."
                      rows={4}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors resize-none placeholder:text-slate-400/70 leading-relaxed"
                    />
                    {errors.reviewText && (
                      <span className="text-[11px] text-rose-500 font-semibold pl-0.5">
                        {errors.reviewText.message}
                      </span>
                    )}
                  </div>
                </Modal.Body>

                <Modal.Footer className="p-6 bg-slate-50/40 border-t border-slate-100">
                  <Button
                    type="submit"
                    className="w-full bg-sky-500 text-white font-bold text-[13px] h-11 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10"
                  >
                    Submit Review Logs
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
