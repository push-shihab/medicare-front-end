"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone,
  FaBaby,
  FaStethoscope,
  FaXRay,
} from "react-icons/fa";

export default function OurSpecializations() {
  const specializations = [
    {
      name: "Cardiology",
      icon: FaHeart,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      name: "Neurology",
      icon: FaBrain,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      name: "Pediatrics",
      icon: FaBaby,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      name: "Dermatology",
      icon: FaStethoscope,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[36px] font-bold tracking-tight text-[#0F172A]">
            Our Specialization
          </h2>
        </motion.div>

        <motion.div
          className="w-full gap-4 pb-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {specializations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.35, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 8px 20px rgba(14,165,233,0.12)",
                }}
                className="group flex h-[140px] shrink-0 flex-col items-center justify-center gap-4 rounded-[16px] border border-[#E2E8F0] bg-white p-4 transition-colors duration-200 hover:border-[#0EA5E9] sm:w-auto cursor-pointer w-full"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bg} transition-colors duration-200 group-hover:bg-[#E0F2FE]`}
                >
                  <IconComponent
                    className={`text-[24px] ${item.color} transition-colors duration-200 group-hover:text-[#0EA5E9]`}
                  />
                </div>
                <span className="text-[14px] font-semibold tracking-tight text-[#0F172A] text-center transition-colors duration-200 group-hover:text-[#0EA5E9]">
                  {item.name}
                </span>
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
