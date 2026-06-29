"use client";

import React from "react";
import { Link } from "@heroui/react";
import {
  FaPlus,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Find Doctors", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Dashboard", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9] text-white shadow-sm">
                <FaPlus className="text-xs" />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-white">
                MediCare Connect
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-[#94A3B8] max-w-70">
              Connecting patients with trusted healthcare professionals through
              modern technology. Your health, our priority.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-[14px] text-white transition-all duration-200 hover:bg-[#0EA5E9] hover:border-[#0EA5E9]"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-[14px] text-white transition-all duration-200 hover:bg-[#0EA5E9] hover:border-[#0EA5E9]"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-[14px] text-white transition-all duration-200 hover:bg-[#0EA5E9] hover:border-[#0EA5E9]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-[14px] text-white transition-all duration-200 hover:bg-[#0EA5E9] hover:border-[#0EA5E9]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#94A3B8] p-0 min-w-0 h-auto font-normal transition-colors duration-200 hover:text-[#0EA5E9]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold tracking-wide text-white">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[14px] text-[#94A3B8]">
                <FiMapPin className="mt-1 h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <span className="leading-relaxed">
                  123 Health Street, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#94A3B8]">
                <FiMail className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <a
                  href="mailto:support@medicare.com"
                  className="hover:text-[#0EA5E9] transition-colors"
                >
                  support@medicare.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#94A3B8]">
                <FiPhone className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-[#0EA5E9] transition-colors"
                >
                  +880 1700 000000
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]"></span>
              </span>
              <h4 className="text-[16px] font-bold tracking-wide text-white">
                Emergency Hotline
              </h4>
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-[36px] font-extrabold leading-none text-[#0EA5E9] tracking-tight">
                999
              </span>
              <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-3 py-1 text-[12px] font-semibold text-[#166534] border border-[#86EFAC]">
                Available 24/7
              </span>
            </div>

            <p className="text-[13px] leading-relaxed text-[#94A3B8] pt-2 max-w-65">
              Call immediately for any medical emergency. Our team is ready to
              assist you anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/60 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[13px] text-[#94A3B8]">
            &copy; {currentYear} MediCare Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
