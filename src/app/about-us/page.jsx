"use client";

import React from "react";

export default function AboutMediCareConnect() {
  const cards = [
    {
      title: "Our Mission",
      description:
        "To provide seamless access to quality healthcare by connecting patients with verified medical professionals through innovative technology.",
      icon: (
        <span className="text-xl" role="img" aria-label="mission target">
          🎯
        </span>
      ),
      iconBg: "bg-pink-50 border-pink-100",
    },
    {
      title: "Our Vision",
      description:
        "A world where everyone has instant access to trusted healthcare providers, breaking down barriers to medical consultation.",
      icon: (
        <span className="text-xl" role="img" aria-label="vision eye">
          👁️
        </span>
      ),
      iconBg: "bg-slate-50 border-slate-100",
    },
    {
      title: "Our Values",
      description:
        "Patient-first approach, transparency, medical excellence, privacy protection, and continuous innovation in healthcare delivery.",
      icon: (
        <span className="text-xl" role="img" aria-label="values diamond">
          💎
        </span>
      ),
      iconBg: "bg-sky-50 border-sky-100",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased select-none">
      <div className="w-full bg-gradient-to-b from-[#F0F7FF] to-white py-16 px-4 text-center border-b border-slate-50">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <h1 className="text-[32px] sm:text-[38px] font-black text-[#0F172A] tracking-tight">
            About MediCare Connect
          </h1>
          <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            Connecting patients with trusted healthcare professionals through
            modern technology. Your health, our priority.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="text-center flex flex-col gap-2 mb-14">
          <h2 className="text-[24px] sm:text-[26px] font-extrabold text-[#0F172A] tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-slate-400 font-medium max-w-md mx-auto leading-normal">
            We&apos;re dedicated to making healthcare accessible, affordable,
            and convenient for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm shadow-slate-100/40 transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-slate-200/30"
            >
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 shrink-0 ${card.iconBg}`}
              >
                {card.icon}
              </div>

              <h3 className="text-[16px] font-bold text-slate-800 tracking-tight mb-3">
                {card.title}
              </h3>

              <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[280px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
