"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import { FiEdit, FiUser } from "react-icons/fi";
import Image from "next/image";
import { updateUserProfile } from "@/app/utility/actions/user/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PatientProfileClient({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user.name,
      emailAddress: user.email,
      phoneNumber: user.phone,
      photoUrl: user.image,
    },
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    const payload = {
      userId: user.id,
      name: data.fullName,
      email: data.emailAddress,
      phone: data.phoneNumber,
      image: data.photoUrl,
    };
    const res = await updateUserProfile(payload);
    if (res.modifiedCount) {
      toast.success("Profile data saved successfully");
      router.refresh();
    }
  };

  return (
    <div className="max-w-190 mb-5 mx-auto md:m-5 bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm shadow-slate-100/40 select-none">
      <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-6 mb-8 w-full">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-sky-50 flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm overflow-hidden">
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover rounded-full"
            ></Image>
          </div>
        </div>

        <h3 className="text-[20px] font-bold text-slate-800 tracking-tight mt-3">
          {user.name}
        </h3>
        <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[12px] font-semibold bg-[#DCFCE7] text-[#16A34A] mt-1.5">
          {user.role === "patient" && "Patient"}
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", {
                Doc: true,
                required: "Full name is required",
              })}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("emailAddress", {
                required: "Email address is required",
              })}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phoneNumber")}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Photo URL
          </label>
          <input
            type="text"
            {...register("photoUrl")}
            className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
          />
        </div>

        <div className="flex gap-3 mt-5 pt-2 border-t border-slate-50 w-full">
          <Button
            type="submit"
            className="bg-[#0EA5E9] text-white font-bold text-[14px] h-11 px-6 rounded-xl shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
