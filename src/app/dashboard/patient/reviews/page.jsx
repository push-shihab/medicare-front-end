import { Button } from "@heroui/react";
import { FaPlus, FaStar } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";
import ReviewModal from "./ReviewModal";
import { getAppointmentsByPatientId } from "@/app/utility/fetchData/appointment/appointment";
import { getSession } from "@/app/utility/server/session";
import { getReviewsById } from "@/app/utility/fetchData/review/review";
import EditReviewModal from "./EditReviewModal";
import DeleteReviewModal from "./DeleteReviewModal";

export default async function ReviewsPage() {
  const user = await getSession();
  const appointments = await getAppointmentsByPatientId(user.id);
  const reviews = await getReviewsById(user.id);

  const hasReviews = reviews && reviews.length > 0;

  return (
    <div className="flex flex-col gap-6 md:m-5 mb-5 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight">
            Your Reviews
          </h2>
          <p className="text-[14px] text-slate-400 font-medium">
            Share your experience with doctors you&apos;ve visited
          </p>
        </div>
        <ReviewModal user={user} appointments={appointments}></ReviewModal>
      </div>

      {hasReviews ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border border-slate-200 rounded-[16px] p-6 flex flex-col justify-between shadow-sm shadow-slate-100/40 relative min-h-[190px]"
            >
              <div>
                <div className="flex items-center justify-between w-full mb-2">
                  <h4 className="text-[15px] font-bold text-slate-800">
                    {review.doctorName}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <EditReviewModal review={review}></EditReviewModal>
                    <DeleteReviewModal review={review}></DeleteReviewModal>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[12px] ${
                        i < review.rating ? "text-[#EAB308]" : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[13.5px] italic text-slate-500 font-medium leading-relaxed pr-4">
                  {review.reviewText}
                </p>
              </div>

              <div className="mt-5 text-[12px] font-medium text-slate-400">
                {review.createdAt.split("T")[0]}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full bg-white border border-slate-200 rounded-[24px] p-16 flex flex-col items-center justify-center text-center shadow-sm shadow-slate-100/40">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9] text-xl mb-4">
            <RiFeedbackLine />
          </div>
          <h4 className="text-[16px] font-bold text-slate-800 tracking-tight">
            No Reviews Posted Yet
          </h4>
          <p className="text-[13.5px] text-slate-400 font-medium mt-1 max-w-[360px] leading-normal">
            You haven&apos;t submitted any evaluations or testimonials for your
            consulting doctors yet.
          </p>
        </div>
      )}
    </div>
  );
}
