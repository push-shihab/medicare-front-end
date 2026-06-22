"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "@heroui/react";
import { BiRocket } from "react-icons/bi";
import {
  IoStarOutline,
  IoPersonOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { editReview } from "@/app/utility/actions/review/review";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EditReviewModal({ review }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      rating: review ? String(review.rating) : "5",
      reviewText: review?.reviewText ?? "",
    },
  });
  const router = useRouter();

  const onSubmit = async (updatedData) => {
    const payload = {
      ...updatedData,
      reviewId: review._id,
    };
    const res = await editReview(payload);
    if (res.modifiedCount) {
      toast("Successfully edited the review");
      router.refresh();
    }
  };

  return (
    <Modal>
      {/* This is the inner trigger that HeroUI hooks into natively.
        We assign an id so we can trigger it perfectly from outside this component file!
      */}
      <Button
        isIconOnly
        size="sm"
        className="w-7 h-7 rounded-md bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors min-w-0"
      >
        <FiEdit2 className="text-[12px]" />
      </Button>

      <Modal.Backdrop className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-200">
        <Modal.Container className="w-full max-w-200 flex items-center justify-center">
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
                  Modify Feedback
                </Modal.Heading>
                <span className="text-[12px] text-slate-400 font-medium">
                  Update your consultation records
                </span>
              </div>
            </Modal.Header>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body className="p-6 flex flex-col gap-4">
                {/* 2) Select Field: Rating Selection */}
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

                {/* 3) Textarea Field: Review Content */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Review Details
                  </label>
                  <textarea
                    {...register("reviewText", {
                      required: "Review statement cannot be empty",
                      minLength: {
                        value: 10,
                        message:
                          "Please offer descriptive text (Min 10 characters)",
                      },
                    })}
                    placeholder="Update your review feedback descriptions here..."
                    rows={4}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-700 font-medium focus:outline-none focus:border-sky-400 transition-colors resize-none standard-scroll"
                  />
                  {errors.reviewText && (
                    <span className="text-[11px] text-rose-500 font-semibold pl-0.5">
                      {errors.reviewText.message}
                    </span>
                  )}
                </div>
              </Modal.Body>

              <Modal.Footer className="p-6 bg-slate-50/40 border-t border-slate-100">
                {/* Submit button changed to warning/sky color theme */}
                <Button
                  type="submit"
                  slot="close"
                  className="w-full bg-sky-500 text-white font-bold text-[13px] h-11 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10"
                >
                  Change Review
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
