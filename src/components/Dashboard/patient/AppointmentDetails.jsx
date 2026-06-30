"use client";

import { Modal, Button } from "@heroui/react";
import {
  IoCalendarOutline,
  IoWalletOutline,
  IoMedicalOutline,
  IoPulseOutline,
  IoPersonOutline,
} from "react-icons/io5";
import RescheduleModal from "./RescheduleModal";
import { cancelAppointment } from "@/app/utility/actions/appointment/appointment";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const AppointmentDetails = ({ isOpen, onOpenChange, appointment }) => {
  if (!appointment) return null;
  const handleCanelAppointment = async () => {
    const appointmentId = appointment._id;
    const res = await cancelAppointment(appointmentId);
    if (res.modifiedCount) {
      toast.success("Successfully cancelled the appointment");
      redirect("/dashboard/patient/appointments");
    }
  };
  return (
    <Modal>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Container placement="center">
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Header className="flex items-center gap-3 py-5 bg-slate-50/60 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
                <IoPulseOutline className="text-lg" />
              </div>
              <div className="flex flex-col gap-0.5">
                <Modal.Heading className="text-[15px] font-medium text-slate-900">
                  Appointment overview
                </Modal.Heading>
                <span className="text-[12px] text-slate-400">
                  Request reference information
                </span>
              </div>
            </Modal.Header>

            <Modal.Body className="p-5 flex flex-col gap-5">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-sky-100/60 flex items-center justify-center text-sky-500 shrink-0">
                  <IoPersonOutline className="text-base" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    Doctor & Specialization
                  </span>
                  <p className="text-[15px] font-medium text-slate-800">
                    {appointment.doctorName}
                  </p>
                  <span className="text-[12px] text-sky-500 flex items-center gap-1">
                    <IoMedicalOutline className="text-[11px]" />
                    {appointment.specialization}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  <IoCalendarOutline />
                  <span>Scheduled date & time</span>
                </div>
                <p className="text-[14px] font-medium text-slate-700">
                  {appointment.appointmentDate} &nbsp;•&nbsp;{" "}
                  {appointment.appointmentTime}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  <IoWalletOutline />
                  <span>Consultation fee</span>
                </div>
                <p className="text-[18px] font-medium text-sky-500">
                  ${appointment.consultationFee}
                  <span className="text-[12px] text-slate-400 font-normal">
                    {" "}
                    / online session
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Reported symptoms
                </span>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {appointment.symptoms || "No symptoms provided"}
                  </p>
                </div>
              </div>
            </Modal.Body>
            {appointment.appointmentStatus !== "cancelled" && (
              <Modal.Footer className="p-4 bg-slate-50/40 border-t border-slate-100">
                <div className="flex justify-around w-full">
                  <RescheduleModal appointment={appointment}></RescheduleModal>
                  <Button
                    onClick={handleCanelAppointment}
                    className="bg-rose-50 text-rose-600 text-[13px] h-10 rounded-xl border border-rose-200"
                  >
                    Cancel appointment
                  </Button>
                </div>
              </Modal.Footer>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AppointmentDetails;
