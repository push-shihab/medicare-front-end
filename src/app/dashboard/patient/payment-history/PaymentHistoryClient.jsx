"use client";

import React from "react";
import { Table, Button } from "@heroui/react";
import {
  FiDollarSign,
  FiTrendingUp,
  FiLayers,
  FiDownload,
} from "react-icons/fi";

export default function PaymentHistoryClient({ payments }) {
  // Top Stats Cards Configuration Mapping
  const paymentStats = [
    {
      title: "Total Spent",
      value: "৳9,600",
      subtext: "All time",
      isTrend: false,
      iconColors: "bg-[#DCFCE7] text-[#16A34A]", // Soft emerald theme
      icon: FiDollarSign,
    },
    {
      title: "This Month",
      value: "৳2,000",
      subtext: "2 transactions",
      isTrend: true,
      iconColors: "bg-[#FEF9C3] text-[#EAB308]", // Soft yellow theme
      icon: FiTrendingUp,
    },
    {
      title: "Total Transactions",
      value: "14",
      subtext: "All time",
      isTrend: false,
      iconColors: "bg-[#E0F2FE] text-[#0EA5E9]", // Soft sky blue theme
      icon: FiLayers,
    },
  ];

  // Transaction History Table Records
  const transactions = [
    {
      id: "#TXN-001234",
      doctor: "Dr. Sarah Johnson",
      date: "Dec 20, 2026",
      amount: "৳800",
      method: "Stripe",
      status: "Paid",
    },
    {
      id: "#TXN-001198",
      doctor: "Dr. Rina Ahmed",
      date: "Nov 15, 2026",
      amount: "৳600",
      method: "Stripe",
      status: "Paid",
    },
    {
      id: "#TXN-001154",
      doctor: "Dr. James Williams",
      date: "Oct 22, 2026",
      amount: "৳1200",
      method: "Stripe",
      status: "Paid",
    },
    {
      id: "#TXN-001098",
      doctor: "Dr. Karim Hassan",
      date: "Sep 10, 2026",
      amount: "৳700",
      method: "Stripe",
      status: "Paid",
    },
    {
      id: "#TXN-001045",
      doctor: "Dr. Sarah Johnson",
      date: "Aug 05, 2026",
      amount: "৳800",
      method: "Stripe",
      status: "Paid",
    },
  ];

  return (
    <div className="w-full flex flex-col m-5 gap-6 p-1 select-none">
      <div className="w-full bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm shadow-slate-100/40 mt-2">
        {/* Table Panel Header Controls */}
        <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
          <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
            Transaction History
          </h3>
        </div>

        {/* Hero UI Abstracted Table Stack */}
        <Table aria-label="Transaction Ledger" className="min-w-full text-left">
          <Table.ScrollContainer>
            <Table.Content>
              {/* Table Column System */}
              <Table.Header>
                <Table.Column
                  isRowHeader
                  className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100"
                >
                  Transaction ID
                </Table.Column>
                <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                  Doctor
                </Table.Column>
                <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                  Date
                </Table.Column>
                <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                  Amount
                </Table.Column>
                <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                  Method
                </Table.Column>
                <Table.Column className="bg-slate-50/70 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-11 px-6 border-b border-slate-100">
                  Status
                </Table.Column>
              </Table.Header>

              {/* Table Dynamic Body Row System */}
              <Table.Body>
                {payments.map((row) => (
                  <Table.Row
                    key={row._id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                  >
                    {/* ID Node */}
                    <Table.Cell className="px-6 py-[18px] text-[13px] font-medium text-slate-400 font-mono">
                      {row.transactionId}
                    </Table.Cell>

                    {/* Recipient Provider */}
                    <Table.Cell className="px-6 py-[18px] text-[14px] font-medium text-slate-700">
                      {row.doctorName}
                    </Table.Cell>

                    {/* Timeline Data */}
                    <Table.Cell className="px-6 py-4.5 text-[14px] text-slate-500">
                      {row.paymentTime.split(",")[0]}
                    </Table.Cell>

                    {/* Financial Amount Node */}
                    <Table.Cell className="px-6 py-[18px] text-[14px] text-slate-800 font-bold font-sans">
                      ${row.amountPaid}
                    </Table.Cell>

                    {/* Gateway Channel info */}
                    <Table.Cell className="px-6 py-[18px] text-[14px] text-slate-500">
                      Stripe
                    </Table.Cell>

                    {/* Settled State Chip Indicator */}
                    <Table.Cell className="px-6 py-[18px]">
                      <span className="inline-flex items-center justify-center h-6 px-3 rounded-full text-[12px] font-medium bg-[#DCFCE7] text-[#16A34A]">
                        Paid
                      </span>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
          <Table.Footer />
        </Table>
      </div>
    </div>
  );
}
