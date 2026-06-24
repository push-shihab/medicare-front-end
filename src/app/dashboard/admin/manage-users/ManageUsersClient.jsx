"use client";

import React, { useState, useEffect } from "react";
import { Table, Button } from "@heroui/react";
import DeleteUserModal from "./DeleteUserModal";
import { suspendUser, unsuspendUser } from "@/app/utility/actions/admin/admin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ManageUsersClient({ users: usersData }) {
  const [users, setUsers] = useState(usersData);
  const [isActive, setIsActive] = useState([true, false, false]);
  const router = useRouter();

  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);

  const patients = users.filter((patient) => patient.role === "patient");
  const doctors = users.filter((doctor) => doctor.role === "doctor");

  const handleSuspend = async (userId) => {
    const res = await suspendUser({ userId });
    if (res.modifiedCount) {
      toast.success("User suspended successfully");
      router.refresh();
    }
  };

  const handleUnsuspend = async (userId) => {
    const res = await unsuspendUser({ userId });
    if (res.modifiedCount) {
      toast.success("User activated successfully");
      router.refresh();
    }
  };

  return (
    <div className="w-full m-5 bg-white border border-slate-100 rounded-[16px] overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 bg-white">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          All Users
        </h3>

        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-100">
          <button
            className={`text-[13px] font-medium px-3 h-8 rounded-lg text-slate-500 hover:text-slate-800 transition-colors ease-in duration-300 cursor-pointer ${isActive[0] && "bg-slate-200"}`}
            onClick={() => {
              setUsers(usersData);
              setIsActive([true, false, false]);
            }}
          >
            All{" "}
            <span className="text-[11px] text-slate-400 font-medium ml-0.5">
              ({usersData.length})
            </span>
          </button>
          <button
            className={`text-[13px] font-medium px-3 h-8 rounded-lg text-slate-500 hover:text-slate-800 transition-colors ease-in duration-300 cursor-pointer ${isActive[1] && "bg-slate-200"}`}
            onClick={() => {
              setUsers(patients);
              setIsActive([false, true, false]);
            }}
          >
            Patients{" "}
            <span className="text-[11px] text-slate-400 font-normal ml-0.5">
              ({patients.length})
            </span>
          </button>
          <button
            className={`text-[13px] font-medium px-3 h-8 rounded-lg text-slate-500 hover:text-slate-800 transition-colors ease-in duration-300 cursor-pointer ${isActive[2] && "bg-slate-200"}`}
            onClick={() => {
              setUsers(doctors);
              setIsActive([false, false, true]);
            }}
          >
            Doctors{" "}
            <span className="text-[11px] text-slate-400 font-normal ml-0.5">
              ({doctors.length})
            </span>
          </button>
        </div>
      </div>

      <Table
        aria-label="User Management Table"
        className="min-w-full text-left"
      >
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-slate-50/50 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100"
              >
                Name
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Email
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Role
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100">
                Status
              </Table.Column>
              <Table.Column className="bg-slate-50/50 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider h-12 px-6 border-b border-slate-100 text-center w-28">
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {users.map((row) => (
                <Table.Row
                  key={row._id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/20 transition-colors"
                >
                  <Table.Cell className="px-6 py-4.5 text-[14px] font-medium text-slate-700">
                    {row.name}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5 text-[14px] text-slate-500">
                    {row.email}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    {row.role === "doctor" ? (
                      <span className="inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-semibold bg-[#E8FBF2] text-[#10B981] border border-[#D1FAE5]">
                        Doctor
                      </span>
                    ) : row.role === "patient" ? (
                      <span className="inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-semibold bg-[#EFF6FF] text-[#3B82F6] border border-[#DBEAFE]">
                        Patient
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-semibold bg-[#fff3da] text-[#f68f3b] border border-[#fef8db]">
                        Admin
                      </span>
                    )}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    {row.status === "active" ? (
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-full text-[12px] font-medium bg-[#DCFCE7] text-[#15803D]">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-full text-[12px] font-medium bg-[#FEF9C3] text-[#A16207]">
                        Suspended
                      </span>
                    )}
                  </Table.Cell>

                  <Table.Cell className="px-6 py-4.5">
                    {row.role !== "admin" ? (
                      <div className="flex items-center justify-center gap-2">
                        {row.status === "suspended" ? (
                          <Button
                            onClick={() => handleUnsuspend(row._id)}
                            isIconOnly
                            size="sm"
                            variant="flat"
                            className="w-22 h-8 rounded-lg bg-[#fbe8e8] hover:bg-[#D1FAE5] text-[#b91010] transition-colors min-w-0 border border-[#D1FAE5]/40"
                          >
                            Unsuspend
                          </Button>
                        ) : (
                          <Button
                            onClick={() => handleSuspend(row._id)}
                            isIconOnly
                            size="sm"
                            variant="flat"
                            className="w-18 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors min-w-0 border border-red-100/40"
                          >
                            Suspend
                          </Button>
                        )}
                        <DeleteUserModal row={row} />
                      </div>
                    ) : (
                      ""
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
