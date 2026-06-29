"use client";

import AllStatsPieChart from "./AllStatsPieChart";
import DoctorRatingChart from "./DoctorRatingChart";

export default function AdminAnalyticsClient({
  doctors,
  patients,
  appointments,
  reviews,
}) {
  const analyticsCards = [
    { id: "1", label: "Total Patients", value: patients.length },
    { id: "2", label: "Verified Doctors", value: doctors.length },
    { id: "3", label: "All Bookings", value: appointments.length },
    { id: "4", label: "All Reviews", value: reviews.length },
  ];

  return (
    <div className="min-h-screen md:m-5 flex flex-col gap-8 select-none font-sans antialiased">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {analyticsCards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-sm shadow-slate-100/40 flex flex-col gap-2 text-left"
          >
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {card.label}
            </span>
            <span className="text-[32px] font-black text-slate-800 tracking-tight leading-none">
              {card.value}
            </span>
          </div>
        ))}
      </div>
      <DoctorRatingChart doctors={doctors}></DoctorRatingChart>
      <AllStatsPieChart
        doctors={doctors}
        patients={patients}
        appointments={appointments}
        reviews={reviews}
      ></AllStatsPieChart>
    </div>
  );
}
