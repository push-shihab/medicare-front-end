"use client";

import React, { useState } from "react";
import { Table, Button, Chip } from "@heroui/react";
import { FiEye, FiFileText } from "react-icons/fi";

export default function AppointmentRequestsTable() {
  const [activeFilter, setActiveFilter] = useState("all");

  const appointmentsData = [
    {
      id: "1",
      patient: { name: "John Doe", details: "Age: 34 · Male" },
      contact: { email: "john@email.com", phone: "+880 1712 345678" },
      dateTime: "Dec 20 · 10:00 AM",
      symptoms: "Chest pain, shortness of breath",
      status: "Pending",
    },
    {
      id: "2",
      patient: { name: "Rina Begum", details: "Age: 28 · Female" },
      contact: { email: "rina@email.com", phone: "+880 1712 876543" },
      dateTime: "Dec 20 · 11:00 AM",
      symptoms: "Palpitations, dizziness",
      status: "Confirmed",
    },
    {
      id: "3",
      patient: { name: "Sarah Rahman", details: "Age: 45 · Female" },
      contact: { email: "sarah@email.com", phone: "+880 1712 111222" },
      dateTime: "Dec 18 · 2:00 PM",
      symptoms: "Routine checkup",
      status: "Completed",
    },
    {
      id: "4",
      patient: { name: "Tasnim Ahmed", details: "Age: 52 · Male" },
      contact: { email: "tasnim@email.com", phone: "+880 1712 999888" },
      dateTime: "Dec 15 · 3:30 PM",
      symptoms: "Follow-up consultation",
      status: "Cancelled",
    },
  ];

  const statusColorMap = {
    Pending: { bg: "bg-amber-50 text-amber-600 border-amber-200" },
    Confirmed: { bg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    Completed: { bg: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    Cancelled: { bg: "bg-rose-50 text-rose-600 border-rose-200" },
  };

  return (
    <div className="w-full m-5 bg-white border border-slate-200 rounded-[20px] overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      {/* Header Panel Filter Tabs */}
      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          All Appointment Requests
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveFilter("pending")}
            className="h-8 px-3 rounded-lg text-[12px] font-semibold bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/70 transition-colors"
          >
            Pending (4)
          </button>
          <button
            onClick={() => setActiveFilter("confirmed")}
            className="h-8 px-3 rounded-lg text-[12px] font-semibold bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/70 transition-colors"
          >
            Confirmed (12)
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className="h-8 px-3 rounded-lg text-[12px] font-semibold bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/70 transition-colors"
          >
            Completed (89)
          </button>
        </div>
      </div>

      {/* Structured Compound HeroUI Table Implementation */}
      <Table shadow="none" radius="none" className="w-full text-left">
        <Table.ScrollContainer>
          <Table.Content aria-label="Patient appointment management sheet">
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[180px]"
              >
                PATIENT
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[220px]">
                CONTACT
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[160px]">
                DATE & TIME
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[240px]">
                SYMPTOMS
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[130px]">
                STATUS
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-4 px-6 border-b border-slate-100 min-w-[180px]">
                ACTIONS
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {appointmentsData.map((row) => (
                <Table.Row
                  key={row.id}
                  className="hover:bg-slate-50/40 transition-colors group border-b border-slate-100 last:border-0"
                >
                  {/* Patient Info */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-bold text-slate-800">
                        {row.patient.name}
                      </span>
                      <span className="text-[12px] font-medium text-slate-400">
                        {row.patient.details}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Contact Stack */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium text-slate-500">
                        {row.contact.email}
                      </span>
                      <span className="text-[12px] text-slate-400">
                        {row.contact.phone}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Chronological Schedule Timestamp */}
                  <Table.Cell className="py-5 px-6">
                    <span className="text-[13.5px] font-semibold text-slate-600">
                      {row.dateTime}
                    </span>
                  </Table.Cell>

                  {/* Symptoms Text */}
                  <Table.Cell className="py-5 px-6">
                    <span className="text-[13.5px] font-medium text-slate-400/90">
                      {row.symptoms}
                    </span>
                  </Table.Cell>

                  {/* Condition Badges */}
                  <Table.Cell className="py-5 px-6">
                    <Chip
                      variant="bordered"
                      className={`h-7 px-3 text-[12px] font-bold border rounded-full ${statusColorMap[row.status]?.bg}`}
                    >
                      {row.status}
                    </Chip>
                  </Table.Cell>

                  {/* Contextual Action Triggers */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      {row.status === "Pending" && (
                        <>
                          <Button
                            size="sm"
                            className="h-8 px-3 rounded-lg bg-[#00B67A] text-white font-bold text-[12px] hover:bg-emerald-600 transition-colors"
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            className="h-8 px-3 rounded-lg bg-[#EF4444] text-white font-bold text-[12px] hover:bg-rose-600 transition-colors"
                          >
                            Reject
                          </Button>
                          <Button
                            isIconOnly
                            size="sm"
                            className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 min-w-0"
                          >
                            <FiEye className="text-[14px]" />
                          </Button>
                        </>
                      )}

                      {row.status === "Confirmed" && (
                        <>
                          <Button
                            size="sm"
                            variant="bordered"
                            className="h-8 px-4 rounded-lg border-[#0EA5E9] text-[#0EA5E9] font-bold text-[12px] bg-white hover:bg-sky-50/20 transition-colors"
                          >
                            Complete
                          </Button>
                          <Button
                            isIconOnly
                            size="sm"
                            className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 min-w-0"
                          >
                            <FiEye className="text-[14px]" />
                          </Button>
                        </>
                      )}

                      {row.status === "Completed" && (
                        <>
                          <Button
                            isIconOnly
                            size="sm"
                            className="w-8 h-8 rounded-lg bg-[#F1F5F9] text-slate-400 hover:bg-slate-200 min-w-0"
                          >
                            <FiEye className="text-[14px]" />
                          </Button>
                          <Button
                            isIconOnly
                            size="sm"
                            className="w-8 h-8 rounded-lg bg-[#F1F5F9] text-purple-400 hover:bg-purple-100/60 min-w-0"
                          >
                            <FiFileText className="text-[14px]" />
                          </Button>
                        </>
                      )}

                      {row.status === "Cancelled" && (
                        <Button
                          isIconOnly
                          size="sm"
                          className="w-8 h-8 rounded-lg bg-[#F1F5F9] text-slate-400 hover:bg-slate-200 min-w-0"
                        >
                          <FiEye className="text-[14px]" />
                        </Button>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
        <Table.Footer>
          {/* Optional table pagination or summary controls */}
        </Table.Footer>
      </Table>
    </div>
  );
}
