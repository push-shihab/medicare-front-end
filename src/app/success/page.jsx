import { redirect } from "next/navigation";
import { stripe } from "../lib/stripe";
import Link from "next/link";
// Using exclusively react-icons that match your visual language
import { IoCheckmarkCircle, IoArrowBack } from "react-icons/io5";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  const session = await stripe.checkout.sessions.retrieve(session_id);

  const transactionId = session.payment_intent;

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    console.log(metadata.symptoms);
    return (
      <div className="w-full max-w-[600px] mx-auto p-6 select-none min-h-[80vh] flex items-center justify-center ">
        <div className="w-full border border-slate-200/80 bg-white rounded-[20px] shadow-sm shadow-slate-100/50 p-8 flex flex-col items-center text-center">
          {/* Animated/Styled Green Checkmark Frame */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-5xl mb-6">
            <IoCheckmarkCircle />
          </div>

          {/* Success Titles */}
          <h1 className="text-[26px] font-bold text-slate-900 tracking-tight">
            Appointment Booked!
          </h1>
          <p className="text-[14px] text-slate-500 font-medium mt-2 max-w-[420px] leading-relaxed">
            Your payment was processed successfully. Your appointment
            confirmation is now finalized.
          </p>

          {/* Help Desk Link Line */}
          <p className="text-[12px] text-slate-400 font-medium mt-6">
            Have questions or need to reschedule? Email us at{" "}
            <a
              href="mailto:support@medicare.com"
              className="text-[#0EA5E9] font-bold hover:underline transition-all"
            >
              support@medicare.com
            </a>
          </p>

          {/* Action Redirection Route Triggers */}
          <div className="w-full flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-slate-100">
            <Link href="/" className="flex-1">
              <button className="w-full bg-[#0EA5E9] text-white font-bold text-[13px] h-11 px-6 rounded-xl hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/10 flex items-center justify-center gap-2">
                Go to Dashboard
              </button>
            </Link>

            <Link href="/appointments" className="flex-1">
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

// const handleProceedToPayment = async (e) => {
//   e.preventDefault();
//   if (!selectedTime || !bookingDate) {
//     toast.error("Please select date and time to proceed");
//     return;
//   }
//   const formData = new FormData(e.target);

//   const res = await fetch("/api/checkout_sessions", {
//     method: "POST",
//     body: formData,
//   });

//   if (!res.ok) {
//     const { error } = await res.json();
//     toast.error(error);
//     return;
//   }

//   const data = await res.json();
//   console.log(data);
//   window.location.href = data.url;
// };
{
  /* <form onSubmit={handleProceedToPayment}>
                  <input
                    type="hidden"
                    value={selectedTime}
                    name="selectedTime"
                  />
                  <input type="hidden" value={bookingDate} name="bookingDate" />
                  <input type="hidden" value={symptoms} name="symptoms" />
                  <input
                    type="hidden"
                    value={session.email}
                    name="patientEmail"
                  />
                  <input
                    type="hidden"
                    value={doctorData.consultationFee}
                    name="fee"
                  />
                  <section>
                    <button
                      type="submit"
                      role="link"
                      className="w-full bg-[#0EA5E9] text-white font-bold text-[14px] h-11 mt-2 rounded-xl hover:bg-sky-600 transition-all shadow-sm shadow-sky-500/10"
                    >
                      Proceed to Payment
                    </button>
                  </section>
                </form> */
}
