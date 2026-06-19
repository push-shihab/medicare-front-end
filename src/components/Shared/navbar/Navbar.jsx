"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { FaHeartbeat } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { authClient, useSession } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";

export default function Navbar() {
  const { data } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = async () => {
    await authClient.signOut();
    redirect("/");
  };

  // Mock authentication state (Toggle to true to preview avatar state)
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Find Doctors", href: "/doctors" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Dashboard", href: `${data?.user ? "/dashboard" : "/login"}` },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-[#FFFFFF]/90 h-[68px] backdrop-blur-lg transition-shadow duration-200 shadow-sm">
      <header className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* ================= LEFT SIDE: LOGO ================= */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="text-[#475569] focus:outline-none md:hidden transition-colors hover:text-[#0EA5E9]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 active:opacity-90">
            <FaHeartbeat className="text-[22px] text-[#0EA5E9]" />
            <span className="text-[20px] font-bold text-[#0F172A] tracking-tight whitespace-nowrap">
              MediCare Connect
            </span>
          </Link>
        </div>

        {/* ================= CENTER LINKS (Desktop) ================= */}
        <ul className="hidden items-center gap-8 md:flex h-full">
          {menuItems.map((item, index) => (
            <li key={index} className="relative flex items-center group">
              <Link
                href={item.href}
                className="text-[15px] font-medium text-[#475569] transition-colors duration-200 hover:text-[#0EA5E9]"
              >
                {item.label}
              </Link>
              {/* Thin Underline Animation */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
        {/* ================= RIGHT SIDE: AUTH BUTTONS ================= */}
        <div className="flex items-center gap-3">
          {data?.user ? (
            /* Logged In Avatar Dropdown State */
            <div className="relative">
              <button
                onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E2E8F0] overflow-hidden focus:outline-none focus:border-[#0EA5E9] cursor-pointer"
              >
                <Image
                  src={data?.user?.image}
                  alt={data?.user?.name}
                  fill
                  className="h-full w-full object-cover rounded-full outline-2 outline-[#0EA5E9]"
                />
              </button>

              {/* Simple Profile Dropdown Menu */}
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-[8px] border border-[#E2E8F0] bg-white p-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="#"
                    className="block w-full rounded-[6px] px-4 py-2 text-sm text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                    onClick={() => setIsAvatarDropdownOpen(false)}
                  >
                    My Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="block w-full rounded-[6px] px-4 py-2 text-sm text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                    onClick={() => setIsAvatarDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <div className="my-1 border-t border-[#E2E8F0]" />
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsAvatarDropdownOpen(false);
                    }}
                    className="block w-full text-left rounded-[6px] px-4 py-2 text-sm text-[#EF4444] hover:bg-[#FEE2E2] cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Login Button */}
              <Link
                href="/login"
                variant="bordered"
                className="h-10 flex justify-center sm:min-w-[85px] rounded-[8px] border-[1.5px] border-[#0EA5E9] bg-transparent text-[15px] font-semibold tracking-[0.01em] text-[#0EA5E9] transition-all duration-200 hover:bg-[#E0F2FE]"
              >
                Login
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="h-10 flex justify-center sm:min-w-[95px] rounded-[8px] bg-[#0EA5E9] text-[15px] font-semibold tracking-[0.01em] text-white shadow-sm transition-all duration-200 hover:bg-[#0369A1]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </header>

      {/* ================= MOBILE DROPDOWN PANEL ================= */}
      {isMenuOpen && (
        <div className="border-b border-[#E2E8F0] bg-[#FFFFFF]/95 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-1 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block w-full rounded-[8px] px-4 py-3 text-[16px] font-medium text-[#475569] transition-colors duration-150 hover:bg-[#F1F5F9] hover:text-[#0EA5E9]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
