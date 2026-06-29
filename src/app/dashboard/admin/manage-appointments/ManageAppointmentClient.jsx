"use client";

import React from "react";
import { Table } from "@heroui/react";

export default function ManageAppointmentClient({ appointments }) {
  return (
    <div className="md:m-5 bg-white border border-slate-200/80 rounded-4xl overflow-hidden shadow-sm shadow-slate-100/40 mb-5 select-none">
      <div className="p-5 border-b border-slate-100 bg-white">
        <h3 className="text-[18px] font-bold text-[#0F172A] tracking-tight">
          Total Registered Appointments
        </h3>
      </div>
      <Table
        aria-label="Clinical Appointments Registry"
        className="min-w-full text-left"
      >
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100"
              >
                Patient Representative
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Schedules Doctor
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Scheduled Hours
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Billing Charge
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Ecosystem Status
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {appointments.map((row) => (
                <Table.Row
                  key={row._id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/20 transition-colors"
                >
                  <Table.Cell className="px-6 py-4.5 text-[14px] font-bold text-slate-700">
                    {row.patientName}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-medium text-slate-700">
                        {row.doctorName}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                        {row.specialization}
                      </span>
                    </div>
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[13.5px] font-medium text-slate-500 font-mono">
                    <span>{row.appointmentDate}</span>
                    <span className="text-slate-300 mx-2">|</span>
                    <span className="text-slate-600">
                      {row.appointmentTime}
                    </span>
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    {row.paymentStatus === "paid" ? (
                      <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[11px] font-bold bg-[#E8FBF2] text-[#10B981] border border-[#D1FAE5]">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[11px] font-bold bg-red-50 text-red-500 border border-red-100">
                        Unpaid
                      </span>
                    )}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    {row.appointmentStatus === "completed" ? (
                      <span className="inline-flex items-center justify-center h-6.5 px-3.5 rounded-md text-[11px] font-bold bg-[#EFF6FF] text-[#3B82F6] border border-[#DBEAFE] tracking-wide">
                        COMPLETED
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-6.5 px-3.5 rounded-md text-[11px] font-bold bg-amber-50 text-amber-600 border border-amber-100 tracking-wide">
                        PENDING
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
