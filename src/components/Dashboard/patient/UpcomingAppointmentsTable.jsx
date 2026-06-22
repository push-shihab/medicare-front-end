"use client";

import React from "react";
import { Table, Button } from "@heroui/react";
import { FiEye } from "react-icons/fi";

export default function UpcomingAppointmentsTable({ appointments }) {
  return (
    <div className="w-full mx-5 mb-5 bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm shadow-slate-100/40">
      {/* Table Section Title Card Panel Header */}
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          Upcoming Appointments
        </h3>
      </div>

      {/* Hero UI Table Core Component Stack */}
      <Table aria-label="Upcoming Appointments Table" className="min-w-full">
        <Table.ScrollContainer>
          <Table.Content>
            {/* Table Column Headers */}
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100 text-left"
              >
                Doctor
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100 text-left">
                Specialization
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100 text-left">
                Date
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100 text-left">
                Time
              </Table.Column>
              <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100 text-left">
                Status
              </Table.Column>
            </Table.Header>

            {/* Table Dynamic Content Rows */}
            <Table.Body>
              {appointments
                .filter(
                  (appointment) => appointment.appointmentStatus === "pending",
                )
                .map((row) => (
                  <Table.Row
                    key={row._id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                  >
                    {/* Doctor Column */}
                    <Table.Cell className="px-6 py-4 text-[14px] font-medium text-slate-700">
                      {row.doctorName}
                    </Table.Cell>

                    {/* Specialization Column */}
                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-500">
                      {row.specialization}
                    </Table.Cell>

                    {/* Date Column */}
                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                      {row.appointmentDate}
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                      {row.appointmentTime}
                    </Table.Cell>

                    {/* Status Badges Matching Design Colors */}
                    <Table.Cell className="px-6 py-4">
                      {row.appointmentStatus !== "pending" ? (
                        <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#DCFCE7] text-[#15803D]">
                          Confirmed
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#FEF9C3] text-[#A16207]">
                          Pending
                        </span>
                      )}
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
