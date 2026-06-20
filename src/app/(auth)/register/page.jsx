"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FiUploadCloud, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import illustration from "../../../../public/images/flat-national-doctor-s-day-illustration.png";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { doctorDataAfterRegister } from "@/app/utility/actions/doctor/doctor";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "male",
      role: "patient",
      profilePhoto: null,
      password: "",
    },
  });

  // Handle local file picking and direct client-side upload to ImgBB
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create local preview URL
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);
    setIsUploading(true);

    // Prepare form data for ImgBB API
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Replace with your actual ImgBB API Key
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();
      if (data.success) {
        const directLink = data.data.url;
        setUploadedImageUrl(directLink);
        setValue("profilePhoto", directLink, { shouldValidate: true });
      } else {
        console.error("ImgBB upload failed:", data.error?.message);
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading to ImgBB:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit complete dataset to your backend server
  const onSubmit = async (data) => {
    if (isUploading) {
      alert("Please wait for the profile image upload to complete.");
      return;
    }

    setIsSubmittingForm(true);

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: data.fullName,
        email: data.email,
        password: data.password,
        image: uploadedImageUrl,
        role: data.role,
        phone: data.phone,
        gender: data.gender,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (res) {
        toast.success(`You have successfully registered ${data.fullName}`);

        if (data.role === "doctor") {
          const response = await doctorDataAfterRegister({
            ...data,
            image: uploadedImageUrl,
          });
          if (response.acknowledged) {
            router.push("/dashboard");
            router.refresh();
          }
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* ================= LEFT SIDE: BRAND SPLIT COVER ================= */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-[#0F172A] p-12 text-white lg:flex relative">
        <div className="flex flex-col items-center max-w-md text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9] text-white">
              <FaPlus className="text-xs" />
            </div>
            <span className="text-[20px] font-bold tracking-tight text-white">
              MediCare Connect
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[28px] font-semibold italic text-white/95 tracking-wide mt-4">
            &quot;Your health is our mission.&quot;
          </h2>

          {/* Subtext */}
          <p className="text-[14px] leading-relaxed text-[#94A3B8]">
            Join thousands of patients who trust us for their healthcare needs.
          </p>

          {/* Minimal Vector Box Representation */}
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

      {/* ================= RIGHT SIDE: REGISTRATION FORM ================= */}
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
              Create your account
            </h1>
            <p className="text-[14px] text-[#475569]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#0EA5E9] font-medium hover:underline text-[14px]"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Form Core */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Input: Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", { required: "Full name is required" })}
                className={`h-12 w-full rounded-[8px] border-[1.5px] bg-white px-4 text-[15px] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all focus:border-[#0EA5E9] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] ${
                  errors.fullName ? "border-[#EF4444]" : "border-[#E2E8F0]"
                }`}
              />
              {errors.fullName && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Input: Email Address */}
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

            {/* Input: Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", { required: "Phone number is required" })}
                className={`h-12 w-full rounded-[8px] border-[1.5px] bg-white px-4 text-[15px] text-[#0F172A] placeholder-[#94A3B8] outline-none transition-all focus:border-[#0EA5E9] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] ${
                  errors.phone ? "border-[#EF4444]" : "border-[#E2E8F0]"
                }`}
              />
              {errors.phone && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Input: Gender Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Gender
              </label>
              <div className="relative w-full">
                <select
                  {...register("gender", {
                    required: "Gender selection is required",
                  })}
                  className={`h-12 w-full rounded-[8px] border-[1.5px] bg-white px-4 text-[15px] text-[#0F172A] outline-none transition-all focus:border-[#0EA5E9] focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] appearance-none cursor-pointer ${
                    errors.gender ? "border-[#EF4444]" : "border-[#E2E8F0]"
                  }`}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">
                  ▼
                </div>
              </div>
              {errors.gender && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.gender.message}
                </span>
              )}
            </div>

            {/* Input: Role Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Join As
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center justify-between h-12 px-4 rounded-[8px] border-[1.5px] border-[#E2E8F0] bg-white cursor-pointer transition-all has-[:checked]:border-[#0EA5E9] has-[:checked]:bg-sky-50/30">
                  <span className="text-[14px] font-medium text-[#0F172A]">
                    Patient
                  </span>
                  <input
                    type="radio"
                    value="patient"
                    {...register("role")}
                    className="h-4 w-4 accent-[#0EA5E9]"
                  />
                </label>
                <label className="flex items-center justify-between h-12 px-4 rounded-[8px] border-[1.5px] border-[#E2E8F0] bg-white cursor-pointer transition-all has-[:checked]:border-[#0EA5E9] has-[:checked]:bg-sky-50/30">
                  <span className="text-[14px] font-medium text-[#0F172A]">
                    Doctor
                  </span>
                  <input
                    type="radio"
                    value="doctor"
                    {...register("role")}
                    className="h-4 w-4 accent-[#0EA5E9]"
                  />
                </label>
              </div>
            </div>

            {/* Input: Profile Photo Dropzone & Picker */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Profile Photo
              </label>

              <label
                className={`relative flex flex-col items-center justify-center w-full h-32 rounded-[8px] border-[1.5px] border-dashed bg-white cursor-pointer transition-all hover:bg-slate-50/50 ${
                  errors.profilePhoto ? "border-[#EF4444]" : "border-[#E2E8F0]"
                }`}
              >
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {previewUrl ? (
                  <div className="absolute inset-0 flex items-center justify-center p-2 bg-white rounded-[8px]">
                    <img
                      src={previewUrl}
                      alt="Local preview context"
                      className="h-full w-auto object-contain rounded-md"
                    />
                    {isUploading && (
                      <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center text-[12px] text-[#0EA5E9] font-medium gap-1.5">
                        <FiLoader className="animate-spin text-lg" />
                        Uploading to cloud...
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-4">
                    <FiUploadCloud className="text-[24px] text-[#94A3B8] mb-2" />
                    <span className="text-[14px] font-medium text-[#475569]">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-[12px] text-[#94A3B8] mt-1">
                      PNG, JPG up to 5MB
                    </span>
                  </div>
                )}
              </label>
              {errors.profilePhoto && (
                <span className="text-[13px] text-[#EF4444]">
                  Profile picture is required
                </span>
              )}
            </div>

            {/* Input: Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#0F172A]">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "At least 6 characters long",
                    },
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
              <p className="text-[12px] text-[#94A3B8] leading-normal">
                At least 6 characters, 1 number, 1 special character
              </p>
              {errors.password && (
                <span className="text-[13px] text-[#EF4444]">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Action Submit Button */}
            <Button
              type="submit"
              disabled={isUploading || isSubmittingForm}
              className="h-12 w-full rounded-[8px] bg-[#0EA5E9] text-[15px] font-semibold tracking-[0.01em] text-white shadow-sm transition-all duration-200 hover:bg-[#0369A1] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmittingForm ? (
                <FiLoader className="animate-spin text-lg" />
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Form Divider */}
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute w-full h-[1px] bg-[#E2E8F0]" />
            <span className="relative bg-white px-3 text-[13px] font-medium text-[#94A3B8] uppercase tracking-wider">
              or
            </span>
          </div>

          {/* OAuth Provider Action */}
          <Button
            variant="bordered"
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
