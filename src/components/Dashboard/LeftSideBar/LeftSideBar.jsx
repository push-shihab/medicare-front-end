"use client";

import React from "react";
import { Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import {
  FiGrid,
  FiCalendar,
  FiCreditCard,
  FiStar,
  FiUser,
} from "react-icons/fi";
import { useSession } from "@/app/lib/auth-client";

export default function LeftSideBar() {
  const pathname = usePathname();
  const { data } = useSession();

  // Navigation Items Layout Matrix
  const patientNavItems = [
    { label: "Overview", href: "/dashboard/patient/overview", icon: FiGrid },
    {
      label: "My Appointments",
      href: "/dashboard/patient/appointments",
      icon: FiCalendar,
    },
    {
      label: "Payment History",
      href: "/dashboard/patient/payment-history",
      icon: FiCreditCard,
    },
    { label: "My Reviews", href: "/dashboard/patient/reviews", icon: FiStar },
    { label: "My Profile", href: "/dashboard/patient/profile", icon: FiUser },
  ];

  const doctorNavItems = [
    { label: "Overview", href: "/dashboard/doctor/overview", icon: FiGrid },
    {
      label: "Manage Schedule",
      href: "/dashboard/doctor/schedule",
      icon: FiCreditCard,
    },
    {
      label: "Appointments",
      href: "/dashboard/doctor/appointments",
      icon: FiCalendar,
    },
    {
      label: "Prescriptions",
      href: "/dashboard/doctor/prescriptions",
      icon: FiStar,
    },
    { label: "My Profile", href: "/dashboard/doctor/profile", icon: FiUser },
  ];

  const mainNavItems =
    data?.user.role === "doctor" ? [...doctorNavItems] : [...patientNavItems];

  // User Profile Mock Context (Matches design specs badge representation)
  const userProfile = {
    name: "John Doe",
    role: "Patient",
    initials: "JD",
  };

  return (
    <main className="w-70 min-h-full bg-white border-r border-slate-200 flex flex-col justify-between select-none my-5 rounded-2xl shadow-sm">
      {/* Upper Framework Core */}
      <div className="flex flex-col w-full">
        {/* Brand System Logo Panel */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-slate-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9] text-white shadow-sm shadow-sky-500/20">
            <FaPlus className="text-xs" />
          </div>
          <span className="text-[19px] font-bold tracking-tight text-slate-900">
            MediCare Connect
          </span>
        </div>

        {/* Scrollable Context Links Container */}
        <div className="flex flex-col gap-7 px-4 py-6 overflow-y-auto max-h-[calc(100vh-170px)]">
          {/* Section: MAIN */}
          <div className="flex flex-col gap-1.5">
            <span className="px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Main
            </span>
            <nav className="flex flex-col gap-1 mt-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3.5 h-11 w-full px-3 rounded-2xl text-[14px] font-medium transition-all duration-200 group relative ${
                      isActive
                        ? "text-[#0EA5E9] bg-sky-50/50 border-l-2 border-[#0EA5E9] rounded-l-none pl-2.5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon
                      className={`text-[18px] transition-colors ${
                        isActive
                          ? "text-[#0EA5E9]"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      {/* Lower Framework Container: Static User Footer Block */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center gap-3 rounded-b-2xl">
        {/* Profile Avatar Initials Graphic */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-[14px] font-bold text-white shadow-sm">
          {userProfile.initials}
        </div>
        {/* Account Identity Structural Labels */}
        <div className="flex flex-col overflow-hidden">
          <span className="text-[14px] font-semibold text-slate-800 truncate leading-tight">
            {userProfile.name}
          </span>
          <div className="mt-1 flex">
            <span className="inline-flex items-center justify-center h-5 px-2 rounded-full text-[11px] font-semibold tracking-wide bg-[#0EA5E9]/10 text-[#0EA5E9]">
              {userProfile.role}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
