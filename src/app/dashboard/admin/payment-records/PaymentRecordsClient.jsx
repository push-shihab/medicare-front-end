"use client";

import React from "react";
import { Table } from "@heroui/react";

export default function PaymentRecordsClient({ payments }) {
  return (
    <div className="md:m-5 mb-5 bg-white border border-slate-200/80 rounded-4xl overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      <div className="p-5 border-b border-slate-100 bg-white">
        <h3 className="text-[18px] font-bold text-[#0F172A] tracking-tight">
          Payment Records
        </h3>
      </div>

      <Table
        aria-label="Secure Stripe Co-Pay Ledger Table"
        className="min-w-full text-left"
      >
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100"
              >
                Patient Name
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Doctor
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Transaction ID
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Fee
              </Table.Column>
              <Table.Column className="bg-slate-50/60 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Date
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {payments.map((row) => (
                <Table.Row
                  key={row._id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/20 transition-colors"
                >
                  <Table.Cell className="px-6 py-4.5 text-[14px] font-bold text-slate-700">
                    {row.patientName}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[14px] font-medium text-slate-600">
                    {row.doctorName}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[13.5px] font-medium text-slate-400 font-mono">
                    {row.transactionId}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[14px] font-bold text-slate-800">
                    {row.amountPaid}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[13.5px] font-medium text-slate-500 font-mono">
                    {row.paymentTime.split(",")[0]}
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
