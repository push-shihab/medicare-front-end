"use client";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import Image from "next/image";
import { editDoctorProfile } from "@/app/utility/actions/doctor/doctor";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function DoctorProfileClient({ doctor, session }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      email: session?.email,
      ...data,
    };
    const updateData = await editDoctorProfile(payload);
    if (updateData.acknowledged) {
      toast.success(`${session.name}, your profile updated successfully`);
      redirect("/dashboard/doctor/profile");
    }
  };

  return (
    <div className="md:m-5 bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm shadow-slate-100/40 select-none">
      <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-6 mb-8 w-full">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-[#E8F5E9] flex items-center justify-center text-slate-400 border border-emerald-100 shadow-sm overflow-hidden">
            <Image
              src={doctor.profileImage}
              alt={doctor.doctorName}
              fill
              className="w-full h-full object-cover rounded-full"
            ></Image>
          </div>
        </div>

        <h3 className="text-[20px] font-bold text-slate-800 tracking-tight mt-3">
          {doctor.doctorName}
        </h3>
        <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[12px] font-bold bg-[#E8F5E9] text-[#2E7D32] border border-emerald-100 mt-2">
          {doctor.verificationStatus === "approved"
            ? "Verified Doctor"
            : "Not Verified"}
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Qualifications
          </label>
          <input
            type="text"
            defaultValue={doctor.qualifications}
            {...register("qualifications", {
              required: "Qualifications are required",
            })}
            className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Years of Experience
            </label>
            <input
              type="number"
              defaultValue={doctor.experience}
              {...register("experience")}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Consultation Fee ($)
            </label>
            <input
              type="number"
              defaultValue={doctor.consultationFee}
              {...register("consultationFee")}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Hospital / Clinic Name
          </label>
          <input
            type="text"
            defaultValue={doctor.hospitalName}
            {...register("hospitalName")}
            className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Specialization
            </label>
            <div className="relative">
              <select
                defaultValue={doctor.specialization}
                {...register("specialization")}
                className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all appearance-none cursor-pointer"
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dermatology">Dermatology</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">
                ▼
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Phone Number
            </label>
            <input
              defaultValue={doctor.phone}
              type="text"
              {...register("phone")}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Bio / About
          </label>
          <textarea
            defaultValue={doctor.bio}
            rows={4}
            {...register("bio")}
            className="w-full border border-slate-200 p-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all resize-y min-h-25"
          />
        </div>

        <div className="mt-4 pt-2 w-full">
          <Button
            type="submit"
            className="bg-[#0EA5E9] text-white font-bold text-[14px] h-11 px-6 rounded-xl shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
