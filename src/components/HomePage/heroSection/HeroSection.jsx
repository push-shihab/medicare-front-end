"use client";

import React from "react";
import { Link } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
};

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F0F9FF] py-12 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2FE] px-3.5 py-1.5 border border-[#BDE0FE]"
            >
              <HiSparkles className="text-[12px] text-[#0369A1]" />
              <span className="text-[13px] font-semibold tracking-wide text-[#0369A1]">
                Trusted Healthcare Platform
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[56px]"
            >
              Your Health, <br />
              Our Priority
            </motion.h1>

            <motion.p
              {...fadeUp(0.28)}
              className="max-w-xl text-[16px] md:text-[18px] font-normal leading-[1.7] text-[#475569]"
            >
              Book appointments with top doctors instantly. Fast, secure, and
              always available.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/doctors?page=1"
                className="h-12 rounded-2xl bg-[#0EA5E9] px-7 text-[15px] font-semibold tracking-[0.01em] text-white shadow-md transition-all duration-200 hover:bg-[#0369A1] no-underline"
              >
                Book Appointment
              </Link>
              <Link
                href="/doctors?page=1"
                className="h-12 rounded-2xl border-[1.5px] border-[#0EA5E9] bg-transparent px-7 text-[15px] font-semibold tracking-[0.01em] text-[#0EA5E9] transition-all duration-200 hover:bg-[#E0F2FE] no-underline"
              >
                Find Doctors
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.55 },
                },
              }}
              className="flex items-center gap-6 pt-6 border-t border-[#E2E8F0] w-full max-w-md mt-4"
            >
              {[
                { value: "500+", label: "Doctors" },
                { value: "10k+", label: "Patients" },
                { value: "4.9", label: "Rating", star: true },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="h-8 w-px bg-[#E2E8F0]" />}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <span className="block text-[22px] font-bold text-[#0F172A] leading-none">
                        {stat.value}
                      </span>
                      {stat.star && (
                        <FaStar className="text-[14px] text-[#F59E0B] mb-0.5" />
                      )}
                    </div>
                    <span className="text-[13px] font-medium text-[#94A3B8] mt-1 block">
                      {stat.label}
                    </span>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeRight}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative h-80 w-full rounded-[24px] bg-[#CBEBFF] p-6 flex items-center justify-center sm:h-95">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop&q=80"
                alt="Medical Dashboard Graphic illustration"
                fill
                className="h-4/5 w-auto object-cover rounded-xl shadow-sm mix-blend-multiply opacity-85"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
