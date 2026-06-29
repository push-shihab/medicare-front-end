"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCheckCircle,
  FiLock,
  FiFileText,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Easy online booking",
      description: "Schedule appointments in seconds from any device, anytime.",
      icon: FiCalendar,
      bg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Verified doctors only",
      description:
        "Every doctor is manually reviewed and credentialed by our team.",
      icon: FiCheckCircle,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "Secure payments",
      description: "Stripe-powered checkout with end-to-end encryption.",
      icon: FiLock,
      bg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      title: "Digital prescriptions",
      description:
        "Receive and store your prescriptions digitally, always accessible.",
      icon: FiFileText,
      bg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Patient privacy",
      description:
        "Your medical data is encrypted and never shared without consent.",
      icon: FiShield,
      bg: "bg-sky-50",
      iconColor: "text-sky-500",
    },
    {
      title: "24/7 support",
      description: "Our support team is always available to help you.",
      icon: FiHeadphones,
      bg: "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[36px] font-bold tracking-tight text-[#0F172A]">
            Why Choose MediCare Connect
          </h2>
          <p className="mt-3 text-[16px] text-[#475569]">
            Everything you need for a seamless healthcare experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                }}
                className="flex flex-col items-start rounded-4xl border border-[#E2E8F0] bg-white p-8 transition-shadow duration-200"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <IconComponent
                    className={`text-[22px] ${feature.iconColor}`}
                  />
                </div>
                <h3 className="mt-6 text-[18px] font-semibold text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
