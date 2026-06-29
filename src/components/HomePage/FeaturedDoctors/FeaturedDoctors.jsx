import { getAllDoctors } from "@/app/utility/fetchData/doctor/doctor";
import ShowDoctors from "@/components/Shared/showDoctors/ShowDoctors";
import Link from "next/link";

export default async function FeaturedDoctors() {
  const doctors = await getAllDoctors();
  const featuredDoctors = doctors.sort().slice(0, 8);

  return (
    <div className="w-full bg-slate-50/50 py-16 px-6 font-sans antialiased select-none flex flex-col items-center">
      <div className="text-center flex flex-col gap-2 mb-12">
        <h2 className="text-[28px] sm:text-[32px] font-black text-[#0F172A] tracking-tight">
          Meet Our Doctors
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-400 font-medium max-w-md mx-auto leading-normal">
          Trusted specialists across all medical fields
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-stretch mb-12">
        {featuredDoctors.map((doctor) => (
          <ShowDoctors key={doctor._id} doctor={doctor}></ShowDoctors>
        ))}
      </div>

      <Link
        href="/doctors?page=1"
        className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-[14px] py-2.5 px-8 rounded-xl shadow-sm shadow-slate-100 transition-all cursor-pointer"
      >
        View All Doctors
      </Link>
    </div>
  );
}
