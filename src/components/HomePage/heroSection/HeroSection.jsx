import React from "react";
import HeroSectionClient from "./HeroSectionClient";
import { getAllUsers } from "@/app/utility/fetchData/admin/admin";
import { getAllReviews } from "@/app/utility/fetchData/review/review";

const HeroSection = async () => {
  const users = await getAllUsers();
  const reviews = await getAllReviews();
  const avgRating =
    reviews.reduce((acc, review) => acc + Number(review.rating), 0) /
    reviews.length;
  const doctors = users.filter((user) => user.role === "doctor");
  const patients = users.filter((user) => user.role === "patient");
  return (
    <div>
      <HeroSectionClient
        avgRating={avgRating}
        doctors={doctors}
        patients={patients}
      ></HeroSectionClient>
    </div>
  );
};

export default HeroSection;
