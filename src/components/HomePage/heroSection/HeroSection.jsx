import React from "react";
import HeroSectionClient from "./HeroSectionClient";
import { getAllUsers } from "@/app/utility/fetchData/admin/admin";
import { getAllReviews } from "@/app/utility/fetchData/review/review";
import { getAllDoctors } from "@/app/utility/fetchData/doctor/doctor";

const HeroSection = async () => {
  const users = await getAllUsers();
  const reviews = await getAllReviews();
  const avgRating =
    reviews.reduce((acc, review) => acc + Number(review.rating), 0) /
    reviews.length;
  const doctors = await getAllDoctors();
  const filteredDoctor = doctors.filter(
    (doctor) => doctor.verificationStatus === "approved",
  );
  const patients = users.filter((user) => user.role === "patient");
  return (
    <div>
      <HeroSectionClient
        avgRating={avgRating}
        doctors={filteredDoctor}
        patients={patients}
      ></HeroSectionClient>
    </div>
  );
};

export default HeroSection;
