"use client";

import React from "react";
import { Table } from "@heroui/react";
import { IoCalendarOutline } from "react-icons/io5";

export default function UpcomingAppointmentsTable({ appointments }) {
  const confirmedAppointments = appointments?.filter(
    (appointment) => appointment.appointmentStatus === "confirmed",
  );

  const hasAppointments = confirmedAppointments.length > 0;

  return (
    <div className="md:m-5 my-5 bg-white border border-slate-200 rounded-4xl overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          Upcoming Appointments
        </h3>
      </div>

      {hasAppointments ? (
        <Table aria-label="Upcoming Appointments Table" className="min-w-full">
          <Table.ScrollContainer>
            <Table.Content>
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

              <Table.Body>
                {confirmedAppointments.map((row) => (
                  <Table.Row
                    key={row._id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                  >
                    <Table.Cell className="px-6 py-4 text-[14px] font-medium text-slate-700">
                      {row.doctorName}
                    </Table.Cell>

                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-500">
                      {row.specialization}
                    </Table.Cell>

                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                      {row.appointmentDate}
                    </Table.Cell>

                    <Table.Cell className="px-6 py-4 text-[14px] text-slate-600 font-medium">
                      {row.appointmentTime}
                    </Table.Cell>

                    <Table.Cell className="px-6 py-4">
                      <span className="inline-flex items-center justify-center h-7 px-3 rounded-full text-[13px] font-medium bg-[#DCFCE7] text-[#15803D]">
                        Confirmed
                      </span>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
          <Table.Footer />
        </Table>
      ) : (
        <div className="w-full p-14 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9] text-xl mb-4">
            <IoCalendarOutline />
          </div>
          <h4 className="text-[15px] font-bold text-slate-800 tracking-tight">
            No Upcoming Appointments
          </h4>
          <p className="text-[13px] text-slate-400 font-medium mt-1 max-w-85 leading-normal">
            You currently have no confirmed upcoming appointments scheduled in
            the system.
          </p>
        </div>
      )}
    </div>
  );
}
