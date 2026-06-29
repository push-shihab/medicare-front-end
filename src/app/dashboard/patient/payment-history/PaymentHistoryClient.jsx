"use client";

import React from "react";
import { Table } from "@heroui/react";
import { IoReceiptOutline } from "react-icons/io5";

export default function PaymentHistoryClient({ payments }) {
  const hasPayments = payments && payments.length > 0;

  return (
    <div className="mb-5 flex flex-col md:m-5 gap-6 p-1 select-none">
      <div className="w-full bg-white border border-slate-200 rounded-4xl overflow-hidden shadow-sm shadow-slate-100/40 mt-2">
        <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-white">
          <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
            Transaction History
          </h3>
        </div>

        {hasPayments ? (
          <Table
            aria-label="Transaction Ledger"
            className="min-w-full text-left"
          >
            <Table.ScrollContainer>
              <Table.Content>
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

                <Table.Body>
                  {payments.map((row) => (
                    <Table.Row
                      key={row._id}
                      className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                    >
                      <Table.Cell className="px-6 py-4.5 text-[13px] font-medium text-slate-400 font-mono">
                        {row.transactionId}
                      </Table.Cell>

                      <Table.Cell className="px-6 py-4.5 text-[14px] font-medium text-slate-700">
                        {row.doctorName}
                      </Table.Cell>

                      <Table.Cell className="px-6 py-4.5 text-[14px] text-slate-500">
                        {row.paymentTime?.split(",")[0]}
                      </Table.Cell>

                      <Table.Cell className="px-6 py-4.5 text-[14px] text-slate-800 font-bold font-sans">
                        ${row.amountPaid}
                      </Table.Cell>

                      <Table.Cell className="px-6 py-4.5 text-[14px] text-slate-500">
                        Stripe
                      </Table.Cell>

                      <Table.Cell className="px-6 py-4.5">
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
        ) : (
          <div className="w-full p-14 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9] text-xl mb-4">
              <IoReceiptOutline />
            </div>
            <h4 className="text-[15px] font-bold text-slate-800 tracking-tight">
              No Payment History
            </h4>
            <p className="text-[13px] text-slate-400 font-medium mt-1 max-w-85 leading-normal">
              There are currently no statements or financial transaction records
              registered in your account.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
