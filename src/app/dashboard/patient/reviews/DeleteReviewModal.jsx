"use client";

import React from "react";
import { Modal, Button } from "@heroui/react";
import {
  IoCloseOutline,
  IoTrashOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { deleteReview } from "@/app/utility/actions/review/review";
import toast from "react-hot-toast";

export default function DeleteReviewModal({ review }) {
  const router = useRouter();

  const onDelete = async () => {
    const payload = {
      reviewId: review._id,
    };
    const res = await deleteReview(payload);
    if (res.deletedCount) {
      toast.success("Successfully deleted the review");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button
        isIconOnly
        size="sm"
        className="w-7 h-7 rounded-md bg-red-50 text-red-400 hover:bg-red-100 transition-colors min-w-0"
      >
        <FiTrash2 className="text-[12px]" />
      </Button>

      <Modal.Backdrop className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-9999 flex items-center justify-center p-4 transition-opacity duration-200">
        <Modal.Container className="w-full max-w-200 flex items-center justify-center">
          <Modal.Dialog className="w-full bg-white rounded-[24px] border border-slate-200/80 shadow-xl overflow-hidden select-none animate-in fade-in zoom-in-95 duration-150 relative">
            <Modal.CloseTrigger className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer z-10">
              <IoCloseOutline className="text-lg" />
            </Modal.CloseTrigger>

            <Modal.Header className="p-6 bg-slate-50/60 border-b border-slate-100 flex items-center gap-3">
              <Modal.Icon className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 text-lg shrink-0 border border-rose-100">
                <IoAlertCircleOutline className="text-xl" />
              </Modal.Icon>
              <div className="flex flex-col gap-0.5">
                <Modal.Heading className="text-[16px] font-bold text-slate-900 tracking-tight">
                  Delete Review
                </Modal.Heading>
                <span className="text-[12px] text-slate-400 font-medium">
                  This action cannot be undone
                </span>
              </div>
            </Modal.Header>

            <Modal.Body className="p-6">
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                Are you completely sure you want to permanently delete this
                review? This log will be removed from the doctor&apos;s profile
                instantly.
              </p>
            </Modal.Body>

            <Modal.Footer className="p-6 bg-slate-50/40 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <Button
                slot="close"
                className="w-full sm:w-1/2 border border-slate-200 bg-white text-slate-600 font-bold text-[13px] h-11 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </Button>

              <Button
                onClick={onDelete}
                slot="close"
                className="w-full sm:w-1/2 bg-rose-500 text-white font-bold text-[13px] h-11 rounded-xl hover:bg-rose-600 transition-colors shadow-sm shadow-rose-500/10"
              >
                Delete Review
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
