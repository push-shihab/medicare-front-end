"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import illustration from "../../../../public/images/flat-national-doctor-s-day-illustration.png";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (data) => {
    setIsSubmittingForm(true);
    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
      });
      if (error) {
        toast.error(error.message);
      }
      if (res) {
        toast.success("login in successfull");
        window.location.href = "/dashboard";
      }
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-[#0F172A] p-12 text-white lg:flex relative">
        <div className="flex flex-col items-center max-w-md text-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9] text-white">
              <FaPlus className="text-xs" />
            </div>
            <span className="text-[20px] font-bold tracking-tight text-white">
              MediCare Connect
            </span>
          </div>

          <h2 className="text-[28px] font-semibold italic text-white/95 tracking-wide mt-4">
            &quot;Your health is our mission.&quot;
          </h2>

          <p className="text-[14px] leading-relaxed text-[#94A3B8]">
            Welcome back to your trusted healthcare platform.
          </p>

          <div className="mt-8 flex h-60 w-60 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Image
              src={illustration}
              alt="Illustration"
              fill
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-[440px] flex flex-col gap-6">
          {/* Form Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0EA5E9] text-white">
                <FaPlus className="text-[10px]" />
              </div>
              <span className="text-[15px] font-bold tracking-tight text-[#0F172A]">
                MediCare Connect
              </span>
            </div>
            <h1 className="text-[28px] font-bold text-[#0F172A] tracking-tight mt-2">
              Welcome back
            </h1>
            <p className="text-[14px] text-[#475569]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-[#0EA5E9] font-medium hover:underline text-[14px]"
              >
                Register
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className={`h-12 w-full rounded-[8px] border-[1.5px] bg-white px-4 text-[15px] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all focus:border-[#0EA5E9] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] ${
                  errors.email ? "border-[#EF4444]" : "border-[#E2E8F0]"
                }`}
              />
              {errors.email && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-[14px] font-medium text-[#0F172A]">
                  Password
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`h-12 w-full rounded-[8px] border-[1.5px] bg-white pl-4 pr-11 text-[15px] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all focus:border-[#0EA5E9] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] ${
                    errors.password ? "border-[#EF4444]" : "border-[#E2E8F0]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-[#475569] hover:text-[#0F172A] focus:outline-none"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.password.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmittingForm}
              className="h-12 w-full rounded-[8px] bg-[#0EA5E9] text-[15px] font-semibold tracking-[0.01em] text-white shadow-sm transition-all duration-200 hover:bg-[#0369A1] mt-2 disabled:opacity-70"
            >
              {isSubmittingForm ? (
                <FiLoader className="animate-spin text-lg" />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute w-full h-[1px] bg-[#E2E8F0]" />
            <span className="relative bg-white px-3 text-[13px] font-medium text-[#94A3B8] uppercase tracking-wider">
              or
            </span>
          </div>

          <Button
            variant="bordered"
            onClick={handleGoogleLogin}
            className="h-12 w-full rounded-[8px] border-[1.5px] border-[#E2E8F0] bg-white text-[15px] font-semibold text-[#0F172A] transition-all duration-200 hover:bg-[#F1F5F9]"
          >
            <FcGoogle className="text-[20px] mr-1" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
