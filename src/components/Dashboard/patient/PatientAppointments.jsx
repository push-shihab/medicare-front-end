"use client";

import React, { useState } from "react";
import { Table, Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import AppointmentDetails from "./AppointmentDetails";
import toast from "react-hot-toast";

export default function PatientAppointments({ appointments }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const handleOpenDetails = (row) => {
    setSelectedAppointment(row);
    setIsOpen(true);
  };
  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error);
      return;
    }

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="w-full m-5 bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm shadow-slate-100/40">
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          All Appointments
        </h3>
        <Link
          href={"/doctors"}
          className="bg-[#0EA5E9] text-white font-semibold text-[13px] h-9 px-4 rounded-xl flex items-center gap-1.5 shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
        >
          <FaPlus className="text-[10px]" /> Book New
        </Link>
      </div>

      <Table aria-label="All Appointments" className="min-w-full text-left">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100"
              >
                Doctor
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                Date & Time
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                Fee
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                Payment
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                Status
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {appointments.map((row) => (
                <Table.Row
                  key={row._id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                >
                  <Table.Cell className="px-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-semibold text-slate-800">
                        {row.doctorName || "Shihab"}
                      </span>
                      <span className="text-[12px] text-slate-400 font-medium">
                        {row.specialization || "Football"}
                      </span>
                    </div>
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                    {row.appointmentDate} | {row.appointmentTime}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4 text-[14px] text-slate-700 font-semibold">
                    ${row.consultationFee || 50}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4">
                    {row.paymentStatus !== "pending" ? (
                      <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full text-[12px] font-semibold bg-[#DCFCE7] text-[#16A34A]">
                        Paid
                      </span>
                    ) : (
                      <form onSubmit={handleProceedToPayment}>
                        <input
                          type="hidden"
                          value={row.appointmentTime}
                          name="selectedTime"
                        ></input>
                        <input
                          type="hidden"
                          value={row.appointmentDate}
                          name="selectedDate"
                        ></input>
                        <input
                          type="hidden"
                          value={row.patientId}
                          name="patientId"
                        />
                        <input
                          type="hidden"
                          value={row.doctorId}
                          name="doctorId"
                        />
                        <input
                          type="hidden"
                          value={row.doctorName}
                          name="doctorName"
                        />
                        <input
                          type="hidden"
                          value={row._id}
                          name="appointmentId"
                        />
                        <input
                          type="hidden"
                          value={row.consultationFee}
                          name="fee"
                        />
                        <section>
                          <button
                            type="submit"
                            role="link"
                            className="w-full bg-[#0EA5E9] text-white font-bold text-[12px] h-9 mt-1 rounded-xl hover:bg-sky-600 transition-all shadow-sm shadow-sky-500/10 cursor-pointer"
                          >
                            Pay Now
                          </button>
                        </section>
                      </form>
                    )}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4">
                    {row.appointmentStatus === "confirmed" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#DCFCE7] text-[#15803D]">
                        Confirmed
                      </span>
                    )}
                    {row.appointmentStatus === "pending" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#FEF9C3] text-[#A16207]">
                        Pending
                      </span>
                    )}
                    {row.appointmentStatus === "cancelled" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#FEE2E2] text-[#991B1B]">
                        Cancelled
                      </span>
                    )}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      onPress={() => handleOpenDetails(row)}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors min-w-0"
                    >
                      <FiEye className="text-[14px]" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer />
      </Table>

      <AppointmentDetails
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        appointment={selectedAppointment}
      />
    </div>
  );
}
