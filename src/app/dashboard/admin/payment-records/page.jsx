export const dynamic = "force-dynamic";
import PaymentRecordsClient from "./PaymentRecordsClient";
import { getAllPaymentRecords } from "@/app/utility/fetchData/payment/payment";
export const metadata = {
  title: "Admin | Payment Records",
};

const PaymentRecordsPage = async () => {
  const payments = await getAllPaymentRecords();
  return (
    <div>
      <PaymentRecordsClient payments={payments}></PaymentRecordsClient>
    </div>
  );
};

export default PaymentRecordsPage;
