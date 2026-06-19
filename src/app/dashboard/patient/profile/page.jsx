"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";
import { FiEdit, FiUser } from "react-icons/fi";

export default function PatientProfilePage() {
  // Initialize React Hook Form with default values from the design image
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "John Doe",
      emailAddress: "john@email.com",
      phoneNumber: "+880 1712 345678",
      dateOfBirth: "1990-05-15", // Formats correctly into native date inputs
      gender: "Male",
      bloodGroup: "B+",
      address: "123 Main Street, Dhaka",
      medicalConditions: "None",
    },
  });

  // Simple submission handler
  const onSubmit = (data) => {
    console.log("Updated Profile Context Payload:", data);
  };

  return (
    <div className="w-full max-w-[760px] mx-auto my-5 bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm shadow-slate-100/40 select-none my-2">
      {/* 1. Header Avatar Profile Management Stack */}
      <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-6 mb-8 w-full">
        <div className="relative group">
          {/* Avatar Graphic Shell */}
          <div className="w-24 h-24 rounded-full bg-sky-50 flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm overflow-hidden">
            <FiUser className="text-[44px] text-sky-600/80" />
          </div>
          {/* Circular Edit Action Badge */}
          <button
            type="button"
            className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center border-2 border-white shadow-md hover:bg-sky-600 transition-colors"
          >
            <FiEdit className="text-[11px]" />
          </button>
        </div>

        <h3 className="text-[20px] font-bold text-slate-800 tracking-tight mt-3">
          John Doe
        </h3>
        <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[12px] font-semibold bg-[#DCFCE7] text-[#16A34A] mt-1.5">
          Patient
        </span>
      </div>

      {/* 2. Structured Dynamic Form Grid Input Layer */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        {/* Row 1: Full Name & Email */}
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

        {/* Row 2: Phone Number & Date of Birth */}
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

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-600 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
            />
          </div>
        </div>

        {/* Row 3: Gender Selection & Blood Group Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Gender
            </label>
            <div className="relative">
              <select
                {...register("gender")}
                className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all appearance-none cursor-pointer"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">
                ▼
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] font-bold text-slate-700">
              Blood Group
            </label>
            <div className="relative">
              <select
                {...register("bloodGroup")}
                className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all appearance-none cursor-pointer"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Structural Full Address Bar */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
          />
        </div>

        {/* Row 5: Detailed Medical Conditions Area */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[13.5px] font-bold text-slate-700">
            Medical Conditions (if any)
          </label>
          <input
            type="text"
            {...register("medicalConditions")}
            className="h-11 w-full border border-slate-200 px-4 rounded-xl text-[14px] text-slate-700 bg-white focus:outline-none focus:border-[#0EA5E9] font-medium transition-all"
          />
        </div>

        {/* 3. Action Submissions Panel Grid Footer */}
        <div className="flex gap-3 mt-5 pt-2 border-t border-slate-50 w-full">
          <Button
            type="submit"
            className="bg-[#0EA5E9] text-white font-bold text-[14px] h-11 px-6 rounded-xl shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
          >
            Save Changes
          </Button>
          <Button
            type="button"
            variant="bordered"
            className="h-11 flex justify-center sm:min-w-[85px] rounded-[8px] border-[1.5px] border-[#0EA5E9] bg-transparent text-[15px] font-semibold tracking-[0.01em] text-[#0EA5E9] transition-all duration-200 hover:bg-[#E0F2FE]"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
