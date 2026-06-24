import { deleteUser } from "@/app/utility/actions/admin/admin";
import { Modal, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiAlertTriangle, FiTrash2 } from "react-icons/fi";

const DeleteUserModal = ({ row }) => {
  const router = useRouter();
  const handleDeleteUser = async (userId) => {
    const res = await deleteUser({ userId });
    if (res.deletedCount) {
      toast.success("Successfully deleted the user");
      router.refresh();
    }
  };
  return (
    <Modal>
      <Button
        isIconOnly
        size="sm"
        variant="flat"
        className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-600 transition-colors min-w-0 border border-red-100/40"
      >
        <FiTrash2 className="text-[13px]" />
      </Button>
      <Modal.Backdrop className="bg-slate-900/40 backdrop-blur-sm flex items-center justify-center">
        <Modal.Container className="w-full max-w-md m-4">
          <Modal.Dialog className="border border-slate-100 bg-white rounded-[20px] shadow-xl p-2 relative w-full text-left select-none">
            <Modal.CloseTrigger className="absolute hover:bg-slate-100 active:bg-slate-200 transition-colors top-4 right-4 text-slate-400 hover:text-slate-600 rounded-lg p-1 text-[16px] flex items-center justify-center cursor-pointer" />

            <Modal.Header className="flex gap-3.5 items-start pt-5 px-5 pb-3">
              <Modal.Icon className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 text-lg shrink-0 mt-0.5">
                <FiAlertTriangle />
              </Modal.Icon>
              <Modal.Heading className="flex flex-col gap-0.5">
                <h3 className="text-[16px] font-bold text-[#0F172A] tracking-tight">
                  Delete User Account
                </h3>
                <p className="text-[13px] text-slate-400 font-medium normal-case">
                  This action is permanent and cannot be undone.
                </p>
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="px-5 py-3 flex flex-col gap-4">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col gap-1.5">
                <div className="text-[12px] uppercase font-bold tracking-wider text-slate-400">
                  Target Account
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-slate-700">
                    {row.name}
                  </span>
                  <span className="text-[13px] text-slate-500 font-medium font-mono mt-0.5">
                    {row.email}
                  </span>
                </div>
              </div>
              <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed px-1">
                Are you sure you want to delete this user? All associated
                appointments, medical history, statements, and registry records
                will be permanently erased.
              </p>
            </Modal.Body>

            <Modal.Footer className="px-5 pt-3 pb-4 flex items-center gap-2.5 justify-end">
              <Button
                onClick={() => handleDeleteUser(row._id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold text-[13px] h-9.5 px-4 rounded-xl shadow-sm shadow-red-500/10 transition-colors cursor-pointer"
              >
                Delete Account
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteUserModal;
