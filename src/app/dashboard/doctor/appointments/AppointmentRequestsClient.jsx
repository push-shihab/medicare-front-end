"use client";
import {
  acceptAppointment,
  cancelAppointment,
} from "@/app/utility/actions/appointment/appointment";
import { Table, Button, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PrescriptionWritingModal from "../prescriptions/PrescriptionWritingModal";

export default function AppointmentRequestsClient({ doctorAppointments }) {
  const statusColorMap = {
    pending: { bg: "bg-amber-50 text-amber-600 border-amber-200" },
    confirmed: { bg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    completed: { bg: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    cancelled: { bg: "bg-rose-50 text-rose-600 border-rose-200" },
  };
  const router = useRouter();

  const handleAccept = async (appointmentId) => {
    const res = await acceptAppointment(appointmentId);
    if (res.modifiedCount) {
      toast.loading("Prescribe now to complete");
      router.refresh();
    }
  };
  const handleCancel = async (appointmentId) => {
    const res = await cancelAppointment(appointmentId);
    if (res.modifiedCount) {
      toast.success("Cancelled the appointment successfully");
      router.refresh();
    }
  };
  return (
    <div className="w-full m-5 bg-white border border-slate-200 rounded-[20px] overflow-hidden shadow-sm shadow-slate-100/40 select-none">
      {/* Header Panel Filter Tabs */}
      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
        <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
          All Appointment Requests
        </h3>
      </div>

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
              {doctorAppointments.map((row) => (
                <Table.Row
                  key={row._id}
                  className="hover:bg-slate-50/40 transition-colors group border-b border-slate-100 last:border-0"
                >
                  {/* Patient Info */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-bold text-slate-800">
                        {row.patientName}
                      </span>
                      <span className="text-[12px] font-bold text-slate-400/90">
                        {row.paymentStatus !== "pending" ? "Paid" : "Not Paid"}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Chronological Schedule Timestamp */}
                  <Table.Cell className="py-5 px-6">
                    <span className="text-[13.5px] font-semibold text-slate-600">
                      {`${row.appointmentDate} | ${row.appointmentTime}`}
                    </span>
                  </Table.Cell>

                  {/* Symptoms Text */}
                  <Table.Cell className="py-5 px-6">
                    <span className="text-[13.5px] font-medium text-slate-400/90">
                      {row.symptoms || "No symptoms provided"}
                    </span>
                  </Table.Cell>

                  {/* Condition Badges */}
                  <Table.Cell className="py-5 px-6">
                    <Chip
                      variant="bordered"
                      className={`h-7 px-3 text-[12px] font-bold border rounded-full ${statusColorMap[row.appointmentStatus]?.bg}`}
                    >
                      {row.appointmentStatus}
                    </Chip>
                  </Table.Cell>

                  {/* Contextual Action Triggers */}
                  <Table.Cell className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      {row.appointmentStatus === "pending" && (
                        <>
                          <Button
                            onClick={() => handleAccept(row._id)}
                            size="sm"
                            className="h-8 px-3 rounded-lg bg-[#00B67A] text-white font-bold text-[12px] hover:bg-emerald-600 transition-colors"
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={() => handleCancel(row._id)}
                            size="sm"
                            className="h-8 px-3 rounded-lg bg-[#EF4444] text-white font-bold text-[12px] hover:bg-rose-600 transition-colors"
                          >
                            Reject
                          </Button>
                        </>
                      )}

                      {row.appointmentStatus === "confirmed" && (
                        <>
                          <PrescriptionWritingModal
                            appointment={row}
                          ></PrescriptionWritingModal>
                        </>
                      )}

                      {row.appointmentStatus === "completed" && (
                        <>
                          <Button
                            className="bg-indigo-50 text-indigo-600 border-indigo-200 border"
                            isDisabled={true}
                          >
                            Completed
                          </Button>
                        </>
                      )}

                      {row.appointmentStatus === "cancelled" && (
                        <Button
                          className="bg-rose-50 text-rose-600 border-rose-200 border"
                          isDisabled={true}
                        >
                          Cancelled
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
