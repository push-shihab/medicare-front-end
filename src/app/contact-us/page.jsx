"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactUsPage() {
  const infoItems = [
    {
      title: "Visit Us",
      details: [
        "123 Health Street, Medical District",
        "Dhaka, Bangladesh 1205",
      ],
      icon: <FiMapPin />,
      iconColor: "text-pink-500",
      iconBg: "bg-pink-50 border-pink-100",
    },
    {
      title: "Call Us",
      details: ["+880 1700 000000", "+880 1800 000000"],
      icon: <FiPhone />,
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50 border-sky-100",
    },
    {
      title: "Email Us",
      details: ["support@medicare.com", "info@medicare.com"],
      icon: <FiMail />,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-50 border-purple-100",
    },
    {
      title: "Working Hours",
      details: [
        "Saturday - Thursday: 9:00 AM - 8:00 PM",
        "Friday: 2:00 PM - 8:00 PM",
      ],
      icon: <FiClock />,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-50 border-indigo-100",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];
  const router = useRouter();
  const handleSendMessage = () => {
    toast.success("We'll be in touch shortly");
    router.refresh();
  };
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased select-none">
      <div className="w-full bg-gradient-to-b from-[#F0F7FF] to-white py-16 px-4 text-center border-b border-slate-50">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <h1 className="text-[32px] sm:text-[38px] font-black text-[#0F172A] tracking-tight">
            Contact Us
          </h1>
          <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            We&apos;re here to help. Get in touch with our team for any
            questions or support.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 bg-white border border-slate-200/80 rounded-[20px] p-8 shadow-sm shadow-slate-100/40 flex flex-col gap-8">
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-[18px] font-bold text-slate-800 tracking-tight">
              Get In Touch
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start text-left border-b border-slate-50 last:border-0 pb-5 last:pb-0"
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center text-[16px] shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-[14px] font-bold text-slate-800 tracking-tight">
                    {item.title}
                  </h4>
                  {item.details.map((line, idx) => (
                    <span
                      key={idx}
                      className="text-[13px] text-slate-500 font-medium leading-normal"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-left pt-2">
            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 text-[13px] hover:bg-sky-50 hover:border-sky-100 hover:text-[#0EA5E9] transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-[20px] p-8 shadow-sm shadow-slate-100/40 flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-[18px] font-bold text-slate-800 tracking-tight">
              Send Us a Message
            </h3>
          </div>

          <form
            className="flex flex-col gap-5 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-slate-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 placeholder-slate-300 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-slate-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 placeholder-slate-300 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 placeholder-slate-300 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+880 1XXX XXXXXX"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 placeholder-slate-300 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full">
                <select
                  required
                  defaultValue=""
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 outline-none bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[12px]">
                  ▼
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-slate-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="How can we help you?"
                required
                rows={4}
                className="w-full p-4 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-[14px] font-medium text-slate-700 placeholder-slate-300 outline-none transition-all resize-none leading-relaxed"
              />
            </div>

            <Button
              type="submit"
              onClick={handleSendMessage}
              className="w-full h-11 rounded-xl bg-[#0EA5E9] hover:bg-sky-600 text-white font-bold text-[14px] shadow-sm shadow-sky-500/10 transition-colors mt-2 cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
