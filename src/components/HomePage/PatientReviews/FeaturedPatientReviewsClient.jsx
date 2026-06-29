"use client";

import React from "react";
import { Card } from "@heroui/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedPatientReviewsClient({ reviews }) {
  return (
    <div className="w-full bg-slate-50/50 py-16 px-6 font-sans antialiased select-none flex flex-col items-center">
      <div className="text-center flex flex-col gap-2 mb-14">
        <h2 className="text-[28px] sm:text-[32px] font-black text-[#0F172A] tracking-tight">
          What Our Patients Say
        </h2>
      </div>

      <div className="w-full max-w-6xl testimonial-swiper-container pb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="p-2"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id} className="h-auto pb-15">
              <Card className="border border-slate-200/80 bg-white rounded-[22px] p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between h-full min-h-62.5">
                <div className="flex flex-col gap-4 text-left">
                  <FaQuoteLeft className="text-[#0EA5E9] text-[22px]" />
                  <p className="text-[14px] text-slate-500 font-medium italic leading-relaxed">
                    {item.reviewText}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="w-full border-t border-slate-100" />

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col text-left">
                        <span className="text-[14px] font-bold text-slate-800 leading-tight">
                          {item.patientName}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} size={12} className="text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper-container .swiper-pagination-bullet-active {
          background: #0ea5e9 !important;
          width: 20px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper-container .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </div>
  );
}
