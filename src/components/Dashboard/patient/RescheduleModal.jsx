"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { BiRocket } from "react-icons/bi";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { reScheduleAppointment } from "@/app/utility/actions/appointment/appointment";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const RescheduleModal = ({ appointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(
    appointment.appointmentDate,
  );
  const [appointmentTime, setAppointmentTime] = useState(
    appointment.appointmentTime,
  );

  const today = new Date().toISOString().split("T")[0];

  const handleRescheduleSubmit = async () => {
    const newSchedule = {
      appointmentId: appointment._id,
      appointmentDate,
      appointmentTime,
    };
    const res = await reScheduleAppointment(newSchedule);
    setIsOpen(false);
    if (res.modifiedCount) {
      toast.success("Wait for the confirmation from the doctor");
      redirect("/dashboard/patient/appointments");
    }
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        className="border-amber-200 bg-amber-50 border text-slate-600 text-[13px] h-10 rounded-xl"
      >
        Reschedule
      </Button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15,23,42,0.4)",
              backdropFilter: "blur(4px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "380px",
              background: "white",
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                background: "#f8fafc",
                border: "1px solid #f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              <IoCloseOutline style={{ fontSize: "18px", color: "#94a3b8" }} />
            </button>

            <div
              style={{
                padding: "1.5rem",
                background: "rgba(248,250,252,0.6)",
                borderBottom: "1px solid #f1f5f9",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "12px",
                  background: "#fffbeb",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BiRocket style={{ fontSize: "18px", color: "#f59e0b" }} />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  Reschedule Session
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    color: "#94a3b8",
                    fontWeight: 500,
                  }}
                >
                  Select new timing window
                </p>
              </div>
            </div>

            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <IoCalendarOutline /> New Appointment Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  style={{
                    width: "100%",
                    height: "44px",
                    padding: "0 12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    fontSize: "13px",
                    color: "#334155",
                    fontWeight: 500,
                    outline: "none",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <IoTimeOutline /> New Appointment Time
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                  }}
                >
                  {appointment.doctorTime.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setAppointmentTime(slot)}
                      style={{
                        height: "36px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                        border: "1px solid",
                        background:
                          appointmentTime === slot ? "#0EA5E9" : "#f8fafc",
                        color: appointmentTime === slot ? "white" : "#64748b",
                        borderColor:
                          appointmentTime === slot ? "#0EA5E9" : "#e2e8f0",
                        transition: "all 0.15s",
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "1.5rem",
                background: "rgba(248,250,252,0.4)",
                borderTop: "1px solid #f1f5f9",
              }}
            >
              <button
                onClick={handleRescheduleSubmit}
                disabled={!appointmentDate || !appointmentTime}
                style={{
                  width: "100%",
                  height: "44px",
                  background:
                    !appointmentDate || !appointmentTime
                      ? "#bae6fd"
                      : "#0EA5E9",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "13px",
                  borderRadius: "12px",
                  border: "none",
                  cursor:
                    !appointmentDate || !appointmentTime
                      ? "not-allowed"
                      : "pointer",
                  transition: "background 0.15s",
                }}
              >
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RescheduleModal;
