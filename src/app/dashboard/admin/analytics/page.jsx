import React from "react";
import AdminAnalyticsClient from "./AdminAnalyticsClient";
import { getAllDoctors } from "@/app/utility/fetchData/doctor/doctor";
import { getAllUsers } from "@/app/utility/fetchData/admin/admin";
import { getAllAppointments } from "@/app/utility/fetchData/appointment/appointment";
import { getAllReviews } from "@/app/utility/fetchData/review/review";

const AdminAnalyticsPage = async () => {
  const doctors = await getAllDoctors();
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.verificationStatus === "approved",
  );
  const users = await getAllUsers();
  const patients = users.filter((user) => user.role === "patient");
  const appointments = await getAllAppointments();
  const reviews = await getAllReviews();
  return (
    <div>
      <AdminAnalyticsClient
        doctors={filteredDoctors}
        patients={patients}
        appointments={appointments}
        reviews={reviews}
      ></AdminAnalyticsClient>
    </div>
  );
};

export default AdminAnalyticsPage;
