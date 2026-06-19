"use client";

import React from "react";
import { Table, Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa";
import { FiEye, FiCalendar, FiX } from "react-icons/fi";

export default function PatientAppointments() {
  // Ordered mock data structured exactly like patientAppointment.png
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      dateTime: "Dec 20 • 10:00 AM",
      fee: "৳800",
      payment: "Paid",
      status: "Confirmed",
      actions: ["view", "reschedule", "cancel"],
    },
    {
      id: 2,
      doctorName: "Dr. James Williams",
      specialization: "Neurology",
      dateTime: "Dec 24 • 2:00 PM",
      fee: "৳1200",
      payment: "Unpaid",
      status: "Pending",
      actions: ["view", "reschedule", "cancel"],
    },
    {
      id: 3,
      doctorName: "Dr. Rina Ahmed",
      specialization: "Dermatology",
      dateTime: "Nov 15 • 11:00 AM",
      fee: "৳600",
      payment: "Paid",
      status: "Completed",
      actions: ["view"],
    },
    {
      id: 4,
      doctorName: "Dr. Karim Hassan",
      specialization: "Pediatrics",
      dateTime: "Oct 08 • 3:30 PM",
      fee: "৳700",
      payment: "Paid",
      status: "Cancelled",
      actions: ["view"],
    },
  ];

  return (
    <div className="w-full m-5 bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm shadow-slate-100/40">
      {/* Table Global Dynamic Header Panel Controls */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          All Appointments
        </h3>
        <Button
          size="sm"
          className="bg-[#0EA5E9] text-white font-semibold text-[13px] h-9 px-4 rounded-xl flex items-center gap-1.5 shadow-sm shadow-sky-500/10 hover:bg-sky-600 transition-colors"
        >
          <FaPlus className="text-[10px]" /> Book New
        </Button>
      </div>

      {/* Hero UI Abstracted Table Block */}
      <Table
        aria-label="All Appointments Management Matrix"
        className="min-w-full text-left"
      >
        <Table.ScrollContainer>
          <Table.Content>
            {/* Design Column System Setup */}
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

            {/* Dynamic Iteration Mapping Body Row System */}
            <Table.Body>
              {appointments.map((row) => (
                <Table.Row
                  key={row.id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                >
                  {/* Composite Subtitled Identity Cell */}
                  <Table.Cell className="px-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-semibold text-slate-800">
                        {row.doctorName}
                      </span>
                      <span className="text-[12px] text-slate-400 font-medium">
                        {row.specialization}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Operational Timestamp Segment */}
                  <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                    {row.dateTime}
                  </Table.Cell>

                  {/* Financial Metrics Node */}
                  <Table.Cell className="px-6 py-4 text-[14px] text-slate-700 font-semibold font-sans">
                    {row.fee}
                  </Table.Cell>

                  {/* Account Ledger Payment State Badges */}
                  <Table.Cell className="px-6 py-4">
                    {row.payment === "Paid" ? (
                      <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full text-[12px] font-semibold bg-[#DCFCE7] text-[#16A34A]">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full text-[12px] font-semibold bg-[#FEE2E2] text-[#DC2626]">
                        Unpaid
                      </span>
                    )}
                  </Table.Cell>

                  {/* Life Cycle State Flag Indicator Elements */}
                  <Table.Cell className="px-6 py-4">
                    {row.status === "Confirmed" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#DCFCE7] text-[#15803D]">
                        Confirmed
                      </span>
                    )}
                    {row.status === "Pending" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#FEF9C3] text-[#A16207]">
                        Pending
                      </span>
                    )}
                    {row.status === "Completed" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#E0F2FE] text-[#0369A1]">
                        Completed
                      </span>
                    )}
                    {row.status === "Cancelled" && (
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#FEE2E2] text-[#991B1B]">
                        Cancelled
                      </span>
                    )}
                  </Table.Cell>

                  {/* Action Layout Elements */}
                  <Table.Cell className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {row.actions.includes("view") && (
                        <Button
                          isIconOnly
                          size="sm"
                          variant="flat"
                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors min-w-0"
                        >
                          <FiEye className="text-[14px]" />
                        </Button>
                      )}

                      {row.actions.includes("reschedule") && (
                        <Button
                          isIconOnly
                          size="sm"
                          variant="flat"
                          className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100/80 transition-colors min-w-0"
                        >
                          <FiCalendar className="text-[14px]" />
                        </Button>
                      )}

                      {row.actions.includes("cancel") && (
                        <Button
                          isIconOnly
                          size="sm"
                          variant="flat"
                          className="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-100/80 transition-colors min-w-0"
                        >
                          <FiX className="text-[14px] stroke-[2.5]" />
                        </Button>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer />
      </Table>
    </div>
  );
}
