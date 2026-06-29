"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function AnimatedStats({ stats }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="relative flex flex-col items-center justify-center text-center px-4"
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-[40px] font-bold tracking-tight text-white md:text-[48px] leading-none">
              {stat.value}
            </span>
            {stat.isRating && (
              <FaStar className="text-[32px] md:text-[38px] text-white mb-1.5" />
            )}
          </div>
          <span className="mt-3 text-[14px] font-medium tracking-wide text-white/80">
            {stat.label}
          </span>
          {index < stats.length - 1 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/20" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
