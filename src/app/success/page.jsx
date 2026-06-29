import { redirect } from "next/navigation";
import { stripe } from "../lib/stripe";
import Link from "next/link";
import {
  IoCheckmarkCircle,
  IoArrowBack,
  IoCalendarOutline,
  IoTimeOutline,
  IoWalletOutline,
  IoPersonOutline,
  IoMedicalOutline,
  IoReceiptOutline,
  IoMailOutline,
} from "react-icons/io5";
import { createPayment } from "../utility/actions/payment/payment";
import toast from "react-hot-toast";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const { status, metadata, payment_intent } = session;

  if (status === "open") return redirect("/");

  if (status === "complete") {
    const transactionId = payment_intent?.id;
    const paymentTime = new Date(session.created * 1000).toLocaleString();
    const amountPaid = (payment_intent?.amount_received / 100).toFixed(2);
    const { doctorName, appointmentId, doctorId, patientId } = metadata;
    const paymentData = {
      doctorName,
      appointmentId,
      doctorId,
      patientId,
      transactionId,
      paymentTime,
      amountPaid,
    };
    const makePayment = await createPayment(paymentData);
    if (makePayment.acknowledged) {
      return (
        <div className="w-full max-w-160 mx-auto p-6 select-none min-h-[80vh] flex items-center justify-center">
          <div className="w-full border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50 p-8 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-5xl mb-4">
              <IoCheckmarkCircle />
            </div>

            <h1 className="text-[26px] font-bold text-slate-900 tracking-tight text-center">
              Appointment Booked!
            </h1>
            <p className="text-[14px] text-slate-500 font-medium mt-2 text-center max-w-105 leading-relaxed">
              Your payment was processed successfully. Your appointment
              confirmation is now finalized.
            </p>
            <div className="w-full mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/60 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <IoReceiptOutline className="text-base" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Transaction ID
                  </span>
                  <p className="text-[13px] font-semibold text-slate-700 truncate">
                    {transactionId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/60 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <IoTimeOutline className="text-base" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Payment Time
                  </span>
                  <p className="text-[13px] font-semibold text-slate-700">
                    {paymentTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <IoWalletOutline className="text-base" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Amount Paid
                  </span>
                  <p className="text-[15px] font-extrabold text-emerald-600">
                    ${amountPaid}
                  </p>
                </div>
              </div>

              {doctorName && (
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/60 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#0EA5E9] shrink-0">
                    <IoMedicalOutline className="text-base" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Doctor
                    </span>
                    <p className="text-[13px] font-semibold text-slate-700">
                      Dr. {doctorName}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[12px] text-slate-400 font-medium mt-6">
              Have questions?{" "}
              <a
                href="mailto:support@medicare.com"
                className="text-[#0EA5E9] font-bold hover:underline transition-all"
              >
                support@medicare.com
              </a>
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-slate-100">
              <Link href="/" className="flex-1">
                <button className="w-full bg-[#0EA5E9] text-white font-bold text-[13px] h-11 px-6 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10 flex items-center justify-center gap-2">
                  Go to Dashboard
                </button>
              </Link>
              <Link href="/dashboard/patient/appointments" className="flex-1">
                <button className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-[13px] h-11 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5">
                  <IoArrowBack className="text-base" />
                  View Appointments
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
