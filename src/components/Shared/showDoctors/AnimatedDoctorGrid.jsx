"use client";
import { motion } from "framer-motion";
import ShowDoctors from "@/components/Shared/showDoctors/ShowDoctors";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AnimatedDoctorGrid({ doctors }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-stretch mb-12"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {doctors.map((doctor) => (
        <motion.div key={doctor._id} variants={card}>
          <ShowDoctors doctor={doctor} />
        </motion.div>
      ))}
    </motion.div>
  );
}
